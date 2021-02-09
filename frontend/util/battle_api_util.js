export const fetchBattles = () => {
    return $.ajax({
        url: `/api/battles`,
        method: "GET"
    });
};

export const updateBattle = (battle) => {
  return $.ajax({
    url: `/api/lists/${battle.id}`,
    method: "PATCH",
    data: { battle },
  });
};