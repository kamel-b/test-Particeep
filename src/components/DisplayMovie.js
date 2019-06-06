import React from 'react';
import './Movie.css'


const DisplayMovie = ({ movies, remove, addLikes}) => {


    return (
        <div className="container">
            {movies.map(movie =>

                <div className='card' key={movie.id}>
                    <h1>{movie.title}</h1>
                    <p>{movie.category}</p>
                    <img src={movie.poster} alt=""></img>
                    <div className='bar-like' >
                        <div className='likes'></div>
                        <div className='dislikes'></div>
                        <div className='like-count'>{movie.dislikes}</div>
                        <div className='dislike-count'>{movie.likes}</div>
                    </div>

                    <div className="buttons">
                        <div>
                            <i className="fas fa-thumbs-up like-buttons" onClick={()=>addLikes(movie.likes)}></i>
                            <i className="fas fa-thumbs-down dislike-buttons"></i>
                        </div>


                    </div>

                    <div className='delete-button'>
                        <button onClick={() => remove(movie)}>Supprimer</button>
                    </div>
                </div>)}

        </div>
    )
}



export default DisplayMovie;

