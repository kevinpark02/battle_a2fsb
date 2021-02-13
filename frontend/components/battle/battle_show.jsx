import React from 'react';

class BattleShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBattle(this.props.battle.id);
        // console.log("component did mount")
    }

    componentDidUpdate(prevProps) {
        if (prevProps.battle.id != this.props.battle.id) {
            this.props.fetchBattle(this.props.battle.id);
        } 
    }

    render() {
        console.log("this is render")
        if (this.props.battle === undefined) {
            return null
        }

        return(
            <div className="battle-show-container">
                <h1>{this.props.battle.name}</h1>
            </div>
            
        )
    }
}

export default BattleShow