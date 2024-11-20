import { useAccount } from "graz";

export const Footer = () => {

	const { isConnected } = useAccount();

	return (
	  <footer className="fixed-bottom">
		<div className="container-xxl pb-3">
			{isConnected && (
            			<p className="text-center mb-0">
						<span className="small">v0.6.9 alpha-4.20</span>
					</p>
          )}
		</div>
	  </footer>
	);
  };