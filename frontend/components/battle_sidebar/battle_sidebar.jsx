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

        const yourBattles = currentUser ? 
            <div className="avail-battle-container">
                <h2>Your Battles!</h2>
                <ul className="battle-sidebar-list">
                        {battles.map(battle => {
                            if (battle.participant_ids.includes(currentUser.id)) {
                                return(
                                    <BattleIndexItem battle={battle}
                                                    key={battle.id}
                                                    />

                                )
                            }
                        })}
                </ul>
            </div>
            : 
            null

        const availBattles = currentUser ? 
            <div className="avail-battle-container">
                <h2>Available Battles!</h2>
                <ul className="battle-sidebar-list">
                        {battles.map(battle => {
                            if (!battle.participant_ids.includes(currentUser.id)) {
                                return(
                                    <BattleIndexItem battle={battle}
                                                    key={battle.id}
                                                    />

                                )
                            }
                        })}
                </ul>
            </div>
            : 
            null
        
        return(
            <div>
                <h1 className="sidebar-title">Battles</h1>
                {yourBattles}
                {availBattles}
            </div>
        )
    }
}

export default BattleSideBar