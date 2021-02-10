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
        let participantIds = this.state.participant_ids.push(this.props.currentUser.id)
        this.setState({["participant_ids"]: participantIds})
        this.props.updateBattle(this.state)
            .then((joinedBattle) => this.props.history.push(`/battles/${joinedBattle.battle.data.id}`))
    }

    render() {
        let joinButton = this.props.battle.participant_ids.includes(this.props.currentUser.id) ?
            null :
            <button className="blue-btn-small" onClick={this.handleJoin}>Join</button>
        return(
            <div className="battle-item">
                <Link to={`/battles/${this.props.battle.id}`}>
                    <li className="battle-name"># &nbsp; &nbsp; {this.props.battle.name}</li>
                </Link>
                {joinButton}
            </div>
        )
    }
}

export default BattleIndexItem