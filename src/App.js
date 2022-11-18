import React, { useEffect,useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing components
import Header from './components/header';
import MainSection from './components/MainSection';
import HeartPage from './components/heartPage';
import PokemonDescription from './components/pokemonDescription';
import SearchBar from './components/SearchBar';

// importing redux components
import { useDispatch } from "react-redux";

// importing actions here
import { getPokemonData } from './redux/actions';
import ComparitionPage from './components/comparitionPage';
import ProtectedRoutesDescription from './components/protectedRoutesDescription';

function App() {
  const [pokeWinner, setPokeWinner] = useState([])
  const [apiData, setApiData] = useState()
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const dispatch = useDispatch()
  const fetchApiData = async (api) => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      const all = data.results
      let promisePokemons = all.map(async (p) => {
        const res = await fetch(p.url)
        const data = await res.json()
        return data
      });
      const pokemons = await Promise.all(promisePokemons)
      setApiData(pokemons)
    } catch (error) {
      console.log(error + "This is an error");
    }
  };
  useEffect(() => {
    fetchApiData(api);
  }, [])
  dispatch(getPokemonData(apiData))
  return (
      <Router>    
        <div className="App">
      <Header />    
      <Routes>
        <Route path="/ComparitionPage" element={<ComparitionPage setPokeWinner = {setPokeWinner} pokeWinner = {pokeWinner}/>}/>
        <Route element={<ProtectedRoutesDescription />}>
        <Route path="/pokemonDescription" element={<PokemonDescription />}/>
        </Route>
        <Route path="/" element = {<MainSection />} />
        <Route path="/HeartPage" element = {<HeartPage />} />
        <Route path="/SearchPage" element={<SearchBar />}/>
      </Routes>
      </div>
      </Router>
  );
}

export default App;
