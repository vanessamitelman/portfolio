import multi from '../assets/images/multi-language-website.jpg';
import newsletter from '../assets/images/newsletter-form.png';

export const projectList = [
  {
    id: 1,
    title: 'Multi-language website',
    description: 'This website displays breaking news',
    features: `<ul><li>Website using ReactJS</li>
    <li>Self created JSON server</li>
    <li>Multi-language support using i18n </li>
    <li>Backend translation resources</li>
    <li>Redux toolkit</li></ul>`,
    link: 'https://multilanguage-vm.netlify.app/',
    image: multi
  },
  {
    id: 2,
    title: 'Newsletter form',
    description: 'This is a simple newsletter form design',
    features: `<div>Website using html and css only</div>`,
    link: 'https://newsletter-form-vm.netlify.app/',
    image: newsletter
  }
];
