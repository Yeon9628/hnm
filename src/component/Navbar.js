import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  let [width, setWidth] = useState(250);
  const navigate = useNavigate();
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = event.target.value
      navigate(`/?q=${keyword}`);
    }
  }
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
  
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className='login-button' onClick={authenticate == false ? () => navigate('/login') : () => setAuthenticate(false)}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate == false ? "로그인" : "로그아웃"}</div>
        </div>
      </div>
      <div className='nav-logo'>
        <Link to="/">
          <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' />
        </Link>
      </div>
      <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='제품검색' onKeyPress={search} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;