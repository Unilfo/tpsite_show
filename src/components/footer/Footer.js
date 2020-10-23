import React  from 'react'
import './footer.scss'
import {Link} from 'react-router-dom'


export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__inner'>
        <div className='footer__heading'>
          <Link to='/tpsite_show/procurement' className='top-menu__href_main'>Закупки</Link>
          <Link to='/tpsite_show/anticorruption' className='top-menu__href_main'>Противодействие коррупции</Link>
          <Link to='/tpsite_show/rent' className='top-menu__href_main'>Аренда помещений</Link>
        </div>
        <div className='footer__sections'>РАЗДЕЛЫ САЙТА</div>
        <div className='footer__nav'>
          <ul className='top-menu__ul_main'>
            <li className='top-menu__li_main'>
              <Link to='/tpsite_show/about' className='top-menu__href_main'>О НАС</Link>
              <ul className='top-menu__ul_inner'>
                {/*<li>*/}
                {/*  <Link to='/about' href="">О Техприбор</Link>*/}
                {/*</li>*/}
                <li>
                  <Link to='/tpsite_show/employer'>Руководство</Link>
                </li>
              </ul>
            </li>
            <li className='top-menu__li_main'>
              <Link to='/tpsite_show/production'className='top-menu__href_main'>Продкуция</Link>
              {/*<ul className='top-menu__ul_inner'>*/}
              {/*  <li>*/}
              {/*    <Link to='/about' href="">Гражданская</Link>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <Link to='/about' href="">Военная</Link>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </li>
            <li className='top-menu__li_main'>
              <Link to='/tpsite_show/' className='top-menu__href_main'>Новости</Link>
              {/*<ul className='top-menu__ul_inner'>*/}
              {/*  <li>*/}
              {/*    <Link to='/about'>Новости предприятия</Link>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </li>
            <li className='top-menu__li_main'>
              <Link to='/tpsite_show/cooperation'className='top-menu__href_main'>Сотрудничество</Link>
              {/*<ul className='top-menu__ul_inner'>*/}
              {/*  <li>*/}
              {/*    <Link to='/about'>Заказать</Link>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </li>
            <li className='top-menu__li_main'>
              <Link to='/tpsite_show/contacts' className='top-menu__href_main'>Контакты</Link>
              <ul className='top-menu__ul_inner'>
                <li>
                  <Link to='/tpsite_show/contacts'>196128, Россия, Санкт-Петербург, Варшавская ул., 5А</Link>
                </li>
                <li>
                  Пресс-служба:
                  <br/>
                  <a className="footer__link" href="mailto:info@techpribor.ru">info@techpribor.ru</a>
                  <br/>
                  +7 812 648-84-76
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <div className='footer__nav'>
          </div>
          <div className='footer__nav'>
          </div>
          <a href="https://rostec.ru/anticorruption/feedback/" className="footer__link footer__link_img">
            <img src="https://www.kret.com/local/templates/kret/img/hot-line.png" alt=""/>
          </a>
          <div className='copyright'>
            © ПАО «Техприбор». 2009-2020
            Все права на материалы, размещенные на настоящем сайте, защищены в соответствии с российским законодательством. Воспроизведение, распространение и иное использование информации, размещенной на данном сайте, или ее части допускается только с предварительного письменного согласия
            <br/>Политика обработки персональных данных
          </div>
        </div>
      </div>
    </div>
  )
}
