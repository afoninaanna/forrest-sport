import React, { useState } from 'react'
import './style.css';
import './normalize.css';
import axios from 'axios';

const AddArticle = ({articles, setArticles}) => {
    const [checkedValues, setValue] = useState([]);
    const [inputs, setInputs] = useState({  
        title: "", 
        image: "", 
        annotation: "",
        content: "",
        category: "",
        author: ""
    });
    async function handleBtn(e) {
        e.preventDefault();
        const responce = await axios.post("https://localhost:7023/api/article", {
            ...inputs, tags: checkedValues.join(", ")
        });
        if (responce.status == 200) {
            alert('Статья добавлена!');
        }
        setArticles([...articles, { ...inputs, tags: checkedValues.join(", ") }]);
    }
    function handleChange(e) {
        const { value, checked } = e.target;
        if (checked) {
            setValue(pre => [...pre, value]);
        } else {
            setValue(pre => {
                return [...pre.filter(checkbox => checkbox !== value)]
            });
        }
    }
    return (
        <div className="container">
            <h1>Форма для загрузки статьи</h1>

            <form action="" className="form" id="add-form">
                <div className="input-box">
                    Название статьи
                    <input value={inputs.ArticleTitle} onChange={e => setInputs({...inputs, title: e.target.value})} data-required="true" data-min-length="10" data-max-length="20" className="input-field" placeholder="Введите название статьи" />
                </div>
                <div className="input-box">
                    Ссылка на картинку
                    <input value={inputs.ArticleImage} onChange={e => setInputs({...inputs, image: e.target.value})} data-required="true" data-min-length="10" data-max-length="20" className="input-field" placeholder="Вставьте ссылку на картинку" />
                </div>
                <div className="input-box">
                    Аннотация статьи
                    <textarea value={inputs.ArticleAnnotation} onChange={e => setInputs({...inputs, annotation: e.target.value})} className="input-field" placeholder='Введите аннотацию статьи'></textarea>
                </div>
                <div className="input-box" value={inputs.ArticleContent} onChange={e => setInputs({...inputs, content: e.target.value})}>
                    Текст статьи
                    <textarea className="input-field" placeholder='Введите текст статьи'></textarea>
                </div>
                <div className="input-field">
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
                    <br/>
                    <label>
                        <input type="checkbox" onChange={handleChange} name="typeTags" value="Вдохновение" />
                        Вдохновение
                    </label>
                </div>
                <div className="input-box">
                    Выберите категорию статьи
                    <select value={inputs.ArticleCategory} onChange={e => setInputs({...inputs, category: e.target.value})} name="user_profile_color_1" className="input-field" id="category">
                        <option value=""></option>
                        <option value="health">Здоровье</option>
                        <option value="motivation">Мотивация</option>
                        <option value="exercises">Упражнения</option>
                    </select>
                </div>
                <div className="input-box">
                    Автор статьи (от 3 до 20 символов)
                    <input value={inputs.ArticleAuthor} onChange={e => setInputs({...inputs, author: e.target.value})} data-required="true" data-min-length="3" data-max-length="20" type="text" className="input-field" placeholder="Имя" />
                </div>
                <button type="submit" className="send-btn" onClick={handleBtn}>Отправить</button>
            </form>
        </div>
    )
}

export default AddArticle