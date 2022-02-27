import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './MainPage/Components/Navbar';
import { About } from './MainPage/Pages/About';
import HomePage from './MainPage/Pages/HomePage';
import PlaceOne from './MainPage/assets/PlaceOne.jpg'
import PlaceTwo from './MainPage/assets/PlaceTwo.jpg'
import Chicken from './MainPage/assets/chicken.jpg'
import food1 from './MainPage/assets/food1.jpg'
import food3 from './MainPage/assets/food3.jpg'

import PlaceThree from './MainPage/assets/PlaceThree.jpg'
import SignIn from './MainPage/Pages/Sign-in'
import Profile from './MainPage/PoftFolioPage/Profile';

function App() {
  const data = [
    {
      src: food1,
      title: <h3><u>Delicious Dish</u></h3>
    },
    {
      src: PlaceTwo,
      title: <h3><u>Corn Pasta</u></h3>
    },
    {
      src: Chicken,
      title: <h3><u>Chicken</u></h3>
    },
    {
      src: food3,
      title: <h3><u>Crazy BottleGuard</u></h3>
    },
    {
      src: food1,
      title: <h3><u>Delicious Dish</u></h3>
    },
    {
      src: PlaceTwo,
      title: <h3><u>Corn Pasta</u></h3>
    },
    {
      src: Chicken,
      title: <h3><u>Chicken</u></h3>
    },
    {
      src: food3,
      title: <h3><u>Crazy BottleGuard</u></h3>
    }
  ]
  return (
    <>
      <Navigationbar />
      <SignIn />
      {/* <Profile/> */}
      <BrowserRouter>   
        <Routes>
          <Route path='/' element={<HomePage Images={{ PlaceOne, PlaceTwo, PlaceThree }} data={data} />} />
          {/*  <Route path='/signin' element={<SignIn/>} />  */}
          {/* <Route path='/signin' element={<SignIn value={{Show:true}}/>} /> */}
        </Routes>
      // </BrowserRouter> 

      {/* <SignIn /> */}
      {/* <About/> */}
      {/* <HomePage Images={{ PlaceOne, PlaceTwo, PlaceThree }} data={data} /> */}


    </>
  );
}

export default App;