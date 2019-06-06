import React from 'react'

export const Comments = (props) => {
    const comments = props.comments;
    return (
        <div className = 'comments'>
            <h1> Comments: </h1>
            {
                comments.map((comment) => {
                    return (
                    <div key = {comment.id} className = 'singleComment' >
                        {comment.comment}
                    </div>
                    )
                })
            }
        </div>
    )
}