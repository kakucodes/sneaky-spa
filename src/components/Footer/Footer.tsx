import { AudioPlayer } from "../AudioPlayer/AudioPlayer";

export const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div className="container-xxl pb-2">
        <div className="d-flex justify-content-between justify-content-md-evenly">
          <div>
            <a
              href="https://x.com/SneakyProds"
              target="_blank"
              rel="noreferrer"
              className="d-flex flex-column align-items-center link-dark link-underline link-underline-opacity-0 p-1 px-2"
            >
              <img
                width={32}
                src={`${process.env.PUBLIC_URL}/x-logo.png`}
                alt="X logo"
                className="user-select-none"
              />
              <span className="text-uppercase fw-bold mb-0 small">
                <small>Follow</small>
              </span>
            </a>
          </div>

          <div>
            <button
              className="btn d-flex flex-column align-items-center p-1 px-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-controls="offcanvasResponsive"
            >
              <img
                height={32}
                width={32}
                src={`${process.env.PUBLIC_URL}/sneakybox.smol.png`}
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
              <div className="offcanvas-body bg-white">
                <AudioPlayer />
              </div>
              <div className="offcanvas-footer text-center pt-4">
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
            <a
              href="https://discord.com/invite/PF52wHyDe4"
              target="_blank"
              rel="noreferrer"
              className="d-flex flex-column align-items-center link-dark link-underline link-underline-opacity-0 p-1 px-2"
            >
              <img
                width={32}
                src={`${process.env.PUBLIC_URL}/discord-logo.png`}
                alt="Discord logo"
                className="user-select-none"
              />
              <span className="text-uppercase fw-bold mb-0 small">
                <small>Discord</small>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
