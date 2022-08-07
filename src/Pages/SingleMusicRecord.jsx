import { Box, Container, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMusicSuccess } from "../Redux/AppReducer/action";

const SingleMusicRecord = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const musicRecords = useSelector(store => store.musicRecords);
    const [currentMusicAlbum, setCurrentMusicAlbum] = useState([]);


    useEffect(() => {
        if (musicRecords.length === 0) {
            dispatch(getMusicSuccess())
        }
    },[dispatch, musicRecords.length])

    useEffect(() => {
        if (id) {
            const currentMusic = musicRecords.find(album => album.id === id);
            currentMusic && setCurrentMusicAlbum(currentMusic)
        }
    }, [id, musicRecords]);
    console.log(currentMusicAlbum)

    return (
        <Container>
            <Box>
            <Image w="300px" src={currentMusicAlbum.img} alt="" />
            <h2>{currentMusicAlbum.name}</h2>
            </Box>
            <Link to={`/music/${id}/edit`}>Edit</Link>
        </Container>
    )
};

export default SingleMusicRecord;
