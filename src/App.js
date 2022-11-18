import React, { useEffect,useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing components
import Header from './components/header';
import MainSection from './components/MainSection';
import HeartPage from './components/heartPage';
import PokemonDescription from './components/pokemonDescription';



// importing redux components
import { useDispatch } from "react-redux";

// importing actions here
import { getPokemonData } from './redux/actions';

function App() {
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
        <Route path="/" element = {<MainSection />} />
        <Route path="/HeartPage" element = {<HeartPage />} />
        <Route path="/pokemonDescription" element={<PokemonDescription />}/>
      </Routes>
      </div>
      </Router>
  );
}

export default App;
