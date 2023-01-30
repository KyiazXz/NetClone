import React from 'react'
// import './movie.css'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'



export default function Demo() {
    const [currentMovieDetail ,  setMovie] =  useState ( [ ] )
    const  {id} = useParams ()

     const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9a54b73f6095f58685251414926caf35&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    useEffect(() => {
        getData()
    }, [])

   
    return (
        <div className="movie">
        <div className="movie__intro">
            <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
        </div>
        <div className="movie__detail">
            <div className="movie__detailLeft">
                <div className="movie__posterBox">
                    <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                </div>
            </div>
            <div className="movie__detailRight">
                <div className="movie__detailRightTop">
                    <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                    <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                    <div className="movie__rating">
                        {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                        <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                    </div>  
                    <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                    <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                            ? 
                            currentMovieDetail.genres.map(genre => (
                                <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                            )) 
                            : 
                            ""
                        }
                    </div>
                </div>
                <div className="movie__detailRightBottom">
                    <div className="synopsisText">Description</div>
                    <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                </div>
                
            </div>
        </div>
        <div className="movie__links">
         
        </div>
    </div>
  )
}
