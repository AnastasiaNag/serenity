import { useState } from 'react';
import './Header.scss';
import React from 'react';
import Modal from '../Modal';

const Header = ({ scroll }: any) => {
  const MenuItemList = ['Were are we?'];
  const [open, setOpen] = useState<Boolean>(false);

  const onOpen = (): void => {
    setOpen(true);
  };
  const onClose = (): void => {
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo" onClick={() => scroll(0)}>
          <img className="header__logo" src={require('../../pages/Home/img/logo_bg.png')} alt="" />
        </div>
        <div className="header__menu">
          {MenuItemList.map((item) => {
            return (
              <button onClick={() => scroll(document.body.scrollHeight)} className="header__menu-btn h7">
                {item}
              </button>
            );
          })}
          <button className="btn btn__header h7" onClick={onOpen}>
            CONTACT
          </button>
          <Modal open={open} onClose={onClose} onOpen={onOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
