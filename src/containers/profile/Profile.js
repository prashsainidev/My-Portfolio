import React, {useState, useEffect, lazy, Suspense} from "react";
import {githubProfileSection} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [hasProfileError, setHasProfileError] = useState(false);

  useEffect(() => {
    if (!githubProfileSection.display) {
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
        setProfile(response?.data?.user || null);
      })
      .catch(error => {
        console.error(
          `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
        );
        setHasProfileError(true);
      });
  }, []);

  if (githubProfileSection.display && !hasProfileError && profile) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={profile} key={profile.id} />
      </Suspense>
    );
  }

  return <Contact />;
}
