import {
  FullWidthButtons,
  InfoBox,
  WarningBox,
  OneColumn,
  TwoColumns,
  ButtonV2,
  SmartLink
} from '@glif/react-components'

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
          <ButtonV2 onClick={() => {}}>Lotus API status</ButtonV2>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Lotus API Gateway versions for Filecoin&lsquo;s Mainnet:</span>
          <ButtonV2 onClick={() => {}}>api.node.glif.io - v0</ButtonV2>
          <ButtonV2 onClick={() => {}}>api.node.glif.io/rpc/v0 - v0</ButtonV2>
          <ButtonV2 onClick={() => {}}>
            api.node.glif.io/rpc/v1 - v1 (unstable)
          </ButtonV2>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>
            Lotus API Gateway versions for Filecoin&lsquo;s Calibration network:
          </span>
          <ButtonV2 onClick={() => {}}>
            dev.node.glif.io/calibrationapi/lotus/rpc/v0 - v0
          </ButtonV2>
          <ButtonV2 onClick={() => {}}>
            dev.node.glif.io/calibrationapi/lotus/rpc/v1 - v1 (unstable)
          </ButtonV2>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Repositories:</span>
          <ButtonV2 onClick={() => {}}>Lotus repository</ButtonV2>
          <ButtonV2 onClick={() => {}}>
            Lotus in docker repo and image published on the Dockerhub
          </ButtonV2>
          <ButtonV2 onClick={() => {}}>
            Charts to deploy Lotus to the Kubernetes
          </ButtonV2>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Other services:</span>
          <ButtonV2 onClick={() => {}}>CID Checker</ButtonV2>
          <ButtonV2 onClick={() => {}}>
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

        <h2>Available API request methods</h2>

        <p>
          <SmartLink href=''>Filecoin.ActorAddress</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ActorAddressConfig</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ActorSectorSize</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.AuthVerify</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.BeaconGetEntry</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainBlockstoreInfo</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainExport</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetBlock</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetBlockMessages</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetGenesis</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetMessage</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetMessagesInTipset</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetNode</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetParentMessages</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetParentReceipts</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetPath</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetRandomnessFromBeacon</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetRandomnessFromTickets</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetTipSet</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetTipSetAfterHeight</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainGetTipSetByHeight</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainHasObj</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainHead</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainNotify</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainReadObj</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainStatObj</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ChainTipSetWeight</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ClientDealPieceCID</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ClientDealSize</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ClientFindData</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ClientGetDealInfo</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ClientGetDealStatus</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ClientMinerQueryOffer</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ClientQueryAsk</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.Closing</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ComputeProof</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.DagstoreListShards</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.Discover</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.GasEstimateFeeCap</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.GasEstimateGasLimit</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.GasEstimateGasPremium</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.GasEstimateMessageGas</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.ID</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MarketGetAsk</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MarketGetDealUpdates</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MarketGetRetrievalAsk</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MarketListDeals</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MarketListIncompleteDeals</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MarketListRetrievalDeals</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MinerGetBaseInfo</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MiningBase</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MpoolCheckMessages</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MpoolCheckPendingMessages</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MpoolCheckReplaceMessages</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MpoolGetConfig</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MpoolGetNonce</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MpoolPending</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MpoolPush</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MpoolSelect</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MpoolSub</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MsigGetAvailableBalance</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MsigGetPending</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MsigGetVested</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.MsigGetVestingSchedule</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetAddrsListen</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetAgentVersion</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetAutoNatStatus</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetBandwidthStats</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetBandwidthStatsByPeer</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetBandwidthStatsByProtocol</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetBlockList</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetConnectedness</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetFindPeer</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetPeerInfo</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetPeers</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NetPubsubScores</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.NodeStatus</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.PaychList</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.PaychStatus</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.PaychVoucherCheckSpendable</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.PaychVoucherCheckValid</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.PiecesGetCIDInfo</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.PiecesGetPieceInfo</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.PiecesListCidInfos</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.PiecesListPieces</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.RuntimeSubsystems</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SectorGetExpectedSealDuration</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SectorGetSealDelay</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SectorsList</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SectorsListInStates</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SectorsRefs</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SectorsStatus</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SectorsSummary</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.Session</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateAccountKey</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateAllMinerFaults</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateCall</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateChangedActors</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateCirculatingSupply</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateCompute</SmartLink>
          <br />
          <SmartLink href=''>
            Filecoin.StateDealProviderCollateralBounds
          </SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateDecodeParams</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateEncodeParams</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateGetActor</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateGetRandomnessFromBeacon</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateGetRandomnessFromTickets</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateGetReceipt</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateListActors</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateListMessages</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateListMiners</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateLookupID</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMarketBalance</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMarketParticipants</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMarketStorageDeal</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerActiveSectors</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerAvailableBalance</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerDeadlines</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerFaults</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerInfo</SmartLink>
          <br />
          <SmartLink href=''>
            Filecoin.StateMinerInitialPledgeCollateral
          </SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerPartitions</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerPower</SmartLink>
          <br />
          <SmartLink href=''>
            Filecoin.StateMinerPreCommitDepositForPower
          </SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerProvingDeadline</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerRecoveries</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerSectorAllocated</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerSectorCount</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateMinerSectors</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateNetworkName</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateNetworkVersion</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateReadState</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateReplay</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateSearchMsg</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateSearchMsgLimited</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateSectorExpiration</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateSectorGetInfo</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateSectorPartition</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateSectorPreCommitInfo</SmartLink>
          <br />
          <SmartLink href=''>
            Filecoin.StateVMCirculatingSupplyInternal
          </SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateVerifiedClientStatus</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateVerifiedRegistryRootKey</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateVerifierStatus</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateWaitMsg</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.StateWaitMsgLimited</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SyncCheckBad</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SyncIncomingBlocks</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SyncState</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.SyncValidateTipset</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.Version</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.WalletBalance</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.WalletValidateAddress</SmartLink>
          <br />
          <SmartLink href=''>Filecoin.WalletVerify</SmartLink>
          <br />
        </p>
      </OneColumn>
    </TwoColumns>
  )
}
