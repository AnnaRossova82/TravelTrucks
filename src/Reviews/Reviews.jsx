import styles from './Reviews.module.css';
import Icon from '../components/Icon.jsx';

const Reviews = ({ reviews }) => {
    return (
        <div className={styles.reviews}>
            {reviews.map((review, index) => (
                <div key={index} className={styles.reviewItem}>
                    <div className={styles.reviewerInitial}>
                        {review.reviewer_name.charAt(0)}
                    </div>
                    <div className={styles.reviewerDetails}>
                        <div className={styles.reviewerName}>{review.reviewer_name}</div>
                        <div className={styles.rating}>
                            {Array(review.reviewer_rating).fill(null).map((_, i) => (
                                <Icon key={i} id="icon-star" className={styles.starIcon} />
                            ))}
                        </div>
                        <p className={styles.comment}>{review.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews;