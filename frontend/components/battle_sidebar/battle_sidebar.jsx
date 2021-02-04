import React from 'react';

class BattleSideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const sidebar = this.props.currentUser ? 
            <p>There is a sidebar</p> : 
            null

        return(
            <div>
                {sidebar}
            </div>
        )
    }
}

export default BattleSideBar