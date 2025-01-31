import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1 className="h2 text-uppercase display-3 text-nowrap fw-bold mb-0">
          <span data-aos="fade" data-aos-delay="350">
            Sneaky
          </span>{" "}
          <br />
          <span data-aos="fade" data-aos-delay="400">
            Productions
          </span>
          <br />
        </h1>
        <p data-aos="fade" data-aos-delay="450">
          Home of all things Sneaky. 🐽
        </p>
      </div>

      {/* <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h2 className="align-self-start fw-bold mb-1">Introduction</h2>
        <p className="align-self-start mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          voluptate iste inventore similique ipsum, tempora debitis impedit
          reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea
          cupiditate id optio placeat omnis provident?
        </p>
      </div> */}

      <div
        className="d-flex flex-column justify-content-center align-items-center dvh-100 overflow-hidden"
        style={{ height: "100dvh" }}
      >
        <div
          data-aos="fade"
          className="d-flex flex-column mb-5 aos-init aos-animate"
          style={{ maxWidth: 404 }}
        >
          <h1 className="h5 fw-bold mb-1">Sneaky Productions ...</h1>
          <p className="lead text-start fs-6">
            ... taps into the magic of blockchain technology to create digital
            collectibles (NFTs), toys (RWAs), merchandise, and more,{" "}
            <span className="fw-bold">with a sneaky twist</span>.
          </p>
          <p className="lead text-start text-body-secondary fs-6">
            All of our NFTs are 100% hand-drawn, meticulously photographed,
            stored via IPFS, and then indexed on-chain before being unleashed on{" "}
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

      <div className="d-flex flex-column justify-content-center align-items-center grayscale">
        {/* <h2 className="fw-bold mb-1">NFT Collections</h2>
        <p className="align-self-start" style={{ marginBottom: "5rem" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          voluptate iste inventore similique ipsum, tempora debitis impedit
          reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea
          cupiditate id optio placeat omnis provident?
        </p> */}
        <div className="row" style={{ marginBottom: "5rem" }}>
          <div className="col-12">
            <div className="d-flex flex-column mb-4 mb-md-5">
              <h3 className="text-center text-uppercase fw-bold mb-0">
                Sneaky Animals
              </h3>
              <p className="text-center">
                <span className="fst-italic">
                  “Turn your back, at your peril!”
                </span>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column align-items-center mt-md-2 mb-5">
              <Image
                className="img-fluid paper z-1"
                src={`/sneaky-animals-banner-no-bg.png`}
                width="296"
                height="264"
                alt="Sneaky Animals Banner"
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
                Each animal bears - pun intended - its own unqiue name, and a
                mix of six traits: <mark>class</mark>, <mark>species</mark>,{" "}
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
                  <Link
                    className="btn btn-sm btn-dark"
                    href="https://www.stargaze.zone/m/sneaky/tokens"
                    title="Browse Sneaky Productions NFTs on Stargaze"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stargaze
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    className="btn btn-sm btn-dark"
                    href="https://www.coingecko.com/en/nft/sneaky-animals"
                    title="Browse Sneaky Productions NFTs on CoinGecko"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CoinGecko
                  </Link>
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
                &quot;
                <span className="fst-italic">
                  What the f*** is <b>that</b>?!
                </span>
                &quot;
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-2">
            <div className="d-flex flex-column align-items-center mt-md-2 mb-5 me-lg-5">
              <Image
                className="img-fluid"
                src={`/sneaky-stuff-banner-no-bg.png`}
                width="296"
                height="264"
                alt="Sneaky Stuff Banner"
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
                &quot;
                <span className="fst-italic">
                  From real-life, to real f***ed-up
                </span>
                !&quot;
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column align-items-center mt-md-2 mb-5">
              <Image
                className="img-fluid"
                src={`/sneaky-transformation-banner-no-bg.png`}
                width="296"
                height="264"
                alt="Sneaky Transformation Banner"
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
                Imagine anything your twisted mind can conjure up, and
                we&apos;ll bring it to life with a sneaky twist - within reason,
                of course! A limited collection of user-requested and community
                approved pieces that can feature anybody, from Jimi Hendrix to
                The Teletubbies.
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
                  <Link
                    className="btn btn-sm btn-dark"
                    href="https://www.stargaze.zone/m/stars1axa9hddj5p5vr4agt9ftr957fkxl2accss4e0x70u3882rc2zt5q97gvxs/tokens"
                    title="Browse Sneaky Productions NFTs on Stargaze"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stargaze
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    className="btn btn-sm btn-dark"
                    href="https://www.coingecko.com/en/nft/sneaky-transformation"
                    title="Browse Sneaky Productions NFTs on CoinGecko"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CoinGecko
                  </Link>
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
              <Image
                className="img-fluid paper z-1"
                src={`/sneaky-people-banner-no-bg.png`}
                width="296"
                height={264}
                alt="Sneaky People Banner"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <div className="d-flex flex-column" style={{ maxWidth: "430px" }}>
              <h4 className="fw-bold mb-0">Introduction</h4>
              <p className="fs-6 mb-5">
                A new and upcoming collection of deranged lunatics and
                simpletons who should be classified as an entirely new species
                of human. The laziest, maddest, and sneakiest people around.
                What happened to them?
              </p>
              <h5 className="fw-bold mb-0">Traits</h5>
              <p className="lead fs-6">TBA</p>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column mb-5 mb-md-0">
              <p className="fw-bold text-center mb-2">View Soon on</p>
              <ul className="list-inline text-center mb-5">
                <li className="list-inline-item">
                  <Link
                    className="btn btn-sm btn-dark disabled"
                    href="https://www.stargaze.zone/m/sneaky/tokens"
                    title="Browse Sneaky Productions NFTs on Stargaze"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stargaze
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    className="btn btn-sm btn-dark disabled"
                    href="https://www.coingecko.com/en/nft/sneaky-animals"
                    title="Browse Sneaky Productions NFTs on CoinGecko"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CoinGecko
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <h2 className="fw-bold mb-1">$SNEAKY Token</h2>
          <p className="align-self-start mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            voluptate iste inventore similique ipsum, tempora debitis impedit
            reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea
            cupiditate id optio placeat omnis provident?
          </p>
        </div> */}

        <div className="row" style={{ marginBottom: "5rem" }}>
          <div className="col-12">
            <div className="d-flex flex-column mb-4 mb-md-5">
              <h3 className="text-center text-uppercase fw-bold mb-0">
                Sneaky Plushies
              </h3>
              <p className="lead fs-6 text-center">
                &quot;
                <span className="fst-italic">
                  From drawing, to NFT, to RWA - the circle of life.
                </span>
                &quot;
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column align-items-center mt-md-2 mb-5">
              <Image
                className="img-fluid"
                src={`/sneaky-plushies-banner.png`}
                width="296"
                height="264"
                alt="Sneaky Plushies Banner"
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
                <Link
                  className="link-dark link-offset-1 link-underline-opacity-100 link-underline-dark"
                  href="https://www.stargaze.zone/m/sneaky/818"
                  title="Happy Pig from Sneaky Animals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Happy Pig
                </Link>
                , a prime specimen from our Sneaky Animals collection, has
                blasted its way onto the Stargaze marketplace, marking a first
                in Stargaze and Sneaky Productions history!
              </p>
              <h5 className="fw-bold mb-0">Benefits</h5>
              <p className="lead fs-6">
                Some Sneaky NFTs take matters into their own hands,
                materializing into reality as RWAs. This gives all other holders
                of NFTs with the same <mark>species</mark> trait a nice little
                reward.
              </p>

              <p className="lead fs-6">
                Other NFTs can be summoned into the real world by their holders,
                through our ingenious &quot;Plush Fund&quot; program. Be sure to
                join our Discord to learn more about that.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column mb-5 mb-md-0">
              <p className="fw-bold text-center mb-2"></p>
              <ul className="list-inline text-center mb-5">
                <li className="list-inline-item">
                  <Link
                    className="btn btn-sm btn-dark"
                    href="/shop"
                    title="Browse Sneaky Plushies"
                    role="button"
                    // target="_blank"
                    // rel="noopener noreferrer"
                  >
                    Visit the Sneaky Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <h2 className="fw-bold mb-1">Trading Cards</h2>
          <p className="align-self-start mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            voluptate iste inventore similique ipsum, tempora debitis impedit
            reprehenderit. Doloremque excepturi itaque exercitationem sequi, ea
            cupiditate id optio placeat omnis provident?
          </p>
        </div> */}
      </div>
    </main>
  );
}
