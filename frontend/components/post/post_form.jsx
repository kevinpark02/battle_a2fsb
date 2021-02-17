import React from 'react'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const tasks = this.props.tasks

        return(
            <div>
                <form>
                    <textarea name="" id="" cols="30" rows="10">
                        
                    </textarea>
                </form>
            </div>
        )
    }
}

export default PostForm