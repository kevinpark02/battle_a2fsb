import React from 'react';

class BattleCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            create: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBattle(this.state)
            .then(() => this.props.fetchBattles())
            .then(() => this.setState({['create']: !this.state.create}))
    }

    render() {
        const otherForm = this.state.create ? 
            <h1>Hi</h1>
            :
            null;

        return(
            <div className="battle-create-form-container">
                <form className="battle-create-form" onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.name}
                           placeholder="Battle Name"
                           onChange={this.update('name')}
                    />
                    <input className="yellow-btn" type="submit" value="Create"/>
                </form>
                {otherForm}
            </div>
        )
    }
}

export default BattleCreateForm