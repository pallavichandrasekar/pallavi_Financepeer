import React from 'react';
import './Data.css';
import Info from './data (13).json';

function Data() {
    return (
        <div className="Data">
            <div className='posts'>
                {Info.map(post => {
                    return(
                        <div key ={post.id} className="post">
                            <h4>{post.title}</h4>
                            <p class='post_body'>{post.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Data
