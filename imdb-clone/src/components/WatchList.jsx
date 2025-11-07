import React, { useEffect } from "react";
import { useState } from "react";
import genreids from "../genre.js";

function WatchList({ watchList, setWatchList, handleRemoveFromWatchList }) {

  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState(['All Genres']);
  const [currGenre, setCurrGenre] = useState('All Genres');

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  let handleGenreFilter = (genre)=>{
    setCurrGenre(genre);
  }



  let sortIncreasing = ()=>{
    let sortedIncreasing = watchList.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average;
    })
    setWatchList([...sortedIncreasing]);
  }


  let sortDecreasing = ()=>{
    let sortedDecreasing = watchList.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average;
    })
    setWatchList([...sortedDecreasing]);
  }

  useEffect(()=>{
    let temp = watchList.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]];
    })
    temp = new Set(temp);
    setGenreList(['All Genres', ...temp]);
    console.log(temp);
  }, [watchList]);


  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre)=>{
            return <div onClick={()=>handleGenreFilter(genre)} className= { currGenre==genre ? "flex justify-center text-white items-center font-bold bg-blue-400 p-3 rounded-xl hover:cursor-pointer h-[2.5rem] w-[7rem] mx-3 mb-3" : "flex justify-center text-white items-center font-bold bg-gray-400/50 p-3 rounded-xl hover:cursor-pointer h-[2.5rem] w-[7rem] mx-3 mb-3"}>

          {genre}
        </div>
          })
        }
      </div>
      <div className="flex justify-center m-4">
        <input onChange={handleSearch}
          type="text"
          placeholder="Search Movies"
          className="bg-gray-200 outline-none px-2 h-[3rem] w-[18rem]"
        ></input>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-400 bg-gray-100 m-8">
        <table className="w-full text-gray-500 justify-content text-center">
          <thead className="bg-gray-200 px-4 py-2">
            <tr className="border-b-2 border-gray-400">
              <th className="px-4 py-2">poster</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 flex justify-center">
                <div onClick={sortIncreasing} className="p-2"><i class="fa fa-arrow-up"></i></div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing} className="p-2"><i class="fa fa-arrow-down"></i></div>
              </th>
              <th className="px-4 py-2">Popularity</th>
              <th className="px-4 py-2">Genre</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj)=>{
              if(currGenre == 'All Genres'){
                return true
              }else{
                return genreids[movieObj.genre_ids[0]]==currGenre ;
              }
              
            }).filter((movieObj)=>{
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase());

            }).map((movieObj) => {
              return (
              <tr className="border-b border-gray-200">
                <td className="flex items-center px-4 py-2">
                  <img
                    className="h-[20vh] w-[170px] mx-auto"
                    src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                  />
                </td>
                <td className="px-10">{movieObj.title}</td>
                <td className="px-4 py-2">{movieObj.vote_average}</td>
                <td className="px-4 py-2">{movieObj.popularity}</td>
                <td className="px-4 py-2">{genreids[movieObj.genre_ids[0]]}</td>
                <td onClick={()=>{handleRemoveFromWatchList(movieObj)}} className="px-4 py-2 text-red-700 hover:cursor-pointer">Delete</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList;
