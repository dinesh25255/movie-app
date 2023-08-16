import './App.css';
import { Route, Routes } from 'react-router';
import RootLayout from './components/RootLayout';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import MovieCollection from './pages/MovieCollection';
import TVCollection from './pages/TVCollection';
import { SearchMovie } from './pages/SearchMovie';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/movie/:categories' element={<MovieCollection />} />
          <Route path='/tv' element={<TVCollection />} />
          <Route path='/:type/detail/:id' element={<Detail />} />
          <Route path='/movie/search/:searchquery' element={<SearchMovie />} />
          <Route path='*' element={<PageNotFound />}></Route>
        </Route>
      </Routes >
    </>
  );
}

export default App;
