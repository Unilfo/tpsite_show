import React from 'react'
import './employer.scss'

const data = [
  {name:'Камо', family:'Абрамян', img:'e.jpg', key:1, position:'Генеральный директор'},
  {name:'Камо 2', family:'Абрамян 2', img:'e.jpg', key:2, position:'Генеральный директор 2'},
  {name:'Камо', family:'Абрамян', img:'e.jpg', key:1, position:'Генеральный директор'},
  {name:'Камо', family:'Абрамян', img:'e.jpg', key:1, position:'Генеральный директор'},
  {name:'Камо', family:'Абрамян', img:'e.jpg', key:1, position:'Генеральный директор'},
  {name:'Камо', family:'Абрамян', img:'e.jpg', key:1, position:'Генеральный директор'},
  {name:'Камо', family:'Абрамян', img:'e.jpg', key:1, position:'Генеральный директор'},
  ]

export default function Employer() {
    return (
      <div className='main'>
        <div className='exm'>
          <h1 className='main__title'>Руководство</h1>
        </div>
        <div className='directors-list'>
          {data.map(({name, family, img, key, position})  =>
              <a className="directors-list__item" id="bx_3218110189_791" href="#" key={key}>
                <span className="directors-list__picture">
                  <img className="directors-list__img" src={img} alt="" title={family}/>
                  </span><span className="directors-list__name">{family} {name}</span>
                <span className="directors-list__position">{position}</span>
              </a>
          )}
        </div>
      </div>
    )
}
