import React from 'react';

class BattleShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
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