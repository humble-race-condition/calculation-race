import styles from "./PanelDescription.module.css"

interface PanelDescriptionProps {
    title: string;
}

function PanelDescription({title}: PanelDescriptionProps) {
    return (
        <p className={styles.panelDescription}>{title}</p>
    );
}

export default PanelDescription;