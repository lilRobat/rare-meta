import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Content = () => {
  const [collections, setCollections] = useState([])
  useEffect(() => {
    const fetchCollections = async () => {
      const response = await axios.get('/api/collections');
      setCollections(response.data)
      console.log(collections)
    }
    fetchCollections();
  }, [])
  return (
    <div>
      <li>
        {
          collections.map((collection) => {
            return(
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={collection.imgPath}
                    alt="nft collection img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {collection.tokenId}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {collection.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })
        }
      </li>
    </div>
  )
}
export default Content;