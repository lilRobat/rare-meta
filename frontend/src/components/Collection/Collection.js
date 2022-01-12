import React, { useEffect, useState } from "react";
import axios from "axios";
import List from '@mui/material/List';
import { useParams } from "react-router-dom";
import NftCard from "../NftCard/NftCard";
import { Pagination } from "@mui/material";
const Collection = () => {
  const [nfts, setNfts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
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
          nfts.slice(currentPage*25, currentPage*25+25).map((nft) => {
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
      <Pagination count={(nfts.length/25)-1} page={currentPage} onChange={(e,v) => setCurrentPage(v)} />
    </div>
  )
}
export default Collection;