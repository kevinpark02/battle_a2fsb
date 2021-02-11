export const fetchBattles = () => {
    return $.ajax({
        url: `/api/battles`,
        method: "GET"
    });
};

export const createBattle = (battle) => {
  return $.ajax({
    url: `/api/battles`,
    method: "POST",
    data: { battle },
  });
};

export const updateBattle = (battle) => {
  return $.ajax({
    url: `/api/battles/${battle.id}`,
    method: "PATCH",
    data: { battle },
  });
};