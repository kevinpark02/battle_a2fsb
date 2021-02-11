import React from 'react';

class BattleCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.name}
                           placeholder="Battle Name"
                           onChange={this.update('name')}
                    />
                    <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}

export default BattleCreateForm