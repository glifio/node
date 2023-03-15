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
            The planned FEVM Mainnet launch is February 2023, but the Hyperspace
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
              Available Ethereum API request methods for Hyperspace endpoint
            </h2>
            <SmartLink href='https://github.com/filecoin-project/ref-fvm/issues/854'>
              See Lotus Ethereum JSON-RPC API documentation
            </SmartLink>
          </TitleWithSubtitle>
          <p>eth_accounts</p>
          <p>eth_blockNumber</p>
          <p>eth_call</p>
          <p>eth_chainId</p>
          <p>eth_estimateGas</p>
          <p>eth_feeHistory</p>
          <p>eth_gasPrice</p>
          <p>eth_getBalance</p>
          <p>eth_getBlockByHash</p>
          <p>eth_getBlockByNumber</p>
          <p>eth_getBlockTransactionCountByHash</p>
          <p>eth_getBlockTransactionCountByNumber</p>
          <p>eth_getCode</p>
          <p>eth_getFilterChanges</p>
          <p>eth_getFilterLogs</p>
          <p>eth_getLogs</p>
          <p>eth_getStorageAt</p>
          <p>eth_getTransactionByHash</p>
          <p>eth_getTransactionCount</p>
          <p>eth_getTransactionReceipt</p>
          <p>eth_maxPriorityFeePerGas</p>
          <p>eth_newBlockFilter</p>
          <p>eth_newFilter</p>
          <p>eth_newPendingTransactionFilter</p>
          <p>eth_protocolVersion</p>
          <p>eth_sendRawTransaction</p>
          <p>eth_subscribe</p>
          <p>eth_uninstallFilter</p>
          <p>eth_unsubscribe</p>
          <p>net_listening</p>
          <p>net_version</p>
          <p>web3_clientVersion</p>
        </OneColumn>
      </TwoColumns>
    </NodePage>
  )
}
