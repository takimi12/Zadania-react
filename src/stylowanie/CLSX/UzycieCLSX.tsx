import { ReactNode, useState } from "react";
import styles from "./stylowanie.module.scss"
import clsx from 'clsx'


export const CLSX = () => {
    const [isActive, setisActive] = useState(false);
    const [isPrimary, setPrimary] = useState(false);

    const toggleActive = () => {
        setisActive(prevActive => !prevActive);
    };

    const togglePrimary = () => {
        setPrimary(prevPrimary => !prevPrimary);
    };

    return (
        <> 
    <button onClick={togglePrimary}> Toggle primary</button>
        
       <div 
       onClick={toggleActive}
       className={`${styles.wraper} ${isActive ? styles.isActive : ""} ${isPrimary ? styles.primary : ""}`}></div>


        <div 
       className={clsx(styles.wrapper, { 
        [styles.active] : isActive, 
        [styles.primary]: isPrimary,
        })}   onClick={toggleActive} role="button"> 
        </div>




        </>
    );
};
