import React from 'react';

class BattlePost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const posts = this.props.posts
        return(
            <ul>
                {posts.map(post => {
                    return(
                        post.body
                    )
                })}
            </ul>
        )
    }
}

export default BattlePost;