import * as React from 'react';
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Logo from '../../assets/zombieapp-logo.png'
import { IconButton, Typography, Button } from '@mui/material'
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';


const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <Card sx={{ maxWidth: 345, marginTop: "200px" }}>
      <CardMedia
        component="img"
        height="140"
        image={Logo}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Age
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bio
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Button size="small">
            <ThumbUpAltRoundedIcon />
          </Button>
        </IconButton>
        <Button size="small">
          <ThumbDownRoundedIcon />
        </Button>
      </CardActions>
    </Card>
    // <div>
    //   <h1>Potential Matches</h1>
    //   {profiles.length ? 
    //     <>
    //       {profiles.map(profile =>
    //         <div key={profile._id}>
    //           <h1>
    //           {profile.name}
    //           </h1> 
    //           <p> Species: 
    //           {profile.species}
    //           </p>
    //           <p> Do you eat brains?
    //           {profile.brains = true ? "yes, I eat brains" : "do not prefer to eat brains"}
    //           </p>
    //           <p> Prefer to date: 
    //           {profile.prefersZombie = true ? "Zombies" : profile.prefersHalfbie = true ? "Halbies": profile.prefersHuman = true ? "Humans" : "I ain't got no type"}
    //           </p>
    //           <p>
    //           {profile.prefersHuman}

    //           </p>
    //           <p>
    //           {profile.prefersHalfbie}
    //           </p>
    //           <p>
    //           {profile.age} years old

    //           </p>
    //           height:
    //           <p>
    //           {profile.height}"

    //           </p>
    //           About Me: 
    //           <p>
    //           {profile.bio}
    //           </p>

    //           </div>


    //       )}
    //     </>
    //   :
    //     <p>No profiles yet</p>
    //   }
    // </div>
  )
}

export default Profiles