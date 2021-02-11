import React from 'react';
import BattleIndexItem from './battle_index_item';
import { Link } from 'react-router-dom';

class BattleSideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchBattles();
    }

    render() {
        if (this.props.battles === undefined || this.props.battles.length === 0) {
            return null
        }

        const battles = this.props.battles;
        const currentUser = this.props.currentUser;
        const updateBattle = this.props.updateBattle;
        const fetchBattles = this.props.fetchBattles;

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
                                                    fetchBattles={fetchBattles}
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
                                                    fetchBattles={fetchBattles}
                                                    />

                                )
                            }
                        })}
                </ul>
            </div>
            : 
            null

        const battleForm = 
            <div className="battle-form">
                <Link to={`/battles/new`}>
                    <h2>Create  Battle</h2>
                </Link>
            </div>
        
        return(
            <div className="battle-sidebar-outer-container">
                {yourBattles}
                {availBattles}
                {battleForm}
            </div>
        )
    }
}

export default BattleSideBar