import { useState } from "react";
import { useQuerySneakyTokens } from "../../hooks/useQuerySneakyTokens"
import { useAccount, useDisconnect } from "graz";
import { useQueryStargazeName } from "../../hooks/useQueryStargazeName/useQueryStargazeName";
import { shortenAddress } from "../../utils/shortenAddress";
import { match, P } from "ts-pattern";
import { formatTokenAmount } from "../../utils/format";

export const ConnectedButton = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { disconnect } = useDisconnect()
    const { data: walletData } = useAccount()
    const { data: sneakyBalance, isLoading: isSneakyBalanceLoading } = useQuerySneakyTokens()

    const { data: sgName } = useQueryStargazeName()

    const name = sgName || (walletData && (walletData.name || shortenAddress(walletData.bech32Address))) || ""

    return <div><p onClick={() => setDropdownOpen(open => !open)}>
        <span>Hi, {name}!</span><br />
        ({isSneakyBalanceLoading || !sneakyBalance ? "..." : sneakyBalance.totalFormattedAmount} $SNEAKY)

    </p>
        {dropdownOpen && sneakyBalance && <ul>
            {Object.entries(sneakyBalance.chainBalances).map(bal => match(bal)
                .with(["stargaze-1", P._], ([chainId, { formattedAmount }]) =>
                    <li key={chainId}>Stargaze: {formatTokenAmount(formattedAmount)} $SNEAKY</li>)
                .with(["osmosis-1", P._], ([chainId, { formattedAmount }]) =>
                    <li key={chainId}>Osmosis: {formatTokenAmount(formattedAmount)} $SNEAKY</li>)
                .otherwise(([chainId, { formattedAmount }]) => <li key={chainId}>Unknown Chain (chainId): {formatTokenAmount(formattedAmount)} $SNEAKY</li>))}
        </ul>}

    </div>
}