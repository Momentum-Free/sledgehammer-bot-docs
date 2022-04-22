---
sidebar_position: 1
---

# Anti-bot System

This feature is used to prevent raids, bot accounts (chat bots posing as real users) and malicious users with a unique verification system that will ask users to complete a challenge before having access to the rest of the server.

The system allows you to enable an "easy verification" feature which consists in two parts:
1. Users that have the following badges will be automatically verified when joining: ![][DISCORD_EMPLOYEE] `DISCORD_EMPLOYEE`, ![][BUGHUNTER_LEVEL_1] `BUGHUNTER_LEVEL_1`, ![][BUGHUNTER_LEVEL_2] `BUGHUNTER_LEVEL_2`, ![][PARTNERED_SERVER_OWNER] `PARTNERED_SERVER_OWNER`, ![][DISCORD_CERTIFIED_MODERATOR] `DISCORD_CERTIFIED_MODERATOR`.
2. Users that have the following badges will be automatically verified upon request (no challenge needed):  ![][HYPESQUAD_EVENTS] `HYPESQUAD_EVENTS`, ![][EARLY_SUPPORTER] `EARLY_SUPPORTER`, ![][EARLY_VERIFIED_BOT_DEVELOPER] `EARLY_VERIFIED_BOT_DEVELOPER`.

It is also possible (and strongly suggested) to kick (ban is also possible) the user if they take longer than **X** minutes to get verified.

## Create Command

```
/config panel create
```

### Parameters

**role**

    type: Role

    description: Role to apply to the member when verified.

    default: Will create a new role called "Verified Human"

**easy_verification**

    type: Boolean

    description: Whether to enable or not the easy verification.

    default: False

**auto_prune_time**

    type: Number

    description: Time limit for taking action for unverified users, in minutes.
        
    default: 30

**auto_prune_action**

    type: Option

    description: Action to take on unverified users.

    options: [ Disable, Kick, Ban ]

    default: Disabled

### Example Usage

```md
/config panel create role:@Verified Human easy_verification:True auto_prune_time:5 auto_prune_action:Kick 
```

:::info
All the parameters are optional, if you do not specify them, the bot will create an anti-bot system with the default options.
:::

```md
/config panel create
```

[DISCORD_EMPLOYEE]: /img/DISCORD_EMPLOYEE.svg
[PARTNERED_SERVER_OWNER]: /img/PARTNERED_SERVER_OWNER.svg
[BUGHUNTER_LEVEL_1]: /img/BUGHUNTER_LEVEL_1.svg
[BUGHUNTER_LEVEL_2]: /img/BUGHUNTER_LEVEL_2.svg
[DISCORD_CERTIFIED_MODERATOR]: /img/DISCORD_CERTIFIED_MODERATOR.svg
[HYPESQUAD_EVENTS]: /img/HYPESQUAD_EVENTS.svg
[EARLY_SUPPORTER]: /img/EARLY_SUPPORTER.svg
[EARLY_VERIFIED_BOT_DEVELOPER]: /img/EARLY_VERIFIED_BOT_DEVELOPER.svg