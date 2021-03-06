import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
        <div className='header'>
          <div className='header__rosteh'>
            <div className='header__logo'>
              <a href="https://rostec.ru">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.99 50" width="128" height="40">
                  <title>Ростех</title>
                  <path className="a" d="M68.86,22.54h-1.4l1.7-7.7h-1.9l-1.69,7.7h-1.4l2-8.94h4.69Z"></path>
                  <path className="a"
                        d="M72.52,22.7a1.76,1.76,0,0,1-1.42-.58,2.5,2.5,0,0,1-.49-1.67,6.67,6.67,0,0,1,.31-2,4.69,4.69,0,0,1,1-1.78,2.08,2.08,0,0,1,1.58-.76,1.75,1.75,0,0,1,1.42.58,2.43,2.43,0,0,1,.5,1.67,6.67,6.67,0,0,1-.31,2,4.69,4.69,0,0,1-1,1.78A2.08,2.08,0,0,1,72.52,22.7Zm.08-1.11c.32,0,.6-.22.85-.66A5,5,0,0,0,74,19.49a6.53,6.53,0,0,0,.17-1.34c0-.75-.24-1.13-.71-1.13s-.6.22-.85.67a4.73,4.73,0,0,0-.55,1.44,6,6,0,0,0-.17,1.35Q71.88,21.59,72.6,21.59Z"></path>
                  <path className="a"
                        d="M74.87,24.19l.56-2.6a2.19,2.19,0,0,0,.37-.11,1.31,1.31,0,0,0,.3-.23,1.54,1.54,0,0,0,.35-.56c.1-.25.2-.58.32-1l1-3.63h3.38L80,21.44h.67L80,24.19H78.75l.37-1.65H76.48l-.37,1.65Zm3.86-7L78,19.77a3.22,3.22,0,0,1-1,1.67H78.7l.94-4.27Z"></path>
                  <path className="a"
                        d="M82.76,25l.42-1a.43.43,0,0,0,.3.08c.22,0,.42-.18.59-.53l.42-.85-.19-6.61h1.3L85.49,21l2.1-4.88H89l-3.7,7.73a3.1,3.1,0,0,1-.76,1.07,1.4,1.4,0,0,1-.91.3A2.07,2.07,0,0,1,82.76,25Z"></path>
                  <path className="a" d="M92.3,22.54H91l1.18-5.37H90.69l-1.18,5.37H88.25l1.43-6.47h4Z"></path>
                  <path className="a"
                        d="M96.32,22.7a1.21,1.21,0,0,1-1.23-1L94.35,25H93.11l2-8.94h1.26l-.19.8a1.68,1.68,0,0,1,1.36-1,1.15,1.15,0,0,1,1,.51,2.64,2.64,0,0,1,.35,1.49,7.21,7.21,0,0,1-.16,1.45,9.6,9.6,0,0,1-.46,1.56,3.56,3.56,0,0,1-.81,1.27A1.57,1.57,0,0,1,96.32,22.7Zm-.25-1.11c.31,0,.59-.23.83-.69a5.38,5.38,0,0,0,.53-1.47,7.5,7.5,0,0,0,.15-1.38c0-.68-.23-1-.68-1a.8.8,0,0,0-.53.26,2.3,2.3,0,0,0-.45.64l-.62,2.76a1.23,1.23,0,0,0,.26.65A.64.64,0,0,0,96.07,21.59Z"></path>
                  <path className="a"
                        d="M101.94,15.91a1.19,1.19,0,0,1,1.23,1l.2-.87h1.25l-1.44,6.47h-1.26l.19-.8a1.68,1.68,0,0,1-1.37,1,1.15,1.15,0,0,1-1-.51,2.53,2.53,0,0,1-.35-1.48,7.22,7.22,0,0,1,.16-1.46,9.6,9.6,0,0,1,.46-1.56,3.65,3.65,0,0,1,.81-1.27A1.57,1.57,0,0,1,101.94,15.91ZM102.2,17q-.47,0-.84.69a5,5,0,0,0-.53,1.48,7.4,7.4,0,0,0-.15,1.37c0,.69.22,1,.68,1a.8.8,0,0,0,.53-.26,2.16,2.16,0,0,0,.45-.64l.62-2.76a1.26,1.26,0,0,0-.26-.65A.64.64,0,0,0,102.2,17Z"></path>
                  <path className="a"
                        d="M107.06,22.54h-2.54l1.42-6.47h2a2.11,2.11,0,0,1,1.28.35,1.16,1.16,0,0,1,.47,1,1.94,1.94,0,0,1-.35,1.17,1.84,1.84,0,0,1-1.11.7,1.15,1.15,0,0,1,.91,1.14,2.14,2.14,0,0,1-.51,1.5A1.92,1.92,0,0,1,107.06,22.54Zm-1.06-1h.79a1,1,0,0,0,.79-.35,1.11,1.11,0,0,0,.27-.76c0-.47-.28-.7-.81-.7h-.64Zm.61-2.82h.73a.85.85,0,0,0,.72-.32,1.07,1.07,0,0,0,.26-.67c0-.44-.26-.65-.77-.65H107Z"></path>
                  <path className="a"
                        d="M109.43,22.7l.24-1.11a.89.89,0,0,0,.73-.35A4.76,4.76,0,0,0,111,19.7l1-3.63h3.38L114,22.54H112.7l1.18-5.37H113l-.71,2.6a4.87,4.87,0,0,1-1.14,2.32A2.41,2.41,0,0,1,109.43,22.7Z"></path>
                  <path className="a"
                        d="M117.68,22.7a1.94,1.94,0,0,1-1.52-.6,2.52,2.52,0,0,1-.54-1.74,5.65,5.65,0,0,1,.1-1,6.89,6.89,0,0,1,.33-1.17,5.78,5.78,0,0,1,.57-1.11,2.82,2.82,0,0,1,.82-.83,2,2,0,0,1,1.07-.32c1.24,0,1.85.71,1.85,2.12a7.24,7.24,0,0,1-.25,1.69h-3.23a2.52,2.52,0,0,0-.08.71,1.51,1.51,0,0,0,.26.89,1,1,0,0,0,.84.35A1.52,1.52,0,0,0,119,21l.48.78A2.37,2.37,0,0,1,117.68,22.7Zm-.63-3.88h2a3.49,3.49,0,0,0,.11-.81,1.32,1.32,0,0,0-.21-.77.67.67,0,0,0-.58-.3,1,1,0,0,0-.9.58A3.74,3.74,0,0,0,117.05,18.82Z"></path>
                  <path className="a"
                        d="M121.8,22.54h-1.26L122,16.07h1.26l-.57,2.55h1.53l.56-2.55H126l-1.42,6.47h-1.26l.62-2.82h-1.53Z"></path>
                  <path className="a"
                        d="M127.17,22.54h-1.25l1.42-6.47h1.26l-.83,3.78,2.29-3.78h1.33L130,22.54h-1.26l.86-3.91Z"></path>
                  <path className="a"
                        d="M133.7,22.7a1.93,1.93,0,0,1-1.52-.6,2.47,2.47,0,0,1-.55-1.74,6.73,6.73,0,0,1,.1-1,6.13,6.13,0,0,1,.34-1.17,5.24,5.24,0,0,1,.56-1.11,2.82,2.82,0,0,1,.82-.83,2,2,0,0,1,1.08-.32c1.23,0,1.85.71,1.85,2.12a7.34,7.34,0,0,1-.26,1.69h-3.23a3,3,0,0,0-.08.71,1.51,1.51,0,0,0,.26.89,1,1,0,0,0,.84.35,1.52,1.52,0,0,0,1.14-.63l.48.78A2.37,2.37,0,0,1,133.7,22.7Zm-.63-3.88h2.05a3.44,3.44,0,0,0,.1-.81,1.4,1.4,0,0,0-.2-.77.68.68,0,0,0-.59-.3,1.06,1.06,0,0,0-.9.58A3.73,3.73,0,0,0,133.07,18.82Z"></path>
                  <path className="a"
                        d="M142,22.54H140.8l.86-3.94-2.11,3.94H139l-.36-3.94-.86,3.94h-1.26L138,16.07h1.52l.36,3.63,2-3.63h1.62Z"></path>
                  <polygon className="a"
                           points="43.35 23.32 43.35 6.51 26.64 6.51 33.14 0 49.91 0 49.91 8.19 49.91 16.77 43.35 23.32"></polygon>
                  <polygon className="a"
                           points="49.91 49.91 33.14 49.91 26.63 43.4 43.35 43.4 43.35 26.61 49.91 33.17 49.91 49.91"></polygon>
                  <polygon className="a" points="0 16.77 0 8.19 0 0 16.77 0 23.27 6.51 6.56 6.51 6.56 23.32 0 16.77"></polygon>
                  <polygon className="a" points="0 33.17 6.56 26.61 6.56 43.4 23.27 43.4 16.76 49.91 0 49.91 0 33.17"></polygon>
                  <path className="a"
                        d="M76,36a2.7,2.7,0,0,0-3-2.71H68.45v5.43H73A2.71,2.71,0,0,0,76,36M64.17,49.64V29.53h9.41c4.37,0,6.74,3,6.74,6.48s-2.4,6.48-6.74,6.48H68.45v7.15Z"></path>
                  <path className="a"
                        d="M93.37,42.35c0-2.27-1.36-4.22-3.73-4.22s-3.71,1.95-3.71,4.22,1.32,4.24,3.71,4.24,3.73-2,3.73-4.24M82,42.35a7.7,7.7,0,0,1,15.4,0,7.7,7.7,0,0,1-15.4,0"></path>
                  <path className="a"
                        d="M99.85,42.35a7.38,7.38,0,0,1,7.71-7.63,6.77,6.77,0,0,1,5.76,2.62l-2.5,2.35a3.54,3.54,0,0,0-3.08-1.56,3.89,3.89,0,0,0-3.94,4.22,3.91,3.91,0,0,0,3.94,4.24A3.68,3.68,0,0,0,110.82,45l2.5,2.31A6.71,6.71,0,0,1,107.56,50a7.38,7.38,0,0,1-7.71-7.65"></path>
                  <polygon className="a"
                           points="119.71 49.64 119.71 38.43 115.64 38.43 115.64 35.07 127.63 35.07 127.63 38.43 123.56 38.43 123.56 49.64 119.71 49.64"></polygon>
                  <path className="a"
                        d="M136.64,37.76A3.52,3.52,0,0,0,133.05,41h7.18a3.38,3.38,0,0,0-3.59-3.23m-7.53,4.59a7.4,7.4,0,0,1,7.53-7.62c4.34,0,7.3,3.25,7.3,8v.84H133.12A3.92,3.92,0,0,0,137.31,47a6.21,6.21,0,0,0,3.88-1.45L142.88,48a9.05,9.05,0,0,1-6,2c-4.43,0-7.77-3-7.77-7.65"></path>
                  <polygon className="a"
                           points="155.72 49.64 152.4 44.73 149.06 49.64 144.81 49.64 149.96 42.16 145.11 35.07 149.39 35.07 152.4 39.57 155.39 35.07 159.66 35.07 154.78 42.16 159.99 49.64 155.72 49.64"></polygon>
                </svg>
              </a>
            </div>
          </div>
          <div className='navbara'>
            <a className='navbara__logo' href='https://unilfo.github.io/tpsite_show/'><img src="222.jpg" alt=""/></a>
            <div className='navbar__link'>
              <Link to='/tpsite_show/about' className='navbar__link__item'>О НАС</Link>
              <Link to='/tpsite_show/production' className='navbar__link__item'>ПРОДУКЦИЯ</Link>
              <Link to='/tpsite_show/' className='navbar__link__item'>НОВОСТИ</Link>
              <Link to='/tpsite_show/cooperation' className='navbar__link__item'>СОТРУДНИЧЕСТВО</Link>
              <Link to='/tpsite_show/contacts' className='navbar__link__item'>КОНТАКТЫ</Link>
            </div>
          </div>
        </div>
  )
}
