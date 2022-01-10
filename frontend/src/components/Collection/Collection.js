import React, { useEffect, useState } from "react";
import axios from "axios";
import CollectionCard from "../CollectionCard/CollectionCard";
import List from '@mui/material/List';
import { useParams } from "react-router-dom";
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
      {params.collectionId}
    </div>
  )
}
export default Collection;
/*
useEffect(() => {
    const fetchNfts = async () => {
      const response = await axios.get('/api/nfts{tokenId}');
      setNfts(response.data)
    }
    fetchNfts();
  }, []) */