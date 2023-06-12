import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import ArticleCategoryPage from './Pages/ArticleCategory/ArticleCategoryPage';
import Navbar from './components/Navbar/Navbar';
import Article from './Pages/Article/Article';
import AddArticle from './Pages/AddArticle/AddArticle';

function App() {
    const [articles, setArticles] = useState([]);
    async function fetchData() {
        await fetch("https://localhost:7023/api/article")
            .then(res => res.json())
            .then(
                (result) => {
                    setArticles(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }
    useEffect(() => {
        fetchData();
        console.log('data');
    }, []);
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage articles={articles} />} />
                <Route path='/health' element={<ArticleCategoryPage articles={articles} category={"health"} title={'Здоровье'} about={"Подборка статей, посвященных работе нашего организма."} />} />
                <Route path='/exercises' element={<ArticleCategoryPage articles={articles} category={"exercises"} title={'Упражнения'} about={"Подборка статей, посвященных упражнениям на различные группы мышц."} />} />
                <Route path='/motivation' element={<ArticleCategoryPage articles={articles} category={"motivation"} title={"Мотивация"} about={"Подборка статей, поднимающих мотивацию на достижение своей цели."} />} />
                <Route path='/article' element={<Article />} />
                <Route path='/addArticle' element={<AddArticle articles={articles} setArticles={setArticles} />} />
            </Routes>
        </>
    );
}
export default App;
