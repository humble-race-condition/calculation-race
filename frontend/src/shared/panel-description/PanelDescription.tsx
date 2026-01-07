import styles from "./PanelDescription.module.css"

interface PanelDescriptionProps {
    title: string;
}

export default function PanelDescription({title}: PanelDescriptionProps) {
    return (
        <p className={styles.panelDescription}>{title}</p>
    );
}
