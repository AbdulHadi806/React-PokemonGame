import React from 'react'

// importing MUI compoenents here
import { Container, Grid, Typography, AppBar, Button,Tooltip } from "@mui/material";

// importing react-router components
import { Link } from "react-router-dom";

// importing redux components
import { useSelector } from "react-redux";

// importing icons from MUI
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  const AddToHeartItems = useSelector(state => state.addToHeart)
  const TotalCount = AddToHeartItems.length;

  return (
    <AppBar sx={{ bgcolor: "#000" }}>
      <Container sx={{ py: 2 }}>

        <Grid container>
          <Grid item md={10}>
          <Tooltip title="Home" placement="top-start">
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}><Typography variant='h1' sx={{ fontSize: "25px" }}>Pokemon Go</Typography></Link>

          </Tooltip>
          </Grid>
          <Grid item md={2}>

            <Button sx={{ p: "0" }}>
              <Link to="/SearchPage">
                <SearchIcon sx={{ color: "#fff" }} />

              </Link>
            </Button>
            <Button sx={{ p: "0" }}>
              <Link to="/HeartPage">
                <FavoriteIcon sx={{ color: "red" }} />
                <Typography
                  variant="h5"
                  sx={{ fontSize: "20px", position: "absolute", right: 7, top: 5, color: "#fff" }}
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
