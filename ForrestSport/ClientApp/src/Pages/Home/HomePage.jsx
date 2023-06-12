import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import ArticleCategory from '../../components/ArticleCategory/ArticleCategory';
import './HomePage.css';

const HomePage = ({articles}) => {
    const [search, setSearch] = useState('');
    const [checkedValues, setValue] = useState([]);
    const [found, setFound] = useState([]);

    function searchArticles(e) {
        let result;
        e.preventDefault();
        if (checkedValues.length === 1) {
            result = articles.filter(article => {
                return (article.title.toLowerCase().includes(search.toLowerCase())) && (article.tags.split(", ").sort().includes(checkedValues[0]));
            })
        }
        if (checkedValues.length) {
            result = articles.filter(article => {
                return (article.title.toLowerCase().includes(search.toLowerCase())) && (JSON.stringify(article.tags.split(", ").sort()) == JSON.stringify(checkedValues.sort())); 
            })
        } else {
            result = articles.filter(article => {
                return (article.title.toLowerCase().includes(search.toLowerCase()));
            });
        }
        setFound(result);
    }
        
    function handleChange(e) {
        const {value, checked} = e.target;
        if(checked) {
            setValue(pre => [...pre, value]);
        } else {
            setValue(pre => {
                return [...pre.filter(checkbox => checkbox !== value)]
            });
        }
    }

    return (
        <div>
            <header>
                <h1 className='home-title'><span>ForrestSport</span> - Никогда не сдавайся!</h1>
                <p>Сайт про спорт, питание и здоровье.
                    Рецепты, мышечный атлас, истории успеха великих спорсменов, упражнения на разные группы мышц.
                </p>
            </header>
            <div className="wrap-content">
                <div className="content">
                    <form className="search-form">
                        <div className="wrapper-input">
                            <input type="text" className="search" value={search} onChange={e => setSearch(e.target.value)}/>
                            <div><button onClick={searchArticles}>Поиск</button></div>
                        </div>
                        <div className="checkboxes">
                            <label>
                                <input type="checkbox" onChange={handleChange} name="typeTags" value="Правильное питание" />
                                Правильное питание
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" onChange={handleChange} name="typeTags" value="Мышцы" />
                                Мышцы
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" onChange={handleChange} name="typeTags" value="Здоровье" />
                                Здоровье
                            </label>
                            <label>
                                <input type="checkbox" onChange={handleChange} name="typeTags" value="Вдохновение" />
                                Вдохновение
                            </label>
                        </div>
                    </form>
                    <div className="article">
                        <div className='container-article'>
                            {found.map(article => <ArticleCategory article={article} />)}
                        </div>
                    </div>
                    <div className="wrapper-articles">
                        <button>&#60;</button>
                        <section>
                            <img src="/images/health-1.jpg" alt="breakfast" />
                            <h2><NavLink to='/article' state={{ article: articles[0] }}>Секрет полноценного завтрака</NavLink></h2>
                            <p>Вкусный и полезный завтрак улучшает настроение, повышает работоспособность и позволяет в спокойной обстановке подготовиться к
                                предстоящему дню.</p>
                        </section>
                        <section>
                            <img src="/images/motivation-6.jpg" alt="bolt" />
                            <h2><NavLink to={'/article'} state={{ article: articles[17] }}>История Усэйна Болта</NavLink></h2>
                            <p>Как Усэйн Болт стал самым быстрым человеком в мире и за свою спортивную карьеру установил восемь мировых рекордов. </p>
                        </section>
                        {/* <section>
                                <img src="/images/press.jpg" alt="press"/>
                                <h2>Как накачать нижний пресс?</h2>
                                <p>Пресс представляет собой единую прямую мышцу живота, но существуют упражнения с акцентом на ее нижнюю часть, за что они и
                                получили такое название.</p>
                            </section> */}
                        <button>&#62;</button>
                    </div>
                </div>
            </div>
            <footer>
                <h3>ForrestSport 2022 &#169;</h3>
            </footer>
        </div>
    )
}

export default HomePage