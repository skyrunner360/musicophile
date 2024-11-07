"use client";
import { playerStatus } from "@/utils/states";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useSetAtom } from "jotai";
import Image from "next/image";

const SongCard = ({ name, artist, cover, platLink, elem }) => {
  const setStatus = useSetAtom(playerStatus);
  return (
    <>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {artist?.map((e) => (
                <a
                  key={e.id}
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {e.name}{" "}
                </a>
              ))}
            </Typography>
            <IconButton
              title="Open on platform"
              onClick={() =>
                window.open(platLink, "_blank", "noopener,noreferrer")
              }
            >
              <OpenInNewIcon />
            </IconButton>
            <IconButton
              title="Play on Musicophile"
              onClick={(el) => {
                el.stopPropagation();
                setStatus({
                  link: elem?.downloadUrl[elem?.downloadUrl.length - 1]?.url,
                  playing: true,
                  name,
                  artist: artist?.map((e) => e.name).join(" "),
                });
              }}
            >
              <PlayCircleIcon />
            </IconButton>
            <IconButton title="Add to Musicophile Playlist">
              <PlaylistAddIcon />
            </IconButton>
          </CardContent>
        </Box>
        <Box marginLeft={"auto"} className="p-1">
          <Image
            width={150}
            height={150}
            alt="album cover"
            src={cover}
            className="rounded-lg overflow-hidden"
          />
        </Box>
      </Card>
    </>
  );
};

export default SongCard;
