import styles from "./TextInput.module.css";
import React from "react";

interface TextInputProps {
    id: string;
    placeholder: string;
    value: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LabeledTextInput({id, placeholder, value, label, onChange}: TextInputProps) {
    return (
        <>
            <label htmlFor="game-name" className={styles.label}>{label}</label>
            <input type="text"
                   placeholder={placeholder}
                   id={id}
                   className={styles.textInput}
                   value={value}
                   onChange={onChange}
            />
        </>
    );
}
