---
sidebar_position: 1
---

# Anti-bot System

This feature is used to prevent raids, bot accounts (chat bots posing as real users) and malicious users with a unique verification system that will ask users to complete a challenge before having access to the rest of the server.

The system allows you to enable an "easy verification" feature which consists in two parts:
1. Users that have the following badges will be automatically verified when joining: `DISCORD_EMPLOYEE`, `PARTNERED_SERVER_OWNER`, `BUGHUNTER_LEVEL_1`, `BUGHUNTER_LEVEL_2`, `DISCORD_CERTIFIED_MODERATOR`.
2. Users that have the following badges will be automatically verified upon request (no challenge needed):  `HYPESQUAD_EVENTS`, `EARLY_SUPPORTER`, `EARLY_VERIFIED_BOT_DEVELOPER`.

It is also possible (and strongly suggested) to kick (ban is also possible) the user if they take longer than **X** minutes to get verified.

## Setup Command

```
/config panel setup 
```

### Parameters
*Required


**role***

    type: Role

    description: Role to give the member when verified succesfully.

**logs_channel**

    type: Text Channel

    description: Channel to send log messages regarding the verification system.

**send_channel**

    type: Text Channel

    description: Channel to send the verification instructions (for the users).

**easy_verification**

    type: Boolean

    description: Whether to enable or not the easy verification (recommended: yes).

**auto_prune_time**

    type: Time limit for taking action for unverified users, in minutes (recommended: no more than 30).

description: Number

**auto_prune_action**

    type: Option

    description: Action to take on unverified users (recommended: Kick).

    options: [ Disable, Kick, Ban ]

### Example Usage

```md
/config panel setup role:@Verified Human logs_channel:#verification-logs send_channel:#get-verified easy_verification:True auto_prune_time:5 auto_prune_action:Kick 
```