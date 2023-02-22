import multi from '../assets/images/multi-language-website.jpg';
import newsletter from '../assets/images/newsletter-form.png';
import login from '../assets/images/login-counter.png';
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
    features: `<ul>
    <li>Website using html and css only</li>
    <li>Responsive web design</li></ul>`,
    link: 'https://newsletter-form-vm.netlify.app/',
    image: newsletter
  },
  {
    id: 3,
    title: 'Login Form with Modal',
    description: 'This is a simple HTML login form',
    features: `<ul>
    <li>Website using html, css, and vanilla JS only</li>
    <li>HTML Video background</li>
    <li>Responsive web design</li>
    <li>Google Fonts</li>
    <li>FontAwesome Icon</li>
    <li>Animated Modal</li>
    </ul>`,
    link: 'https://login-countdown-vm.netlify.app/',
    image: login
  }
];
