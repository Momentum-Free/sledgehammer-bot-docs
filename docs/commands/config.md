---
sidebar_position: 1
---

# Config

This command is used to configure multiple aspects and functionalities of the bot.


## Autodelete

This feature will delete all messages according to the configuration fater **X** minutes.

### Enable
*Required

Adds a auto delete channel to the list

**channel***

    type: Text Channel

    description: The channel where the messages should be deleted.

**duration***

    type: Number

    description: The time until the messages are deleted (in minutes).

**bots**

    type: Boolean

    description: Whether to delete bot messages or not (default: true).

**pinned**

    type: Text Channel

    description: Whether to delete pinned messages or not (default: false).

### Disable
*Required

Removes a auto delete channel from the list

**channel***

    type: Text Channel

    description: The channel where the messages should be deleted.


## Logs

This feature will allow you to setup channels to keep track of all the bans occurring on the server.

**channel***

    type: Text Channel

    description: The channel to add to log events.

**enabled***

    type: Boolean

    description: Whether this channel will receive logging messages or not.


## Bans

This feature will allows you to import and export bans from the server.

### Export
*Required

Export the ban list from the server

**format***

    type: Choice

    description: Type of file to export the bans to.

    choices: [ .csv File, .json File ]

### Import
*Required

Import a ban list to the server

**guild**

    type: String

    description: The guild ID to import bans from (leave empty to import from file).


## Panel

This feature is used to prevent raids & malicious users allowing you to setup an unique anti-bot verification system that will ask the users to complete a challenge before having access to the rest of the server.

The system allows you to enable a "easy verification" feature which consists in two parts:
1. Users that have the following badges will be automatically verified on join: `DISCORD_EMPLOYEE`, `PARTNERED_SERVER_OWNER`, `BUGHUNTER_LEVEL_1`, `BUGHUNTER_LEVEL_2`, `DISCORD_CERTIFIED_MODERATOR`.
2. Users that have the following badges will be automatically verified upon request (no challenge needed):  `HYPESQUAD_EVENTS`, `EARLY_SUPPORTER`, `EARLY_VERIFIED_BOT_DEVELOPER`.



### Setup

Used to complete a full setup for the anti-bot system.

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

### Send
*Required

In case you need to send or resend the anti-bot verification message

**send_channel***

    type: Text Channel

    description: Channel to send anti-bot message to.

**language**

    type: Choice

    description: Language to send the message in.

    default: English (en)

### Set
Used to update specific settings for the anti-bot system

**role**

    type: Role

    description: Role to apply to the member when verified.

    default: Use previously saved role

**logs_channel**

    type: Text Channel

    description: Channel to send log messages for the anti-bot system.

    default: Use previously saved channel

**easy_verification**

    type: Boolean

    description: Whether to enable or not the easy verification.

    default: Use previously saved value

**auto_prune_time**

    type: Number

    description: Time limit for taking action for unverified users, in minutes.
    
    default: Use previously saved value

**auto_prune_action**

    type: Option

    description: Action to take on unverified users.

    options: [ Disable, Kick, Ban ]

    default: Use previously saved value
    

### Disable
Used to disable the anti-bot system