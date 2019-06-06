import React, { Component } from 'react'
import './Movie.css'
import DisplayMovie from './DisplayMovie';

const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    poster: "https://superclub.videotron.com/media/catalog/product/cache/bdfe59afc1d8bd5cfc84d1a6934fa46c/v/a/vaocean_s_8_dvd_2d.jpg"
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    poster: "http://fr.web.img3.acsta.net/pictures/18/05/04/13/15/4943524.jpg"


  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    poster: "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/41/6b/16/416b16fe-cb7c-2e6a-9b16-8701acf3ca06/pr_source.lsr/268x0w.png"

  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    poster: "https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/19/ac/b4/19acb419-1de9-043a-8f0a-bfcb162bf86d/pr_source.jpg/268x0w.jpg"

  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    poster: "http://fr.web.img5.acsta.net/pictures/18/11/27/14/25/1451897.jpg"

  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTv40gXzQtHn_gBRJ9Th5A-3t8CEZtGK3CFZR_5_AWkREbh85T"

  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTv40gXzQtHn_gBRJ9Th5A-3t8CEZtGK3CFZR_5_AWkREbh85T"

  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    poster: "https://static.films-horreur.com/2015/06/sQGY0TD5od0JUDAyIjo6PE1FVFT.jpg"

  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    poster: "https://is2-ssl.mzstatic.com/image/thumb/Video20/v4/fe/dc/f0/fedcf039-7cc9-89b1-b992-00b0d47a229e/pr_source.lsr/268x0w.png"

  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    poster: "https://addict-culture.com/wp-content/uploads/2014/10/gone-girl-poster-810x1052.jpg"

  },
]



class MovieList extends Component {

  state = {
    movieList: movies,
  }


  deleteMovie = (movieToDelete) => {
    let newItem = this.state.movieList.filter(item => {
      console.log(item)
      return item !== movieToDelete
    })
    this.setState({
      movieList: newItem
    })

  }
  


  



  render() {

    
    return (
      <div>
        <DisplayMovie movies={this.state.movieList} remove={this.deleteMovie} addLikes={this.addLike} />
      </div>
    )
  }
}



export default MovieList