import React from 'react';
import PostFormContainer from "../../components/post/create_post_container"

class BattleShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBattle(this.props.battleId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.battleId != this.props.battleId) {
            this.props.fetchBattle(this.props.battleId);
        } 
    }

    render() {
        if (this.props.battle === undefined) {
            return null
        }

        return(
            <div className="battle-show-container">
                <h1>{this.props.battle.name}</h1>
                <PostFormContainer battle={this.props.battle}
                                   />
            </div>
            
        )
    }
}

export default BattleShow