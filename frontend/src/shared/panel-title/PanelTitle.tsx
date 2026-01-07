import styles from './PanelTitle.module.css';

interface PanelTitleProps {
    title: string;
}

export function PanelTitle({title}: PanelTitleProps) {
    return (
        <h1 className={styles.panelTitle}>{title}</h1>
    );
}