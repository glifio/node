import {
  FullWidthButtons,
  InfoBox,
  WarningBox,
  OneColumn,
  TwoColumns,
  ButtonV2,
  SmartLink
} from '@glif/react-components'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const TitleWithLinkSubtitle = styled.span`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  > h2 {
    margin-bottom: 0;
  }
  > a {
    margin-bottom: 1em;
  }
`

export default function Documentation() {
  const router = useRouter()
  return (
    <TwoColumns>
      <OneColumn>
        <InfoBox>
          Glif Nodes are managed by{' '}
          <SmartLink href='https://protofire.io/'>Protofire.io</SmartLink>
        </InfoBox>

        <FullWidthButtons>
          <span>You can check my current status on:</span>
          <ButtonV2 onClick={() => router.push('https://status.node.glif.io/')}>
            Lotus API status
          </ButtonV2>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Lotus API Gateway versions for Filecoin&lsquo;s Mainnet:</span>
          <ButtonV2 onClick={() => router.push('https://api.node.glif.io')}>
            api.node.glif.io - v0
          </ButtonV2>
          <ButtonV2
            onClick={() => router.push('https://api.node.glif.io/rpc/v0')}
          >
            api.node.glif.io/rpc/v0 - v0
          </ButtonV2>
          <ButtonV2
            onClick={() => router.push('https://api.node.glif.io/rpc/v1')}
          >
            api.node.glif.io/rpc/v1 - v1 (unstable)
          </ButtonV2>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>
            Lotus API Gateway versions for Filecoin&lsquo;s Calibration network:
          </span>
          <ButtonV2
            onClick={() =>
              router.push(
                'https://dev.node.glif.io/calibrationapi/lotus/rpc/v0'
              )
            }
          >
            dev.node.glif.io/calibrationapi/lotus/rpc/v0 - v0
          </ButtonV2>
          <ButtonV2
            onClick={() =>
              router.push(
                'https://dev.node.glif.io/calibrationapi/lotus/rpc/v1'
              )
            }
          >
            dev.node.glif.io/calibrationapi/lotus/rpc/v1 - v1 (unstable)
          </ButtonV2>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Repositories:</span>
          <ButtonV2
            onClick={() =>
              router.push('https://github.com/filecoin-project/lotus')
            }
          >
            Lotus repository
          </ButtonV2>
          <ButtonV2
            onClick={() =>
              router.push('https://github.com/glifio/filecoin-docker')
            }
          >
            Lotus in docker repo and image published on the Dockerhub
          </ButtonV2>
          <ButtonV2
            onClick={() =>
              router.push('https://github.com/glifio/filecoin-chart')
            }
          >
            Charts to deploy Lotus to Kubernetes
          </ButtonV2>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Other services:</span>
          <ButtonV2 onClick={() => router.push('https://filecoin.tools/')}>
            CID Checker
          </ButtonV2>
          <ButtonV2
            onClick={() =>
              router.push(
                'https://playground.open-rpc.org/?schemaUrl=https://gist.githubusercontent.com/openworklabbot/44dd022c3214a17deeebf142613fb363/raw/lotus-api.json'
              )
            }
          >
            Open-rpc playground for Lotus API
          </ButtonV2>
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
        <TitleWithLinkSubtitle>
          <h2>Available API request methods</h2>
          <SmartLink href='https://lotus.filecoin.io/developers/apis/json-rpc/'>
            See Lotus JSON-RPC API documentation
          </SmartLink>
        </TitleWithLinkSubtitle>

        <p>Filecoin.ActorAddress</p>
        <br />
        <p>Filecoin.ActorAddressConfig</p>
        <br />
        <p>Filecoin.ActorSectorSize</p>
        <br />
        <p>Filecoin.AuthVerify</p>
        <br />
        <p>Filecoin.BeaconGetEntry</p>
        <br />
        <p>Filecoin.ChainBlockstoreInfo</p>
        <br />
        <p>Filecoin.ChainExport</p>
        <br />
        <p>Filecoin.ChainGetBlock</p>
        <br />
        <p>Filecoin.ChainGetBlockMessages</p>
        <br />
        <p>Filecoin.ChainGetGenesis</p>
        <br />
        <p>Filecoin.ChainGetMessage</p>
        <br />
        <p>Filecoin.ChainGetMessagesInTipset</p>
        <br />
        <p>Filecoin.ChainGetNode</p>
        <br />
        <p>Filecoin.ChainGetParentMessages</p>
        <br />
        <p>Filecoin.ChainGetParentReceipts</p>
        <br />
        <p>Filecoin.ChainGetPath</p>
        <br />
        <p>Filecoin.ChainGetRandomnessFromBeacon</p>
        <br />
        <p>Filecoin.ChainGetRandomnessFromTickets</p>
        <br />
        <p>Filecoin.ChainGetTipSet</p>
        <br />
        <p>Filecoin.ChainGetTipSetAfterHeight</p>
        <br />
        <p>Filecoin.ChainGetTipSetByHeight</p>
        <br />
        <p>Filecoin.ChainHasObj</p>
        <br />
        <p>Filecoin.ChainHead</p>
        <br />
        <p>Filecoin.ChainNotify</p>
        <br />
        <p>Filecoin.ChainReadObj</p>
        <br />
        <p>Filecoin.ChainStatObj</p>
        <br />
        <p>Filecoin.ChainTipSetWeight</p>
        <br />
        <p>Filecoin.ClientDealPieceCID</p>
        <br />
        <p>Filecoin.ClientDealSize</p>
        <br />
        <p>Filecoin.ClientFindData</p>
        <br />
        <p>Filecoin.ClientGetDealInfo</p>
        <br />
        <p>Filecoin.ClientGetDealStatus</p>
        <br />
        <p>Filecoin.ClientMinerQueryOffer</p>
        <br />
        <p>Filecoin.ClientQueryAsk</p>
        <br />
        <p>Filecoin.Closing</p>
        <br />
        <p>Filecoin.ComputeProof</p>
        <br />
        <p>Filecoin.DagstoreListShards</p>
        <br />
        <p>Filecoin.Discover</p>
        <br />
        <p>Filecoin.GasEstimateFeeCap</p>
        <br />
        <p>Filecoin.GasEstimateGasLimit</p>
        <br />
        <p>Filecoin.GasEstimateGasPremium</p>
        <br />
        <p>Filecoin.GasEstimateMessageGas</p>
        <br />
        <p>Filecoin.ID</p>
        <br />
        <p>Filecoin.MarketGetAsk</p>
        <br />
        <p>Filecoin.MarketGetDealUpdates</p>
        <br />
        <p>Filecoin.MarketGetRetrievalAsk</p>
        <br />
        <p>Filecoin.MarketListDeals</p>
        <br />
        <p>Filecoin.MarketListIncompleteDeals</p>
        <br />
        <p>Filecoin.MarketListRetrievalDeals</p>
        <br />
        <p>Filecoin.MinerGetBaseInfo</p>
        <br />
        <p>Filecoin.MiningBase</p>
        <br />
        <p>Filecoin.MpoolCheckMessages</p>
        <br />
        <p>Filecoin.MpoolCheckPendingMessages</p>
        <br />
        <p>Filecoin.MpoolCheckReplaceMessages</p>
        <br />
        <p>Filecoin.MpoolGetConfig</p>
        <br />
        <p>Filecoin.MpoolGetNonce</p>
        <br />
        <p>Filecoin.MpoolPending</p>
        <br />
        <p>Filecoin.MpoolPush</p>
        <br />
        <p>Filecoin.MpoolSelect</p>
        <br />
        <p>Filecoin.MpoolSub</p>
        <br />
        <p>Filecoin.MsigGetAvailableBalance</p>
        <br />
        <p>Filecoin.MsigGetPending</p>
        <br />
        <p>Filecoin.MsigGetVested</p>
        <br />
        <p>Filecoin.MsigGetVestingSchedule</p>
        <br />
        <p>Filecoin.NetAddrsListen</p>
        <br />
        <p>Filecoin.NetAgentVersion</p>
        <br />
        <p>Filecoin.NetAutoNatStatus</p>
        <br />
        <p>Filecoin.NetBandwidthStats</p>
        <br />
        <p>Filecoin.NetBandwidthStatsByPeer</p>
        <br />
        <p>Filecoin.NetBandwidthStatsByProtocol</p>
        <br />
        <p>Filecoin.NetBlockList</p>
        <br />
        <p>Filecoin.NetConnectedness</p>
        <br />
        <p>Filecoin.NetFindPeer</p>
        <br />
        <p>Filecoin.NetPeerInfo</p>
        <br />
        <p>Filecoin.NetPeers</p>
        <br />
        <p>Filecoin.NetPubsubScores</p>
        <br />
        <p>Filecoin.NodeStatus</p>
        <br />
        <p>Filecoin.PaychList</p>
        <br />
        <p>Filecoin.PaychStatus</p>
        <br />
        <p>Filecoin.PaychVoucherCheckSpendable</p>
        <br />
        <p>Filecoin.PaychVoucherCheckValid</p>
        <br />
        <p>Filecoin.PiecesGetCIDInfo</p>
        <br />
        <p>Filecoin.PiecesGetPieceInfo</p>
        <br />
        <p>Filecoin.PiecesListCidInfos</p>
        <br />
        <p>Filecoin.PiecesListPieces</p>
        <br />
        <p>Filecoin.RuntimeSubsystems</p>
        <br />
        <p>Filecoin.SectorGetExpectedSealDuration</p>
        <br />
        <p>Filecoin.SectorGetSealDelay</p>
        <br />
        <p>Filecoin.SectorsList</p>
        <br />
        <p>Filecoin.SectorsListInStates</p>
        <br />
        <p>Filecoin.SectorsRefs</p>
        <br />
        <p>Filecoin.SectorsStatus</p>
        <br />
        <p>Filecoin.SectorsSummary</p>
        <br />
        <p>Filecoin.Session</p>
        <br />
        <p>Filecoin.StateAccountKey</p>
        <br />
        <p>Filecoin.StateAllMinerFaults</p>
        <br />
        <p>Filecoin.StateCall</p>
        <br />
        <p>Filecoin.StateChangedActors</p>
        <br />
        <p>Filecoin.StateCirculatingSupply</p>
        <br />
        <p>Filecoin.StateCompute</p>
        <br />
        <p>Filecoin.StateDealProviderCollateralBounds</p>
        <br />
        <p>Filecoin.StateDecodeParams</p>
        <br />
        <p>Filecoin.StateEncodeParams</p>
        <br />
        <p>Filecoin.StateGetActor</p>
        <br />
        <p>Filecoin.StateGetRandomnessFromBeacon</p>
        <br />
        <p>Filecoin.StateGetRandomnessFromTickets</p>
        <br />
        <p>Filecoin.StateGetReceipt</p>
        <br />
        <p>Filecoin.StateListActors</p>
        <br />
        <p>Filecoin.StateListMessages</p>
        <br />
        <p>Filecoin.StateListMiners</p>
        <br />
        <p>Filecoin.StateLookupID</p>
        <br />
        <p>Filecoin.StateMarketBalance</p>
        <br />
        <p>Filecoin.StateMarketParticipants</p>
        <br />
        <p>Filecoin.StateMarketStorageDeal</p>
        <br />
        <p>Filecoin.StateMinerActiveSectors</p>
        <br />
        <p>Filecoin.StateMinerAvailableBalance</p>
        <br />
        <p>Filecoin.StateMinerDeadlines</p>
        <br />
        <p>Filecoin.StateMinerFaults</p>
        <br />
        <p>Filecoin.StateMinerInfo</p>
        <br />
        <p>Filecoin.StateMinerInitialPledgeCollateral</p>
        <br />
        <p>Filecoin.StateMinerPartitions</p>
        <br />
        <p>Filecoin.StateMinerPower</p>
        <br />
        <p>Filecoin.StateMinerPreCommitDepositForPower</p>
        <br />
        <p>Filecoin.StateMinerProvingDeadline</p>
        <br />
        <p>Filecoin.StateMinerRecoveries</p>
        <br />
        <p>Filecoin.StateMinerSectorAllocated</p>
        <br />
        <p>Filecoin.StateMinerSectorCount</p>
        <br />
        <p>Filecoin.StateMinerSectors</p>
        <br />
        <p>Filecoin.StateNetworkName</p>
        <br />
        <p>Filecoin.StateNetworkVersion</p>
        <br />
        <p>Filecoin.StateReadState</p>
        <br />
        <p>Filecoin.StateReplay</p>
        <br />
        <p>Filecoin.StateSearchMsg</p>
        <br />
        <p>Filecoin.StateSearchMsgLimited</p>
        <br />
        <p>Filecoin.StateSectorExpiration</p>
        <br />
        <p>Filecoin.StateSectorGetInfo</p>
        <br />
        <p>Filecoin.StateSectorPartition</p>
        <br />
        <p>Filecoin.StateSectorPreCommitInfo</p>
        <br />
        <p>Filecoin.StateVMCirculatingSupplyInternal</p>
        <br />
        <p>Filecoin.StateVerifiedClientStatus</p>
        <br />
        <p>Filecoin.StateVerifiedRegistryRootKey</p>
        <br />
        <p>Filecoin.StateVerifierStatus</p>
        <br />
        <p>Filecoin.StateWaitMsg</p>
        <br />
        <p>Filecoin.StateWaitMsgLimited</p>
        <br />
        <p>Filecoin.SyncCheckBad</p>
        <br />
        <p>Filecoin.SyncIncomingBlocks</p>
        <br />
        <p>Filecoin.SyncState</p>
        <br />
        <p>Filecoin.SyncValidateTipset</p>
        <br />
        <p>Filecoin.Version</p>
        <br />
        <p>Filecoin.WalletBalance</p>
        <br />
        <p>Filecoin.WalletValidateAddress</p>
        <br />
        <p>Filecoin.WalletVerify</p>
        <br />
      </OneColumn>
    </TwoColumns>
  )
}
