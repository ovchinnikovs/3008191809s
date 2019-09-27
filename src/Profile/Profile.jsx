
import React from 'react';
import './Profile.css';
import './Profile-media.css';

import photo from '../images/photo.jpg';

export default function Profile() {

  return (
    <>
      <section className="content-box">
        <div className="user-profile">
          <a href="#root" className="user-profile__photo-wrapper">
            <img className="user-profile__photo" src={photo} alt="No description" />
          </a>

          <div className="user-profile__data-wrapper">
            <div className="user-profile__data">
              <h2 className="user-profile__name">Вероника Ростова</h2>
              <span className="user-profile__specialty">Менеджер по продажам</span>
              <div className="user-profile__inner">
                <div className="user-profile__subtitle">Подберу для вас самые лучшие предложения. Мои услуги абсолютно</div>
              </div>
            </div>
          </div>

          <div className="user-profile__subtitle-mobile">
            <div className="user-profile__text">Подберу для вас самые лучшие предложения. Мои услуги абсолютно</div>
          </div>
        </div>

        <div className="services">
          <span className="services__info">Услуг</span>

          <div className="services__rating rating">
            <div className="rating__item before_light-green">
              <div className="service">Ручное бронирование</div>
              <div className="counter">11</div>
            </div>

            <div className="rating__item before_blue">
              <div className="service">Пакетные туры</div>
              <div className="counter">3</div>
            </div>
            
            <div className="rating__item before_blue">
              <div className="service">Отели</div>
              <div className="counter">1</div>
            </div>
          </div>

          <div className="services__total-amount">
            <div className="all">Всего</div>
            <div className="counter">15</div>
          </div>
        </div>
      </section>
    </>
  )
}
