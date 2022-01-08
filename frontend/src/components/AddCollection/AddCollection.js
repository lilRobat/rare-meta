import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  padding: 1
}

const AddCollection = ({ open, setOpen }) => {
  const [tokenId, setTokenId] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const handleClose = () => setOpen(false);
  const onImageChange = (e) => {
    console.log(e.target.files[0])
    setImg(e.target.files[0])
  }
  const addCollection = async (e) => {
    let bodyFormData = new FormData();
    console.log(tokenId)
    bodyFormData.append('tokenId', tokenId)
    bodyFormData.append('name', name)
    bodyFormData.append('img', img)
    let response = await axios({
      method: "post",
      url: "/api/collection",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography>Collection id</Typography>
          <input onChange={(e) => setTokenId(e.target.value)}></input>
          <Typography>Name</Typography>
          <input onChange={(e) => setName(e.target.value)}></input>
          <Typography>Upload img</Typography>
          <input type="file" name="myImage" accept="image/*" onChange={(e) => onImageChange(e)} />
          <Button onClick={() => addCollection()}>Add Collection</Button>
        </Box>
      </Modal>
    </div>
  );
}
export default AddCollection;
