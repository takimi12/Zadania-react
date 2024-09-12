import { useState } from "react";
import styles from "./stylowanie.module.scss";

export const CLSX = () => {
    const [isActive, setIsActive] = useState(false);
    const [isPrimary, setIsPrimary] = useState(false);

    const toggleActive = () => {
        setIsActive(prevActive => !prevActive);
    };

    const togglePrimary = () => {
        setIsPrimary(prevPrimary => !prevPrimary);
    };

    return (
        <> 
            <button onClick={togglePrimary}>Toggle primary</button>
            

            <div 
                onClick={toggleActive}
                className={`${styles.wrapper} ${isActive ? styles.isActive : ""} ${isPrimary ? styles.primary : ""}`}>
            </div>


            <div 
                onClick={toggleActive} 
                className={`${styles.wrapper} ${isActive ? styles.active : ""} ${isPrimary ? styles.primary : ""}`} 
                role="button">
            </div>
        </>
    );
};
