---
sidebar_position: 1
---

# Anti-bot System

This feature is used to prevent raids & malicious users allowing you to setup an unique verification system that will ask the users to complete a challenge before having access to the rest of the server.

The system allows you to enable a "easy verification" feature which consists in two parts:
1. Users that have the following badges will be automatically verified on join: `DISCORD_EMPLOYEE`, `PARTNERED_SERVER_OWNER`, `BUGHUNTER_LEVEL_1`, `BUGHUNTER_LEVEL_2`, `DISCORD_CERTIFIED_MODERATOR`.
2. Users that have the following badges will be automatically verified upon request (no challenge needed):  `HYPESQUAD_EVENTS`, `EARLY_SUPPORTER`, `EARLY_VERIFIED_BOT_DEVELOPER`.

It is also possible to kick or ban the user if he takes **X** more than minutes to verify.

## Setup Command

```
/config panel setup 
```

### Parameters
*Required


**role***

    type: Role

    description: Role to apply to the member when verified.

**logs_channel**

    type: Text Channel

    description: Channel to send log messages for the anti-bot system.

**send_channel**

    type: Text Channel

    description: Channel to send anti-bot message.

**easy_verification**

    type: Boolean

    description: Whether to enable or not the easy verification.

**auto_prune_time**

    type: Time limit for taking action for unverified users, in minutes.

description: Number

**auto_prune_action**

    type: Option

    description: Action to take on unverified users.

    options: [ Disable, Kick, Ban ]

### Example Usage

```md
/config panel setup role:@Verified Human logs_channel:#logs send_channel:#anti-bot-test easy_verification:True auto_prune_time:5 auto_prune_action:Kick 
```