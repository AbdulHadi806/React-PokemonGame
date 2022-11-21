import React from 'react'
import {  CardContent,Typography} from "@mui/material";

export default function ReusableComponent({data}) {
  return (
                  
              <>
              <CardContent sx={{ pb: "3px" }}>
                    <Typography sx={{ textTransform: "capitalize " }} gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Base_experience: {data.base_experience}
                    </Typography>
                  </CardContent>
              </>
  )
}
