import * as BattleApiUtil from "../util/battle_api_util";

export const RECEIVE_ALL_BATTLES = "RECEIVE_ALL_BATTLES";

export const receiveAllBattles = (battles) => ({
    type: RECEIVE_ALL_BATTLES,
    battles
});

export const fetchBattles = () => dispatch => {
    return BattleApiUtil.fetchBattles()
        .then(battles => dispatch(receiveAllBattles(battles)))
};