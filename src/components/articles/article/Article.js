import React from 'react'
import VueBasics from './articles-content/VueBasics';

class Article extends React.Component {
    
    render() {
        return (
            <div className="article-outer">
                <div className="article-main-wrap">
                    <VueBasics />
                </div>
            </div>
        )
    }
}

export default Article;