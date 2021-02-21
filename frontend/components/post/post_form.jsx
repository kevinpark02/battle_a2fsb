import React from 'react'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.postContent

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleScore = this.handleScore.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleScore(e) {
        let pointsEarned = Object.assign({}, this.state.points_earned)
        if (e.target.value === "") {
            pointsEarned[e.target.name] = 0
        } else {
            pointsEarned[e.target.name] = parseInt(e.target.id) * parseInt(e.target.value)
        }
        this.setState({ points_earned: pointsEarned })
    }

    handleCheckboxChange(e) {
        let pointsEarned = Object.assign({}, this.state.points_earned)
        
        if (e.target.checked && pointsEarned[e.target.name]) {
            pointsEarned[e.target.name] = parseInt(pointsEarned[e.target.name]) * 2
            this.setState({ points_earned: pointsEarned })
        } else if (!e.target.checked && pointsEarned[e.target.name]) {
            pointsEarned[e.target.name] = parseInt(pointsEarned[e.target.name]) / 2
            this.setState({ points_earned: pointsEarned })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state)
    }

    render(){
        const tasks = this.props.tasks

        return(
            <div className="post-form-container">
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.body}
                           placeholder="Share your post!"
                           onChange={this.update('body')}/>
                    <ul>
                        {this.props.tasks.map(task => {
                            return(
                                <div className="post-form-checkbox-container" key={task.id}>
                                    <div className="post-form-checkbox-left">
                                        <label htmlFor="">
                                            {task.name}: &nbsp;
                                            <input type="text"
                                                name={task.name}
                                                id={task.points}
                                                onChange={this.handleScore}/>
                                        </label>
                                    </div>
                                    <div className="post-form-checkbox-right">
                                        <input type="checkbox" 
                                               id={task.id} 
                                               name={task.name} 
                                               value="together"
                                               onChange={this.handleCheckboxChange}/>
                                        <label htmlFor="together">Did it with a friend(s)</label>
                                    </div>
                                    <div className="post-form-checkbox-score">
                                        <p>Points Earned: {this.state.points_earned[task.name]}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                    <p>Total Points Earned: {Object.values(this.state.points_earned).reduce((a, b) => a + b, 0)}</p>
                    <input type="submit" value ="Post!"/>
                </form>
            </div>
        )
    }
}

export default PostForm