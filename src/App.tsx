import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context';
import { AppRoutes } from './routes';
import { ScrollToTop } from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
