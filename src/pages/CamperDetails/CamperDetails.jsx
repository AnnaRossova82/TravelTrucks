import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './CamperDetails.module.css';
import Features from '../../Features/Features.jsx';
import Reviews from '../../Reviews/Reviews.jsx';
import BookingForm from '../../components/BookingForm/BookingForm.jsx'
import Icon from '../../components/Icon.jsx';

const CamperDetails = () => {
    const { id } = useParams();
    const [camper, setCamper] = useState(null);
    const [activeTab, setActiveTab] = useState('features');

    useEffect(() => {
        const fetchCamperDetails = async () => {
            try {
                const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
                setCamper(response.data);
            } catch (error) {
                console.error('Error fetching camper details:', error);
            }
        };

        fetchCamperDetails();
    }, [id]);

    if (!camper) return <div>Loading...</div>;

    return (
        <div className={styles.vehicleDetails}>
            <h1>{camper.name}</h1>
            <div className={styles.ratingLocationContainer}>
                <div className={styles.rating}>
                    {[...Array(Math.floor(camper.rating))].map((_, index) => (
                        <Icon key={index} id="icon-star" className={styles.starIcon} />
                    ))}
                    <span className={styles.ratingText}>
                        {camper.rating} ({camper.reviews.length} Reviews)
                    </span>
                </div>
                <div className={styles.location}>
                    <Icon id="icon-map" className={styles.mapIcon} />
                    <span>{camper.location}</span>
                </div>
            </div>
            <div className={styles.price}>€{camper.price}</div>
            <div className={styles.imageGallery}>
                {camper.gallery.map((image, index) => (
                    <div key={index} className={styles.imageWrapper}>
                        <img src={image.original} alt={`camper ${index}`} className={styles.image} />
                    </div>
                ))}
            </div>
            <p className={styles.description}>{camper.description}</p>
            <div className={styles.detailsLinks}>
                <span 
                    className={`${styles.detailsLink} ${activeTab === 'features' ? styles.active : ''}`}
                    onClick={() => setActiveTab('features')}
                >
                    Features
                </span>
                <span 
                    className={`${styles.detailsLink} ${activeTab === 'reviews' ? styles.active : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews
                </span>
            </div>
            <div className={styles.lowerContainers}>
                {activeTab === 'features' ? (
                    <div className={styles.innerContainer}>
                        <Features camper={camper} />
                        <BookingForm />
                    </div>
                ) : (
                    <div className={styles.innerContainer}>
                        <Reviews reviews={camper.reviews} />
                        <BookingForm />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CamperDetails;