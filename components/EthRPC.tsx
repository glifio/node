import {
  ButtonV2Link,
  InfoBox,
  FullWidthButtons,
  TwoColumns,
  OneColumn,
  SmartLink
} from '@glif/react-components'
import { TitleWithSubtitle } from './Helpers'
import NodePage from './NodePage'

export function EthRPC() {
  return (
    <NodePage>
      <TwoColumns>
        <OneColumn>
          <InfoBox>
            The FEVM is coming soon to the Filecoin network!
            <br />
            <br />
            The FEVM brings complete EVM compatibility to the Filecoin network.
            Developers can interact with Filecoin in the same way they do with
            EVM chains like Ethereum. Developers can reuse their favorite
            tooling from the Ethereum ecosystem, and users can reuse their
            favorite Ethereum wallets.
            <br />
            <br />
            The planned FEVM Mainnet launch is February 2023, but the Wallaby
            Testnet currently supports the FEVM.
          </InfoBox>
          <FullWidthButtons>
            <ButtonV2Link large href='/'>
              Back to the docs
            </ButtonV2Link>
          </FullWidthButtons>
        </OneColumn>
        <OneColumn>
          <TitleWithSubtitle>
            <h2>
              Available Ethereum API request methods for Wallaby🦘 endpoint
            </h2>
            <SmartLink href='https://github.com/filecoin-project/ref-fvm/issues/854'>
              See Lotus Ethereum JSON-RPC API documentation
            </SmartLink>
          </TitleWithSubtitle>
          <p>eth_accounts</p>
          <p>Filecoin.EthAccounts</p>
          <p>eth_blockNumber</p>
          <p>Filecoin.EthBlockNumber</p>
          <p>eth_feeHistory</p>
          <p>Filecoin.EthFeeHistory</p>
          <p>eth_getBlockByNumber</p>
          <p>Filecoin.EthGetBlockByNumber</p>
          <p>eth_getTransactionByHash</p>
          <p>Filecoin.EthGetTransactionByHash</p>
          <p>eth_getTransactionCount</p>
          <p>Filecoin.EthGetTransactionCount</p>
          <p>eth_getTransactionReceipt</p>
          <p>Filecoin.EthGetTransactionReceipt</p>
          <p>eth_getBalance</p>
          <p>Filecoin.EthGetBalance</p>
          <p>eth_gasPrice</p>
          <p>Filecoin.EthGasPrice</p>
          <p>eth_chainId</p>
          <p>Filecoin.EthChainId</p>
          <p>eth_getBlockTransactionCountByNumber</p>
          <p>Filecoin.EthGetBlockTransactionCountByNumber</p>
          <p>net_version</p>
          <p>Filecoin.NetVersion</p>
          <p>net_listening</p>
          <p>Filecoin.NetListening</p>
          <p>eth_protocolVersion</p>
          <p>Filecoin.EthProtocolVersion</p>
          <p>eth_maxPriorityFeePerGas</p>
          <p>Filecoin.EthMaxPriorityFeePerGas</p>
          <p>eth_getBlockByHash</p>
          <p>Filecoin.EthGetBlockByHash</p>
          <p>eth_getBlockTransactionCountByHash</p>
          <p>Filecoin.EthGetBlockTransactionCountByHash</p>
          <p>eth_getCode</p>
          <p>Filecoin.EthGetCode</p>
          <p>eth_getStorageAt</p>
          <p>Filecoin.EthGetStorageAt</p>
          <p>eth_sendRawTransaction</p>
          <p>Filecoin.EthSendRawTransaction</p>
          <p>eth_call</p>
          <p>Filecoin.EthCall</p>
          <p>eth_estimateGas</p>
          <p>Filecoin.EthEstimateGas</p>
        </OneColumn>
      </TwoColumns>
    </NodePage>
  )
}
