import styles from "./TextInput.module.css";
import React from "react";

interface TextInputProps {
    id: string;
    placeholder: string;
    value?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({id, placeholder, value, label, labelStyle, onChange}: TextInputProps) {
    const selectedLabelStyle: string | undefined = label
        ? labelStyle ?? styles.label
        : undefined;

    return (
        <div className={styles.textInputContainer}>
            {<label htmlFor={id} className={selectedLabelStyle}>{label}</label>}
            <input type="text"
                   placeholder={placeholder}
                   id={id}
                   className={styles.textInput}
                   value={value}
                   onChange={onChange}
            />
        </div>
    );
}
