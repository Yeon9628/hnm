import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  }
  const logout = () => {
    setAuthenticate(false);
    navigate('/');
  }
  const goToHome = () => {
    navigate('/');
  }
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
      <div className='login-button' onClick={authenticate == false ? goToLogin : logout}>
        <FontAwesomeIcon icon={faUser} />
        <div>{authenticate == false ? "로그인" : "로그아웃"}</div>
      </div>
      <div className='nav-section' onClick={goToHome}>
        <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' />
      </div>
      <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={search} />
        </div>
        {/* <a href="#" className='menu-toogleBtn'>
          <i icon={faBars}></i>
        </a> */}
      </div>
    </div>
  )
}

export default Navbar;