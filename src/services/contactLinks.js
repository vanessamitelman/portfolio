import { TfiLinkedin } from 'react-icons/tfi';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export const contactLinks = [
  {
    id: 1,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vanessamitelman/',
    icon: <TfiLinkedin size='1.5em' />
  },
  {
    id: 2,
    title: 'Github',
    url: 'https://github.com/vanessamitelman',
    icon: <VscGithubAlt size='1.5em' />
  },
  {
    id: 3,
    title: 'Email',
    url: 'mailto:vanessamitelman@gmail.com?subject=portfolio website&body=Hi, I saw your portfolio website and would like to contact you.',
    icon: <AiOutlineMail size='1.5em' />
  },
  {
    id: 4,
    title: 'Whatsapp',
    url: 'https://wa.me/0544741589',
    icon: <AiOutlineWhatsApp size='1.5em' />
  }
];
