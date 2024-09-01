import { useState } from 'react';
import styles from './CustomPlaceholder.module.css';
import Icon from '../components/Icon.jsx';

const CustomPlaceholder = ({ availableLocations, selectedLocation, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectChange = (location) => {
        onSelect(location);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.customSelect}>
            <button
                className={styles.selectedOption}
                onClick={toggleDropdown}
            >
                <div className={styles.location}>
                    <Icon id="icon-map" className={styles.mapIcon} />
                </div>
                <h3>{selectedLocation || 'Kyiv, Ukraine'}</h3>
                <Icon id="icon-arrow-down" className={styles.arrowIcon} />
            </button>
            {isOpen && (
                <div className={styles.dropdown}>
                    <ul>
                        {availableLocations.map((location) => (
                            <li
                                key={location}
                                onClick={() => handleSelectChange(location)}
                                className={styles.optionItem}
                            >
                                <Icon id="icon-map" className={styles.icon} />
                                {location}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CustomPlaceholder;