export const fetchBattles = () => {
    return $.ajax({
        url: `/api/battles`,
        method: "GET"
    });
};