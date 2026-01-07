import styles from './PanelTitle.module.css';

interface PanelTitleProps {
    title: string;
}

export default function PanelTitle({title}: PanelTitleProps) {
    return (
        <h1 className={styles.panelTitle}>{title}</h1>
    );
}
