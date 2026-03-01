import styles from "./Button.module.css";
import React from "react";

interface ButtonProps {
    text: string;
    onClick: (e: React.MouseEvent) => void;
}

export default function ErrorButton({text, onClick}: ButtonProps) {
    return (
        <>
            <button type="button" className={`${styles.button} ${styles.errorColor}`} onClick={onClick}>{text}</button>
        </>
    );
}
