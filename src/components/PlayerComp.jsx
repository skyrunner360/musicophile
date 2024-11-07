"use client";
import { playerStatus } from "@/utils/states";
import { useAtomValue } from "jotai";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const PlayerComp = () => {
  const playerState = useAtomValue(playerStatus);
  return (
    <>
      <AudioPlayer src={playerState.link || null} showJumpControls={false} />
    </>
  );
};

export default PlayerComp;
