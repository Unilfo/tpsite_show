import React              from 'react'
import './sidebar.scss'
import Swiper from '../carousel/Swiper'


// title не длиннее 3 строк
const news = [
  { title:'Тут мы сделали нереальный проект',
    key:1,
    img:'i.jpg',
    section : 'Достижения'
  },
  { title:'Директор предприятия рассказал на конференции',
    key: 2,
    img:'3.jpg',
    section : 'Мероприятия'},
  { title:'Сотрудник дочернего предприятия КРЭТ награжден Губернатором Рязанской области',
    key: 3,
    img:'q.jpg',
    section : 'Достижения'},
  { title:'Тут мы сделали нереальный проект',
    key:4,
    img:'w.jpg',
    section : 'Достижения'},
  { title:'Директор предприятия рассказал на конференции',
    key: 5,
    img:'111.jpg',
    section : 'Достижения'},
  { title:'Сотрудник дочернего предприятия КРЭТ награжден Губернатором Рязанской области',
    key: 6,
    img:'3.jpg',
    section : 'Достижения'},
  { title:'Тут мы сделали нереальный проект',
    key:7,
    img:'1.jpg',
    section : 'Достижения'},
  { title:'Директор предприятия рассказал на конференции',
    key: 8,
    img:'111.jpg',
    section : 'Достижения'},
  { title:'Сотрудник дочернего предприятия КРЭТ награжден Губернатором Рязанской области',
    key: 9,
    img:'3.jpg',
    section : 'Достижения'},
]

const NewsList = (data) => {
  const listItems = data.news.map(({title, key, img, section}) =>
    <li
      className='sidebar__list__item' key={key}>
      <a href={'https://unilfo.github.io/tpsite_show/news/'${key}} className='main__inner'>
        <div className='overlay'>
          <span className="main-news__section">/ {section}</span>
          <div className='text'>{title}</div>
          <span className='image'
                style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('${img}')`,
                backgroundSize: 'cover'
                }}>
          </span>
        </div>
      </a>
    </li>
  )

  return (
    <ul className='sidebar__list'>
      {listItems}
    </ul>
  )
}

export default function Sidebar() {
  return(
    <div className='sidebar'>
      <div className='sidebar__news'>
        <NewsList news = {news} />
      </div>
      <div className='sidebar__corousel'>
        <Swiper/>
      </div>
    </div>
  )
}
