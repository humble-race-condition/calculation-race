import styles from "./TextInput.module.css";

interface TextInputProps {
    id: string;
    placeholder: string;
}

export default function TextInput({id, placeholder}: TextInputProps) {
    return (
        <input type="text" placeholder={placeholder} id={id} className={styles.baseTextInput}/>
    );
}
