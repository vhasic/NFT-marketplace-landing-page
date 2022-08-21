import React from "react";
import assets from "../assets";
import styles from "../styles/Global";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  //  Backtick ` is used to interpolate variables into strings with ${variable}
  return (
    //if props reverse is true, apply css class bgWhite else bgPrimary
    <div
      className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}
    >
      <div
        className={`flex items-center  
        ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`
          ${styles.descDiv} 
          ${reverse ? "fadeRightMini" : "fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
          `}
        >
          <h1
            className={`
            ${styles.h1Text}
            ${reverse ? styles.blackText : styles.whiteText}
            `}
          >
            {title}
          </h1>
          <p
            className={`
            ${reverse ? styles.blackText : styles.whiteText}
            ${styles.descriptionText}
            `}
          >
            {description}
          </p>
          {
            // dynamic block of code to show button if showBtn is true
            showBtn && (
              <Button
                assetUrl={assets.expo}
                link="deployed nft marketplace rn app"
              />
            )
          }
        </div>

        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`
            ${styles.sectionImg} 
            ${reverse ? "fadeLeftMini" : "fadeRightMini"}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
