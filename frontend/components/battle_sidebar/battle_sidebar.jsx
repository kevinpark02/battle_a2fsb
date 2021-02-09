import React from 'react';
import BattleIndexItem from './battle_index_item';

class BattleSideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchBattles();
    }

    render() {
        // debugger
        if (this.props.battles === undefined) {
            return null
        }

        const battles = this.props.battles;
        const currentUser = this.props.currentUser;
        const updateBattle = this.props.updateBattle

        const yourBattles = currentUser ? 
            <div className="battle-container">
                <h2>Your Battles!</h2>
                <ul className="battle-sidebar-list">
                        {battles.map(battle => {
                            if (battle.participant_ids.includes(currentUser.id)) {
                                return(
                                    <BattleIndexItem battle={battle}
                                                    key={battle.id}
                                                    updateBattle={updateBattle}
                                                    currentUser={currentUser}
                                                    />

                                )
                            }
                        })}
                </ul>
            </div>
            : 
            null

        const availBattles = currentUser ? 
            <div className="battle-container">
                <h2>Available Battles!</h2>
                <ul className="battle-sidebar-list">
                        {battles.map(battle => {
                            if (!battle.participant_ids.includes(currentUser.id)) {
                                return(
                                    <BattleIndexItem battle={battle}
                                                    key={battle.id}
                                                    updateBattle={updateBattle}
                                                    currentUser={currentUser}
                                                    />

                                )
                            }
                        })}
                </ul>
            </div>
            : 
            null
        
        return(
            <div className="battle-sidebar-outer-container">
                {yourBattles}
                {availBattles}
            </div>
        )
    }
}

export default BattleSideBar