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
        if (this.props.battles === undefined) {
            return null
        }

        const battles = this.props.battles;

        const sidebar = this.props.currentUser ? 
            <ul className="battle-sidebar-list">
                    {battles.map(battle => {
                        return(
                            <BattleIndexItem battle={battle}
                                             key={battle.id}
                                             />
                        )
                    })}
            </ul>
            : 
            null

        return(
            <div>
                {sidebar}
            </div>
        )
    }
}

export default BattleSideBar