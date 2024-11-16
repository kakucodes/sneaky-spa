import { match, P } from "ts-pattern";

export const formatTokenNumber = (n: number): string =>
  match(n)
    .with(P.number.gte(100).or(P.number.int()), (n) => n.toFixed(0))
    .with(P.number.gte(10), (n) => n.toFixed(1))
    .with(P.number.gt(0), (n) => n.toFixed(2))
    .otherwise(() => "0");

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  trailingZeroDisplay: "stripIfInteger",
});

export const formatUsd = usdFormatter.format;

const tokenFormatter = new Intl.NumberFormat(navigator.languages, {
  maximumSignificantDigits: 3,
});

export const formatTokenAmount = (n: number | string, exponents = 0): string =>
  tokenFormatter.format(Number(formatTokenNumber(Number(n) / 10 ** exponents)));
