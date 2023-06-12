import ArticleCategory from '../../components/ArticleCategory/ArticleCategory';
import './styles.css';

const ArticleCategoryPage = ({articles, category, title, about}) => {
    return (
        <div>
            <header className='articleCategory-header'>
                <div>
                    <h1 className="health-title">{title}</h1>
                    <p>{about}</p>
                </div>
            </header>
            <div className="article">
                <div className='container-article'>
                    {articles.filter(article => article.category === category)
                             .map(article => <ArticleCategory article={article}/>)}
                </div>
            </div>
            <footer>
                <h3>ForrestSport 2022 &#169;</h3>
            </footer>
        </div>
    )
}

export default ArticleCategoryPage