import { useDispatch, useSelector } from 'react-redux';
import {
    setEquipmentFilter,
    setVehicleTypeFilter,
    applyFilters,
    setLocationFilter
} from '../../redux/slices/filtersSlice';
import styles from './Filters.module.css';
import CustomPlaceholder from '../../CustomPlaceholder/CustomPlaceholder.jsx';
import Icon from '../Icon.jsx';

const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const availableLocations = [
        'Ukraine, Kyiv',
        'Ukraine, Poltava',
        'Ukraine, Dnipro',
        'Ukraine, Odesa',
        'Ukraine, Kharkiv',
        'Ukraine, Sumy',
        'Ukraine, Lviv'
    ];

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        dispatch(setEquipmentFilter({ key: name, value: checked }));
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        dispatch(setVehicleTypeFilter({ value }));
    };

    const handleSearchClick = () => {
        dispatch(applyFilters());
    };

    const handleLocationChange = (location) => {
        dispatch(setLocationFilter(location));
    };

    return (
        <div className={styles.filters}>
            <p className={styles.title}>Location</p>
            <CustomPlaceholder
                availableLocations={availableLocations}
                selectedLocation={filters.location}
                onSelect={handleLocationChange}
            />

            <h3 className={styles.title}>Filters</h3>
            <div className={styles.filterCategory}>
                <h4 className={styles.describe}>Vehicle Equipment</h4>
                <svg className={styles.line} width="360" height="1">
                    <line x1="0" y1="0" x2="360" y2="0" stroke="var(--Gray-light, #DADDE1)" strokeWidth="1" />
                </svg>
                <div className={styles.cardsList}>
                    <label className={`${styles.filterItem} ${filters.selectedFilters.equipment.AC ? styles.selected : ''}`}>
                        <input
                            type="checkbox"
                            name="AC"
                            checked={filters.equipment.AC}
                            onChange={handleCheckboxChange}
                        />
                        <Icon id="icon-wind" className={styles.icon} />
                        <span>AC</span>
                    </label>
                    <label className={`${styles.filterItem} ${filters.selectedFilters.equipment.Automatic ? styles.selected : ''}`}>
                        <input
                            type="checkbox"
                            name="Automatic"
                            checked={filters.equipment.Automatic}
                            onChange={handleCheckboxChange}
                        />
                        <Icon id="icon-diagram" className={styles.icon} />
                        <span>Automatic</span>
                    </label>
                    <label className={`${styles.filterItem} ${filters.selectedFilters.equipment.Kitchen ? styles.selected : ''}`}>
                        <input
                            type="checkbox"
                            name="Kitchen"
                            checked={filters.equipment.Kitchen}
                            onChange={handleCheckboxChange}
                        />
                        <Icon id="icon-Group" className={styles.icon} />
                        <span>Kitchen</span>
                    </label>
                    <label className={`${styles.filterItem} ${filters.selectedFilters.equipment.TV ? styles.selected : ''}`}>
                        <input
                            type="checkbox"
                            name="TV"
                            checked={filters.equipment.TV}
                            onChange={handleCheckboxChange}
                        />
                        <Icon id="icon-fully_integrated" className={styles.icon} />
                        <span>TV</span>
                    </label>
                    <label className={`${styles.filterItem} ${filters.selectedFilters.equipment.Bathroom ? styles.selected : ''}`}>
                        <input
                            type="checkbox"
                            name="Bathroom"
                            checked={filters.equipment.Bathroom}
                            onChange={handleCheckboxChange}
                        />
                        <Icon id="icon-alcove" className={styles.icon} />
                        <span>Bathroom</span>
                    </label>
                </div>
            </div>

            <div className={styles.filterCategory}>
                <h4 className={styles.describe}>Vehicle Type</h4>
                <svg className={styles.line} width="360" height="1">
                    <line x1="0" y1="0" x2="360" y2="0" stroke="var(--Gray-light, #DADDE1)" strokeWidth="1" />
                </svg>
                <div className={styles.filterOptions}>
                    <label className={`${styles.filterItem} ${filters.activeFilters.Van ? (filters.selectedFilters.vehicleType === 'Van' ? styles.selected : '') : styles.disabled}`}>
                        <input
                            type="radio"
                            name="vehicleType"
                            value="Van"
                            disabled={!filters.activeFilters.Van}
                            checked={filters.vehicleType === 'Van'}
                            onChange={handleRadioChange}
                        />
                        <Icon id="icon-van" className={styles.icon} />
                        <span>Van</span>
                    </label>
                    <label className={`${styles.filterItem} ${filters.activeFilters['Fully Integrated'] ? (filters.selectedFilters.vehicleType === 'Fully Integrated' ? styles.selected : '') : styles.disabled}`}>
                        <input
                            type="radio"
                            name="vehicleType"
                            value="Fully Integrated"
                            disabled={!filters.activeFilters['Fully Integrated']}
                            checked={filters.vehicleType === 'Fully Integrated'}
                            onChange={handleRadioChange}
                        />
                        <Icon id="icon-fully_integrated" className={styles.icon} />
                        <span>Fully Integrated</span>
                    </label>
                    <label className={`${styles.filterItem} ${filters.activeFilters.Alcove ? (filters.selectedFilters.vehicleType === 'Alcove' ? styles.selected : '') : styles.disabled}`}>
                        <input
                            type="radio"
                            name="vehicleType"
                            value="Alcove"
                            disabled={!filters.activeFilters.Alcove}
                            checked={filters.vehicleType === 'Alcove'}
                            onChange={handleRadioChange}
                        />
                        <Icon id="icon-alcove" className={styles.icon} />
                        <span>Alcove</span>
                    </label>
                </div>
            </div>

            {filters.errorMessage && <p className={styles.error}>{filters.errorMessage}</p>}

            <button className={styles.btnRed} onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default Filters;


/* import { useDispatch, useSelector } from 'react-redux';
import {
    setEquipmentFilter,
    setVehicleTypeFilter,
    applyFilters,
    setLocationFilter
} from '../../redux/slices/filtersSlice';
import styles from './Filters.module.css';
import CustomPlaceholder from '../../CustomPlaceholder/CustomPlaceholder.jsx';
import Icon from '../Icon.jsx';

const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const availableLocations = [
        'Ukraine, Kyiv',
        'Ukraine, Poltava',
        'Ukraine, Dnipro',
        'Ukraine, Odesa',
        'Ukraine, Kharkiv',
        'Ukraine, Sumy',
        'Ukraine, Lviv'
    ];

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        dispatch(setEquipmentFilter({ key: name, value: checked }));
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        dispatch(setVehicleTypeFilter(value));
    };

    const handleSearchClick = () => {
        dispatch(applyFilters());
    };

    const handleLocationChange = (location) => {
        dispatch(setLocationFilter(location));
    };

    return (
        <div className={styles.filters}>
                  <p className={styles.title}>Location</p>
            <CustomPlaceholder
                availableLocations={availableLocations}
                selectedLocation={filters.location}
                onSelect={handleLocationChange}
            />

            <h3 className={styles.title}>Filters</h3>
            <div className={styles.filterCategory}>
                <h4 className={styles.describe}>Vehicle Equipment</h4>
                <svg className={styles.line} width="360" height="1">
                    <line x1="0" y1="0" x2="360" y2="0" stroke="var(--Gray-light, #DADDE1)" strokeWidth="1" />
                </svg>
                <div className={styles.cardsList}>
                    <label className={styles.filterItem}>
                        <input type="checkbox" name="AC" checked={filters.equipment.AC} onChange={handleCheckboxChange} />
                        <Icon id="icon-wind" className={styles.icon} />
                        <span>AC</span>
                    </label>
                    <label className={styles.filterItem}>
                        <input type="checkbox" name="Automatic" checked={filters.equipment.Automatic} onChange={handleCheckboxChange} />
                        <Icon id="icon-diagram" className={styles.icon} />
                        <span>Automatic</span>
                    </label>
                    <label className={styles.filterItem}>
                        <input type="checkbox" name="Kitchen" checked={filters.equipment.Kitchen} onChange={handleCheckboxChange} />
                        <Icon id="icon-Group" className={styles.icon} />
                        <span>Kitchen</span>
                    </label>
                    <label className={styles.filterItem}>
                        <input type="checkbox" name="TV" checked={filters.equipment.TV} onChange={handleCheckboxChange} />
                        <Icon id="icon-fully_integrated" className={styles.icon} />
                        <span>TV</span>
                    </label>
                    <label className={styles.filterItem}>
                        <input type="checkbox" name="Bathroom" checked={filters.equipment.Bathroom} onChange={handleCheckboxChange} />
                        <Icon id="icon-alcove" className={styles.icon} />
                        <span>Bathroom</span>
                    </label>
                </div>
            </div>

            <div className={styles.filterCategory}>
                <h4 className={styles.describe}>Vehicle Type</h4>
                <svg className={styles.line} width="360" height="1">
                    <line x1="0" y1="0" x2="360" y2="0" stroke="var(--Gray-light, #DADDE1)" strokeWidth="1" />
                </svg>
                <div className={styles.filterOptions}>
                    <label className={styles.filterItem}>
                        <input type="radio" name="vehicleType" value="Van" checked={filters.vehicleType === 'Van'} onChange={handleRadioChange} />
                        <Icon id="icon-van" className={styles.icon} />
                        <span>Van</span>
                    </label>
                    <label className={styles.filterItem}>
                        <input type="radio" name="vehicleType" value="Fully Integrated" checked={filters.vehicleType === 'Fully Integrated'} onChange={handleRadioChange} />
                        <Icon id="icon-fully_integrated" className={styles.icon} />
                        <span>Fully Integrated</span>
                    </label>
                    <label className={styles.filterItem}>
                        <input type="radio" name="vehicleType" value="Alcove" checked={filters.vehicleType === 'Alcove'} onChange={handleRadioChange} />
                        <Icon id="icon-alcove" className={styles.icon} />
                        <span>Alcove</span>
                    </label>
                </div>
            </div>

            <button className={styles.btnRed} onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default Filters;

 */