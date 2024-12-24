import { AudioPlayer } from "../AudioPlayer/AudioPlayer";

export const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div className="container-xxl pb-3">
        <div className="d-flex justify-content-end align-items-center">
          <div className="mx-2">
            <AudioPlayer />
          </div>
          <div>
            <a
              style={{
                background:
                  "radial-gradient(circle at right center, rgba(255,240,207,1) 0%, rgba(168,144,112,1) 100%)",
              }}
              href="https://x.com/SneakyProds"
              target="_blank"
              rel="noreferrer"
              className="btn border-black"
            >
              <img
                height={50}
                width={50}
                src={`${process.env.PUBLIC_URL}/x-logo.png`}
                alt="X logo"
                className="img-fluid"
              />
            </a>

            <a
              style={{
                background:
                  "radial-gradient(circle at right center, rgba(255,240,207,1) 0%, rgba(250,224,191,1) 51%, rgba(168,144,112,1) 100%)",
              }}
              href="https://discord.com/invite/PF52wHyDe4"
              target="_blank"
              rel="noreferrer"
              className="btn ms-2 border-black"
            >
              <img
                height={50}
                width={50}
                src={`${process.env.PUBLIC_URL}/discord-logo.png`}
                alt="Discord logo"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
