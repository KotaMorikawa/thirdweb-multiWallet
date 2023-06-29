import { NFT, ThirdwebNftMedia } from "@thirdweb-dev/react";

const NFTCard = ({ nft }: { nft: NFT | undefined }) => {
  if (!nft?.metadata) {
    return "";
  }
  return (
    <div className="w-1/5 mt-5">
      <div className="flex flex-col justify-center items-center">
        <ThirdwebNftMedia metadata={nft.metadata} width="30%" height="30%" />
        <p>{nft?.metadata?.name}</p>
      </div>
    </div>
  );
};

export default NFTCard;
