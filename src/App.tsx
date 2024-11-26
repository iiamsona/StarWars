import AppProvider from './providers';
import AppRouter from './routes';
import 'pure-react-carousel/dist/react-carousel.es.css';

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
