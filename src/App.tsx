import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import SideBar from '@/components/shared/sidebar';
import CharactersList from '@/pages/CharactersList';
import CharacterInfo from '@/pages/CharacterInfo';
import Favorites from '@/pages/Favorites';
import Auth from '@/pages/Auth';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <BrowserRouter>
        <div className="flex">
          {isAuthenticated && <SideBar />}
          <div className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated ? <Navigate to="/character-list" /> : <Navigate to="/auth" />
                }
              />
              <Route
                path="/auth"
                element={
                  isAuthenticated ? (
                    <Navigate to="/character-list" /> // Redirect if already authenticated
                  ) : (
                    <Auth
                      onLoginSuccess={(response) => {
                        console.log('Login Success:', response);
                        setIsAuthenticated(true); // Navigate to /character-list after login
                      }}
                      onLoginFailure={(error) => {
                        console.error('Login Failed:', error);
                      }}
                    />
                  )
                }
              />
              <Route
                path="/character-list"
                element={isAuthenticated ? <CharactersList /> : <Navigate to="/auth" />}
              />
              <Route
                path="/character-info"
                element={isAuthenticated ? <CharacterInfo /> : <Navigate to="/auth" />}
              />
              <Route
                path="/favorites"
                element={isAuthenticated ? <Favorites /> : <Navigate to="/auth" />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
