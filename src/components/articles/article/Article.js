import React from 'react'
import VueBasics from './articles-content/VueBasics';
import ScalableJavaScript from './articles-content/ScalableJavaScript';

class Article extends React.Component {
    selectArticle(){
        switch(this.props.match.params.article) {
            case 'vue-basics': 
                return <VueBasics />
            case 'scalable-frontend-javascript-frameworks': 
                return <ScalableJavaScript />
            default:
                return (<h1 className="article-not-found">Article Not Found</h1>)
        }
    }
    render() {
        
            return (
                <div className="article-outer">
                    <div className="article-main-wrap">
                        {this.selectArticle()}
                    </div>
                </div>
            )
    }
}

export default Article;