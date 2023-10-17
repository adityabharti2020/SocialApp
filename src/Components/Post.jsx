import React from 'react'
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import ShareIcon from "@mui/icons-material/Share";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
  import Favorite from '@mui/icons-material/Favorite';
const Post = () => {
  return (
    <Box flex={6} p={3}>
        <Card sx={{margin:3}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="200px"
          image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto+compress&"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Post