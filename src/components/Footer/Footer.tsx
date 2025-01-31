import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div className="container-xxl pb-2">
        <div className="d-flex justify-content-between justify-content-md-evenly">
          <div>
            <Link
              href="https://x.com/SneakyProds"
              target="_blank"
              rel="noreferrer"
              className="d-flex flex-column align-items-center link-dark link-underline link-underline-opacity-0 p-1 px-2"
            >
              <Image
                width={32}
                height={32}
                src={`/x-logo.png`}
                alt="X logo"
                className="user-select-none"
              />
              <span className="text-uppercase fw-bold mb-0 small">
                <small>Follow</small>
              </span>
            </Link>
          </div>

          <div>
            <button
              className="btn d-flex flex-column align-items-center p-1 px-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-controls="offcanvasResponsive"
            >
              <Image
                height={32}
                width={32}
                src={`/sneakybox.smol.png`}
                alt="Sneaky Radio logo"
                className="img-fluid"
              />
              <span className="text-uppercase fw-bold mb-0 small">
                <small>Radio</small>
              </span>
            </button>

            <div
              className="offcanvas offcanvas-bottom"
              tabIndex={-1}
              id="offcanvasResponsive"
              aria-labelledby="offcanvasResponsiveLabel"
            >
              <div className="offcanvas-body ">
                <AudioPlayer />
              </div>
              <div className="offcanvas-footer text-center  pt-1">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#offcanvasResponsive"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>

          <div>
            <Link
              href="https://discord.com/invite/PF52wHyDe4"
              target="_blank"
              rel="noreferrer"
              className="d-flex flex-column align-items-center link-dark link-underline link-underline-opacity-0 p-1 px-2"
            >
              <Image
                height={32}
                width={32}
                src={`/discord-logo.png`}
                alt="Discord logo"
                className="user-select-none"
              />
              <span className="text-uppercase fw-bold mb-0 small">
                <small>Discord</small>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
