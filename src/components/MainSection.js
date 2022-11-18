import React from 'react'

// importing Redux
import { useSelector, useDispatch } from 'react-redux';

// importing react-router components
import { Link } from "react-router-dom";

// importing MUI components
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from "@mui/material";

//importing actions
import { AddToHeart, pokemonsDetails } from '../redux/actions';


export default function MainSection() {
    const getPokemonData = useSelector(state => state.pokemonsData)
    console.log(getPokemonData)
    const dispatch = useDispatch()
    const addToHeartHandler = (data) => {
        dispatch(AddToHeart(data))
    }
    const pokemonsDetailsHandler = (data) => {
        dispatch(pokemonsDetails(data))
    }
    if(!getPokemonData) return <div>loading...</div>

    return (
        <>
            <Container sx={{ mt: "100px" }}>
                <Grid container>
                    {getPokemonData.map((data) => {
                        return (
                            <Grid key={data.id}  item md={3} sx = {{py:2}}>
                                <Card sx={{ maxWidth: 250 }}>
                                    <CardActionArea sx ={{bgcolor: "rgba(128, 79, 79, 0.1)"}} onClick={(e)=>{e.preventDefault();pokemonsDetailsHandler(data)}}>
                                        <Link to="/pokemonDescription">
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={data.sprites.front_shiny}
                                            style={{objectFit:"contain", width: "150px", height:"200px", margin: "0 auto"}}
                                            alt="green iguana"
                                        />
                                        </Link>
                                        </CardActionArea>
                                        <CardContent sx = {{pb: "3px"}}>
                                            <Typography sx ={{textTransform:"capitalize "}} gutterBottom variant="h5" component="div">
                                                {data.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            Base_experience: {data.base_experience}
                                            </Typography>
                                        </CardContent>
                                    <CardActions sx = {{pb:"20px"}}>
                                        <Button sx = {{bgcolor:"#000",fontSize:"11px",fontWeight:"700",height:"33px",width:"127px", color:"#fff", ':hover': {
                      bgcolor: '#212121', 
                    },
                }} onClick={(e)=> {e.preventDefault();addToHeartHandler(data)}} size="small" color="primary">
                                            Add to Favorite
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
