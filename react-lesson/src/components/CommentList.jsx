import React from 'react';

const CommentList=({comments,onDeleteComment})=>{
    function handleDelete (index){
        onDeleteComment(index);
    }
    return (
        <div className="comment-list-component">
            <label htmlFor="">评论列表</label>
            <ul className="list-group mb-3">
            {
                comments.map((comment,index)=>
                    <li key={index} className="list-group-item">{comment} <span className="delete" onClick={()=>handleDelete(index)}>x</span></li>
                )
            }
            </ul>
        </div>
    )
}

export default CommentList