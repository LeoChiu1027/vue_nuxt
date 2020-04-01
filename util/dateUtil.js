const formatDate = (date) => {
    if (!date) return null

    let [year, month, day] = date.split('-')
    year = year-1911;
    return `${year}/${month}/${day}`
};

const parseDate = (date) => {
    if (!date) return null

    let [month, day, year] = date.split('/')
    year = year+1911;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
};

export default {
    formatDate,
    parseDate
};