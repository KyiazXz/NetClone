
import Header from './component/header/Header'
import Home from './component/header/pages/home/Home'
import MovieList from './component/movieList/MovieList'
import MovieContainer from './component/header/pages/movieContainer/MovieContainer'

import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<MovieContainer />} ></Route>
          <Route path='movies/:type' element={< MovieList />}></Route>
          <Route path='/*' element={<h1>erros page</h1>} ></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
