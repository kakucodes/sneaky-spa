// import { AudioPlayer } from "../AudioPlayer/AudioPlayer";

import { Link } from "@tanstack/react-router";

export const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div className="container-xxl pb-3">
        <div className="d-flex justify-content-end align-items-end">
          {/* <div className="mx-2">
            <AudioPlayer />
          </div> */}
          <div
            style={{
              width: 135,
              background:
                "radial-gradient(circle at right center, rgba(255,240,207,1) 0%, rgba(250,224,191,1) 51%, rgba(168,144,112,1) 100%)",
            }}
            className="btn-style border-black row g-2 row-cols-2"
          >
            <div className="col text-center">
              <a
                href="https://x.com/SneakyProds"
                target="_blank"
                rel="noreferrer"
                className=" disabled text-truncate text-decoration-none text-center d-flex flex-column align-items-center"
              >
                <img
                  height={35}
                  width={35}
                  src={`${process.env.PUBLIC_URL}/sneakybox.smol.png`}
                  alt="Sneaky Radio logo"
                  className="img-fluid"
                />
                Radio
              </a>
            </div>
            <div className="col text-center">
              <Link
                to="/shop"
                // href="https://x.com/SneakyProds"
                // target="_blank"
                // rel="noreferrer"
                className="text-truncate text-decoration-none text-center d-flex flex-column align-items-center"
              >
                <img
                  height={35}
                  width={35}
                  src={`${process.env.PUBLIC_URL}/shop-logo.png`}
                  alt="Sneaky Productions shop icon"
                  className="img-fluid"
                />
                Shop
              </Link>
            </div>
            <div className="col text-center">
              <a
                href="https://x.com/SneakyProds"
                target="_blank"
                rel="noreferrer"
                className="text-truncate text-decoration-none text-center d-flex flex-column align-items-center"
              >
                <img
                  height={35}
                  width={35}
                  src={`${process.env.PUBLIC_URL}/x-logo.png`}
                  alt="X logo"
                  className="img-fluid"
                />
                X
              </a>
            </div>
            <div className="col text-center">
              <a
                href="https://discord.com/invite/PF52wHyDe4"
                target="_blank"
                rel="noreferrer"
                className="text-truncate text-decoration-none text-center d-flex flex-column align-items-center"
              >
                <img
                  height={35}
                  width={35}
                  src={`${process.env.PUBLIC_URL}/discord-logo.png`}
                  alt="Discord logo"
                  className="img-fluid"
                />
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
