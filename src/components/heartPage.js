import React from 'react'

import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from "@mui/material";

// importing redux components
import { useDispatch, useSelector } from "react-redux";

// import actions
import { removeFromHeart } from '../redux/actions';

export default function HeartPage() {
  const AddToHeartItems = useSelector(state => state.addToHeart)
  const dispatch = useDispatch()
  const removeFromHeartHandler = (data) => {
    dispatch(removeFromHeart(data))
  } 
  return (
    <>
    <Container sx={{ mt: "100px" }}>
      <Typography variant='h2' sx = {{textAlign:"center", fontSize:"28px"}}>{AddToHeartItems.length == 0 ? "Currently You Have No Favourate Pokemons":"Your Favorite Pokemons are"}</Typography>
      {AddToHeartItems.length == 0? <Typography variant='h3' sx = {{textAlign:"center", fontSize:"20px",pt:"28px"}}>Add Pokemons To View List</Typography>: ""}
        <Grid container>
            {AddToHeartItems.map((data) => {
                return (
                    <Grid key={data.id}  item md={3} sx = {{py:2}}>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardActionArea sx ={{bgcolor: "rgba(128, 79, 79, 0.1)"}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={data.sprites.front_shiny}
                                style={{objectFit:"contain", width: "150px", height:"200px", margin: "0 auto"}}
                                alt="green iguana"
                            />
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
                            <Button sx = {{bgcolor:"#000", color:"#fff",fontSize:"11px",fontWeight:"700",height:"33px",width:"127px", ':hover': {
          bgcolor: '#212121', 
        },
    }} onClick={(e)=> {e.preventDefault();removeFromHeartHandler(data)}} size="small" color="primary">
                                Remove
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
