import React from 'react';
import { useLocation } from 'react-router-dom';
import s from './styles.module.css';

const Article = () => {
    const location = useLocation();
    const { state } = location;
    const article = state.article;
    return (
        <div className={s.container}> 
            <main className={s.article}>
                <div className={s.articleAbout}>
                    <h1>{article.title}</h1>
                    <img src={article.image.startsWith("https") ? article.image : `images/${article.image}`} alt=""/>
                        <p>
                           {article.annotation}
                        </p>
                </div>
                <div className={s.content}>
                    {article.content? article.content : ""}
                   
                    <span>&#169; {article.author}</span>
                </div>
            </main>
            <footer>
                <p>ForrestSport 2022 &#169;</p>
            </footer>
        </div>
    )
}

export default Article