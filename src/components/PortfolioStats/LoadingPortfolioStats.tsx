export const LoadingPorfolioStats = () => (
  <div>
    <div className="d-flex justify-content-end align-items-center py-1 px-3">
      <span>&nbsp;</span>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h3 className="text-uppercase fw-bold h4 mt-4">
        <span>Loading Portfolio...</span>
      </h3>
    </div>
  </div>
);
