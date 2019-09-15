import React from 'react';
import './Comments.css';
import './Comments-media.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Comments( {commentsList} ) {

  const newCommentsList = commentsList.filter((_item, index) => index >= commentsList.length - 3);

  return (
    <>
      <section className="comment-box">
        <div className="reviews">
          <div className="reviews__item">
            <h3>Последние отзывы</h3>
            <a className="all-reviews" href="javascript:void(0)">Все отзывы</a>
          </div>

          <div className="reviews__item">
            <FontAwesomeIcon className="icon-comment" icon={faHeart} size="sm" />
            <span>131</span>

            <FontAwesomeIcon className="icon-comment" icon={faCommentAlt} size="sm" />
            <span>{commentsList.length}</span>
          </div>
        </div>

        {
          commentsList.length === 0 
          ? <div className="no-comments">
            Оставьте комментарий
          </div> 
          : <div className="list">
          {
            newCommentsList.map((item, index) =>
              <div key={index} className="list__item">
                <div className="user">
                  <strong>{item.name}</strong>
        
                  <div className="comment-info">
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                  </div>
                </div>
        
                <div className="comment">
                  {item.value}
                  <span className="triangle"></span>
                </div>
              </div>
            )
          }
        </div>
      }
      </section>
    </>
  )
}
