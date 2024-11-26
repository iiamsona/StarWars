import { useNavigate } from 'react-router';
import { Button } from '../ui/button';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-[15vw] min-w-56 flex-col items-center bg-primary bg-cover bg-center">
      <Button
        variant="primaryStarwaryellow"
        size="md"
        className="mb-4 mt-16"
        onClick={() => navigate('/character-list')}
      >
        Characters List
      </Button>
      <Button
        variant="primaryStarwaryellow"
        size="md"
        className="my-4"
        onClick={() => navigate('/character-info')}
      >
        Character Info
      </Button>
      <Button
        variant="primaryStarwaryellow"
        size="md"
        className="my-4"
        onClick={() => navigate('/favorites')}
      >
        Favorites
      </Button>
    </div>
  );
};

export default SideBar;
