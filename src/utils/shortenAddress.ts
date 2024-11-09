// a function for shortening a bech32 address like stars..abc
export const shortenAddress = (address: string, endCount = 4): string =>
    `${address.slice(0, address.indexOf("1"))}..${address.slice(0 - endCount)}`