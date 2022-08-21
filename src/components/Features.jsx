import React from "react";
import assets from "../assets";
import styles from "../styles/Global";

// This component is used only in this file, and because of that it is in same file and not exported
// Construct like this: ()=>() means that this is a function whose bode is one return like return (...) and this return can be omitted
const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React
            Native
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Features;
