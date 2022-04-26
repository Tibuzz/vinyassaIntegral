import React from 'react';


export function Comments({comments}) {
   
    return (
      <div className='commentsDiv'>
        {comments.map((comment, i) => ( 
          <div className='comments' key={i}>
            <p className='text'>{comment.text}</p>
            <p className='name'>{comment.name}, {comment.country}</p>
          </div>
            ))}
      </div>
    )
}