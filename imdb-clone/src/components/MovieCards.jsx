import React from 'react'

function MovieCards({movieObj, poster_path, name, handleAddToWatchList, handleRemoveFromWatchList, watchList}) {

  function doesContain(movieObj){
    for(let i=0; i<watchList.length; i++){
      if(watchList[i].id === movieObj.id){
        return true;
      }
    }
    return false;
  }

  return (
    <div className='h-[45vh] w-[180px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      {
        doesContain(movieObj) ? (
        <div onClick={()=>{handleRemoveFromWatchList(movieObj)}} className='bg-gray-900/60 m-4 rounded-lg p-1'>&#10060;</div>
      ) : (
        <div onClick={()=>{handleAddToWatchList(movieObj)}} className='bg-gray-900/60 m-4 rounded-lg p-1'> 
          &#128151; 
        </div>)
        
      }

      <div className='text-white text-center text-xl w-full bg-gray-900/60 rounded-xl'>{name}</div>
    </div>
  )
}

export default MovieCards
