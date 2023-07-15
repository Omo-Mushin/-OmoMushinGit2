import React, { Component } from 'react';

const NewsPage = ({match, history}) => {
    return (
        <div>
            <span>Engineering Update</span>
            
        <img src="./Nuesa.jpg" alt="" size={30}/>
        <h2>
            {match.params.name}
        </h2>
            <h4>
                {match.params.job}
            </h4>
            <article>
                {match.params.text}
            </article>
        </div>
    )
}
export default NewsPage;