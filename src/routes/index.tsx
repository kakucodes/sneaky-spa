import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import AOS from "aos";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Sneaky Productions",
        description: "All things sneaky",
        // image: `${process.env.PUBLIC_URL}/wenmoon.png`,
      },
    ],
  }),
  //   context: {
  //     headerTitle: "Sneaky Prods",
  //     meta: {
  //       title: "Sneaky Productions",
  //       description: "Sneaky Productions",
  //       image: `${process.env.PUBLIC_URL}/wenmoon.png`,
  //     },
  //   },
});

function Index() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
      {/* <header className="fixed-top">
        <div className="container-xxl">
          <div className="row">
            <div
              className="col aos-init aos-animate"
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-once="true"
              data-aos-anchor="header"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div
                className="d-flex justify-content-start mt-3"
                style={{ transform: "rotate(-3deg)" }}
              >
                <a
                  className="btn d-flex flex-column align-items-center p-1 px-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  role="button"
                >
                  <img
                    id="sneaky"
                    data-aos="fade"
                    src="img/shop-logo.png"
                    width="32"
                    className="user-select-none aos-init aos-animate"
                    alt=""
                  />
                  <span className="d-block text-uppercase fw-bold mb-0 small">
                    <small>Shop</small>
                  </span>
                </a>
              </div>
            </div>
            <div
              className="col aos-init"
              data-aos="fade"
              data-aos-delay="100"
              data-aos-anchor="#sneaky"
              data-aos-anchor-placement="bottom-top"
            >
              <div className="text-center">
                <img
                  src="img/sneaky-productions-logo-sm.png"
                  className="user-select-none"
                  alt=""
                />
              </div>
            </div>
            <div
              className="col aos-init aos-animate"
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-once="true"
              data-aos-anchor="header"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div
                className="d-flex justify-content-end mt-3"
                style={{ transform: "rotate(3deg)" }}
              >
                <a
                  className="btn d-flex flex-column align-items-center disabled p-1 px-2"
                  role="button"
                  aria-disabled="true"
                  title="Sneaky Productions Menu"
                >
                  <img
                    id="sneaky"
                    data-aos="fade"
                    src="img/menu-logo.png"
                    width="32"
                    className="user-select-none aos-init aos-animate"
                    alt=""
                  />
                  <span className="d-block text-uppercase fw-bold mb-0 small">
                    <small>???</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      {/* <div
        className="modal fade"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="row text-center">
                  <h4 className="text-uppercase fw-bold my-4">
                    Sneaky Shop{" "}
                    <span className="badge text-bg-secondary">Alfa</span>
                  </h4>
                  <div className="alert alert-info py-1 pt-2" role="alert">
                    <p className="small mb-0">
                      <b>Note: </b>Prices incl. shipping and handling but{" "}
                      <b>not</b> import duties or taxes. Regions vary.
                    </p>
                  </div>
                </div>
                <div className="row text-center gy-5">
                  <div className="col-12">
                    <h5 className="fw-bold mt-4">Plushies</h5>
                    <p className="mb-5">
                      Soft and cuddly friends with strange and quirky qualities.
                      A limited collection of Sneaky plush toys based on NFTs
                      from Sneaky Productions, and beyond!
                    </p>
                    <div className="row">
                      <div className="col-12 col-lg-6 ps-lg-5">
                        <img
                          src="img/sloth-plushie.png"
                          className="img-fluid mb-3"
                          width="260"
                          alt="..."
                        />
                      </div>
                      <div className="col-12 col-lg-6 d-flex flex-column justify-content-center pe-lg-5">
                        <h6 className="h5 fw-bold mb-1">
                          Celestine Sloth{" "}
                          <span className="badge text-bg-danger">Pre-Sale</span>
                        </h6>
                        <p className="small">Celestine Sloth #884</p>
                        <p className="text-secondary mb-3 lh-1">
                          <b>Available Until</b>
                          <br />
                          End of Cosmoverse, 2024
                        </p>
                        <p className="text-secondary mb-2 lh-1">
                          <b>Ships</b>
                          <br />
                          December, 2024
                        </p>
                        <p className="small">(Includes hands and feet. 😝)</p>
                        <div className="dropdown-center">
                          <a
                            className="btn btn-dark dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Buy
                          </a>
                          <ul className="dropdown-menu text-center">
                            <li>
                              <a
                                className="dropdown-item disabled"
                                href="https://www.stargaze.zone/l/stars1ej3e2nhjgwhtmlsec3vkzw49566syyccl3f75ujr8m6t22ue07sqwz4vmp"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Crypto
                                <br />
                                <span className="small">
                                  <small>(via Stargaze)</small>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="https://buy.stripe.com/eVa3eN5mc8CMgoMfZ5"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Debit/Credit
                                <br />
                                <span className="small">
                                  <small>(via Stripe)</small>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <img
                      src="img/jack-plushie.png"
                      className="img-fluid mb-3"
                      width="260"
                      alt="..."
                    />
                    <h6 className="h5 fw-bold mb-1">Jack Penguin</h6>
                    <p className="small">Sneaky Animals #300</p>
                    <div className="dropdown-center">
                      <a
                        className="btn btn-dark dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Buy
                      </a>
                      <ul className="dropdown-menu text-center">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://www.stargaze.zone/l/stars1ej3e2nhjgwhtmlsec3vkzw49566syyccl3f75ujr8m6t22ue07sqwz4vmp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Crypto
                            <br />
                            <span className="small">
                              <small>(via Stargaze)</small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://buy.stripe.com/bIY02BdSI6uEfkIbIM"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Debit/Credit
                            <br />
                            <span className="small">
                              <small>(via Stripe)</small>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 text-center mt-lg-5">
                    <img
                      src="img/happy-pig-plushie.png"
                      className="img-fluid mb-3"
                      width="260"
                      alt="..."
                    />
                    <h6 className="h5 fw-bold mb-1">Happy Pig</h6>
                    <p className="small">Sneaky Animals #818</p>
                    <div className="dropdown-center">
                      <a
                        className="btn btn-dark dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Buy
                      </a>
                      <ul className="dropdown-menu text-center">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://www.stargaze.zone/l/happypig"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Crypto
                            <br />
                            <span className="small">
                              <small>(via Stargaze)</small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://buy.stripe.com/eVa2aJ9Cs06g7Sg145"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Debit/Credit
                            <br />
                            <span className="small">
                              <small>(via Stripe)</small>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mt-lg-4">
                    <img
                      src="img/jack-and-happy-pig-plushies.png"
                      className="img-fluid mb-3"
                      width="260"
                      alt="..."
                    />
                    <h6 className="h5 fw-bold mb-1">
                      Happy Pig + Jack
                      <br /> Penguin{" "}
                      <span className="badge text-bg-danger">Bundle Deal</span>
                    </h6>
                    <p className="small">Sneaky Animals #818 + #303</p>
                    <div className="dropdown-center">
                      <a
                        className="btn btn-dark dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Buy
                      </a>
                      <ul className="dropdown-menu text-center">
                        <li>
                          <a
                            className="dropdown-item disabled"
                            href="https://www.stargaze.zone/l/happypig"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Crypto
                            <br />
                            <span className="small">
                              <small>(via Stargaze)</small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://buy.stripe.com/8wM2aJg0QdX66OccMR"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Debit/Credit
                            <br />
                            <span className="small">
                              <small>(via Stripe)</small>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-5">
                    <img
                      src="img/bitgirl-plushie.png"
                      className="img-fluid mb-3"
                      width="260"
                      alt="..."
                    />
                    <h6 className="h5 fw-bold mb-1">Bitgirl</h6>
                    <p className="small">Sneaky Transformation #103</p>
                    <div className="dropdown-center">
                      <a
                        className="btn btn-dark dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Buy
                      </a>
                      <ul className="dropdown-menu text-center">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://www.stargaze.zone/l/bitgirl"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Crypto
                            <br />
                            <span className="small">
                              <small>(via Stargaze)</small>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://buy.stripe.com/fZe3eN01SbOYa0o146"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Debit/Credit
                            <br />
                            <span className="small">
                              <small>(via Stripe)</small>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        id="radio"
        className="offcanvas offcanvas-bottom"
        // tabindex="-1"
        aria-labelledby="radio"
      >
        <div className="d-flex justify-content-center py-3">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <p>Soon!</p>
      </div> */}
      <main className="container-xxl">
        <div
          style={{ height: "calc(100vh - 60px)" }}
          className="d-flex flex-column justify-content-center align-items-center dvh-100"
        >
          <div id="title">
            <img
              // id="sneaky"
              data-aos="fade"
              src={`${process.env.PUBLIC_URL}/sneaky-productions-logo.png`}
              className="sneaky-logo user-select-none aos-init aos-animate"
              alt=""
            />
          </div>
        </div>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex flex-column justify-content-center align-items-center dvh-100 overflow-hidden"
        >
          <div
            data-aos="fade"
            className="d-flex flex-column mb-5 aos-init"
            style={{ maxWidth: "404px" }}
          >
            <h1 className="h5 fw-bold mb-1">Sneaky Productions ...</h1>
            <p className="lead text-start fs-6">
              ... taps into the magic of blockchain technology to create digital
              collectibles (NFTs), toys (RWAs), merchandise, and more,{" "}
              <span className="fw-bold">with a sneaky twist</span>.
            </p>
            <p className="lead text-start text-body-secondary fs-6">
              All of our NFTs are 100% hand-drawn, meticulously photographed,
              stored via IPFS, and then indexed on-chain before being unleashed
              on{" "}
              <a
                className="link-dark link-offset-1 link-underline-opacity-100 link-underline-dark"
                href="https://www.stargaze.zone/"
                title="Stargaze: NFT Marketplace"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stargaze
              </a>{" "}
              - <i>a leading NFT marketplace</i>.
            </p>
          </div>
        </div>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex flex-column justify-content-center align-items-center dvh-100 grayscale overflow-hidden"
        >
          <div className="row" style={{ marginBottom: "5rem" }}>
            <div data-aos="fade" className="col-12 aos-init">
              <div className="d-flex flex-column mb-4 mb-md-5">
                <h2 className="h4 text-center text-uppercase fw-bold mb-0">
                  Sneaky Animals
                </h2>
                <p className="text-center">
                  “
                  <span className="fst-italic">
                    Turn your back at your peril
                  </span>
                  ”
                </p>
              </div>
            </div>
            <div data-aos="fade" className="col-12 col-md-6 aos-init">
              <div className="d-flex flex-column align-items-center mt-md-2 mb-5">
                <img
                  className="img-fluid paper z-1"
                  src={`${process.env.PUBLIC_URL}/sneaky-animals-banner-no-bg.png`}
                  width="296"
                  alt=""
                />
              </div>
            </div>
            <div data-aos="fade" className="col-12 col-md-6 mb-5 aos-init">
              <div className="d-flex flex-column" style={{ maxWidth: "430px" }}>
                <h3 className="h6 fw-bold mb-0">Introduction</h3>
                <p className="fs-6 mb-5">
                  <s>1,000</s> <mark>998</mark> cunning critters that exhibit
                  unnerving signs of advanced cognitive abilities, with
                  heightened awareness. They can be offensive, even deadly, but
                  mostly they teeter on the edge of harmlessness.
                </p>
                <h3 className="h6 fw-bold mb-0">Traits</h3>
                <p className="lead fs-6">
                  Each animal bears (pun intended) its own unqiue name, and a
                  mix of six traits: <mark>class</mark>, <mark>species</mark>,{" "}
                  <mark>attack</mark>, <mark>special attack</mark>,{" "}
                  <mark>power</mark>, and <mark>sneakiness</mark>.
                </p>
              </div>
            </div>
            <div data-aos="fade" className="col-12 aos-init">
              <div className="d-flex flex-column mb-5 mb-md-0">
                <p className="fw-bold text-center mb-2">View Collection on</p>
                <ul className="list-inline text-center mb-5">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-sm btn-dark"
                      href="https://www.stargaze.zone/m/sneaky/tokens"
                      title="Browse Sneaky Productions NFTs on Stargaze"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stargaze
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-sm btn-dark"
                      href="https://www.coingecko.com/en/nft/sneaky-animals"
                      title="Browse Sneaky Productions NFTs on CoinGecko"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CoinGecko
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "5rem" }}>
            <div data-aos="fade" className="col-12 aos-init">
              <div className="d-flex flex-column mb-4 mb-md-5">
                <h2 className="h4 text-center text-uppercase fw-bold mb-0">
                  Sneaky Stuff
                </h2>
                <p className="text-center">
                  “
                  <span className="fst-italic">
                    What the f*** is <b>that</b>?!
                  </span>
                  ”
                </p>
              </div>
            </div>
            <div
              data-aos="fade"
              className="col-12 col-md-6 order-md-2 aos-init"
            >
              <div className="d-flex flex-column align-items-center mt-md-2 mb-5 me-lg-5">
                <img
                  className="img-fluid"
                  src={`${process.env.PUBLIC_URL}/sneaky-stuff-banner-no-bg.png`}
                  width="296"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade"
              className="col-12 col-md-6 order-md-1 mb-5 aos-init"
            >
              <div
                className="d-flex flex-column ms-md-4 ms-lg-5"
                style={{ maxWidth: "430px" }}
              >
                <h3 className="h6 fw-bold mb-0">Introduction</h3>
                <p className="fs-6 mb-5">
                  A collection of 420 unique pieces, each featuring mundane,
                  everyday items that have miraculously sprung to life. Imagine
                  your socks developing a personality disorder or your toilet
                  summoning satan.
                </p>
                <h3 className="h6 fw-bold mb-0">Traits</h3>
                <p className="text-body-secondary mb-5">
                  Each “Stuff” has its own name, and its own unique set of six
                  traits (as before): <mark>class</mark>, <mark>species</mark>,{" "}
                  <mark>attack</mark>, <mark>special attack</mark>,{" "}
                  <mark>power</mark>, and, of course, <mark>sneakiness</mark>.
                </p>
              </div>
            </div>
            <div data-aos="fade" className="col-12 order-md-3 aos-init">
              <div className="d-flex flex-column mb-5 mb-md-0">
                <p className="fw-bold text-center mb-2">View Collection on</p>
                <ul className="list-inline text-center mb-5">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-sm btn-dark"
                      href="https://www.stargaze.zone/m/stars1luw5em4jmprng78v2jrzp7p66lzetugdvvq38d9t0gylsut23dpqe686z3/tokens"
                      title="Browse Sneaky Productions NFTs on Stargaze"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stargaze
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-sm btn-dark"
                      href="https://www.coingecko.com/en/nft/sneaky-stuff"
                      title="Browse Sneaky Productions NFTs on CoinGecko"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CoinGecko
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div data-aos="fade" className="col-12 aos-init">
              <div className="d-flex flex-column mb-4 mb-md-5">
                <h2 className="h4 text-center text-uppercase fw-bold mb-0">
                  Sneaky Transformation
                </h2>
                <p className="lead fs-6 text-center">
                  “
                  <span className="fst-italic">
                    From real-life, to real f***ed-up
                  </span>
                  !”
                </p>
              </div>
            </div>
            <div data-aos="fade" className="col-12 col-md-6 aos-init">
              <div className="d-flex flex-column align-items-center mt-md-2 mb-5">
                <img
                  className="img-fluid"
                  src={`${process.env.PUBLIC_URL}/sneaky-transformation-banner-no-bg.png`}
                  width="296"
                  alt=""
                />
              </div>
            </div>
            <div data-aos="fade" className="col-12 col-md-6 aos-init">
              <div
                className="d-flex flex-column mb-5"
                style={{ maxWidth: "430px" }}
              >
                <h3 className="h6 fw-bold mb-0">Introduction</h3>
                <p className="fs-6 mb-5">
                  Imagine anything your twisted mind can conjure up, and we'll
                  bring it to life with a sneaky twist - within reason, of
                  course! A limited collection of user-requested and community
                  approved pieces that can feature anybody, from Jimi Hendrix to
                  The Teletubbies.
                </p>
                <h3 className="h6 fw-bold mb-0">Traits</h3>
                <p className="lead fs-6">
                  Sneaky Transformation has no traits. This allows the
                  collection to be as open as possible in terms of
                  personalization.
                </p>
              </div>
            </div>
            <div data-aos="fade" className="col-12 aos-init">
              <div className="d-flex flex-column mb-5 mb-md-0">
                <p className="fw-bold text-center mb-2">View Collection on</p>
                <ul className="list-inline text-center mb-5">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-sm btn-dark"
                      href="https://www.stargaze.zone/m/stars1axa9hddj5p5vr4agt9ftr957fkxl2accss4e0x70u3882rc2zt5q97gvxs/tokens"
                      title="Browse Sneaky Productions NFTs on Stargaze"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stargaze
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-sm btn-dark"
                      href="https://www.coingecko.com/en/nft/sneaky-transformation"
                      title="Browse Sneaky Productions NFTs on CoinGecko"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CoinGecko
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex flex-column justify-content-center align-items-center dvh-100 overflow-hidden"
        >
          <div className="row">
            <div data-aos="fade" className="col-12 aos-init">
              <div className="d-flex flex-column mb-4 mb-md-5">
                <h2 className="h4 text-center text-uppercase fw-bold mb-0">
                  Sneaky Plushies
                </h2>
                <p className="text-center text-body-secondary">
                  “
                  <span className="fst-italic">
                    From drawing, to NFT, to RWA - the circle of life.
                  </span>
                  ”
                </p>
              </div>
            </div>
            <div
              data-aos="fade"
              className="col-12 col-md-6 order-md-2 aos-init"
            >
              <div className="d-flex flex-column align-items-center mt-md-2 mb-5">
                <img
                  className="img-fluid"
                  src={`${process.env.PUBLIC_URL}/sneaky-plushies-banner.png`}
                  width="296"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade"
              className="col-12 col-md-6 order-md-1 mb-5 aos-init"
            >
              <div
                className="d-flex flex-column ms-md-4 ms-lg-5"
                style={{ maxWidth: "530px" }}
              >
                <h3 className="h6 fw-bold mb-0">Introduction</h3>
                <p className="fs-6">
                  <a
                    className="link-dark link-offset-1 link-underline-opacity-100 link-underline-dark"
                    href="https://www.stargaze.zone/m/sneaky/818"
                    title="Happy Pig from Sneaky Animals"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Happy Pig
                  </a>
                  , a prime specimen from our Sneaky Animals collection, has
                  blasted its way onto the Stargaze marketplace, marking a first
                  in Stargaze and Sneaky Productions history!
                </p>
                <h3 className="h6 fw-bold mb-0">Benefits</h3>
                <p className="lead fs-6">
                  Some Sneaky NFTs take matters into their own hands,
                  materializing into reality as RWAs. This gives all other
                  holders of NFTs with the same <mark>species</mark> trait a
                  nice little reward.
                </p>
                <p className="lead fs-6">
                  Other NFTs can be summoned into the real world by their
                  holders, through our ingenious "Plush Fund" program. Be sure
                  to join our Discord to learn more about that.
                </p>
              </div>
            </div>
            <div data-aos="fade" className="col-12 order-md-3 aos-init">
              <div className="d-flex flex-column align-items-center">
                <a
                  className="btn btn-dark mb-1"
                  href="https://www.stargaze.zone/l/happypig"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mint Now
                </a>
                <p className="lead fs-6">
                  <small>on Stargaze</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex flex-column justify-content-center align-items-center dvh-100 overflow-hidden"
        >
          <div
            data-aos="fade"
            className="d-flex flex-column text-center aos-init"
          >
            <p className="lead fs-6 mb-0">
              <span className="fw-bold">More content coming soon.</span>
            </p>
            <p className="lead fs-6">
              Join our Discord and follow us on Twitter!
            </p>
          </div>
        </div>
      </main>
      {/* <footer className="fixed-bottom">
        <div className="container-xxl">
          <div
            className="row justify-content-center text-center pb-3 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once="true"
            data-aos-anchor="header"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="col d-flex justify-content-end">
              <a
                href="https://discord.com/invite/PF52wHyDe4"
                className="btn d-flex flex-column align-items-center p-1 px-2"
                role="button"
                title="Join the Sneaky Productions Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/discord-logo.png"
                  width="32"
                  className="user-select-none"
                  alt=""
                />
                <span className="text-uppercase fw-bold mb-0 small">
                  <small>Discord</small>
                </span>
              </a>
            </div>
            <div className="col col-xl-3">
              <a
                className="btn d-flex flex-column align-items-center disabled p-1 px-2"
                role="button"
                title="Sneaky Radio"
                data-bs-toggle="offcanvas"
                href="#radio"
                aria-controls="radio"
              >
                <img
                  src="img/radio-logo.png"
                  width="32"
                  className="user-select-none"
                  alt=""
                />
                <span className="text-uppercase fw-bold mb-0 small">
                  <small>Radio</small>
                </span>
              </a>
            </div>
            <div className="col d-flex justify-content-start">
              <a
                href="https://x.com/SneakyProds"
                className="btn d-flex flex-column align-items-center p-1 px-2"
                role="button"
                title="Follow the Sneaky Productions X account"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/x-logo.png"
                  width="32"
                  className="user-select-none"
                  alt=""
                />
                <span className="text-uppercase fw-bold mb-0 small">
                  <small>Follow</small>
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
