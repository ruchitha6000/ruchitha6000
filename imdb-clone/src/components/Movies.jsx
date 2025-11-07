import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards'
import axios from 'axios'
import Pagenation from './Pagenation';

function Movies({handleAddToWatchList, handleRemoveFromWatchList, watchList}) {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function handlePrev(){
    if(pageNo === 1){
      setPageNo(pageNo);
    }
    else{
      setPageNo(pageNo-1);
    }
  }

  function handleNext(){
    setPageNo(pageNo+1);
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=11e70fab89d67849cdc235fd9c6d5605&language=en-US&page=${pageNo}`).then(function(response){
      console.log(response.data.results);
      setMovies(response.data.results);
    }) 
  }, [pageNo]);

  return (
    <div className='p-4'>
      <div className='text-2xl font-bold m-4 text-center'>Trending Movies</div>
      
      <div className='flex flex-row flex-wrap justify-around gap-7'>
        <>
          {movies.map((movieObj)=>{
            return(<MovieCards key={movieObj.id} watchList={watchList} poster_path={movieObj.poster_path} name={movieObj.original_title} movieObj={movieObj} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>)
          })}
            
            
        </>
      </div>

      <Pagenation handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo}/>
    </div>

  )
}

export default Movies


//11e70fab89d67849cdc235fd9c6d5605
//https://api.themoviedb.org/3/movie/popular?api_key=11e70fab89d67849cdc235fd9c6d5605&language=en-US&page=1
