import React from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.scss';
import Menu from './Menu';

const cx = classNames.bind(styles);

const MENUS = [
  { title: '1:1 랜덤 채팅', description: '간단한 명령으로 랜덤한 상대와 1:1 채팅을 할 수 있습니다.', uri: '/' },
  { title: '방 채팅', description: '채팅방을 만들어서 여러 사람과 함께 채팅을 할 수 있습니다.', uri: '/' },
];

const Page = () => {
  return (
    <div className={cx('container')}>
      <main className={cx('main')}>
        {MENUS.map((menu, index) => (
          <Menu key={index} menu={menu} />
        ))}
      </main>
    </div>
  );
};

export default Page;
