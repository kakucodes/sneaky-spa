import ReactHowler from "react-howler";
import { Play, Pause, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { SNEAKY_RADIO_TRACKS } from "../../config";

export const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showArtwork, setShowArtwork] = useState(false);

  const currentlyPlaying = SNEAKY_RADIO_TRACKS[currentTrack];

  return (
    <div
      className="audio-player border p-2"
      style={{ width: "200px", position: "relative" }}
      onMouseEnter={() => setShowArtwork(true)}
      onMouseLeave={() => setShowArtwork(false)}
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

      {showArtwork && (
        <img
          style={{
            objectFit: "contain",
            backgroundColor: "black",
            position: "absolute",
            bottom: "100%",
            left: 0,
            marginBottom: "10px",
          }}
          height={125}
          width={200}
          src={currentlyPlaying.cover}
          alt={`${currentlyPlaying.title} cover art`}
        />
      )}
      <div>
        <MarqueeText pauseOnHover direction="right">
          {currentlyPlaying.title} by Tasukete
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
  );
};
