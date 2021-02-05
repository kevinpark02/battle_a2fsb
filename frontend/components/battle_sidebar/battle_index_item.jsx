import React from 'react';
import { Link } from 'react-router-dom';

class BattleIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li className="battle-list">{this.props.battle.name}</li>
        )
    }
}

export default BattleIndexItem