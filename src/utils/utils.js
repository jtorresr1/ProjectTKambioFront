export const formatToDate = (date) => {
    let newDate = new Date(date);
    let monthNewDate = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let dayNewDate = ("0" + newDate.getDate()).slice(-2);
    return dayNewDate + "/" + monthNewDate + "/" + newDate.getFullYear();
};