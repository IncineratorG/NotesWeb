import React from "react";
import {createUseStyles} from "react-jss";

const LoginForm = () => {
  const useStyles = createUseStyles(componentStyles);
  const styles = useStyles();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginMainContainer} />
      <div className={styles.passwordMainContainer} />
    </div>
  )
}

const componentStyles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    height: "20vh",
    width: "30vw",
  },
  loginMainContainer: {
    flex: 1,
    backgroundColor: "coral",
  },
  passwordMainContainer: {
    flex: 1,
    backgroundColor: "orange",
  }
}

export default React.memo(LoginForm);
