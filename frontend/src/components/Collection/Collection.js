import React, { useEffect, useState } from "react";
import axios from "axios";
import List from '@mui/material/List';
import { useParams } from "react-router-dom";
import NftCard from "../NftCard/NftCard";
const Collection = () => {
  const [nfts, setNfts] = useState([])
  let params = useParams();
  useEffect(() => {
    const fetchNfts = async () => {
      const response = await axios.get(`/api/nfts/${params.collectionId}`);
      setNfts(response.data)
      console.log(response.data)
    }
    fetchNfts();
  }, [])
  return (
    <div>
      <List>
        {
          nfts.map((nft) => {
            return(
              <NftCard
                name={nft.name} 
                imgPath={nft.url} 
                owner={nft.owner}
              />
            )
          })
        }
      </List>
    </div>
  )
}
export default Collection;