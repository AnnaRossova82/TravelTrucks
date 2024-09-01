import { useNavigate } from 'react-router-dom';
import styles from './VehicleCard.module.css';
import Icon from '../Icon.jsx'; 

const VehicleCard = ({ vehicle }) => {
    const navigate = useNavigate();
    const imageUrl = vehicle.gallery?.[0]?.thumb || 'default-image-url.jpg';

    const handleShowMore = () => {
        if (vehicle.id) {
            navigate(`/catalog/${vehicle.id}`); 
        } else {
            console.error('Vehicle ID is not available');
        }
    };

    return (
        <div className={styles.vehicleCard}>
            <div
                className={styles.vehicleImage}
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className={styles.vehicleContent}>
                <div className={styles.header}>
                    <h3 className={styles.vehicleTitle}>{vehicle.name}</h3>
                    <div className={styles.vehiclePrice}>€{vehicle.price}
                    <Icon id="icon-heart" className={styles.heart} />
                    </div>
                </div>
                <div className={styles.ratingLocationContainer}>
                    <div className={styles.vehicleRating}>
                        {vehicle.rating} stars
                    </div>
                    <div className={styles.vehicleLocation}>
                        {vehicle.location}
                    </div>
                </div>
                <div className={styles.vehicleDescription}>
                    The pictures shown here are example vehicles of the respective...
                </div>
                <div className={styles.featureIcons}>
                    {vehicle.bathroom && (
                        <div className={styles.featureItem}>
                            <Icon id="icon-drop" className={styles.icon} />
                            <span>Bathroom</span>
                        </div>
                    )}
                    {vehicle.engine === 'petrol' && (
                        <div className={styles.featureItem}>
                            <Icon id="icon-petrol" className={styles.icon} />
                            <span>Petrol</span>
                        </div>
                    )}
                    {vehicle.radio && (
                        <div className={styles.featureItem}>
                            <Icon id="icon-radio" className={styles.icon} />
                            <span>Radio</span>
                        </div>
                    )}
                    {vehicle.TV && (
                        <div className={styles.featureItem}>
                            <Icon id="icon-tv" className={styles.icon} />
                            <span>TV</span>
                        </div>
                    )}
                    {vehicle.two_adults && (
                        <div className={styles.featureItem}>
                            <Icon id="icon-two_adults" className={styles.icon} />
                            <span>2 adults</span>
                        </div>
                    )}
                    {vehicle.AC && (
                        <div className={styles.featureItem}>
                            <Icon id="icon-alcove" className={styles.icon} />
                            <span>AC</span>
                        </div>
                    )}
                    {vehicle.form === 'Van' && (
                        <div className={styles.featureItem}>
                            <Icon id="icon-diagram" className={styles.icon} />
                            <span>Van</span>
                        </div>
                    )}
                    {vehicle.form === 'Fully Integrated' && (
                        <div className={styles.featureItem}>
                            <Icon id="icon-fully_integrated" className={styles.icon} />
                            <span>Fully Integrated</span>
                        </div>
                    )}
                    {vehicle.form === 'Alcove' && (
                        <div className={styles.featureItem}>
                            <Icon id="icon-Group" className={styles.icon} />
                            <span>Alcove</span>
                        </div>
                    )}
                </div>
                <button className={styles.btnShowMore} onClick={handleShowMore}>
                    Show more
                </button>
            </div>
        </div>
    );
};

export default VehicleCard;