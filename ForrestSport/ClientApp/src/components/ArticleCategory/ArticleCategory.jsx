import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles.css';
import axios from 'axios';

const ArticleCategory = ({article}) => {
    
    return (
        <div className='ar-cat'>
            <img style={{ "marginBottom": 10 }} src={article.image.startsWith("https")? article.image : `images/${article.image}`} alt="завтрак" />
            <h2 style={{ "marginBottom": 10 }}><NavLink to={'/article'} state={{ article: article }}>{article.title}</NavLink></h2>

            <div style={{ "marginBottom": 10 }}>
                {article.tags.split(', ').map(tag => <span>{tag}</span>)}
            </div>

            <p className='text-article'>{article.annotation}</p>
            {/* <button onClick={handleBtn}>Удалить</button> */}
        </div>
    )
}

export default ArticleCategory