import React from 'react'

// importing MUI compoenents here
import {  Container, Grid, Typography ,AppBar,Button } from "@mui/material";

// importing react-router components
import { Link } from "react-router-dom";

// importing redux components
import { useSelector } from "react-redux";

// importing icons from MUI
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Header() {
  const AddToHeartItems = useSelector(state => state.addToHeart)
  const TotalCount = AddToHeartItems.length;
  
  return (
    <AppBar sx = {{mb: "100px"}}>
        <Container sx = {{py:2 }}>
          <Grid container>
              <Grid item md = {11}>
                <Link to="/" style={{color: "#fff", textDecoration:"none"}}><Typography variant='h1' sx = {{fontSize:"25px"}}>Pokemon Go</Typography></Link>
              </Grid>
              <Grid item md = {1}>
              <Button sx={{ p: "0" }}>
          <Link to="/HeartPage">
          <FavoriteIcon sx = {{color: "red"}}/>            
          <Typography
              variant="h5"
              sx={{ fontSize: "20px",position: "absolute", right: 7, top: 5, color: "#fff" }}
            >
              {TotalCount}
            </Typography>
          </Link>
        </Button>
           
              </Grid>
          </Grid>
        </Container>
    </AppBar >
  )
}
