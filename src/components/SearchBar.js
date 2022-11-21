import React, { useState } from 'react'

// importing redux components
import { useDispatch, useSelector } from "react-redux";

// importing react-router components
import { Link } from "react-router-dom";

//importing actions
import { AddToHeart, searchInputItm, pokemonsDetails, pokemonComparition } from '../redux/actions';


// importing MUI components
import { Container, IconButton, InputAdornment, TextField, Grid, Card, CardContent, CardMedia, Box, Typography, Button, CardActionArea, CardActions } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState()

  const pokemonsDataItems = useSelector(state => state.pokemonsData)
  const SearchItemsData = useSelector(state => state.SearchInputItems)
  let sortSearchtems;
  const sortSearchtemsHandler = () => {
    sortSearchtems = SearchItemsData.sort((a, b) => a.base_experience - b.base_experience)
  }
  sortSearchtemsHandler()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    e.preventDefault();
    const lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };
  const addToHeartHandler = (data) => {
    dispatch(AddToHeart(data))
  }
  const pokemonsDetailsHandler = (data) => {
    dispatch(pokemonsDetails(data))
  }
  const searchInputHandler = (e) => {
    e.preventDefault()
    if (searchInput.length > 0) {
      const searchedItems = pokemonsDataItems.filter((item) => {
        return item.name.match(searchInput);
      });
      dispatch(searchInputItm(searchedItems))
      setSearchInput("")
    }
  }
  const pokemonComparitionHandler = (data) => {
    dispatch(pokemonComparition(data))
  }
  return (
    <>
      <Container sx={{ textAlign: "center", mt: '120px' }}>
        <TextField type="text" placeholder="Search Pokemon By Name" value={searchInput} onChange={handleChange} sx={{ width: "500px", p: "6px" }} InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={searchInputHandler}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }} />

        {SearchItemsData && SearchItemsData.length !== 0 ? "" : <Typography>Find Your Pokemon Here!</Typography>}


        <Grid container sx={{ justifyContent: "center" }}>
          {sortSearchtems && sortSearchtems.map((data) => {
            return (
              <Grid key={data.id} item md={3} sx={{ py: 2 }}>
                <Card sx={{ maxWidth: 250 }}>
                  <CardActionArea sx={{ bgcolor: "rgba(128, 79, 79, 0.1)" }} onClick={(e) => { e.preventDefault(); pokemonsDetailsHandler(data) }}>
                    <Link to="/pokemonDescription">
                      <CardMedia
                        component="img"
                        height="140"
                        image={data.sprites.front_shiny}
                        style={{ objectFit: "contain", width: "150px", height: "200px", margin: "0 auto" }}
                        alt="green iguana"
                      />
                    </Link>
                  </CardActionArea>
                  <CardContent sx={{ pb: "3px" }}>
                    <Typography sx={{ textTransform: "capitalize " }} gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Base_experience: {data.base_experience}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ pb: "20px" }}>
                    <Button sx={{
                      bgcolor: "#000", fontSize: "11px", fontWeight: "700", height: "33px", width: "127px", color: "#fff", ':hover': {
                        bgcolor: '#212121',
                      },
                    }} onClick={(e) => { e.preventDefault(); addToHeartHandler(data) }} size="small" color="primary">
                      Add to Favorite
                    </Button>
                    <Button sx={{
                      bgcolor: "#000", fontSize: "11px", fontWeight: "700", height: "33px", width: "100px", color: "#fff", ':hover': {
                        bgcolor: '#212121',
                      },
                    }} onClick={(e) => { e.preventDefault(); pokemonComparitionHandler(data) }} size="small" color="primary">
                      Compare
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

