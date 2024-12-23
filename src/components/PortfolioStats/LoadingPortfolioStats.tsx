export const LoadingPorfolioStats = () => (
  <div className={`border-bottom mb-5`}>
    <div className="d-flex justify-content-end align-items-center py-1 px-3">
      <a href="#" className=" ">
        &nbsp;
      </a>
    </div>
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center "
      style={{ height: "25vh" }}
    >
      <h3 className="text-uppercase fw-bold h4 mb-2">
        Loading Sneaky Portfolio
      </h3>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
);
