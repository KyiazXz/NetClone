
import Header from './component/header/Header'
import Home from './component/header/pages/home/Home'
import MovieList from './component/movieList/MovieList'
import MovieContainer from './component/header/pages/movieContainer/MovieContainer'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import WishList from './component/wishList/WishList'
import Demo from './component/header/pages/demoContainer/Demo'
import Loading from './component/loading/Loading'
import { useState } from 'react'


function App() {
const [loading, setLoading] = useState (true)

setTimeout(()=>{
  setLoading(false)
},3000)

if (loading){
  return(
    <div className="App"> 
      <Loading/>
    </div>
  )
}
  return (
    <div >
        <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<MovieContainer />} ></Route>
          <Route path='movies/:type' element={< MovieList />}></Route>
          <Route path='/*' element={<h1>erros page</h1>} ></Route>
          <Route path='/wish_list' element={<WishList/>}></Route>
          <Route path='movies/:type/movie/:id' element={<Demo />}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
