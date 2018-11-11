import React from 'react'
import ArticlePreview from '../homepage/subcomponents/ArticlePreview';
import './articles.scss';

class Articles extends React.Component {
    constructor(){
        super();
        this.state = {
            featuredArticles: [
                {
                    title: "Getting Started with VueJS",
                    preview: "Developers love VueJS. Click here to read how simple it is to get started and find out why this framework is so hyped."
                },
                {
                    title: "Lessons from Working with Sentry",
                    preview: "Troubleshooting console errors that you are unable to replicate seems insurmountable. Click here to read my personal tips to help get you started."
                },
                {
                    title: "Webpack's SplitChunksPlugin: Basic Setup",
                    preview: "Webpack's splitChunksPlugin does wonders for your JavaScript's performance. The best part is that setting up splitChunksPlugin is not at all difficult. Click here for a quick guide on getting started."
                }
            ]
        }
    }
    render() {
        return(
            <div className="articles-page-main-wrap">
                <h1 className="article-main-heading">{"<Articles />"}</h1>
                <div className="article-preview-wrap">
                    {this.state.featuredArticles.map((x,i) => {
                        return( 
                            <ArticlePreview title={x.title} text={x.preview} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Articles;