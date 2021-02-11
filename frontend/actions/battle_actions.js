import * as BattleApiUtil from "../util/battle_api_util";

export const RECEIVE_ALL_BATTLES = "RECEIVE_ALL_BATTLES";
export const RECEIVE_NEW_BATTLE = "RECEIVE_BATTLE";
export const RECEIVE_JOINED_BATTLE = "RECEIVE_JOINED_BATTLE";

export const receiveAllBattles = (battles) => ({
    type: RECEIVE_ALL_BATTLES,
    battles
});

export const receiveNewBattle = (battle) => ({
    type: RECEIVE_NEW_BATTLE,
    battle
});

export const receiveJoinedBattle = (battle) => ({
    type: RECEIVE_JOINED_BATTLE,
    battle
});

export const fetchBattles = () => dispatch => {
    return BattleApiUtil.fetchBattles()
        .then(battles => dispatch(receiveAllBattles(battles)))
};

export const createBattle = (battle) => dispatch => {
    return BattleApiUtil.createBattle(battle)
        .then(battle => dispatch(receiveNewBattle(battle)))
};

export const updateBattle = (battle) => dispatch => {
    return BattleApiUtil.updateBattle(battle)
        .then(battle =>  dispatch(receiveJoinedBattle(battle)))
};