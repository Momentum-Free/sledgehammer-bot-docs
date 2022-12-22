import React, { useEffect, useState } from "react";
import { msToTime, optimizeNumbers } from "../../utils";

import axios from "axios";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function BotStatus() {
  const [status, setStatus] = useState([]);
  const [reload, setReload] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const { SLEDGEHAMMER_API } = useDocusaurusContext().siteConfig.customFields;

  useEffect(() => {
    fetch()
      .then((data) => {
        setStatus(data);
      })
      .finally(() => {
        setIsLoading(false);
      });

    const countdown = setInterval(() => {
      setReload((prev) => (prev === 0 ? 30 : prev - 1));
    }, 1000);

    const interval = setInterval(() => {
      fetch()
        .then((data) => {
          setIsLoading(true);
          setStatus(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 30000);

    return () => {
      clearInterval(interval);
      clearInterval(countdown);
    };
  }, []);

  const fetch = async () => {
    try {
      return (await axios.get(`${SLEDGEHAMMER_API}/stats`)).data;
    } catch (_) {
      return [];
    }
  };

  if (isLoading)
    return (
      <div className={styles.section}>
        <h1>Loading ...</h1>
      </div>
    );

  if (!isLoading && status.length === 0)
    return (
      <div className={styles.section}>
        <h1>Bot currently offline ...</h1>
        <p>Reloading status in {reload}s</p>
      </div>
    );

  return (
    <section className={styles.section}>
      <h1>Sledgehammer's Status</h1>

      <p>
        {status.length} Total Shards
        <br />
        {status.reduce((acc, s) => {
          return acc + (s.status === 0 ? 1 : 0);
        }, 0)}
        /{status.length} Shards Online
      </p>
      <p>
        <strong>Total Guilds</strong> {optimizeNumbers(status.reduce((acc, s) => acc + s.guilds, 0))}
        <br />
        <strong>Total Users</strong> {optimizeNumbers(status.reduce((acc, s) => acc + s.users, 0))}
      </p>
      <p>Reloading status in {reload}s</p>

      {/* <p>
        {Object.entries(clientStatuses).map(([key, value]) => {
          return (
            <span
              className={`${styles[`${value.class}-text`]} ${
                styles["shard-text"]
              }`}>
              {value.name}
            </span>
          );
        })}
      </p> */}

      <div className={styles.div}>
        {status.map((s) => {
          return (
            <div
              key={s.shardId}
              className={`${styles.badge} ${
                styles[clientStatuses[s.status].class]
              }`}>
              <span>{s.shardId}</span>
              <div className={styles.tooltip}>
                <span>
                  <strong>Status</strong> {clientStatuses[s.status].name}
                  <br />
                  <strong>Guilds</strong> {optimizeNumbers(s.guilds)}
                  <br />
                  <strong>Users</strong> {optimizeNumbers(s.users)}
                  <br />
                  <strong>Ping</strong> {s.ping}ms
                  <br />
                  <strong>Uptime</strong> {msToTime(s.uptime)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const clientStatuses = {
  0: {
    name: "Ready",
    class: "shard-ready",
  },
  1: {
    name: "Connecting",
    class: "shard-connecting",
  },
  2: {
    name: "Reconnecting",
    class: "shard-reconnecting",
  },
  3: {
    name: "Idle",
    class: "shard-idle",
  },
  4: {
    name: "Nearly",
    class: "shard-nearly",
  },
  5: {
    name: "Disconnected",
    class: "shard-disconnected",
  },
  6: {
    name: "Waiting For Guilds",
    class: "shard-waitingforguilds",
  },
  7: {
    name: "Identifying",
    class: "shard-identifying",
  },
  8: {
    name: "Resuming",
    class: "shard-resuming",
  },
};

// function convertStatus(status) {

// }

export default BotStatus;
