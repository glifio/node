import {
  FullWidthButtons,
  InfoBox,
  WarningBox,
  OneColumn,
  TwoColumns,
  ButtonV2Link,
  SmartLink
} from '@glif/react-components'
import styled from 'styled-components'

const TitleWithSubtitle = styled.div`
  margin-bottom: 1.75em;
  > h2 {
    margin-bottom: 0.25em;
  }
`

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
          <span>If you need help with me, drop a message to my team:</span>
          <ButtonV2Link href='https://filecoinproject.slack.com/archives/C017HM9BJ8Z'>
            Slack Channel
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Lotus API Gateway versions for Filecoin&lsquo;s Mainnet:</span>
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
          <span>
            Lotus API Gateway versions for Filecoin&lsquo;s Calibration network:
          </span>
          <ButtonV2Link href='https://calibration.node.glif.io'>
            calibration.node.glif.io - v0
          </ButtonV2Link>
          <ButtonV2Link href='https://calibration.node.glif.io/rpc/v0'>
            calibration.node.glif.io/rpc/v0
          </ButtonV2Link>
          <ButtonV2Link href='https://calibration.node.glif.io/rpc/v1'>
            calibration.node.glif.io/rpc/v1 - v1 (unstable)
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
          <span>Other services:</span>
          <ButtonV2Link href='https://filecoin.tools/'>
            CID Checker
          </ButtonV2Link>
          <ButtonV2Link href='https://playground.open-rpc.org/?schemaUrl=https://gist.githubusercontent.com/openworklabbot/44dd022c3214a17deeebf142613fb363/raw/lotus-api.json'>
            Open-rpc playground for Lotus API
          </ButtonV2Link>
        </FullWidthButtons>
      </OneColumn>

      <OneColumn>
        <WarningBox>
          Before going to Available API request methods, please, consider that{' '}
          <b>Filecoin.StateMarketDeals</b> operation data is available as a
          direct link to AWS s3. StateMarketDeals data is refreshing every 10
          minutes:{' '}
          <SmartLink href='https://marketdeals.s3.amazonaws.com/StateMarketDeals.json'>
            https://marketdeals.s3.amazonaws.com/StateMarketDeals.json
          </SmartLink>
        </WarningBox>

        <WarningBox>
          Please, don&lsquo;t forget to add{' '}
          <b>Content-Type: application/json</b> header to your request or
          I&lsquo;ll give you <b>415 Unsupported Media Type error</b>
        </WarningBox>

        <WarningBox>
          And the last side note:
          <b> respect my 30 seconds timeout on request</b> or I&lsquo;ll throw
          out you <b>504 Endpoint request timed out error</b>
        </WarningBox>

        <TitleWithSubtitle>
          <h2>Available API request methods</h2>
          <SmartLink href='https://lotus.filecoin.io/developers/apis/json-rpc/'>
            See Lotus JSON-RPC API documentation
          </SmartLink>
        </TitleWithSubtitle>

        <p>Filecoin.ActorAddress</p>
        <p>Filecoin.ActorAddressConfig</p>
        <p>Filecoin.ActorSectorSize</p>
        <p>Filecoin.AuthVerify</p>
        <p>Filecoin.BeaconGetEntry</p>
        <p>Filecoin.ChainBlockstoreInfo</p>
        <p>Filecoin.ChainExport</p>
        <p>Filecoin.ChainGetBlock</p>
        <p>Filecoin.ChainGetBlockMessages</p>
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
        <p>Filecoin.ComputeProof</p>
        <p>Filecoin.DagstoreListShards</p>
        <p>Filecoin.Discover</p>
        <p>Filecoin.GasEstimateFeeCap</p>
        <p>Filecoin.GasEstimateGasLimit</p>
        <p>Filecoin.GasEstimateGasPremium</p>
        <p>Filecoin.GasEstimateMessageGas</p>
        <p>Filecoin.ID</p>
        <p>Filecoin.MarketGetAsk</p>
        <p>Filecoin.MarketGetDealUpdates</p>
        <p>Filecoin.MarketGetRetrievalAsk</p>
        <p>Filecoin.MarketListDeals</p>
        <p>Filecoin.MarketListIncompleteDeals</p>
        <p>Filecoin.MarketListRetrievalDeals</p>
        <p>Filecoin.MinerGetBaseInfo</p>
        <p>Filecoin.MiningBase</p>
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
        <p>Filecoin.NetPeerInfo</p>
        <p>Filecoin.NetPeers</p>
        <p>Filecoin.NetPing</p>
        <p>Filecoin.NetProtectList</p>
        <p>Filecoin.NetPubsubScores</p>
        <p>Filecoin.NetStat</p>
        <p>Filecoin.NodeStatus</p>
        <p>Filecoin.PaychList</p>
        <p>Filecoin.PaychStatus</p>
        <p>Filecoin.PaychVoucherCheckSpendable</p>
        <p>Filecoin.PaychVoucherCheckValid</p>
        <p>Filecoin.PiecesGetCIDInfo</p>
        <p>Filecoin.PiecesGetPieceInfo</p>
        <p>Filecoin.PiecesListCidInfos</p>
        <p>Filecoin.PiecesListPieces</p>
        <p>Filecoin.RuntimeSubsystems</p>
        <p>Filecoin.SectorGetExpectedSealDuration</p>
        <p>Filecoin.SectorGetSealDelay</p>
        <p>Filecoin.SectorsList</p>
        <p>Filecoin.SectorsListInStates</p>
        <p>Filecoin.SectorsRefs</p>
        <p>Filecoin.SectorsStatus</p>
        <p>Filecoin.SectorsSummary</p>
        <p>Filecoin.Session</p>
        <p>Filecoin.StateAccountKey</p>
        <p>Filecoin.StateActorCodeCIDs</p>
        <p>Filecoin.StateAllMinerFaults</p>
        <p>Filecoin.StateCall</p>
        <p>Filecoin.StateChangedActors</p>
        <p>Filecoin.StateCirculatingSupply</p>
        <p>Filecoin.StateCompute</p>
        <p>Filecoin.StateDealProviderCollateralBounds</p>
        <p>Filecoin.StateDecodeParams</p>
        <p>Filecoin.StateEncodeParams</p>
        <p>Filecoin.StateGetActor</p>
        <p>Filecoin.StateGetBeaconEntry</p>
        <p>Filecoin.StateGetNetworkParams</p>
        <p>Filecoin.StateGetRandomnessFromBeacon</p>
        <p>Filecoin.StateGetRandomnessFromTickets</p>
        <p>Filecoin.StateGetReceipt</p>
        <p>Filecoin.StateListActors</p>
        <p>Filecoin.StateListMessages</p>
        <p>Filecoin.StateListMiners</p>
        <p>Filecoin.StateLookupID</p>
        <p>Filecoin.StateLookupRobustAddress</p>
        <p>Filecoin.StateMarketBalance</p>
        <p>Filecoin.StateMarketParticipants</p>
        <p>Filecoin.StateMarketStorageDeal</p>
        <p>Filecoin.StateMinerActiveSectors</p>
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
        <p>Filecoin.StateVerifiedClientStatus</p>
        <p>Filecoin.StateVerifiedRegistryRootKey</p>
        <p>Filecoin.StateVerifierStatus</p>
        <p>Filecoin.StateVMCirculatingSupplyInternal</p>
        <p>Filecoin.StateWaitMsg</p>
        <p>Filecoin.StateWaitMsgLimited</p>
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
