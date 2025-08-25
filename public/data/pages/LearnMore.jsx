import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import NaflowsButton from "../../../@components/button";

const ArticleDisplay = ({
    project,
    setDisplayLearnMore
}) => {
    const [
        article,
        setArticle
    ] = useState({});

    useEffect(() => {
        fetch("/public/data/articles.json").then((response) => {
            response.json().then((data) => {
                const articleData = data.find((article) => article.id.includes(project.displayLearnMore.id));
                setArticle(articleData);
            });
        })
    }, [])

    return (
        <div className="learn-more">
            <div className="learn-more-box">
                <div className="go-back">
                    <NaflowsButton
                        onUserClick={() => {
                            const learnMore = document.querySelector(".learn-more");
                            const learnMoreBox = document.querySelector(".learn-more-box");
                            learnMore.classList.add("animate-font-back");
                            learnMoreBox.classList.add("animate-learn-more-back");
                            setTimeout(() => {
                                learnMore.classList.remove("animate-font-back");
                                learnMoreBox.classList.remove("animate-learn-more-back");
                                setDisplayLearnMore(null);
                            }, 500);
                        }}
                        content={["Go back"]}
                        type="primary"
                    />
                </div>
                <div className="learn-more-box-header">
                    <div className="learn-more-box-image">
                        <img src={
                            project.displayLearnMore.svg
                        } />
                    </div>
                    <div className="learn-more-box-title">
                        {project.displayLearnMore.name}
                    </div>
                    <div className="learn-more-box-date">
                        {project.displayLearnMore.date}
                    </div>
                    {
                        project.contributors && (
                            <div className="learn-more-box-contributors">
                                Special thanks to {project.displayLearnMore.contributors.join(", ")}
                            </div>
                        )
                    }
                </div>
                <div className="learn-box-content">
                    {
                        article && article.titles && article.titles.map((title, index) => {
                            const paragraphs = article.paragraphs[`${title.id}`];
                            return (
                                <div key={
                                    index
                                } className="learn-box-paragraph">
                                    <div className="learn-box-paragraph-title">
                                        {title.name}
                                    </div>
                                    <div className="learn-box-paragraphs">
                                        {
                                            paragraphs.map((paragraph, index) => (
                                                <div key={index} className="learn-box-paragraph">
                                                    {paragraph}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

ArticleDisplay.propTypes = {
    project: PropTypes.object.isRequired,
    setDisplayLearnMore: PropTypes.func.isRequired
}

export default ArticleDisplay;