import ReactHowler from "react-howler";
import { Play, Pause, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { SNEAKY_RADIO_TRACKS } from "@/config";
import Image from "next/image";

export const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showArtwork, _] = useState(true);

  const currentlyPlaying = SNEAKY_RADIO_TRACKS[currentTrack];

  return (
    <div className="px-2">
      <div
        className="audio-player border border-dark p-1"
        style={{ backgroundColor: "white" }}
        // style={{ width: "200px", position: "relative" }}
        // onMouseEnter={() => setShowArtwork(true)}
        // onMouseLeave={() => setShowArtwork(false)}
      >
        <ReactHowler
          src={currentlyPlaying.src}
          playing={playing}
          mute={muted}
          onEnd={() =>
            currentTrack < SNEAKY_RADIO_TRACKS.length - 1
              ? setCurrentTrack((curr) => curr + 1)
              : setPlaying(false)
          }
        />

        <div>
          <MarqueeText
            pauseOnHover
            direction="right"
            duration={5}
            textSpacing="0.5rem"
          >
            <span>{currentlyPlaying.title} by Tasukete</span>
          </MarqueeText>
        </div>

        <div className="controls row">
          <div className="col-8">
            <button onClick={() => setPlaying(!playing)}>
              {playing ? <Pause /> : <Play />}
            </button>

            <button
              onClick={() =>
                setCurrentTrack((curr) =>
                  curr < SNEAKY_RADIO_TRACKS.length - 1 ? curr + 1 : 0
                )
              }
            >
              <SkipForward />
            </button>
          </div>

          <div className="col-4 text-end">
            <button onClick={() => setMuted(!muted)}>
              {muted ? <VolumeX /> : <Volume2 />}
            </button>
          </div>
        </div>
      </div>

      {showArtwork && (
        <div className="">
          <Image
            style={{
              // objectFit: "contain",
              // backgroundColor: "transparent",
              // position: "absolute",
              // bottom: "100%",
              // left: 0,
              // marginBottom: "",
              opacity: 0.5,
              zIndex: -1,
            }}
            objectFit="cover"
            fill
            src={currentlyPlaying.cover}
            alt={`${currentlyPlaying.title} cover art`}
          />
        </div>
      )}
    </div>
  );
};
