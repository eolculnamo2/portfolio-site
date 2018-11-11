import React from 'react';
import './home.scss';
import ArticlePreview from './subcomponents/ArticlePreview';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            skillSet: ["JavaScript", "React", "VueJS", "HTML", "CSS", "NodeJS", "MongoDB", "Webpack"],
            skillIndex: 0,
            fading: false,
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
        this.loopSkills();
    }
    loopSkills() {
        setInterval( () => {
           this.setState({fading: true, skillIndex: this.state.skillIndex < this.state.skillSet.length - 1 ? this.state.skillIndex + 1 : 0});
           setTimeout( () => this.setState({fading: false}), 1000);
        },2500)
    }
    render(){
        return (
            <div className="main-body-wrap">
                <div className="body-info-box-wrap">
                    <div className="body-info-box">
                        <h1 className="info-text">Rob Bertram</h1>
                        <h1 className="info-text">Front End Web Developer</h1>
                        <h1 className="info-text skills-box">
                            <span className={this.state.fading ? "fade-in" : ""}>{this.state.skillSet[this.state.skillIndex]}</span>
                        </h1>
                    </div>
                </div>
                <div className="empty-tags-display">
                    <h1 className="info-text">
                        {"< />"}
                    </h1>
                </div>
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

export default Home;