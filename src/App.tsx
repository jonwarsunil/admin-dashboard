import { Suspense, lazy, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/layout/sidebar';
import { Navbar } from './components/layout/Navbar';
import Spinner from './components/Spinner';
import Settings from './pages/Setting';
import NotFoundPage from './pages/404';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
  };

  const SignIn = lazy(() => import('./pages/SignIn'));
  const DashboardPage = lazy(() => import('./features/dashboard/DashboardPage'));
  const Users = lazy(() => import('./pages/User'));
  const Reports = lazy(() => import('./features/reports/ReportsPage'));

  return (
    <div className='flex h-screen overflow-hidden'>
      {isAuthenticated && <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />}

      <div className='flex-1 flex flex-col overflow-hidden'>
        {isAuthenticated && <Navbar onLogout={handleLogout} onMenuToggle={() => setMobileMenuOpen(prev => !prev)} />}
        <main className='flex-1 overflow-auto'>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='*' element={<NotFoundPage />} />
              <Route
                path='/'
                element={isAuthenticated ? <Navigate to='/dashboard' replace /> : <Navigate to='/signin' replace />}
              />
              <Route
                path='/signin'
                element={
                  <SignIn
                    onSignIn={() => {
                      localStorage.setItem('isAuthenticated', 'true');
                      setIsAuthenticated(true);
                    }}
                  />
                }
              />
              <Route
                path='/dashboard'
                element={isAuthenticated ? <DashboardPage /> : <Navigate to='/signin' replace />}
              />
              <Route path='/users' element={isAuthenticated ? <Users /> : <Navigate to='/signin' replace />} />
              <Route path='/reports' element={isAuthenticated ? <Reports /> : <Navigate to='/signin' replace />} />
              <Route path='/settings' element={isAuthenticated ? <Settings /> : <Navigate to='/signin' replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
