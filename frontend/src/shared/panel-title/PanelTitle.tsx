import styles from './PanelTitle.module.css';

interface PanelTitleProps {
    title: string;
}

function PanelTitle({title}: PanelTitleProps) {
    return (
        <h1 className={styles.panelTitle}>{title}</h1>
    );
}

export default PanelTitle;