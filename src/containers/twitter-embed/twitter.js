import React, {useContext, useEffect, useState} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import Button from "../../components/button/Button";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const EMBED_TIMEOUT_MS = 8000;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!twitterDetails.display) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setShowFallback(true);
    }, EMBED_TIMEOUT_MS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!twitterDetails.display) {
    return null;
  }

  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
    return null;
  }

  const handleLoad = () => {
    setIsLoaded(true);
    setShowFallback(false);
  };

  return (
    <div className="tw-main-div" id="twitter">
      <div className="centerContent twitter-component">
        {!isLoaded && !showFallback ? <Loading /> : null}
        {!showFallback ? (
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterDetails.userName}
            options={{
              height: twitterDetails.widgetHeight,
              width: "100%"
            }}
            placeholder={<Loading />}
            autoHeight={false}
            borderColor="#fff"
            key={isDark ? "twitter-dark" : "twitter-light"}
            theme={isDark ? "dark" : "light"}
            noFooter={true}
            onLoad={handleLoad}
          />
        ) : (
          <div className="twitter-fallback-card">
            <h2 className="twitter-fallback-title">Twitter feed unavailable</h2>
            <p className="twitter-fallback-text">
              X/Twitter may block the embed because of rate limits, privacy
              settings, or third-party cookie restrictions.
            </p>
            <Button
              text="Open X Profile"
              className="twitter-fallback-button"
              href={twitterDetails.profileUrl}
              newTab={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
