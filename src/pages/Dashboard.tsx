import { FunctionComponent } from "react";
import MainContent from "../components/MainContent";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponentDashboardType = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.helloDanielWelcomeContainer}>
        <span className={styles.helloDanielWelcomeContainer1}>
          <p className={styles.helloDaniel}>Hello, Daniel</p>
          <p className={styles.welcomeBack}>Welcome Back</p>
        </span>
      </h1>
      <MainContent />
    </div>
  );
};

export default Dashboard;
