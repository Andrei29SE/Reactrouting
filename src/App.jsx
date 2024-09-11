import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import MainLiayout from './Layouts/MainLiayout';


function App() {
  return (
  <BrowserRouter>
  <div className="App">
  <Routes >
  <Route path="/" element={<MainLiayout/>}>
  {/* 1)index нужен когда нужно отобразить компоненет для какого-то пути(в данном случае path="/" для компонента Home)
  2) Все пути относительны родительского(влоэенные маршруты) (в данном случае path="/") */}
  <Route index element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="contacts" element={<Contacts/>}/>
  <Route path="*" element={<NotFound/>}/>
  </Route>
  </Routes>
  </div>
  </BrowserRouter>
     
  )
}

export default App;
