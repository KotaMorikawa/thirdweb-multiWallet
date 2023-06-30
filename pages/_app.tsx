import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  localWallet,
  smartWallet,
  metamaskWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Layout from "../components/Layout";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[
        localWallet(),
        metamaskWallet(),
        smartWallet({
          factoryAddress: process.env.NEXT_PUBLIC_FACTORY_ADDRESS!,
          thirdwebApiKey: process.env.NEXT_PUBLIC_API_KEY!,
          gasless: true,
          personalWallets: [metamaskWallet()],
        }),
      ]}
      // sdkOptionsを設定したらsmartwalletでprovider.sendエラー
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: process.env.NEXT_PUBLIC_RELAYER_URL!,
          },
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp;
