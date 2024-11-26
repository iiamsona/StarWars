import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from '@/components/shared/sidebar';
import CharactersList from '@/pages/CharactersList';
import CharacterInfo from '@/pages/CharacterInfo';
import Favorites from '@/pages/Favorites';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/character-list" element={<CharactersList />} />
            <Route path="/character-info" element={<CharacterInfo />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
