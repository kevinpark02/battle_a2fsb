import React from 'react'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.postContent

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleCheckboxChange(e) {
        let scoreBoard = Object.assign({}, this.state.score_board)

        if (e.target.checked && e.target.value !== "together") {
            if (scoreBoard[e.target.name]) {
                scoreBoard[e.target.name] = scoreBoard[e.target.name] + e.target.value
            } else {
                scoreBoard[e.target.name] = e.target.value
            }
            this.setState({ score_board: scoreBoard })
        } else if (!e.target.checked && e.target.value !== "together") {
            scoreBoard[e.target.name] = parseInt(scoreBoard[e.target.name]) - parseInt(e.target.value)
            this.setState({ score_board: scoreBoard })
        } else if (e.target.checked && e.target.value === "together") {
            scoreBoard[e.target.name] = parseInt(scoreBoard[e.target.name]) * 2
            this.setState({ score_board: scoreBoard })
        } else if (!e.target.checked && e.target.value === "together") {
            scoreBoard[e.target.name] = parseInt(scoreBoard[e.target.name]) / 2
            this.setState({ score_board: scoreBoard })
        }
  }

    render(){
        const tasks = this.props.tasks

        return(
            <div className="post-form-container">
                <form className="post-form">
                    <input type="text"
                           value={this.state.body}
                           placeholder="Share your post!"
                           onChange={this.update('body')}/>
                    <ul>
                        {this.props.tasks.map(task => {
                            return(
                                <div className="post-form-checkbox-container" key={task.id}>
                                    <div className="post-form-checkbox-left">
                                        <input type="checkbox" 
                                               id={task.id} 
                                               name={task.name} 
                                               value={task.points}
                                               onChange={this.handleCheckboxChange}/>
                                        <label htmlFor={task.name}>{task.name}</label>
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
                                        <p>Points Earned: {this.state.score_board[task.name]}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </form>
            </div>
        )
    }
}

export default PostForm