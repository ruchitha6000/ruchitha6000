import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  let [watchList, setWatchList] = useState([]);

  function handleAddToWatchList(movieObj){
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  }

  function handleRemoveFromWatchList(movieObj){
    let filterWatchList = watchList.filter((movie)=>{
      return movie.id != movieObj.id;
    })
    setWatchList(filterWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filterWatchList));
    console.log(filterWatchList);
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<> <Banner /> <Movies handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/> </>} />
          <Route path="/Watchlist" element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
