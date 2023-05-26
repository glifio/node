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

export function FilecoinRPC() {
  return (
    <NodePage>
      <TwoColumns>
        <OneColumn>
          <FullWidthButtons>
            <ButtonV2Link large href='/'>
              Back to the docs
            </ButtonV2Link>
          </FullWidthButtons>
        </OneColumn>
        <OneColumn>
          <TitleWithSubtitle>
            <h2>Available API request methods</h2>
            <SmartLink href='https://lotus.filecoin.io/developers/apis/json-rpc/'>
              See Lotus JSON-RPC API documentation
            </SmartLink>
          </TitleWithSubtitle>

          <InfoBox>
            All JSON-RPC requests must include the header:
            <br />
            <b>&quot;Content-Type&quot;: &quot;application/json&quot;</b>
          </InfoBox>

          <p>Filecoin.ChainGetBlock</p>
          <p>Filecoin.ChainGetBlockMessages</p>
          <p>Filecoin.ChainGetGenesis</p>
          <p>Filecoin.ChainGetMessage</p>
          <p>Filecoin.ChainGetNode</p>
          <p>Filecoin.ChainGetParentMessages</p>
          <p>Filecoin.ChainGetParentReceipts</p>
          <p>Filecoin.ChainGetPath</p>
          <p>Filecoin.ChainGetTipSet</p>
          <p>Filecoin.ChainGetTipSetAfterHeight</p>
          <p>Filecoin.ChainGetTipSetByHeight</p>
          <p>Filecoin.ChainHasObj</p>
          <p>Filecoin.ChainHead</p>
          <p>Filecoin.ChainNotify</p>
          <p>Filecoin.ChainPutObj</p>
          <p>Filecoin.ChainReadObj</p>
          <p>Filecoin.Discover</p>
          <p>Filecoin.EthAccounts</p>
          <p>Filecoin.EthBlockNumber</p>
          <p>Filecoin.EthCall</p>
          <p>Filecoin.EthChainId</p>
          <p>Filecoin.EthEstimateGas</p>
          <p>Filecoin.EthFeeHistory</p>
          <p>Filecoin.EthGasPrice</p>
          <p>Filecoin.EthGetBalance</p>
          <p>Filecoin.EthGetBlockByHash</p>
          <p>Filecoin.EthGetBlockByNumber</p>
          <p>Filecoin.EthGetBlockTransactionCountByHash</p>
          <p>Filecoin.EthGetBlockTransactionCountByNumber</p>
          <p>Filecoin.EthGetCode</p>
          <p>Filecoin.EthGetFilterChanges</p>
          <p>Filecoin.EthGetFilterLogs</p>
          <p>Filecoin.EthGetLogs</p>
          <p>Filecoin.EthGetMessageCidByTransactionHash</p>
          <p>Filecoin.EthGetStorageAt</p>
          <p>Filecoin.EthGetTransactionByHash</p>
          <p>Filecoin.EthGetTransactionCount</p>
          <p>Filecoin.EthGetTransactionHashByCid</p>
          <p>Filecoin.EthGetTransactionReceipt</p>
          <p>Filecoin.EthMaxPriorityFeePerGas</p>
          <p>Filecoin.EthNewBlockFilter</p>
          <p>Filecoin.EthNewFilter</p>
          <p>Filecoin.EthNewPendingTransactionFilter</p>
          <p>Filecoin.EthProtocolVersion</p>
          <p>Filecoin.EthSendRawTransaction</p>
          <p>Filecoin.EthSubscribe</p>
          <p>Filecoin.EthUninstallFilter</p>
          <p>Filecoin.EthUnsubscribe</p>
          <p>Filecoin.GasEstimateGasPremium</p>
          <p>Filecoin.GasEstimateMessageGas</p>
          <p>Filecoin.MinerGetBaseInfo</p>
          <p>Filecoin.MpoolGetNonce</p>
          <p>Filecoin.MpoolPending</p>
          <p>Filecoin.MpoolPush</p>
          <p>Filecoin.MsigGetAvailableBalance</p>
          <p>Filecoin.MsigGetPending</p>
          <p>Filecoin.MsigGetVested</p>
          <p>Filecoin.MsigGetVestingSchedule</p>
          <p>Filecoin.NetListening</p>
          <p>Filecoin.NetVersion</p>
          <p>Filecoin.StateAccountKey</p>
          <p>Filecoin.StateCall</p>
          <p>Filecoin.StateCirculatingSupply</p>
          <p>Filecoin.StateDealProviderCollateralBounds</p>
          <p>Filecoin.StateDecodeParams</p>
          <p>Filecoin.StateGetActor</p>
          <p>Filecoin.StateListMiners</p>
          <p>Filecoin.StateLookupID</p>
          <p>Filecoin.StateMarketBalance</p>
          <p>Filecoin.StateMarketParticipants</p>
          <p>Filecoin.StateMarketStorageDeal</p>
          <p>Filecoin.StateMinerAvailableBalance</p>
          <p>Filecoin.StateMinerDeadlines</p>
          <p>Filecoin.StateMinerFaults</p>
          <p>Filecoin.StateMinerInfo</p>
          <p>Filecoin.StateMinerPower</p>
          <p>Filecoin.StateMinerProvingDeadline</p>
          <p>Filecoin.StateMinerRecoveries</p>
          <p>Filecoin.StateMinerSectorCount</p>
          <p>Filecoin.StateNetworkName</p>
          <p>Filecoin.StateNetworkVersion</p>
          <p>Filecoin.StateReadState</p>
          <p>Filecoin.StateReplay</p>
          <p>Filecoin.StateSearchMsg</p>
          <p>Filecoin.StateSearchMsgLimited</p>
          <p>Filecoin.StateSectorGetInfo</p>
          <p>Filecoin.StateVMCirculatingSupplyInternal</p>
          <p>Filecoin.StateVerifiedClientStatus</p>
          <p>Filecoin.StateVerifierStatus</p>
          <p>Filecoin.StateWaitMsg</p>
          <p>Filecoin.Version</p>
          <p>Filecoin.WalletBalance</p>
          <p>Filecoin.WalletVerify</p>
          <p>Filecoin.Web3ClientVersion</p>
          <p>rpc.discover</p>
        </OneColumn>
      </TwoColumns>
    </NodePage>
  )
}
