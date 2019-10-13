import React from 'react';
import String from './Contents';

const News = (props) => {
    return (
        <div className="my-5">
            <a href={props.link} target="__blank"><h5 style={{ fontWeight:'bold' }}>{props.title}</h5></a>
            <p>
            {props.content}
            <br/>
            <a href={props.link} target="__blank">{String.etc.more}</a>
            </p>
        </div>
    )
}

export default News;
