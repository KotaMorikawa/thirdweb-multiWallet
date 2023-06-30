## Getting Started

thirdweb 上で NFT、AccountFactory のコントラクトを作成。

・NFT コントラクトは NFTDrop コントラクトを使用。

・AccountFactory は [Simple Wallet Factory（beta）](https://thirdweb.com/thirdweb.eth/AccountFactory/1.1.1)コントラクトを使用。thirdweb の smartWallet で [AA(EIP-4337)](https://eips.ethereum.org/EIPS/eip-4337)を使用するため。

・localWallet で gaslessTransaction を実行するため、[Openzeppelin Defender](https://defender.openzeppelin.com) を使用。

- Relayer 作成(代わりにガスを払う)
- Autotask で localWallet がミントする際、Relayer がガス代を払うことを設定。

## env ファイル作成

```bash
NEXT_PUBLIC_FACTORY_ADDRESS=[AccountFactoryコントラクトアドレス]
NEXT_PUBLIC_API_KEY=[thirdwebAPIKEY]
NEXT_PUBLIC_RELAYER_URL=[Openzeppelin DefenderのAutotaskURL]
```

## アプリの実行

```bash
npm install

npm run dev
```

## 注意

### smartWallet と gasless の設定をした localWallet を同時に設定するとエラー起きる。

```bash
_app.tsx

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
```
