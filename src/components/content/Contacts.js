import React from "react";
import {Map, Placemark, YMaps} from 'react-yandex-maps'
import './contacts.scss'


function Contacts() {
  return (
    <div className='contacts'>
      <div className='contacts__data'>
        <h1>Контакты</h1>
        <h2>ПАО "Техприбор"</h2>
        <h2>196128, Россия,<br/> Санкт-Петербург,<br/> Варшавская ул., 5А</h2>
        <h2>+7 812 648-84-76</h2>
        <h2>
            <a className="footer__link" href="mailto:info@techpribor.ru">info@techpribor.ru</a>
        </h2>
      </div>
      <YMaps>
        <Map width={window.innerWidth} height={window.innerHeight} defaultState={{ center: [59.880062, 30.307846], zoom: 16 }}>
          <Placemark geometry={[59.880062, 30.307846]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default Contacts;
