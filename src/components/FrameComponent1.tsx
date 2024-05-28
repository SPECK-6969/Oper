import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <button className={styles.navigationBoxParent}>
        <div className={styles.navigationBox} />
        <a className={styles.home}>Home</a>
      </button>
      <div className={styles.dashboardWrapper}>
        <a className={styles.dashboard}>Dashboard</a>
      </div>
      <div className={styles.resourcesWrapper}>
        <b className={styles.resources}>Resources</b>
      </div>
      <div className={styles.calendarWrapper}>
        <a className={styles.calendar}>Calendar</a>
      </div>
      <div className={styles.reportsWrapper}>
        <b className={styles.reports}>Reports</b>
      </div>
      <div className={styles.studyWrapper}>
        <b className={styles.study}>Study</b>
      </div>
      <div className={styles.settingWrapper}>
        <b className={styles.setting}>Setting</b>
      </div>
    </div>
  );
};

export default FrameComponent1;
