import { match } from "ts-pattern";
import { StoreItem } from "../../utils/storeItems";
import Image from "next/image";

const monthAndDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long", // 'long' gives you the full month name
  year: "numeric", // 'numeric' gives you the full year
});

export const StorePlushie = ({
  plushie: {
    image,
    name,
    basedOn,
    isBundleDeal,
    presaleUntil,
    shippingStart,
    stargazeLink,
    stripeLink,
    note,
  },
  layout,
}: {
  plushie: StoreItem;
  layout: "horizontal" | "horizontal-reverse" | "vertical";
}) => {
  const inPresalePhase = presaleUntil && new Date() < new Date(presaleUntil);
  const inPreshippingPhase =
    shippingStart && new Date() < new Date(shippingStart);

  const ItemImage = (
    <div
      className={layout === "vertical" ? "col-12" : "col-12 col-lg-6 ps-lg-5"}
    >
      <Image
        src={image}
        className="img-fluid "
        alt={`Plushie based on ${basedOn}`}
        width={250}
        height={250}
        objectFit="contain"
      />
    </div>
  );

  return (
    <div
      className={
        "d-flex justify-content-between align-items-center " +
        match(layout)
          .with("vertical", () => "flex-column h-100 ")
          .with("horizontal", () => "flex-row w-100")
          .with("horizontal-reverse", () => "flex-row-reverse w-100")
          .exhaustive()
      }
    >
      {ItemImage}
      <div
        style={{ minHeight: "250px" }}
        className={`${
          layout === "vertical" ? "col-12" : "col-12 col-lg-6"
        } d-flex flex-column justify-content-center align-items-center`}
      >
        <h6 className="h5 fw-bold mb-1">
          {name}{" "}
          {inPresalePhase && (
            <span className="badge text-bg-danger">Pre-Sale</span>
          )}
          {isBundleDeal && (
            <span className="badge text-bg-danger">Bundle Deal</span>
          )}
        </h6>
        <p className="small">{basedOn}</p>
        {inPresalePhase && presaleUntil && (
          <p className="text-secondary mb-3 lh-1">
            <b>Available Until</b>
            <br />
            {monthAndDateFormatter.format(presaleUntil).replace(" ", ", ")}
          </p>
        )}
        {shippingStart && inPreshippingPhase && (
          <p className="text-secondary mb-2 lh-1">
            <b>Ships</b>
            <br />
            {monthAndDateFormatter.format(shippingStart).replace(" ", ", ")}
          </p>
        )}
        {note && <p className="small">{note}</p>}
        <div className="dropdown-center">
          <button
            className="btn btn-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Buy
          </button>
          <ul className="dropdown-menu text-center">
            <li>
              <a
                className={`dropdown-item ${stargazeLink ? "" : "disabled"}`}
                href={stargazeLink}
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
                className={`dropdown-item ${stripeLink ? "" : "disabled"}`}
                href={stripeLink}
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

      {/* {layout === "horizontal-reverse" && ItemImage} */}
    </div>
  );
};
