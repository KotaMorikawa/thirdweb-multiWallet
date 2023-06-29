import { Web3Button, useContract, useNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import NFTCard from "../components/NFTCard";
import { NFT_CONTRACT_ADDRESS } from "../address";

const Home: NextPage = () => {
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data: nfts, isLoading: isLoadingNFTs } = useNFTs(contract, {
    count: 100,
    start: 0,
  });

  return (
    <div className="flex justify-center h-full">
      <div className="container flex flex-col">
        <div className="flex flex-col h-full">
          <div className="flex flex-col mt-10">
            <h1 className="text-3xl text-center">
              Welcome to <a href="http://thirdweb.com/">Sample</a>
            </h1>

            <p className="text-center mt-5">
              You can mint sample NFTs by using{" "}
              <span className="text-red-500">SmartWallet</span> or{" "}
              <span className="text-blue-500">LocalWallet</span>
              <br />
            </p>
            <div className="flex justify-center space-x-5 mt-5">
              <a
                className="bg-slate-300 rounded-lg w-1/5 p-3"
                href="https://portal.thirdweb.com/wallet/smart-wallet"
                target="_blank"
              >
                <span className="text-red-500">SmartWallet</span> is a wallet
                that is controlled by a smart contract following the ERC-4337
                specification.
              </a>
              <a
                className="bg-slate-300 rounded-lg w-1/5 p-3"
                href="https://portal.thirdweb.com/wallet/local-wallet"
                target="bl"
              >
                <span className="text-blue-500">LocalWallet</span> is a
                low-level wallet that allows you to create wallets within your
                application or project.
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Web3Button
              contractAddress={NFT_CONTRACT_ADDRESS}
              action={async (contract) => {
                await contract.erc721.claim(1);
              }}
            >
              Claim
            </Web3Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center">
            {isLoadingNFTs ? (
              <p>Loading...</p>
            ) : (
              nfts?.map((nft, i) => <NFTCard key={i} nft={nft} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
