import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

// importing components
import Header from './components/header';
import MainSection from './components/MainSection';
import HeartPage from './components/heartPage';
import PokemonDescription from './components/pokemonDescription';
import SearchBar from './components/SearchBar';

// importing MUI components
import { Box } from "@mui/material";

// importing redux components
import { useDispatch } from "react-redux";

// importing actions here
import { getPokemonData } from './redux/actions';
import ComparitionPage from './components/comparitionPage';
import ProtectedRoutesDescription from './components/protectedRoutesDescription';

function App() {
  const [apiData, setApiData] = useState()
  const [loading, setLoading] = useState(true)
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
      setLoading(false)
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
      <div className="App" >
        <Header />
        <Box sx={loading ? { display: "flex", justifyContent: "center", alignItems: "center", height: "500px" } : ""}>
          {loading ? <ClipLoader
            color={"#000"}
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> : <Routes>
            <Route path="/ComparitionPage" element={<ComparitionPage />} />
            <Route element={<ProtectedRoutesDescription />}>
              <Route path="/pokemonDescription" element={<PokemonDescription />} />
            </Route>
            <Route path="/" element={<MainSection />} />
            <Route path="/HeartPage" element={<HeartPage />} />
            <Route path="/SearchPage" element={<SearchBar />} />
          </Routes>}
        </Box>

      </div>
    </Router>
  );
}

export default App;
