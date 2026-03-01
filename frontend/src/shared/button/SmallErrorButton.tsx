import styles from "./Button.module.css";
import React from "react";

interface ButtonProps {
    text: string;
    onClick: (e: React.MouseEvent) => void;
}

export default function SmallErrorButton({text, onClick}: ButtonProps) {
    return (
        <>
            <button type="button" className={`${styles.smallButton} ${styles.errorColor}`} onClick={onClick}>{text}</button>
        </>
    );
}
