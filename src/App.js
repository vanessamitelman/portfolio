import { Menu, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppWrapper } from './assets/wrappers/AppWrapper';
import { Home, Projects, Education, About, Resume, Error } from './pages';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/education' element={<Education />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
