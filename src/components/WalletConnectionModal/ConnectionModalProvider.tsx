import { createContext, useContext, useState } from "react";
import { ConnectionModal } from "./ConnectionModal";

const WalletModalContext = createContext<{
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>({ isModalOpen: false, openModal: () => {}, closeModal: () => {} });

export const useWalletConnectModal = () => useContext(WalletModalContext);

export const WalletModalContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <WalletModalContext.Provider
      value={{
        isModalOpen,
        openModal: () => setIsModalOpen(true),
        closeModal: () => setIsModalOpen(false),
      }}
    >
      <ConnectionModal />
      {children}
    </WalletModalContext.Provider>
  );
};
