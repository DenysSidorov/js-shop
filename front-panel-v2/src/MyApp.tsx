import React from 'react';
import s from './styles/styles.module.css';
import s2 from './styles/st.module.scss';
import './styles/st.css';
import './styles/st123.scss';

const MyApp = () => {
    return (
        <>
            <div className={s.divClass}>MyApp</div>
            <div className={s2.divClass2}>MyApp2</div>
            <div className="divClass3">MyApp3333</div>
            <div className="divClass4">MyApp4444</div>
        </>
    )
};

export default MyApp;
