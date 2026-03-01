import styles from "./Button.module.css";
import React from "react";

interface ButtonProps {
    text: string;
    onClick: (e: React.MouseEvent) => void;
}

export default function SmallButton({text, onClick}: ButtonProps) {
    return (
        <>
            <button type="button" className={`${styles.smallButton} ${styles.primaryColor}`} onClick={onClick}>{text}</button>
        </>
    );
}
