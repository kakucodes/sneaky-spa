import { useMemo } from "react";
import { STORE_PLUSHIES } from "../../config";
import { StorePlushie } from "./StorePlushie";

const gridLabels: ("horizontal" | "horizontal-reverse" | "vertical")[] = [
  "vertical",
  "horizontal",
  "horizontal-reverse",
  "horizontal",
  "horizontal-reverse",
  "vertical",
];

const getLabel = (cellIndex: number) =>
  gridLabels[cellIndex % gridLabels.length];

export const Store = () => {
  const StoreItems = STORE_PLUSHIES.map((plushieInfo, i) => {
    const layout = getLabel(i);
    return (
      <div
        key={plushieInfo.name}
        className={(layout === "vertical" ? "col-4 " : "") + " p-3"}
      >
        <StorePlushie plushie={plushieInfo} layout={layout} />
      </div>
    );
  });

  let GroupedStoreItems = useMemo(() => {
    let grouped: JSX.Element[][] = Array.from(
      { length: Math.ceil(StoreItems.length / 3) },
      () => []
    );
    StoreItems.forEach((item, i) => {
      grouped[Math.floor(i / 3)]?.push(item);
    });

    return grouped;
  }, [StoreItems]);

  return (
    <div className="container-fluid">
      <div className="row text-center">
        <h4 className="text-uppercase fw-bold my-4">
          Sneaky Shop <span className="badge text-bg-secondary">Alfa</span>
        </h4>
        <div className="alert alert-info py-1 pt-2" role="alert">
          <p className="small mb-0">
            <b>Note: </b>Prices incl. shipping and handling but <b>not</b>{" "}
            import duties or taxes. Regions vary.
          </p>
        </div>
      </div>
      <div className="row text-center gy-5">
        <div className="col-12">
          <h5 className="fw-bold mt-4">Plushies</h5>
          <p className="mb-5">
            Soft and cuddly friends with strange and quirky qualities. A limited
            collection of Sneaky plush toys based on NFTs from Sneaky
            Productions, and beyond!
          </p>
          <div className="container">
            {GroupedStoreItems.map((group, i, allGroups) => {
              const isEvenRow = i % 2 === 0;
              const VerticalCell = group[isEvenRow ? 0 : 2];
              const HorizontalCell = (
                <div
                  style={
                    isEvenRow
                      ? { borderLeft: "3px solid #DDD" }
                      : { borderRight: "3px solid #DDD" }
                  }
                  className={`col-12 col-md-8 `}
                >
                  <div className="row g-0 h-100 border-right">
                    <div className="col-12">
                      <div
                        style={{ borderBottom: "3px solid #DDD" }}
                        className=" grid-cell "
                      >
                        {group[isEvenRow ? 1 : 0]}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="grid-cell ">
                        {group[isEvenRow ? 2 : 1]}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return (
                <div
                  key={i}
                  style={
                    i + 1 < allGroups.length
                      ? { borderBottom: "3px solid #DDD" }
                      : {}
                  }
                  className={`row g-0 `}
                >
                  {isEvenRow ? (
                    <>
                      {VerticalCell}
                      {HorizontalCell}
                    </>
                  ) : (
                    <>
                      {HorizontalCell}
                      {VerticalCell}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
