import * as BattleApiUtil from "../util/battle_api_util";

export const RECEIVE_ALL_BATTLES = "RECEIVE_ALL_BATTLES";
export const RECEIVE_JOINED_BATTLE = "RECEIVE_JOINED_BATTLE";

export const receiveAllBattles = (battles) => ({
    type: RECEIVE_ALL_BATTLES,
    battles
});

export const receiveBattle = (battle) => ({
    type: RECEIVE_JOINED_BATTLE,
    battle
})

export const fetchBattles = () => dispatch => {
    return BattleApiUtil.fetchBattles()
        .then(battles => dispatch(receiveAllBattles(battles)))
};

export const updateBattle = (battle) => dispatch => {
    return BattleApiUtil.updateBattle(battle)
        .then(battle =>  dispatch(receiveBattle(battle)))
};