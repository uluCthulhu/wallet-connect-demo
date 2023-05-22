import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./how-to.css";

function HowTo() {
  return (
    <header className="layout">
      <h1>How to install WalletConnect in your project</h1>
      <h5>
        {`For react you could use this `}
        <a
          href="https://docs.walletconnect.com/2.0/web3modal/react/installation"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation.
        </a>
        {` Comes with hooks (wagmi)`}
      </h5>
      <h4>
        {`But if you want to customize the chainID and available extensions you need the `}
        <a
          href="https://docs.walletconnect.com/2.0/web3modal/advanced/standalone/sign/installation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Standalone Client.
        </a>
      </h4>
      <pre>npm i @web3modal/standalone@latest</pre>
      <pre>npm i @walletconnect/sign-client@latest</pre>
      <h5>For typescript also run</h5>
      <pre>npm i @walletconnect/types</pre>
      <pre>npm i @types/web3modal</pre>
      <h5>In order to interact with Zenon SDK (znn.ts) you will also need ethers / ethers-ts</h5>
      <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
        <pre>npm i ethers</pre>
        <h5>or</h5>
        <pre>npm i ethers-ts</pre>
      </div>
      <h1>
        <Link to="/demo">Demo</Link>
      </h1>
    </header>
  );
}

export default HowTo;
