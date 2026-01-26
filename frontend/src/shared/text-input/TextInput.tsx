import styles from "./TextInput.module.css";
import React from "react";

interface TextInputProps {
    id: string;
    placeholder: string;
    value?: string | undefined;
    label?: string | undefined;
    labelStyle?: string | undefined;
    additionalContainerStyle?: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput(props: TextInputProps) {
    const selectedLabelStyle: string | undefined = props.label
        ? props.labelStyle ?? styles.label
        : undefined;

    const containerStyle: string | undefined =
        `${styles.textInputContainer} ${props.additionalContainerStyle}`;
    return (
        <div className={containerStyle}>
            {<label htmlFor={props.id} className={selectedLabelStyle}>{props.label}</label>}
            <input type="text"
                   placeholder={props.placeholder}
                   id={props.id}
                   className={styles.textInput}
                   value={props.value}
                   onChange={props.onChange}
            />
        </div>
    );
}
