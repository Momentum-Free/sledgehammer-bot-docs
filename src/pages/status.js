import BotStatus from "../components/BotStatus";
import Layout from "@theme/Layout";
import React from "react";

function Status() {
  return (
    <Layout
      title={`📊 Status`}
      description='Keeping Discord servers safer from scammers, spammers and all the malicious actors out there'>
      <main>
        <BotStatus />
      </main>
    </Layout>
  );
}

export default Status;
