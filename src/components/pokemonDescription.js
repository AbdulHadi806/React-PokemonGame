import React from 'react'

// importing MUI components
import { Container, Grid, Card, CardContent, CardMedia, Typography,Box, Button, CardActionArea, CardActions } from "@mui/material";

// importing Redux
import { useSelector,useDispatch } from 'react-redux';

//importing actions
import { AddToHeart } from '../redux/actions';

export default function PokemonDescription() {
    const pokemonsItemsDetails = useSelector(state => state.pokemonsDetails)
    const dispatch = useDispatch()
    const addToHeartHandler = (data) => {
        dispatch(AddToHeart(data))
    }
    return (
        <Container maxWidth="xl" sx={{ mt: 21, mb:'197px' }}>
          <Typography variant="h3" textAlign={"center"}>
            Latest Collection
          </Typography>
          <Grid container sx={{ justifyContent: "center" }}>
            {pokemonsItemsDetails.map((data) => {
              return (
                <Grid key={data.id} xs={7} sx={{ my: 1 }} item>
                  <Card maxWidth="lg">
                    <Box sx={{p: 2, display: "flex", width: "100%" }}>
                      <CardMedia style = {{objectFit: "contain"}}
                        component="img"
                        height="280"
                        image={data.sprites.front_shiny}
                        sx = {{width: 240, height: 240,alignSelf:"center"}}
                        alt="hello"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx ={{textTransform:"uppercase"}}>
                          {data.name}
                        </Typography>
                        <Typography variant='h5'>Top Moves Of {data.name} are:</Typography>
                          <Box Container sx={{display:"flex", flexWrap:"wrap",justifyContent:"flex-start"}}>
                          {data.moves.map(item => {
                            return (
                            <Box sx = {{display:"flex"}}>
                             <Typography gutterBottom component="div">
                                {item.move.name + ","}
                             </Typography>
                             </Box>       
                            )
                          })}
                          </Box>
                          
                      </CardContent>
                      </Box>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                      <Button
                     onClick={(e)=> {e.preventDefault(); addToHeartHandler(data)}}
                        size="small"
                        variant = "contained" sx = {{width: "100%", bgcolor: "#000", color: "#fff", height: "46px",borderRadius: 0, ':hover': {
                          bgcolor: '#212121', 
                        },
                    }}
                      >
                        Add to Favorite
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      );
}
