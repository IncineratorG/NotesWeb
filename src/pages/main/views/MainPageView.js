import React from "react";
import {createUseStyles} from 'react-jss'

const MainPageView = () => {
    const useStyles = createUseStyles(pageStyles);
    const styles = useStyles();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
            </div>
            <div className={styles.body}>
            </div>
            <div className={styles.footer}>
            </div>
        </div>
    )
}

const pageStyles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'grey',
    },
    header: {
        width: '100%',
        height: '10vh',
        backgroundColor: 'red',
    },
    body: {
        height: '77vh',
        backgroundColor: 'green',
    },
    footer: {
        width: '100%',
        height: '10vh',
        backgroundColor: 'blue',
    },
}

export default MainPageView;
