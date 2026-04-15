import styles from './PanelTitle.module.css';
import SmallErrorButton from "../button/SmallErrorButton";

interface PanelTitleProps {
    title: string;
    onClick: (e: React.MouseEvent) => void;
}

export default function PanelTitleWithExitButton({title, onClick}: PanelTitleProps) {
    return (
        <div className={styles.titleContainer}>
            <div className={styles.leftSpacer}></div>
            <h1 className={styles.panelTitle}>{title}</h1>
            <div className={styles.rightSpacer}>
                <SmallErrorButton text={'Exit'} onClick={onClick} />
            </div>
        </div>
    );
}
