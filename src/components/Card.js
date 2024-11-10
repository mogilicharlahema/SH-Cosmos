import React from 'react';
import styles from "../components/Card.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.head}>Responses Add-ons</h1>
        <p className={styles.des}>This responses counts will be added to your existing plan</p>
        <FontAwesomeIcon className={styles.icon} icon={faTimes} size="2x" />
        <div className={styles.main2}>
          <div className={styles.firstblock}>
            <h2 className={styles.price}>2500 / Life time</h2>
            <p style={{marginTop:"-8px"}} className={styles.add}>Additional Submission</p>
            <h2 className={styles.rate}>RS. 1000</h2>
            {props.button}
          </div>

          <div className={styles.secondblock}>
            <h2 className={styles.price}>5000 / Life time</h2>
            <p style={{marginTop:"-8px"}}  className={styles.add}>Additional Submission</p>
            <h2 className={styles.rate}>RS. 2000</h2>
            {props.button}
          </div>

          <div className={styles.thirdblock}>
            <h2 className={styles.price}>10000 / Life time</h2>
            <p style={{marginTop:"-8px"}}  className={styles.add}>Additional Submission</p>
            <h2 className={styles.rate}>RS. 3500</h2>
            {props.button}
          </div>
        </div>
        <p className={styles.validity}>Validity:<span style={{ color:"grey"}}> Up to your current plan</span></p>
      </div>
    </>
  );
}

export default Card;
