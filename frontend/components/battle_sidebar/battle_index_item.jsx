import React from 'react';
import { Link } from 'react-router-dom';

class BattleIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.battle;
        this.handleJoin = this.handleJoin.bind(this);
    }

    handleJoin(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div className="battle-item">
                <li className="battle-name"># &nbsp; &nbsp; {this.props.battle.name}</li>
                <button className="blue-btn-small">Join</button>
            </div>
        )
    }
}

export default BattleIndexItem