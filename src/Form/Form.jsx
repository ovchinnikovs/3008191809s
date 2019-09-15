import React, { useState, useEffect } from 'react';
import '../App.css';
import './Form.css';
import './Form-media.css';

import Comments from '../Comments/index';


export default function Form() {
    const [value, setValue] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const [commentId, setCommentId] = useState(0);

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes().toString();


    const handleChangeValue = ({ target }) => {
        setValue(target.value);
    }

    function keyDownHandler(event) {
        if (event.key === "Enter" && event.ctrlKey && value.trim() !== '') {
            handleChange();
        }
        return
    }

    function handleChange() {
        if (value.trim() !== '') {
            setCommentsList([...commentsList, 
                {
                    value: value,
                    id: commentId,
                    name: 'Лилия',
                    date: `${day} ${month} ${year}`,
                    time: `${hour}:${minute.length === 1 ? '0' + minute : minute}`
                }
            ]);
            setValue('');
            setCommentId(commentId + 1);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);
        return () => {document.removeEventListener('keydown', keyDownHandler);}
    });
    
    return (
        <>
            <Comments commentsList={commentsList} />

            <section className="form-box">
                <form action="#" className="form">
                    <textarea className="message" value={value} onKeyPress={(e) => keyDownHandler(e)} onChange={(e) => handleChangeValue(e)}></textarea>

                    <button className="btn" type="button" onClick={() => handleChange()} disabled={!value} >
                        Написать консультанту
                    </button>
                </form>
            </section>
        </>
    )
}
