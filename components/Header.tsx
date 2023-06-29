import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  return (
    <div className="flex h-20 justify-center items-center relative bg-slate-400">
      <p className="text-3xl">Header Title</p>
      <div className="absolute right-3">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Header;
