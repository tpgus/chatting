import React from 'react';
import classNames from 'classnames/bind';
import { PaperPlaneIcon, EnvelopeClosedIcon, BackpackIcon, FileTextIcon } from '@radix-ui/react-icons';

import styles from './Header.module.scss';

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
            <div className={cx('start')}>
              <PaperPlaneIcon />
              시작하기
            </div>
            <div className={cx('register')}>
              <EnvelopeClosedIcon />
              등록하기
            </div>
            <div className={cx('control')}>
              <BackpackIcon />
              관리하기
            </div>
            <div className={cx('community')}>
              <FileTextIcon />
              커뮤니티
            </div>
          </div>

          <div className={cx('support')}>
            <div>FAQ</div>
            <div>개인 정보 처리 방침</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
