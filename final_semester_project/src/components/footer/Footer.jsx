/** @format */
import styles from './footer.module.css';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div
        className={styles.kll}>
        <div className={styles.all}>
          <div className={styles.forall}>
            <a href="https://uttam-murex.vercel.app/" target='_blank' className={styles.a1}>
            <h6>Uttam</h6></a>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Contact Us</p>
          </div>
          
      
          <div className={styles.forall}>
           <a href="https://in.linkedin.com/in/uttam-mehta-47364923b" target='_blank' className={styles.a1}><h6>Social</h6></a> 
           <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Youtube</p>
            <p>Github</p>
          </div>
          </div>

        <div>
          <span>Copyright © 2023, Uttam Kumar Mehta.All rights reserved. </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
