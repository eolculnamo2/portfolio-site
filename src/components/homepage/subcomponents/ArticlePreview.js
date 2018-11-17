import React from 'react';
import '../../../global.scss';
import '../home.scss';

const ArticlePreview = props => {
    return(
        <a href={props.link}>
            <div className="article-preview-section">
                <h3 className="article-preview-h3">{props.title}</h3>
                <p className="article-preview-p">{props.text}</p>
            </div>
        </a>
    )
}

export default ArticlePreview;