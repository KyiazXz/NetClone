import React from 'react'
import  {useParams} from 'react-router-dom'
import './movieList.css'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
import { debounce } from "lodash"
export default function MovieList() {
    const [movieList, setMovieList] = useState([])
    const [inputVal , setInputVal] = useState('')
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${ type ? type : "popular" }?api_key=9a54b73f6095f58685251414926caf35&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }


    
   const filteredData = movieList.filter((item)=>{
    if (inputVal === '') {return item
    }else if (item.original_title.toLowerCase().includes(inputVal.toLowerCase())){
        return item
    }
   }
   )



  return (
<div className="movie__list">
     <input className='inputHolder' placeholder='search here..'onChange={debounce((e)=>setInputVal(e.target.value),600)}/>
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    filteredData.map(movie => (<Card movie={movie} />))
                }
            </div>
        </div>
  )
}
