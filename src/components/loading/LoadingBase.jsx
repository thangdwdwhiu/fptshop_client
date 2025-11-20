import { memo } from "react";
import styles from './LoadingBase.module.css'
export default memo(function LoadingBase() {


    return (

        <>
            <div className="overlayBlack">
                        <div class={styles.spiner}></div>
            </div>
        </>
    )
})