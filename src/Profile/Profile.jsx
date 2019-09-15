/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Profile.css';
import './Profile-media.css';
import '../App.css';

import photoWrapper from '../images/photo.jpg';

export default function Profile() {
  return (
    <>
      <section className="content-box">
        <div className="user-profile">
          <a href="#" className="photo-wrapper">
            <img className="photo-wrapper-image" src={photoWrapper} alt="image" />
          </a>

          <div className="profile-data">
            <h2 className="user-name">Вероника Ростова</h2>
            <span className="specialty">Менеджер по продажам</span>
            <div className="subtitle">
              <div>Подберу для вас самые лучшие предложения. Мои услуги абсолютно</div>
              </div>
            </div>

          <div className="subtitle-mobile">
            <div>Подберу для вас самые лучшие предложения. Мои услуги абсолютно</div>
          </div>
        </div>

        <div className="services">
          <span>Услуг</span>

          <div className="rating">
            <div className="rating__item rating__item_before_light_green">
              <div className="service">Ручное бронирование</div>
              <div className="counter">11</div>
            </div>

            <div className="rating__item rating__item_before_blue">
              <div className="service">Пакетные туры</div>
              <div className="counter">3</div>
            </div>
            
            <div className="rating__item rating__item_before_blue">
              <div className="service">Отели</div>
              <div className="counter">1</div>
            </div>
          </div>

          <div className="total-amount">
            <div className="total-amount__item">Всего</div>
            <div className="total-amount__item">15</div>
          </div>
        </div>
      </section>
    </>
  )
}
