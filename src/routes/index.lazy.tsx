import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
  // head: () => ({
  //   meta: [
  //     {
  //       title: 'Sneaky Productions',
  //       description: 'All things sneaky',
  //       // image: `${process.env.PUBLIC_URL}/wenmoon.png`,
  //     },
  //   ],
  // }),
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
  return (
    <main>

      {/* Introduction */}
      <div className="d-flex flex-column justify-content-center align-items-center text-center intro-bg dvh-100">
        
        <h1 className="text-uppercase display-3 text-nowrap text-stroke-white fw-bold mb-0">
          <span data-aos="fade" data-aos-delay="350">
            Sneaky
          </span>{" "}
          <br />
          <span data-aos="fade" data-aos-delay="400">
            Productions
          </span>
          <br />
        </h1>
        
        <p data-aos="fade" data-aos-delay="450" className="text-nowrap mb-0">
          We create sneaky, hand-drawn{" "}
          <abbr title="Non-Fungible Token" className="initialism">
            NFT
          </abbr>
          <br /> pieces featuring animals, people,
          <br /> and "stuff". 🐽
        </p>
      
      </div>

      <div className="d-flex flex-column align-items-center text-center my-5">
        <h2 className="custom-border pt-1 px-2">Main Collections</h2>
        <p className="fst-italic fw-bold">“Good artists copy, great artists steal.”</p>
      </div>

      <div className="row gy-0 gy-lg-5">
        <div className="col-12 col-md-6 col-xl-4">
          <div className="d-flex flex-column justify-content-center align-items-center text-center p-sm-5 p-md-4 p-xl-5 p-xxl-4">
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/sneaky-people-banner-no-bg.png`}
              alt=""
              style={{ maxWidth: '420px', width: '100%', height: 'auto' }}
            />
            <h3 className="my-3">Sneaky People</h3>
            <p>Some say they ate the yellow snow, others say they got into grandpa's old medicine cabinet. Either way, this legion of 999 sneaky people is well on its way to full devolution. Trust them, if you dare.</p>
            <h4 className="my-3">Traits</h4>
            <p className="lh-lg"><mark>class</mark>&nbsp;<mark>profession</mark>&nbsp;<mark>attack</mark>&nbsp;<mark>special attack</mark>&nbsp;<mark>power</mark>&nbsp;<mark>sneakiness</mark></p>
            <h5 className="my-4">View Collection On</h5>
            <div>
            <a className="btn btn-sm btn-outline-dark disabled" href="https://" title="" role="button" target="_blank" rel="noopener noreferrer"><span>Stargaze</span></a>
            &nbsp;
            <a className="btn btn-sm btn-outline-dark disabled" href="https://" title="" role="button" target="_blank" rel="noopener noreferrer"><span>CoinGecko</span></a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4">
        <div className="d-flex flex-column justify-content-center align-items-center text-center p-sm-5 p-md-4 p-xl-5 p-xxl-4">
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/sneaky-animals-banner-no-bg.png`}
              alt=""
              style={{ maxWidth: '420px', width: '100%', height: 'auto' }}
            />
            <h3 className="my-3">Sneaky Animals</h3>
            <p>998 cunning critters that exhibit unnerving signs of advanced cognitive abilities, with heightened awareness. They can be offensive, and even deadly, but mostly they teeter on the edge of harmlessness.</p>
            <h4 className="my-3">Traits</h4>
            <p className="lh-lg"><mark>class</mark>&nbsp;<mark>species</mark>&nbsp;<mark>attack</mark>&nbsp;<mark>special attack</mark>&nbsp;<mark>power</mark>&nbsp;<mark>sneakiness</mark></p>
            <h5 className="my-4">View Collection On</h5>
            <div>
            <a className="btn btn-sm btn-outline-dark" href="https://www.stargaze.zone/m/sneaky/tokens" title="" role="button" target="_blank" rel="noopener noreferrer"><span>Stargaze</span></a>
            &nbsp;
            <a className="btn btn-sm btn-outline-dark" href="https://www.coingecko.com/en/nft/sneaky-animals" title="" role="button" target="_blank" rel="noopener noreferrer"><span>CoinGecko</span></a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4">
        <div className="d-flex flex-column justify-content-center align-items-center text-center p-sm-5 p-md-4 p-xl-5 p-xxl-4">
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/sneaky-stuff-banner-no-bg.png`}
              alt=""
              style={{ maxWidth: '420px', width: '100%', height: 'auto' }}
            />
            <h3 className="my-3">Sneaky Stuff</h3>
            <p>A collection of 420 unique pieces, each featuring mundane, everyday items that have miraculously sprung to life. Imagine your socks developing a personality disorder or your toilet summoning satan.</p>
            <h4 className="my-3">Traits</h4>
            <p className="lh-lg"><mark>class</mark>&nbsp;<mark>species</mark>&nbsp;<mark>attack</mark>&nbsp;<mark>special attack</mark>&nbsp;<mark>power</mark>&nbsp;<mark>sneakiness</mark></p>
            <h5 className="my-4">View Collection On</h5>
            <div>
            <a className="btn btn-sm btn-outline-dark" href="https://www.stargaze.zone/m/stars1luw5em4jmprng78v2jrzp7p66lzetugdvvq38d9t0gylsut23dpqe686z3/tokens" title="" role="button" target="_blank" rel="noopener noreferrer"><span>Stargaze</span></a>
            &nbsp;
            <a className="btn btn-sm btn-outline-dark" href="https://www.coingecko.com/en/nft/sneaky-stuff" title="" role="button" target="_blank" rel="noopener noreferrer"><span>CoinGecko</span></a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4 mx-auto">
        <div className="d-flex flex-column justify-content-center align-items-center text-center p-sm-5 p-md-4 p-xl-5 p-xxl-4">
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/sneaky-transformation-banner-no-bg.png`}
              alt=""
              style={{ maxWidth: '420px', width: '100%', height: 'auto' }}
            />
            <h3 className="text-nowrap my-3">Sneaky Transformation</h3>
            <p>Imagine anything your mind can conjure, and bring it to life with a sneaky twist - within reason! A limited collection of community approved pieces that can feature anybody, from Kurt Cobain to The Teletubbies.</p>
            <h4 className="my-3">Traits</h4>
            <p className="lh-lg">🐽 <br />No traits!</p>
            <h5 className="my-4">View Collection On</h5>
            <div>
            <a className="btn btn-sm btn-outline-dark" href="https://www.stargaze.zone/m/stars1axa9hddj5p5vr4agt9ftr957fkxl2accss4e0x70u3882rc2zt5q97gvxs/tokens" title="" role="button" target="_blank" rel="noopener noreferrer"><span>Stargaze</span></a>
            &nbsp;
            <a className="btn btn-sm btn-outline-dark" href="https://www.coingecko.com/en/nft/sneaky-transformation" title="" role="button" target="_blank" rel="noopener noreferrer"><span>CoinGecko</span></a>
            </div>
          </div>
        </div>
      </div>


      <div className="d-flex flex-column align-items-center text-center my-5">
        <h2 className="custom-border pt-1 px-2">Side Pieces</h2>
        <p className="fst-italic fw-bold">“Art is never finished, only abandoned.”</p>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column align-items-center">
            <div className="mb-4">
              <div className="d-flex align-items-center">
                <div>
                  <h4 className="mb-0 mx-3">Sneaky World</h4>
                  <p className="small mb-0 mx-3">Open Edition</p>
                </div>
                <p className="small mb-0"><span className="badge text-bg-dark">266 Pcs.</span></p>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-center">
                <div>
                  <h4 className="mb-0 mx-3">Sneaky Heaven</h4>
                  <p className="small mb-0 mx-3">Open Edition</p>
                </div>
                <p className="small mb-0"><span className="badge text-bg-dark">86 Pcs.</span></p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="d-flex align-items-center">
                <div>
                  <h4 className="mb-0 mx-3">Sneaky Hell</h4>
                  <p className="small mb-0 mx-3">Open Edition</p>
                </div>
                <p className="small mb-0"><span className="badge text-bg-dark">92 Pcs.</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column align-items-center">          
            <div className="mb-4">
              <div className="d-flex align-items-center">
                <div>
                  <h4 className="mb-0 mx-3">Sneaky Food</h4>
                  <p className="small mb-0 mx-3">Open Edition</p>
                </div>
                <p className="small mb-0"><span className="badge text-bg-dark">816 Pcs.</span></p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="d-flex align-items-center">
                <div>
                  <h4 className="mb-0 mx-3">Unlucky Pig</h4>
                  <p className="small mb-0 mx-3">Open Edition</p>
                </div>
                <p className="small mb-0"><span className="badge text-bg-dark">84 Pcs.</span></p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="d-flex align-items-center">
                <div>
                  <h4 className="mb-0 mx-3">Sneaky Riddler</h4>
                  <p className="small mb-0 mx-3">Open Edition</p>
                </div>
                <p className="small mb-0"><span className="badge text-bg-dark">161 Pcs.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center text-center my-5">
        <h2 className="custom-border pt-1 px-2">Plushies & Cards</h2>
        <p className="fst-italic fw-bold">“From drawing, to NFT, to RWA - the circle of life.”</p>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6 text-center">
          <img
              className="img-fluid p-4"
              src={`${process.env.PUBLIC_URL}/sneaky-plushies-banner.png`}
              alt=""
              style={{ maxWidth: '420px', width: '100%', height: 'auto' }}
            />
        </div>
        <div className="col-12 col-sm-6 text-center">
          <img
              className="img-fluid p-4"
              src={`${process.env.PUBLIC_URL}/sneaky-cards-banner-no-bg.png`}
              alt=""
              style={{ maxWidth: '420px', width: '100%', height: 'auto' }}
            />
        </div>
      </div>

      <div className="d-flex justify-content-center my-5" style={{ paddingBottom: '8rem' }}>
        <a className="btn btn-outline-dark" href={`${process.env.PUBLIC_URL}/shop`} role="button">Visit Shop</a>
      </div>

{/* 
      <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1 className="text-uppercase display-3 text-nowrap fw-bold mb-0">
          <span data-aos="fade" data-aos-delay="350">
            Sneaky
          </span>{" "}
          <br />
          <span data-aos="fade" data-aos-delay="400">
            Productions
          </span>
          <br />
        </h1>
        <p data-aos="fade" data-aos-delay="450" className="text-nowrap mb-0">
          We create sneaky, hand-drawn{" "}
          <abbr title="Non-Fungible Token" className="initialism">
            NFT
          </abbr>
          <br /> pieces featuring animals, people,
          <br /> and "stuff". 🐽
        </p>
      </div>

      <div className="text-center mb-4">
        <h2 className="fw-bold mb-1">Our Collections</h2>
        <p className="mb-1">
          Sneaky Productions consists of 4 main{" "}
          <abbr title="Non-Fungible Token" className="initialism">
            NFT
          </abbr>
          <br /> collections, 6 “Open Edition” or “1/1”
          <br /> limited collections, and 5{" "}
          <abbr title="Real-World Assets" className="initialism">
            RWAs
          </abbr>
          .
        </p>
        <button
          className="btn btn-link"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collectionList"
          aria-expanded="false"
          aria-controls="collectionList"
        >
          <span>View</span>
        </button>
      </div>

      <div id="collectionList" className="collapse">
        <div className="row text-center mb-4">
          <div className="col-12 col-lg-4 mb-2 mb-lg-0 mt-lg-4">
            <h3 className="h4 fw-bold mb-0">Main Collections</h3>
            <ul className="list-unstyled">
              <li>Sneaky Transformation</li>
              <li>Sneaky Animals</li>
              <li>Sneaky People</li>
              <li>Sneaky Stuff</li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 mb-2 mb-lg-0">
            <h3 className="h4 fw-bold mb-0">Limited Collections</h3>
            <ul className="list-unstyled">
              <li>Sneaky Riddler</li>
              <li>Sneaky Heaven</li>
              <li>Sneaky World</li>
              <li>Sneaky Food</li>
              <li>Unlucky Pig</li>
              <li>Sneaky Hell</li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 mb-2 mb-lg-0 mt-lg-3">
            <h3 className="h4 fw-bold mb-0">Real-World Assets</h3>
            <ul className="list-unstyled">
              <li>Celestine Sloth (#884)</li>
              <li>Mad Scientist</li>
              <li>Jack Penguin</li>
              <li>Happy Pig</li>
              <li>Bitgirl</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-12 col-lg-4">
          <img
            className="img-fluid paper z-1"
            src={`${process.env.PUBLIC_URL}/sneaky-animals-banner-no-bg.png`}
            width="296"
            alt=""
          />
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold mb-1">Sneaky Animals</h2>
          <p className="text-nowrap">
            <s>1,000</s> <mark>998</mark> critters that show signs of
            <br /> advanced cognition, with heightened
            <br /> awareness. Known to be offensive,
            <br /> - even deadly - but mostly
            <br /> harmmless. 👀
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <img
            className="img-fluid paper z-1"
            src={`${process.env.PUBLIC_URL}/sneaky-animals-banner-no-bg.png`}
            width="296"
            alt=""
          />
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <h3 className="h4 fw-bold">Traits</h3>
          <p className="">
            Each animal has its own name, with a mix of six traits:{" "}
            <mark>class</mark>, <mark>species</mark>, <mark>attack</mark>,{" "}
            <mark>special attack</mark>, <mark>power</mark>, and{" "}
            <mark>sneakiness</mark>.
          </p>
        </div>
        <div className="col-12 col-lg-4">

        </div>
        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <div>
            <h3 className="h5 fw-bold">View Collection On</h3>
            <a
              className="btn btn-outline-dark"
              href="https://www.stargaze.zone/m/sneaky/tokens"
              title="Browse Sneaky Productions NFTs on Stargaze"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stargaze
            </a>
            &nbsp;
            <a
              className="btn btn-outline-dark"
              href="https://www.coingecko.com/en/nft/sneaky-animals"
              title="Browse Sneaky Productions NFTs on CoinGecko"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              CoinGecko
            </a>
          </div>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-12 col-lg-4">
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold mb-1">Sneaky Stuff</h2>
          <p className="text-nowrap">
            <s>1,000</s> <mark>998</mark> critters that show signs of
            <br /> advanced cognition, with heightened
            <br /> awareness. Known to be offensive,
            <br /> - even deadly - but mostly
            <br /> harmmless. 👀
          </p>
        </div>
        <div className="col-12 col-lg-4">

        </div>
        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <h3 className="h4 fw-bold">Traits</h3>
          <p className="">
            Each animal has its own name, with a mix of six traits:{" "}
            <mark>class</mark>, <mark>species</mark>, <mark>attack</mark>,{" "}
            <mark>special attack</mark>, <mark>power</mark>, and{" "}
            <mark>sneakiness</mark>.
          </p>
        </div>
        <div className="col-12 col-lg-4">
          <img
            className="img-fluid paper z-1"
            src={`${process.env.PUBLIC_URL}/sneaky-animals-banner-no-bg.png`}
            width="296"
            alt=""
          />
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <div>
            <h3 className="h5 fw-bold">View Collection On</h3>
            <a
              className="btn btn-outline-dark"
              href="https://www.stargaze.zone/m/sneaky/tokens"
              title="Browse Sneaky Productions NFTs on Stargaze"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stargaze
            </a>
            &nbsp;
            <a
              className="btn btn-outline-dark"
              href="https://www.coingecko.com/en/nft/sneaky-animals"
              title="Browse Sneaky Productions NFTs on CoinGecko"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              CoinGecko
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center grayscale">
        <div className="row" style={{ marginBottom: "5rem" }}>
          <div className="col-12">
            <div className="d-flex flex-column mb-4 mb-md-5">
              <h3 className="text-center text-uppercase fw-bold mb-0">
                Sneaky Stuff
              </h3>
              <p className="text-center">
                “
                <span className="fst-italic">
                  What the f*** is <b>that</b>?!
                </span>
                ”
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-2">
            <div className="d-flex flex-column align-items-center mt-md-2 mb-5 me-lg-5">
              <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/sneaky-stuff-banner-no-bg.png`}
                width="296"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-1 mb-5">
            <div
              className="d-flex flex-column ms-md-4 ms-lg-5"
              style={{ maxWidth: "430px" }}
            >
              <p className="fs-6 mb-5">
                A collection of 420 unique pieces, each featuring mundane,
                everyday items that have miraculously sprung to life. Imagine
                your socks developing a personality disorder or your toilet
                summoning satan.
              </p>
              <h4 className="h5 fw-bold mb-0">Traits</h4>
              <p className="text-body-secondary mb-5">
                Each “Stuff” has its own name, and its own unique set of six
                traits (as before): <mark>class</mark>, <mark>species</mark>,{" "}
                <mark>attack</mark>, <mark>special attack</mark>,{" "}
                <mark>power</mark>, and, of course, <mark>sneakiness</mark>.
              </p>
            </div>
          </div>
          <div className="col-12 order-md-3">
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

        <div className="row" style={{ marginBottom: "5rem" }}>
          <div className="col-12">
            <div className="d-flex flex-column mb-4 mb-md-5">
              <h3 className="text-center text-uppercase fw-bold mb-0">
                Sneaky Transformation
              </h3>
              <p className="lead fs-6 text-center">
                “
                <span className="fst-italic">
                  From real-life, to real f***ed-up
                </span>
                !”
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column align-items-center mt-md-2 mb-5">
              <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/sneaky-transformation-banner-no-bg.png`}
                width="296"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div
              className="d-flex flex-column mb-5"
              style={{ maxWidth: "430px" }}
            >
              <p className="fs-6 mb-5">
                Imagine anything your twisted mind can conjure up, and we'll
                bring it to life with a sneaky twist - within reason, of course!
                A limited collection of user-requested and community approved
                pieces that can feature anybody, from Jimi Hendrix to The
                Teletubbies.
              </p>
              <h4 className="h5 fw-bold mb-0">Traits</h4>
              <p className="lead fs-6">
                Sneaky Transformation has no traits. This allows the collection
                to be as open as possible in terms of personalization.
              </p>
            </div>
          </div>
          <div className="col-12">
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

        <div className="row" style={{ marginBottom: "5rem" }}>
          <div className="col-12">
            <div className="d-flex flex-column mb-4 mb-md-5">
              <h3 className="text-center text-uppercase fw-bold mb-0">
                Sneaky People
              </h3>
              <p className="text-center">
                <span className="fst-italic">“From worse to worst.”</span>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column align-items-center mt-md-2 mb-5">
              <img
                className="img-fluid paper z-1"
                src={`${process.env.PUBLIC_URL}/sneaky-people-banner-no-bg.png`}
                width="296"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <div className="d-flex flex-column" style={{ maxWidth: "430px" }}>
              <p className="fs-6 mb-5">
                A new and upcoming collection of deranged lunatics and
                simpletons who should be classified as an entirely new species
                of human. The laziest, maddest, and sneakiest people around.
                What happened to them?
              </p>
              <h4 className="h5 fw-bold mb-0">Traits</h4>
              <p className="lead fs-6">TBA</p>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column mb-5 mb-md-0">
              <p className="fw-bold text-center mb-2">View Soon on</p>
              <ul className="list-inline text-center mb-5">
                <li className="list-inline-item">
                  <a
                    className="btn btn-sm btn-dark disabled"
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
                    className="btn btn-sm btn-dark disabled"
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

        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <h2 className="fw-bold mb-1">Plushies</h2>
          <p className="align-self-start mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            voluptate iste inventore similique ipsum, tempora debitis impedit
            reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea
            cupiditate id optio placeat omnis provident?
          </p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <h2 className="fw-bold mb-1">$SNEAKY Token</h2>
          <p className="align-self-start mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            voluptate iste inventore similique ipsum, tempora debitis impedit
            reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea
            cupiditate id optio placeat omnis provident?
          </p>
        </div>
      </div>
 */}
    </main>
  );
}
