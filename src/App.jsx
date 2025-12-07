import { useLocation } from 'react-router-dom';
import Index from '../src/AdminLayout'
import AuthLayout from './layout/auth/AuthLayout';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {
        location.pathname.includes('/auth') ? (
          <AuthLayout />
        ) : (
          <Index />
        )
      }
    </div>
  );
}

export default App;
