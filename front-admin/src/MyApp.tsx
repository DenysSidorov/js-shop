import React from 'react';
import s from './styles.module.css';
import s2 from './st.module.scss';

const MyApp = () => {
    return (
        <>
            <div className={s.divClass}>MyApp</div>
            <div className={s2.divClass2}>MyApp2</div>
        </>
    )
};

export default MyApp;
