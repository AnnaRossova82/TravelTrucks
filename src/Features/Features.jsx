import Icon from '../components/Icon.jsx';
import styles from './Features.module.css';

const Features = ({ camper }) => {
    return (
        <div className={styles.featuresContainer}>
            <div className={styles.features}>
                {camper.transmission === 'automatic' && (
                    <div className={styles.featureItem}>
                        <Icon id="icon-alcove" className={styles.icon} />
                        <span>Automatic</span>
                    </div>
                )}
                {camper.AC && (
                    <div className={styles.featureItem}>
                        <Icon id="icon-wind" className={styles.icon} />
                        <span>AC</span>
                    </div>
                )}
                {camper.engine === 'petrol' && (
                    <div className={styles.featureItem}>
                        <Icon id="icon-petrol" className={styles.icon} />
                        <span>Petrol</span>
                    </div>
                )}
                {camper.kitchen && (
                    <div className={styles.featureItem}>
                        <Icon id="icon-Group" className={styles.icon} />
                        <span>Kitchen</span>
                    </div>
                )}
                {camper.radio && (
                    <div className={styles.featureItem}>
                        <Icon id="icon-radio" className={styles.icon} />
                        <span>Radio</span>
                    </div>
                )}
                {camper.bathroom && (
                    <div className={styles.featureItem}>
                        <Icon id="icon-drop" className={styles.icon} />
                        <span>Bathroom</span>
                    </div>
                )}
            </div>
            <div className={styles.descriptionContainer}>
                <h4 className={styles.title}>Vehicle details</h4>
                <div className={styles.details}>
    <div className={styles.described}>
        <span className={styles.label}>Form:</span>
        <span className={styles.value}>{camper.form}</span>
    </div>
    <div className={styles.described}>
        <span className={styles.label}>Length:</span>
        <span className={styles.value}>{camper.length}</span>
    </div>
    <div className={styles.described}>
        <span className={styles.label}>Width:</span>
        <span className={styles.value}>{camper.width}</span>
    </div>
    <div className={styles.described}>
        <span className={styles.label}>Height:</span>
        <span className={styles.value}>{camper.height}</span>
    </div>
    <div className={styles.described}>
        <span className={styles.label}>Tank:</span>
        <span className={styles.value}>{camper.tank}</span>
    </div>
    <div className={styles.described}>
        <span className={styles.label}>Consumption:</span>
        <span className={styles.value}>{camper.consumption}</span>
    </div>
</div>
            </div>
        </div>
    );
};

export default Features;