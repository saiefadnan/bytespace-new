import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { LoginPage, SignupPage } from './pages/auth';
import { NotFoundPage } from './pages/notfound';
import { SearchPage } from './pages/search';
import { ScrollToTop } from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
