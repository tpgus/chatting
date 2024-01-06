import { PaperPlaneIcon, EnvelopeClosedIcon, BackpackIcon, FileTextIcon } from '@radix-ui/react-icons';

export const menuItems = [
  { name: '시작하기', icon: <PaperPlaneIcon />, style: 'start' },
  { name: '등록하기', icon: <EnvelopeClosedIcon />, style: 'register' },
  { name: '관리하기', icon: <BackpackIcon />, style: 'control' },
  { name: '커뮤니티', icon: <FileTextIcon />, style: 'community' },
];

export const supportItems = ['FAQ', '개인 정보 처리 방침'];
