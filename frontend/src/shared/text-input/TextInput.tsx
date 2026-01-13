import styles from "./TextInput.module.css";
import React from "react";

interface TextInputProps {
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({id, placeholder, value, onChange}: TextInputProps) {
    return (
        <input type="text"
               placeholder={placeholder}
               id={id}
               className={styles.baseTextInput}
               value={value}
               onChange={onChange}
        />
    );
}
