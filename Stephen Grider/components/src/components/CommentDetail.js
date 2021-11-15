import React from 'react'

// We are going to use props (properties) so this hard coded text can be easely updated.

const CommentDetail = props => {
    return (
        <div className='comment'>
                <a href="/" className='avatar'> 
                    <img alt='avatar' src={props.avatar} />
                 </a>
                 <div className='content'>
                     <a  href="/" className='author'>
                         {props.author}
                     </a>
                     <div className='metadata'>
                         <span className='date'>{props.time}</span>
                     </div>
                     <div className='text'>{props.text}</div>
                 </div>
            </div>
    )
}



export default CommentDetail