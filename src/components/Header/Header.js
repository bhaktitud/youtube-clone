import { Avatar } from '@material-ui/core'
import { Apps, Menu, Notifications, Search, VideoCall } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
                <Menu />
                <Link to='/'>
                    <img 
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                        alt=''
                    />
                </Link>
            </div>
            <div className="header__center">
                <input type="text" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} />
                <Link to={`/search/${inputSearch}`}>
                    <Search className='header__searchbutton' />
                </Link>
            </div>
            <div className="header__right">
                <VideoCall className='header__icon' />
                <Apps className='header__icon' />
                <Notifications className='header__icon' />
                <Avatar 
                    alt='Bhakti Budiman Novanda'
                    src='https://media-exp1.licdn.com/dms/image/C5603AQFMZJdbgdYAUg/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=OBGpDKwwTN3IFOwdWOT8X_QCbuRn0w6KMMVLTqett8U'
                />
            </div>

        </div>
    )
}

export default Header
