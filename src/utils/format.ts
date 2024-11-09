import { match, P } from "ts-pattern"

export const formatTokenAmount = (n: number): string =>
    match(n)
        .with(P.number.gte(100).or(P.number.int()), (n) => n.toFixed(0))
        .with(P.number.gt(0), n => n.toFixed(2))
        .otherwise(() => "0️⃣")
