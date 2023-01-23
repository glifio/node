import {
  FullWidthButtons,
  InfoBox,
  WarningBox,
  OneColumn,
  TwoColumns,
  ButtonV2Link,
  SmartLink
} from '@glif/react-components'
import { TitleWithSubtitle } from './Helpers'

export default function Documentation() {
  return (
    <TwoColumns>
      <OneColumn>
        <InfoBox>
          Glif Nodes are managed by{' '}
          <SmartLink href='https://protofire.io/'>Protofire.io</SmartLink>
        </InfoBox>

        <FullWidthButtons>
          <span>You can check my current status on:</span>
          <ButtonV2Link href='https://status.node.glif.io/'>
            Lotus API status
          </ButtonV2Link>
        </FullWidthButtons>
        <FullWidthButtons>
          <span>Repositories:</span>
          <ButtonV2Link href='https://github.com/filecoin-project/lotus'>
            Lotus repository
          </ButtonV2Link>
          <ButtonV2Link href='https://github.com/glifio/filecoin-docker'>
            Lotus in docker repo and image published on the Dockerhub
          </ButtonV2Link>
          <ButtonV2Link href='https://github.com/glifio/filecoin-chart'>
            Charts to deploy Lotus to Kubernetes
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Open-rpc playground links for Lotus API:</span>
          <ButtonV2Link href='https://playground.open-rpc.org/?url=https://api.node.glif.io'>
            Mainnet
          </ButtonV2Link>
          <ButtonV2Link href='https://playground.open-rpc.org/?url=https://api.calibration.node.glif.io'>
            Calibration
          </ButtonV2Link>
          <ButtonV2Link href='https://playground.open-rpc.org/?url=https://api.hyperspace.node.glif.io'>
            Hyperspace
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>CID checkers links:</span>
          <ButtonV2Link href='https://filecoin.tools/'>Mainnet</ButtonV2Link>
          <ButtonV2Link href='https://calibration.filecoin.tools/'>
            Calibration
          </ButtonV2Link>
          <ButtonV2Link href='https://hyperspace.filecoin.tools/'>
            Hyperspace
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Lotus AWS API Gateway versions for Filecoin Mainnet:</span>
          <ButtonV2Link href='https://api.node.glif.io'>
            api.node.glif.io - v0
          </ButtonV2Link>
          <ButtonV2Link href='https://api.node.glif.io/rpc/v0'>
            api.node.glif.io/rpc/v0 - v0
          </ButtonV2Link>
          <ButtonV2Link href='https://api.node.glif.io/rpc/v1'>
            api.node.glif.io/rpc/v1 - v1 (unstable)
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Lotus Gateway endpoint for Filecoin Mainnet</span>
          <ButtonV2Link href='wss://wss.node.glif.io/apigw/lotus/rpc/v0'>
            wss://wss.node.glif.io/apigw/lotus/rpc/v0
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>
            Lotus API AWS Gateway versions for Filecoin Calibration network:
          </span>
          <ButtonV2Link href='https://api.calibration.node.glif.io'>
            api.calibration.node.glif.io - v0
          </ButtonV2Link>
          <ButtonV2Link href='https://api.calibration.node.glif.io/rpc/v0'>
            api.calibration.node.glif.io/rpc/v0 -v0
          </ButtonV2Link>
          <ButtonV2Link href='https://api.calibration.node.glif.io/rpc/v1'>
            api.calibration.node.glif.io/rpc/v1 - v1 (unstable)
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Lotus Gateway endpoint for Filecoin Calibration</span>
          <ButtonV2Link href='wss://wss.calibration.node.glif.io'>
            wss://wss.calibration.node.glif.io
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>
            Lotus AWS API Gateway versions for Filecoin Hyperspace network:
          </span>
          <ButtonV2Link href='https://api.hyperspace.node.glif.io'>
            api.hyperspace.node.glif.io - v0
          </ButtonV2Link>
          <ButtonV2Link href='https://api.hyperspace.node.glif.io/rpc/v0'>
            api.hyperspace.node.glif.io/rpc/v0 -v0
          </ButtonV2Link>
          <ButtonV2Link href='https://api.hyperspace.node.glif.io/rpc/v1'>
            api.hyperspace.node.glif.io/rpc/v1 - v1 (unstable)
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Lotus Gateway endpoint for Hyperspace</span>
          <ButtonV2Link href='wss://wss.hyperspace.node.glif.io/apigw/lotus/rpc/v0'>
            wss://wss.hyperspace.node.glif.io/apigw/lotus/rpc/v0
          </ButtonV2Link>
        </FullWidthButtons>
      </OneColumn>

      <OneColumn>
        <TitleWithSubtitle>
          <h2>Available Lotus Gateway API request methods</h2>
          <SmartLink href='https://github.com/filecoin-project/lotus/blob/master/gateway/node.go#L45-L91'>
            See Lotus Gateway API documentation
          </SmartLink>
        </TitleWithSubtitle>

        <WarningBox>
          Before going to Available API request methods, please, consider that{' '}
          <b>Filecoin.StateMarketDeals</b> operation data is available as a
          direct link to AWS s3. StateMarketDeals data is refreshing every 10
          minutes:
          <br />
          <SmartLink href='https://marketdeals.s3.amazonaws.com/StateMarketDeals.json'>
            Mainnet
          </SmartLink>
          <br />
          <SmartLink href='https://marketdeals-calibration.s3.amazonaws.com/StateMarketDeals.json'>
            Calibration
          </SmartLink>
          <br />
          <SmartLink href='https://marketdeals-hyperspace.s3.amazonaws.com/StateMarketDeals.json'>
            Hyperspace
          </SmartLink>
        </WarningBox>

        <WarningBox>
          Method <b>Filecoin.StateListMessages</b> is temporarily banned due to
          being harmful to the nodes.
          <br />
          <SmartLink href='https://github.com/filecoin-project/lotus/issues/9728'>
            See the dedicated issue
          </SmartLink>
        </WarningBox>

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

        <p>Filecoin.AuthVerify</p>
        <p>Filecoin.BeaconGetEntry</p>
        <p>Filecoin.ChainBlockstoreInfo</p>
        <p>Filecoin.ChainExport</p>
        <p>Filecoin.ChainGetBlock</p>
        <p>Filecoin.ChainGetBlockMessages</p>
        <p>Filecoin.ChainGetEvents</p>
        <p>Filecoin.ChainGetGenesis</p>
        <p>Filecoin.ChainGetMessage</p>
        <p>Filecoin.ChainGetMessagesInTipset</p>
        <p>Filecoin.ChainGetNode</p>
        <p>Filecoin.ChainGetParentMessages</p>
        <p>Filecoin.ChainGetParentReceipts</p>
        <p>Filecoin.ChainGetPath</p>
        <p>Filecoin.ChainGetRandomnessFromBeacon</p>
        <p>Filecoin.ChainGetRandomnessFromTickets</p>
        <p>Filecoin.ChainGetTipSet</p>
        <p>Filecoin.ChainGetTipSetAfterHeight</p>
        <p>Filecoin.ChainGetTipSetByHeight</p>
        <p>Filecoin.ChainHasObj</p>
        <p>Filecoin.ChainHead</p>
        <p>Filecoin.ChainNotify</p>
        <p>Filecoin.ChainReadObj</p>
        <p>Filecoin.ChainStatObj</p>
        <p>Filecoin.ChainTipSetWeight</p>
        <p>Filecoin.ClientDealPieceCID</p>
        <p>Filecoin.ClientDealSize</p>
        <p>Filecoin.ClientFindData</p>
        <p>Filecoin.ClientGetDealInfo</p>
        <p>Filecoin.ClientGetDealStatus</p>
        <p>Filecoin.ClientMinerQueryOffer</p>
        <p>Filecoin.ClientQueryAsk</p>
        <p>Filecoin.Closing</p>
        <p>Filecoin.Discover</p>
        <p>Filecoin.GasEstimateFeeCap</p>
        <p>Filecoin.GasEstimateGasLimit</p>
        <p>Filecoin.GasEstimateGasPremium</p>
        <p>Filecoin.GasEstimateMessageGas</p>
        <p>Filecoin.ID</p>
        <p>Filecoin.MinerGetBaseInfo</p>
        <p>Filecoin.MpoolCheckMessages</p>
        <p>Filecoin.MpoolCheckPendingMessages</p>
        <p>Filecoin.MpoolCheckReplaceMessages</p>
        <p>Filecoin.MpoolGetConfig</p>
        <p>Filecoin.MpoolGetNonce</p>
        <p>Filecoin.MpoolPending</p>
        <p>Filecoin.MpoolPush</p>
        <p>Filecoin.MpoolSelect</p>
        <p>Filecoin.MpoolSub</p>
        <p>Filecoin.MsigGetAvailableBalance</p>
        <p>Filecoin.MsigGetPending</p>
        <p>Filecoin.MsigGetVested</p>
        <p>Filecoin.MsigGetVestingSchedule</p>
        <p>Filecoin.NetAddrsListen</p>
        <p>Filecoin.NetAgentVersion</p>
        <p>Filecoin.NetAutoNatStatus</p>
        <p>Filecoin.NetBandwidthStats</p>
        <p>Filecoin.NetBandwidthStatsByPeer</p>
        <p>Filecoin.NetBandwidthStatsByProtocol</p>
        <p>Filecoin.NetBlockList</p>
        <p>Filecoin.NetConnectedness</p>
        <p>Filecoin.NetFindPeer</p>
        <p>Filecoin.NetLimit</p>
        <p>Filecoin.NetListening</p>
        <p>Filecoin.NetPeerInfo</p>
        <p>Filecoin.NetPeers</p>
        <p>Filecoin.NetPing</p>
        <p>Filecoin.NetProtectList</p>
        <p>Filecoin.NetPubsubScores</p>
        <p>Filecoin.NetStat</p>
        <p>Filecoin.NetVersion</p>
        <p>Filecoin.NodeStatus</p>
        <p>Filecoin.PaychList</p>
        <p>Filecoin.PaychStatus</p>
        <p>Filecoin.PaychVoucherCheckSpendable</p>
        <p>Filecoin.PaychVoucherCheckValid</p>
        <p>Filecoin.SectorNumAssignerMeta</p>
        <p>Filecoin.SectorNumReservations</p>
        <p>Filecoin.Session</p>
        <p>Filecoin.StartTime</p>
        <p>Filecoin.StateAccountKey</p>
        <p>Filecoin.StateActorCodeCIDs</p>
        <p>Filecoin.StateActorManifestCID</p>
        <p>Filecoin.StateAllMinerFaults</p>
        <p>Filecoin.StateCall</p>
        <p>Filecoin.StateChangedActors</p>
        <p>Filecoin.StateCirculatingSupply</p>
        <p>Filecoin.StateCompute</p>
        <p>Filecoin.StateComputeDataCID</p>
        <p>Filecoin.StateDealProviderCollateralBounds</p>
        <p>Filecoin.StateDecodeParams</p>
        <p>Filecoin.StateEncodeParams</p>
        <p>Filecoin.StateGetActor</p>
        <p>Filecoin.StateGetAllocation</p>
        <p>Filecoin.StateGetAllocationForPendingDeal</p>
        <p>Filecoin.StateGetAllocations</p>
        <p>Filecoin.StateGetBeaconEntry</p>
        <p>Filecoin.StateGetClaim</p>
        <p>Filecoin.StateGetClaims</p>
        <p>Filecoin.StateGetNetworkParams</p>
        <p>Filecoin.StateGetRandomnessFromBeacon</p>
        <p>Filecoin.StateGetRandomnessFromTickets</p>
        <p>Filecoin.StateGetReceipt</p>
        <p>Filecoin.StateListActors</p>
        <p>Filecoin.StateListMiners</p>
        <p>Filecoin.StateLookupID</p>
        <p>Filecoin.StateLookupRobustAddress</p>
        <p>Filecoin.StateMarketBalance</p>
        <p>Filecoin.StateMarketDeals</p>
        <p>Filecoin.StateMarketParticipants</p>
        <p>Filecoin.StateMarketStorageDeal</p>
        <p>Filecoin.StateMinerActiveSectors</p>
        <p>Filecoin.StateMinerAllocated</p>
        <p>Filecoin.StateMinerAvailableBalance</p>
        <p>Filecoin.StateMinerDeadlines</p>
        <p>Filecoin.StateMinerFaults</p>
        <p>Filecoin.StateMinerInfo</p>
        <p>Filecoin.StateMinerInitialPledgeCollateral</p>
        <p>Filecoin.StateMinerPartitions</p>
        <p>Filecoin.StateMinerPower</p>
        <p>Filecoin.StateMinerPreCommitDepositForPower</p>
        <p>Filecoin.StateMinerProvingDeadline</p>
        <p>Filecoin.StateMinerRecoveries</p>
        <p>Filecoin.StateMinerSectorAllocated</p>
        <p>Filecoin.StateMinerSectorCount</p>
        <p>Filecoin.StateMinerSectors</p>
        <p>Filecoin.StateNetworkName</p>
        <p>Filecoin.StateNetworkVersion</p>
        <p>Filecoin.StateReadState</p>
        <p>Filecoin.StateReplay</p>
        <p>Filecoin.StateSearchMsg</p>
        <p>Filecoin.StateSearchMsgLimited</p>
        <p>Filecoin.StateSectorExpiration</p>
        <p>Filecoin.StateSectorGetInfo</p>
        <p>Filecoin.StateSectorPartition</p>
        <p>Filecoin.StateSectorPreCommitInfo</p>
        <p>Filecoin.StateVMCirculatingSupplyInternal</p>
        <p>Filecoin.StateVerifiedClientStatus</p>
        <p>Filecoin.StateVerifiedRegistryRootKey</p>
        <p>Filecoin.StateVerifierStatus</p>
        <p>Filecoin.StateWaitMsg</p>
        <p>Filecoin.StateWaitMsgLimited</p>
        <p>Filecoin.StorageAuthVerify</p>
        <p>Filecoin.SyncCheckBad</p>
        <p>Filecoin.SyncIncomingBlocks</p>
        <p>Filecoin.SyncState</p>
        <p>Filecoin.SyncValidateTipset</p>
        <p>Filecoin.Version</p>
        <p>Filecoin.WalletBalance</p>
        <p>Filecoin.WalletValidateAddress</p>
        <p>Filecoin.WalletVerify</p>
        <p>rpc.discover</p>
      </OneColumn>
    </TwoColumns>
  )
}
