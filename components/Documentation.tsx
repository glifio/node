import {
  FullWidthButtons,
  InfoBox,
  WarningBox,
  OneColumn,
  TwoColumns,
  ButtonV2Link,
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
          <span>Lotus Gateway versions for Filecoin Mainnet:</span>
          <ButtonV2Link href='https://api.node.glif.io'>
            api.node.glif.io - v1
          </ButtonV2Link>
          <ButtonV2Link href='https://api.node.glif.io/rpc/v0'>
            api.node.glif.io/rpc/v0 - v0
          </ButtonV2Link>
          <ButtonV2Link href='https://api.node.glif.io/rpc/v1'>
            api.node.glif.io/rpc/v1 - v1 (unstable)
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>Lotus Gateway wss endpoints for Filecoin Mainnet:</span>
          <ButtonV2Link href='wss://wss.node.glif.io/apigw/lotus/rpc/v0'>
            wss://wss.node.glif.io/apigw/lotus/rpc/v0
          </ButtonV2Link>
          <ButtonV2Link href='wss://wss.node.glif.io/apigw/lotus/rpc/v1'>
            wss://wss.node.glif.io/apigw/lotus/rpc/v1
          </ButtonV2Link>
        </FullWidthButtons>

        <FullWidthButtons>
          <span>
            Lotus API AWS Gateway versions for Filecoin Calibration network:
          </span>
          <ButtonV2Link href='https://api.calibration.node.glif.io'>
            api.calibration.node.glif.io - v1
          </ButtonV2Link>
          <ButtonV2Link href='https://api.calibration.node.glif.io/rpc/v0'>
            api.calibration.node.glif.io/rpc/v0 - v0
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
            api.hyperspace.node.glif.io - v1
          </ButtonV2Link>
          <ButtonV2Link href='https://api.hyperspace.node.glif.io/rpc/v0'>
            api.hyperspace.node.glif.io/rpc/v0 - v0
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

        <WarningBox>
          If you are using Lotus Lite, use the following value instead:
          <br />
          <SmartLink href='wss://wss.hyperspace.node.glif.io/apigw/lotus/'>
            wss://wss.hyperspace.node.glif.io/apigw/lotus/
          </SmartLink>
          <br />
          <br />
          <SmartLink href='https://github.com/filecoin-project/lotus/issues/10099'>
            Read the dedicated issue
          </SmartLink>
        </WarningBox>
      </OneColumn>

      <OneColumn>
        <WarningBox>
          Before going to Available API request methods, please, consider that{' '}
          <b>Filecoin.StateMarketDeals</b> operation data is available as a
          direct link to AWS s3. StateMarketDeals data is refreshing every 10
          minutes:
          <br />
          <SmartLink href='https://marketdeals.s3.amazonaws.com/StateMarketDeals.json.zst'>
            Mainnet
          </SmartLink>
          <br />
          <SmartLink href='https://marketdeals-calibration.s3.amazonaws.com/StateMarketDeals.json.zst'>
            Calibration
          </SmartLink>
          <br />
          <SmartLink href='https://marketdeals-hyperspace.s3.amazonaws.com/StateMarketDeals.json.zst'>
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
      </OneColumn>
    </TwoColumns>
  )
}
