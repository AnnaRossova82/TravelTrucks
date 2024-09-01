export const filterVehicles = (items, filters) => {
    try {
        if (!Array.isArray(items)) {
            throw new Error('Items should be an array');
        }

        return items.filter((item) => {
            let matches = true;

            if (filters.vehicleType && item.form !== filters.vehicleType) {
                matches = false;
            }

            Object.keys(filters.equipment).forEach((key) => {
                if (filters.equipment[key] && !item[key]) {
                    matches = false;
                }
            });

            return matches;
        });
    } catch (error) {
        console.error('Error applying filters:', error);
        return [];
    }
};