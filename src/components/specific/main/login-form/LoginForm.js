import React from "react";
import {createUseStyles} from "react-jss";

const LoginForm = () => {
  const useStyles = createUseStyles(componentStyles);
  const styles = useStyles();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginMainContainer}>
        <div className={styles.loginInnerContainer}>
          <div className={styles.loginIconContainer} />
        </div>
      </div>
      <div className={styles.passwordMainContainer}>
        <div className={styles.passwordInnerContainer} />
      </div>
    </div>
  )
}

const componentStyles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    height: "20%",
    width: "30%",
  },
  loginMainContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "coral",
  },
  loginInnerContainer: {
    flex: 1,
    margin: "2%",
    backgroundColor: "lightgrey",
  },
  loginIconContainer: {
    height: "100%",
    width: "10%",
    backgroundColor: "red",
  },
  passwordMainContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "orange",
  },
  passwordInnerContainer: {
    flex: 1,
    margin: "2%",
    backgroundColor: "lightgrey",
  },
}

export default React.memo(LoginForm);
