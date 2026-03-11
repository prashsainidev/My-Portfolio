import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSourceSection, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const renderLoader = () => <Loading />;
  const [repos, setRepos] = useState([]);
  const [hasRepoError, setHasRepoError] = useState(false);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    if (!openSourceSection.display) {
      return;
    }

    fetch("/profile.json")
      .then(result => {
        if (!result.ok) {
          throw new Error("Unable to load profile.json");
        }

        return result.json();
      })
      .then(response => {
        setRepos(response?.data?.user?.pinnedItems?.edges || []);
      })
      .catch(error => {
        console.error(
          `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
        );
        setHasRepoError(true);
      });
  }, []);

  if (openSourceSection.display && !hasRepoError && repos.length) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repos.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  }

  return null;
}
