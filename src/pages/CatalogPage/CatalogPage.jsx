import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchVehicles } from '../../redux/slices/vehiclesSlice';
import { filterVehicles } from '../../utils/filterVehicles'; 
import VehicleCard from '../../components/VehicleCard/VehicleCard.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const { items, status, currentPage } = useSelector((state) => state.vehicles);
    const appliedFilters = useSelector((state) => state.filters.appliedFilters);

    const [filteredItems, setFilteredItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchVehicles({ page: 1 }));
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (status === 'succeeded') {
            const updatedFilteredItems = filterVehicles(items, appliedFilters);
            setFilteredItems(updatedFilteredItems);
            setHasMore(updatedFilteredItems.length > currentPage * 5); 
        }
    }, [appliedFilters, items, status, currentPage]);

    const handleLoadMore = () => {
        dispatch(fetchVehicles({ page: currentPage + 1 }));
    };

    let content;

    if (status === 'loading') {
        content = <div>Loading...</div>;
    } else if (status === 'succeeded') {
        content = filteredItems.length > 0 ? (
            filteredItems.slice(0, currentPage * 5).map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))
        ) : (
            <div>No vehicles match your filters.</div>
        );
    } else if (status === 'failed') {
        content = <div>Error loading vehicles.</div>;
    }

    return (
        <div className={styles.catalog}>
            <Filters />
            <div className={styles.vehicleList}>
                {content}
                {hasMore && (
                    <button className={styles.btnLoadMore} onClick={handleLoadMore}>
                        Load More
                    </button>
                )}
            </div>
        </div>
    );
};

export default CatalogPage;



/* import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchVehicles } from '../../redux/slices/vehiclesSlice';
import { filterVehicles } from '../../utils/filterVehicles'; 
import VehicleCard from '../../components/VehicleCard/VehicleCard.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const { items, status, currentPage } = useSelector((state) => state.vehicles);
    const appliedFilters = useSelector((state) => state.filters.appliedFilters);

    const [filteredItems, setFilteredItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchVehicles({ page: 1 }));
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (status === 'succeeded') {
            const updatedFilteredItems = filterVehicles(items, appliedFilters);
            setFilteredItems(updatedFilteredItems);
            setHasMore(updatedFilteredItems.length > currentPage * 5); 
        }
    }, [appliedFilters, items, status, currentPage]);

    const handleLoadMore = () => {
        dispatch(fetchVehicles({ page: currentPage + 1 }));
    };

    let content;

    if (status === 'loading') {
        content = <div>Loading...</div>;
    } else if (status === 'succeeded') {
        content = filteredItems.length > 0 ? (
            filteredItems.slice(0, currentPage * 5).map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))
        ) : (
            <div>No vehicles match your filters.</div>
        );
    } else if (status === 'failed') {
        content = <div>Error loading vehicles.</div>;
    }

    return (
        <div className={styles.catalog}>
            <Filters />
            <div className={styles.vehicleList}>
                {content}
                {hasMore && (
                    <button className={styles.btnLoadMore} onClick={handleLoadMore}>
                        Load More
                    </button>
                )}
            </div>
        </div>
    );
};

export default CatalogPage;  */

