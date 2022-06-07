---
sidebar_position: 1
title: 🤖 Anti-bot System
---

<!-- Imports -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Documentation -->
This feature is used to prevent raids, bot accounts (chat bots posing as real users) and malicious users with a unique verification system that will ask users to complete a challenge before having access to the rest of the server.

The system allows you to enable an `easy_verification` feature which consists in two parts:

| Users that have the following badges will be automatically verified when joining                                                                                                                                                                                           	| Users that have the following badges will be automatically verified upon request (no challenge needed)                                                      	|
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| ![][discord_employee] `DISCORD_EMPLOYEE` <br/> ![][bughunter_level_1] `BUGHUNTER_LEVEL_1` <br/> ![][bughunter_level_2] `BUGHUNTER_LEVEL_2` <br/> ![][partnered_server_owner] `PARTNERED_SERVER_OWNER` <br/> ![][discord_certified_moderator] `DISCORD_CERTIFIED_MODERATOR` 	| ![][hypesquad_events] `HYPESQUAD_EVENTS` <br/> ![][early_supporter] `EARLY_SUPPORTER` <br/> ![][early_verified_bot_developer] `EARLY_VERIFIED_BOT_DEVELOPER` 	|

It is also possible (and strongly suggested) to kick (ban is also possible) the user if they take longer than `X` minutes to get verified.

## Create Command

Used to complete a full setup for the anti-bot system.

```
/config panel create
```

**Parameters**

**role**

    type: Role

    description: Role to apply to the member when verified

    default: Will create a new role called "Verified Human"

**easy_verification**

    type: Boolean

    description: Whether to enable or not the easy verification

    default: False

**auto_prune_time**

    type: Number

    description: Time limit for taking action for unverified users, in minutes

    default: 30

**auto_prune_action**

    type: Option

    description: Action to take on unverified users

    options: [ Disable, Kick, Ban ]

    default: Disabled

:::info

The auto prune action will only affect users without any role.

:::

**Example Usage**

<Tabs>
<TabItem value="withparameters" label="Usage with Parameters" default>

```
/config panel create role:@Verified Human easy_verification:True auto_prune_time:5 auto_prune_action:Kick
```

</TabItem>
<TabItem value="withoutparameters" label="Usage without Parameters">

```
/config panel create
```

:::note

All the parameters are optional, if you do not specify them, the bot will create an anti-bot system with the default options.

:::

</TabItem>
</Tabs>

[discord_employee]: /img/DISCORD_EMPLOYEE.svg
[partnered_server_owner]: /img/PARTNERED_SERVER_OWNER.svg
[bughunter_level_1]: /img/BUGHUNTER_LEVEL_1.svg
[bughunter_level_2]: /img/BUGHUNTER_LEVEL_2.svg
[discord_certified_moderator]: /img/DISCORD_CERTIFIED_MODERATOR.svg
[hypesquad_events]: /img/HYPESQUAD_EVENTS.svg
[early_supporter]: /img/EARLY_SUPPORTER.svg
[early_verified_bot_developer]: /img/EARLY_VERIFIED_BOT_DEVELOPER.svg
