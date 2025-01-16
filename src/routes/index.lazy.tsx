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
      <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1 className="h2 text-uppercase display-3 text-nowrap fw-bold mb-0">
          <span data-aos="fade" data-aos-delay="350">Sneaky</span> <br />
          <span data-aos="fade" data-aos-delay="400">Productions</span>
          <br />
        </h1>
        <p data-aos="fade" data-aos-delay="450">Home of all things Sneaky. 🐽</p>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h2 className="align-self-start fw-bold mb-1">Introduction</h2>
        <p className="align-self-start mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptate iste inventore similique ipsum, tempora debitis impedit reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea cupiditate id optio placeat omnis provident?</p>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center grayscale">
      <h2 className="fw-bold mb-1">NFT Collections</h2>
      <p className="align-self-start" style={{ marginBottom: "5rem" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptate iste inventore similique ipsum, tempora debitis impedit reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea cupiditate id optio placeat omnis provident?</p>
        <div className="row" style={{ marginBottom: "5rem" }}>
          <div className="col-12">
            <div className="d-flex flex-column mb-4 mb-md-5">
              <h3 className="text-center text-uppercase fw-bold mb-0">
                Sneaky Animals
              </h3>
              <p className="text-center">
                <span className="fst-italic">“Turn your back, at your peril!”</span>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column align-items-center mt-md-2 mb-5">
              <img
                className="img-fluid paper z-1"
                src={`${process.env.PUBLIC_URL}/sneaky-animals-banner-no-bg.png`}
                width="296"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <div className="d-flex flex-column" style={{ maxWidth: "430px" }}>
              <h4 className="fw-bold mb-0">Introduction</h4>
              <p className="fs-6 mb-5">
                <s>1,000</s> <mark>998</mark> cunning critters that exhibit
                unnerving signs of advanced cognitive abilities, with heightened
                awareness. They can be offensive, even deadly, but mostly they
                teeter on the edge of harmlessness.
              </p>
              <h5 className="fw-bold mb-0">Traits</h5>
              <p className="lead fs-6">
                Each animal bears - pun intended - its own unqiue name, and a mix
                of six traits: <mark>class</mark>, <mark>species</mark>,{" "}
                <mark>attack</mark>, <mark>special attack</mark>,{" "}
                <mark>power</mark>, and <mark>sneakiness</mark>.
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
              <h4 className="fw-bold mb-0">Introduction</h4>
              <p className="fs-6 mb-5">
                A collection of 420 unique pieces, each featuring mundane,
                everyday items that have miraculously sprung to life. Imagine
                your socks developing a personality disorder or your toilet
                summoning satan.
              </p>
              <h5 className="fw-bold mb-0">Traits</h5>
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
              <h4 className="fw-bold mb-0">Introduction</h4>
              <p className="fs-6 mb-5">
                Imagine anything your twisted mind can conjure up, and we'll
                bring it to life with a sneaky twist - within reason, of course!
                A limited collection of user-requested and community approved
                pieces that can feature anybody, from Jimi Hendrix to The
                Teletubbies.
              </p>
              <h5 className="fw-bold mb-0">Traits</h5>
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
              <h4 className="fw-bold mb-0">Introduction</h4>
              <p className="fs-6 mb-5">
                A new and upcoming collection of deranged lunatics and simpletons who should be classified as an entirely new species of human. The laziest, maddest, and sneakiest people around. What happened to them?
              </p>
              <h5 className="fw-bold mb-0">Traits</h5>
              <p className="lead fs-6">
                TBA
              </p>
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
          <h2 className="fw-bold mb-1">$SNEAKY Token</h2>
          <p className="align-self-start mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptate iste inventore similique ipsum, tempora debitis impedit reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea cupiditate id optio placeat omnis provident?</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <h2 className="fw-bold mb-1">Plushies</h2>
          <p className="align-self-start mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptate iste inventore similique ipsum, tempora debitis impedit reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea cupiditate id optio placeat omnis provident?</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <h2 className="fw-bold mb-1">Trading Cards</h2>
          <p className="align-self-start mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptate iste inventore similique ipsum, tempora debitis impedit reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea cupiditate id optio placeat omnis provident?</p>
        </div>

      </div>
    </main>
  );
}