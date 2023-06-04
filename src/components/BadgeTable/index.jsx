import BugHunterLevel1 from "../icons/BugHunterLevel1";
import BugHunterLevel2 from "../icons/BugHunterLevel2";
import DiscordCertifiedModerator from "../icons/DiscordCertifiedModerator";
import DiscordEmployee from "../icons/DiscordEmployee";
import EarlySupporter from "../icons/EarlySupporter";
import EarlyVerifiedBotDeveloper from "../icons/EarlyVerifiedBotDeveloper";
import HypeSquadEvents from "../icons/HypeSquadEvents";
import ParteneredServerOwner from "../icons/ParteneredServerOwner";
import React from "react";

function BadgeTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Users that have the following badges will be automatically verified
            when joining
          </th>
          <th>
            Users that have the following badges will be automatically verified
            upon request (no challenge needed)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <DiscordEmployee />
            <br />
            <BugHunterLevel1 />
            <br />
            <BugHunterLevel2 />
            <br />
            <ParteneredServerOwner />
            <br />
            <DiscordCertifiedModerator />
          </td>
          <td>
            <HypeSquadEvents />
            <br />
            <EarlySupporter />
            <br />
            <EarlyVerifiedBotDeveloper />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BadgeTable;
