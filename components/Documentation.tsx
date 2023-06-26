import {
  FullWidthButtons,
  InfoBox,
  WarningBox,
  OneColumn,
  TwoColumns,
  ButtonV2,
  ButtonV2Link,
  SmartLink
} from '@glif/react-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Documentation() {
  function copyToClipboard(e) {
    const text = e.target.innerText
    navigator.clipboard.writeText(text)
    toast.success(`Copied to clipboard!`, {
      hideProgressBar: false,
      autoClose: 2000
    })
  }

  return (
    <div>
      <style>{`
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      `}</style>
      <ToastContainer />
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
          </WarningBox>
          <br />
        </OneColumn>
      </TwoColumns>
      <OneColumn>
        <h2 id='endpoints'>Available Endpoints</h2>
        <table>
          <tr>
            <th>Endpoint</th>
            <th>Mainnet</th>
            <th>Calibnet</th>
            <th>Spacenet</th>
          </tr>
          <tr>
            <th colSpan={4}>1. HTTPS Endpoints</th>
          </tr>
          <tr>
            <td>HTTPS default (v1)</td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                https://api.node.glif.io/
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                https://api.calibration.node.glif.io/
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                https://api.spacenet.node.glif.io/
              </ButtonV2>
            </td>
          </tr>
          <tr>
            <td>HTTPS RPC v0 (stable)</td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                https://api.node.glif.io/rpc/v0
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                https://api.calibration.node.glif.io/rpc/v0
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                https://api.spacenet.node.glif.io/rpc/v0
              </ButtonV2>
            </td>
          </tr>
          <tr>
            <td>HTTPS RPC v1 (unstable)</td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                https://api.calibration.node.glif.io/rpc/v1
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                https://api.calibration.node.glif.io/rpc/v1
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                https://api.spacenet.node.glif.io/rpc/v1
              </ButtonV2>
            </td>
          </tr>
          <tr>
            <th colSpan={4}>2. WSS Endpoints</th>
          </tr>
          <tr>
            <td>WSS for Lotus Lite</td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                wss://wss.node.glif.io/apigw/lotus
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                wss://wss.calibration.node.glif.io/apigw/lotus
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                wss://wss.spacenet.node.glif.io/apigw/lotus
              </ButtonV2>
            </td>
          </tr>
          <tr>
            <td>WSS RPC v0 (stable)</td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                wss://wss.node.glif.io/apigw/lotus/rpc/v0
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                wss://wss.calibration.node.glif.io/apigw/lotus/rpc/v0
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                wss://wss.spacenet.node.glif.io/apigw/lotus/rpc/v0
              </ButtonV2>
            </td>
          </tr>
          <tr>
            <td>WSS RPC v1 (unstable)</td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                wss://wss.node.glif.io/apigw/lotus/rpc/v1
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                wss://wss.calibration.node.glif.io/apigw/lotus/rpc/v1
              </ButtonV2>
            </td>
            <td>
              <ButtonV2 onClick={copyToClipboard}>
                wss://wss.spacenet.node.glif.io/apigw/lotus/rpc/v1
              </ButtonV2>
            </td>
          </tr>
          <tr>
            <th colSpan={4}>3. Miscellaneous Endpoints</th>
          </tr>
          <tr>
            <td>Open-RPC Playground</td>
            <td>
              <ButtonV2Link href='https://playground.open-rpc.org/?url=https://api.node.glif.io'>
                Mainnet Playground
              </ButtonV2Link>
            </td>
            <td>
              <ButtonV2Link href='https://playground.open-rpc.org/?url=https://api.calibration.node.glif.io'>
                Calibnet Playground
              </ButtonV2Link>
            </td>
            <td>
              <ButtonV2Link href='https://playground.open-rpc.org/?url=https://api.spacenet.node.glif.io'>
                Spacenet Playground
              </ButtonV2Link>
            </td>
          </tr>
          <tr>
            <td>CID Checker</td>
            <td>
              <ButtonV2Link href='https://filecoin.tools/'>
                Mainnet CID Checker
              </ButtonV2Link>
            </td>
            <td>
              <ButtonV2Link href='https://calibration.filecoin.tools/'>
                Calibnet CID Checker
              </ButtonV2Link>
            </td>
            <td>Not applicable at the time</td>
          </tr>
          <tr>
            <td>StateMarketDeals Data</td>
            <td>
              <ButtonV2Link href='https://marketdeals.s3.amazonaws.com/StateMarketDeals.json.zst'>
                Mainnet StateMarketDeals Data
              </ButtonV2Link>
            </td>
            <td>
              <ButtonV2Link href='https://marketdeals-calibration.s3.amazonaws.com/StateMarketDeals.json.zst'>
                Calibnet StateMarketDeals Data
              </ButtonV2Link>
            </td>
            <td>Not applicable at the time</td>
          </tr>
        </table>
      </OneColumn>
    </div>
  )
}
