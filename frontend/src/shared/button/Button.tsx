import styles from "./Button.module.css";
import React from "react";

interface ButtonProps {
    text: string;
    onClick: (e: React.MouseEvent) => void;
}

export default function Button({text, onClick}: ButtonProps) {
    return (
        <div>
            <button type="button" className={styles.button} onClick={onClick}>{text}</button>
        </div>
    );
}
