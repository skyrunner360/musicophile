"use client";
import {
  FormControl,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PageviewIcon from "@mui/icons-material/Pageview";
import React, { useState } from "react";
import axios from "axios";
import { platAPIOrigin } from "@/utils";
import SongCard from "@/components/SongCard";
import { Masonry } from "@mui/lab";
import YTMusic from "ytmusic-api";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const [searchResult, setSearchResult] = useState();
  const ytmusic = new YTMusic();
  const searchSongs = () => {
    const query = new URLSearchParams({ query: searchVal });
    axios
      .get(`${platAPIOrigin["jio"]}search/songs?${query}`)
      .then(({ data }) => {
        const finalData = data?.data?.results;
        setSearchResult(finalData);
      })
      .catch((err) => console.log("ERROR", err));
    ytmusic.initialize().then(async (client) => {
      const songs = await client.searchSongs(searchVal);
      console.log("SOngs", songs);
    });
  };
  return (
    <div className="ml-[245px] p-2">
      <div>
        <FormControl fullWidth>
          <TextField
            variant="outlined"
            placeholder="Search Songs on all supported platforms"
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchSongs();
              }
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton size="large" onClick={searchSongs}>
                    <PageviewIcon fontSize="large" />
                  </IconButton>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="large" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
      </div>
      <div className="mt-5 p-2">
        <Masonry spacing={2} columns={4}>
          {searchResult?.length > 0 &&
            searchResult?.map((elem) => (
              <SongCard
                key={elem?.id}
                name={elem?.name}
                artist={elem?.artists?.primary}
                platLink={elem?.url}
                cover={
                  elem?.image?.length > 2
                    ? elem?.image[1]?.url
                    : elem?.image[0]?.url
                }
              />
            ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Search;
