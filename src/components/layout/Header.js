import React from 'react';
import classNames from 'classnames/bind';
import { menuItems, supportItems } from '../../constants/index.js';

import { PaperPlaneIcon, EnvelopeClosedIcon, BackpackIcon, FileTextIcon } from '@radix-ui/react-icons';
import styles from './Header.module.scss';

const Icons = {
  PaperPlaneIcon,
  EnvelopeClosedIcon,
  BackpackIcon,
  FileTextIcon,
};

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('container')}>
      <div className={cx('containerFluid')}>
        <div className={cx('brand')}>
          <img
            className={cx('logo')}
            src="https://super.kakao.gg/_next/image?url=%2Fassets%2Fimages%2Fkakao-logo.webp&w=48&q=75"
            alt="Logo"
          />
          <span className={cx('name')}>CHATTING</span>
        </div>

        <div className={cx('menu')}>
          <div className={cx('list')}>
            {menuItems.map((item, index) => (
              <div className={cx(item.style)} key={index}>
                {React.createElement(Icons[item.icon])}
                {item.name}
              </div>
            ))}
          </div>

          <div className={cx('support')}>
            {supportItems.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
