import React from 'react';
import classNames from 'classnames/bind';
import { RiArrowRightCircleLine } from 'react-icons/ri';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = ({ menu }) => {
  return (
    <a href="/" className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('info')}>
          <div className={cx('title')}>{menu.title}</div>
          <div className={cx('description')}>{menu.description}</div>
        </div>
        <RiArrowRightCircleLine className={cx('icon')} />
      </div>
    </a>
  );
};

export default Menu;
