import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./AdminLogin.module.css";

const AdminLogin: FunctionComponentAdminLoginType = () => {
  return (
    <div className={styles.adminLogin}>
      <div className={styles.frameParent}>
        <div className={styles.loginParent}>
          <h1 className={styles.login}>Login</h1>
          <div className={styles.enterYourAccount}>
            Enter your account details
          </div>
        </div>
        <form className={styles.frameGroup}>
          <FrameComponent />
          <button className={styles.loginButton}>
            <a className={styles.login1}>Login</a>
          </button>
        </form>
        <div className={styles.signupContentParent}>
          <div className={styles.signupContent}>
            <div className={styles.dontHaveAn}>Don’t have an account?</div>
          </div>
          <button className={styles.signupButton}>
            <div className={styles.signUp}>Sign up</div>
          </button>
        </div>
      </div>
      <div className={styles.illustrationParent}>
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/illustration.svg"
        />
        <h1 className={styles.welcomeToAdministratorContainer}>
          <p className={styles.welcomeTo}>
            <b>{`Welcome to `}</b>
          </p>
          <p className={styles.administratorPortal}>Administrator portal</p>
        </h1>
        <div className={styles.loginToAccess}>Login to access your account</div>
      </div>
    </div>
  );
};

export default AdminLogin;
