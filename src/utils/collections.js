export const groupBy = (collection, predicate) => {
    const grouped = {};

    const groupItem = (item) => {
        const group = predicate(item);

        if (!grouped.hasOwnProperty(group)) {
            grouped[group] = [];
        }

        grouped[group].push(item);
    };

    collection.forEach(groupItem);

    return grouped;
};
