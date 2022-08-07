import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicSuccess } from "../Redux/AppReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.appReducer.musicRecords);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");

      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      dispatch(getMusicSuccess(queryParams));
    }
  }, [location.search]);

  console.log(musicRecords);

  return (
    <>
      <Box className="musicRecords">
        {musicRecords.map((album) => (
          <Box p="12" key={album.id}>
            <Link to={`/music/${album.id}`}>
              <Image borderRadius='10' mb='2' src={album.img} alt="" />
              <h4>{album.name}</h4>
              <p>Genre - {album.genre}</p>
              <p>year {album.year}</p>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MusicRecords;
