import { FunctionComponent } from "react";
import styles from "./StudentLogin.module.css";

const StudentLogin: FunctionComponentStudentLoginType = () => {
  return (
    <div className={styles.studentLogin}>
      <div className={styles.mainLayout}>
        <div className={styles.contentLayout}>
          <h1 className={styles.login}>Login</h1>
          <div className={styles.enterYourAccount}>
            Enter your account details
          </div>
        </div>
        <form className={styles.accountOptions}>
          <div className={styles.credentials}>
            <div className={styles.inputFields}>
              <input
                className={styles.adminId}
                placeholder="Admin ID"
                type="text"
              />
              <div className={styles.fieldSeparator} />
            </div>
            <div className={styles.inputFields1}>
              <div className={styles.passwordParent}>
                <input
                  className={styles.password}
                  placeholder="Password"
                  type="text"
                />
                <img
                  className={styles.eyeslashfillIcon}
                  alt=""
                  src="/eyeslashfill.svg"
                />
              </div>
              <div className={styles.inputFieldsChild} />
            </div>
            <div className={styles.forgotPassword}>Forgot Password?</div>
          </div>
          <button className={styles.loginButton}>
            <div className={styles.login1}>Login</div>
          </button>
        </form>
        <div className={styles.signupPromptParent}>
          <div className={styles.signupPrompt}>
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
        <h1 className={styles.welcomeToStudentsContainer}>
          <p className={styles.welcomeTo}>
            <b>{`Welcome to `}</b>
          </p>
          <p className={styles.students}>{`Students `}</p>
          <p className={styles.portal}>portal</p>
        </h1>
        <div className={styles.loginToAccess}>Login to access your account</div>
      </div>
    </div>
  );
};

export default StudentLogin;
