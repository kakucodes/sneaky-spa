import { useQueryPlushies } from "./useQueryPlushies";

export const Store = () => {
  const { data: plushies } = useQueryPlushies();

  console.log("plushies", plushies);

  return (
    <main>
      <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1 className="text-uppercase display-3 text-nowrap fw-bold mb-0">
          <span data-aos="fade" data-aos-delay="350">
            Sneaky
          </span>{" "}
          <br />
          <span data-aos="fade" data-aos-delay="400">
            Bazaar
          </span>
          <br />
        </h1>
        <p data-aos="fade" data-aos-delay="450">
          Where sneaky dreams <br />
          come true.
        </p>
      </div>
      <div className="row gy-5" style={{ paddingBottom: '12rem' }}>
        {plushies?.items?.length ? (
          plushies.items.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-xxl-4">
              <div className="plushie-item text-center">
                <img
                  src={item.image}
                  style={{ maxWidth: "300" }}
                  alt={item.name}
                  className="img-fluid mb-4"
                />
                <h2 className="mb-0">{item.name}</h2>
                <p className="small mb-4">Based On: {item.basedOn}</p>
                <p className="mb-2">Buy on</p>
                <p>
                  {item.stargazeLink && (
                    <a
                      href={item.stargazeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      Stargaze
                    </a>
                  )}
                  <span>&nbsp;</span>
                  {item.stripeLink && (
                    <a
                      href={item.stripeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      Stripe
                    </a>
                  )}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading plushies...</p>
        )}
      </div>
    </main>
  );
};
