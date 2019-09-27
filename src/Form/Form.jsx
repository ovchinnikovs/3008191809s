import React, { useState, useEffect } from 'react';
import '../App/App.css';
import './Form.css';
import './Form-media.css';

import CommentsList from '../CommentsList/index';


export default function Form() {
    const [value, setValue] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const [commentId, setCommentId] = useState(0);

    const dateTime = new Intl.DateTimeFormat('ru',
        {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }
    ).format(new Date()).split(',');;


    const handleChangeValue = ({ target }) => {
        setValue(target.value);
    }

    function keyDownHandler(event) {
        if (event.key === "Enter" && event.ctrlKey && event.target.tagName === 'TEXTAREA') {
            handleChange();
        }
    }

    function handleChange() {
        if (value.trim() !== '') {
            setCommentsList([...commentsList, 
                {
                    value: value,
                    id: commentId,
                    name: 'Лилия',
                    date: dateTime[0],
                    time: dateTime[1]
                }
            ]);
            setValue('');
            setCommentId(commentId + 1);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);
        return () => { document.removeEventListener('keydown', keyDownHandler); }
    });

    return (
        <>
            <CommentsList commentsList={commentsList} />

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
