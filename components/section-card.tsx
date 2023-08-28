import type { NextPage } from "next";
import styles from "./section-card.module.css";
const SectionCard: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.companyAboutBlogContainer}>
        <p className={styles.company}>
          <span>
            <b>Company</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.blankLine1}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>About</p>
        <p className={styles.blankLine}>Blog</p>
        <p className={styles.blankLine}>Case Studies</p>
        <p className={styles.blankLine}>Careers Privacy Policies</p>
        <p className={styles.blankLine}>Terms of Service</p>
        <p className={styles.blankLine}>Service Level Agreement</p>
        <p className={styles.securityAndCertification}>
          Security and Certification
        </p>
      </div>
      <div className={styles.productFeaturesPluginsContainer}>
        <p className={styles.company}>
          <span>
            <b>Product</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.blankLine1}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>Features</p>
        <p className={styles.blankLine}>Plugins</p>
        <p className={styles.blankLine}>Pricing</p>
        <p className={styles.blankLine}>Solutions</p>
        <p className={styles.blankLine}>Find a player</p>
        <p className={styles.blankLine}>What is Digital Signage</p>
        <p className={styles.blankLine}>Free Digital Signage</p>
        <p className={styles.blankLine}>Easy Digital Signage</p>
        <p className={styles.blankLine}>Best Digital Signage</p>
        <p className={styles.securityAndCertification}>
          Alternatives to Play Digital Signage
        </p>
      </div>
      <div className={styles.supportContactFindContainer}>
        <p className={styles.company}>
          <span>
            <b>Support</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.blankLine1}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>Contact</p>
        <p className={styles.blankLine}>Find Help</p>
        <p className={styles.blankLine}>Give Feedback</p>
        <p className={styles.blankLine}>Partners</p>
        <p className={styles.securityAndCertification}>FAQ</p>
      </div>
      <div className={styles.getInTouchContainer}>
        <p className={styles.company}>
          <span>
            <b>Get in Touch</b>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span className={styles.blankLine1}>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>LinkedIN</p>
        <p className={styles.blankLine}>Twitter</p>
        <p className={styles.blankLine}>Facebook</p>
        <p className={styles.blankLine}>Instagram</p>
        <p className={styles.blankLine}>Youtube</p>
        <p className={styles.securityAndCertification}>Google</p>
      </div>
      <div className={styles.chatWithUsContainer}>
        <p className={styles.securityAndCertification}>
          <b>Chat with us?</b>
        </p>
        <p className={styles.p}>+1 844 384 5554</p>
      </div>
      <div className={styles.playDigitalSignage}>
        Play Digital Signage, Inc., 2035 Sunset Lake Road, Newark, DE, 19702,
        USA
      </div>
      <div className={styles.copyright2023}>
        Copyright © 2023 Play Digital Signage, Inc. All rights reserved.
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
    </div>
  );
};

export default SectionCard;
