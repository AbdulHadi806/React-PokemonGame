import React, {  useState } from 'react'

import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions,Box } from "@mui/material";

// importing redux components
import { useDispatch, useSelector } from "react-redux";

// importing react-router components
import { Link } from "react-router-dom";

// importing actions
import { AddToHeart, pokemonsDetails, pokemonComparitionDeleter } from '../redux/actions';

export default function ComparitionPage() {
  const [pokeWinner, setPokeWinner] = useState([])
  const [error, setError] = useState(false)
  const pokemonCompareData = useSelector(state => state.pokemonCompare)
  const comparePoke = (e) => {
    e.preventDefault()
    let pokeLen = pokemonCompareData.length
    for (let i = 0; i < pokeLen; i++) {
      if (pokemonCompareData[i].base_experience > pokemonCompareData[i + 1].base_experience) {
        return setPokeWinner([pokemonCompareData[i]])
      }
      else if (pokemonCompareData[i].base_experience < pokemonCompareData[i + 1].base_experience) {
        return setPokeWinner([pokemonCompareData[i+ 1]])
      }
      else if (pokemonCompareData[i].base_experience == pokemonCompareData[i + 1].base_experience){
        setError(true)
        return setPokeWinner([""])
      }
      else {
        setPokeWinner("")
      }
    }
  }
  const dispatch = useDispatch()
  const addToHeartHandler = (data) => {
    dispatch(AddToHeart(data))
  }
  const pokemonsDetailsHandler = (data) => {
    dispatch(pokemonsDetails(data))
  }
  const pokemonComparitionDeleterHandler = (data) => {
    dispatch(pokemonComparitionDeleter(data))
    setPokeWinner([])
    setError(false)
  }
  return (
    <>
      <Container sx={{ textAlign: "center", mt: '120px', mb:"30px" }}>
        {pokemonCompareData.length <= 1 ? <Typography variant='h6'>Please First Select Two Pokemons to Compare</Typography> : <Button sx ={{color: "#000"}} onClick={comparePoke}>Compare</Button>}
        <Grid container sx={{ justifyContent: "center" }}>
          {pokemonCompareData && pokemonCompareData.map((data) => {
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
                      bgcolor: "#000", fontSize: "11px", fontWeight: "700", height: "33px", width: "109px", color: "#fff", ':hover': {
                        bgcolor: '#212121',
                      },
                    }} onClick={(e) => { e.preventDefault(); pokemonComparitionDeleterHandler(data); }} size="small" color="primary">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })} 
        </Grid>
        {pokeWinner.length > 0 ? <Typography sx = {{py:"20px"}}>The Winner is</Typography>: ""}
        {error? <Typography>None Because Both Have Equal Base Power</Typography> : ""}
        <Box sx ={{display:"flex",justifyContent:"center"}}>
          {error==false ? pokeWinner && pokeWinner.map(d => {
            return (
          <Card key={d.id}>
                  <CardActionArea sx={{ bgcolor: "rgba(128, 79, 79, 0.1)" }} onClick={(e) => { e.preventDefault(); pokemonsDetailsHandler(d) }}>
                    <Link to="/pokemonDescription">
                      <CardMedia
                        component="img"
                        height="140"
                        image={d.sprites.front_shiny}
                        style={{ objectFit: "contain", width: "150px", height: "200px", margin: "0 auto" }}
                        alt="green iguana"
                      />
                    </Link>
                  </CardActionArea>
                  <CardContent sx={{ pb: "3px" }}>
                    <Typography sx={{ textTransform: "capitalize " }} gutterBottom variant="h5" component="div">
                      { d.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Base_experience: { d.base_experience}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ pb: "20px" }}>
                  </CardActions>
                </Card>
            )
          }):""}
          
          </Box>
      </Container>
    </>
  )
}
