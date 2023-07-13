import './App.css';
import Banner from './components/Banner';
import Favorites from './components/Favorites';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Profile />
      <Banner />
      <Favorites />
      <NavBar />
    </>
  );
}

export default App;
