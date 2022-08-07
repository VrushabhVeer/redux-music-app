import { Box, Button, Container, Input } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMusicSuccess, updateMusicRecord } from "../Redux/AppReducer/action";

const EditMusicRecord = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.Appreducer.musicRecords);
  const [musicName, setMusicName] = useState("");
  const [currentMusic, setCurrentMusic] = useState([])
  const [artistName, setArtistName] = useState("");

  useEffect(() => {
    if (id) {
      const currentMusic = musicRecords.find((album) => album.id === id);
    }

    if (currentMusic) {
      setMusicName(currentMusic.name);
      setArtistName(currentMusic.artist);
    }
  }, [id, musicRecords]);


  const handleSubmit = (e) => {
    e.preventDefault()
    if(musicName && artistName){
      const payload = {
        name: musicName,
        artist: artistName
      }
      dispatch(updateMusicRecord(id, payload))
      .then(()=>{
        dispatch(getMusicSuccess())
      })
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <Box>
        <label>Edit Music Name</label>
        <Input value={musicName} onChange={(e) => setMusicName(e.target.value)} />
      </Box>

      <Box>
        <label>Edit Artist Name</label>
        <Input value={artistName} onChange={(e) => setArtistName(e.target.value)} />
      </Box>
      <Button variant="solid" colorScheme="facebook" type="submit">Update</Button>
      </form>
    </Container>
  );
};

export default EditMusicRecord;
