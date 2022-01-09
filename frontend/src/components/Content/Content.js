import React, { useEffect, useState } from "react";
import axios from "axios";
import CollectionCard from "../CollectionCard/CollectionCard";
import List from '@mui/material/List';

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
      <List sx={{display: 'flex'}}>
        {
          collections.map((collection) => {
            return(
              <CollectionCard 
                title={collection.name} 
                imgPath={collection.imgPath} 
                collectionId={collection.tokenId}
              />
            )
          })
        }
      </List>
    </div>
  )
}
export default Content;