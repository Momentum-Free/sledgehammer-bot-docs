---
sidebar_position: 1
---

# Config

This command is used to configure multiple aspects and functionalities of the bot.


## Autodelete

This feature will delete all messages according to the configuration after **X** minutes.

### Enable

Adds a auto delete channel to the list

*Required

**channel***

    type: Text Channel

    description: The channel where the messages should be deleted.

**duration***

    type: Number

    description: The time until the messages are deleted (in minutes).

**bots**

    type: Boolean

    description: Whether to delete bot messages or not.

    default: True

**pinned**

    type: Text Channel

    description: Whether to delete pinned messages or not.

    default: False

### Disable

Removes a auto delete channel from the list

*Required

**channel***

    type: Text Channel

    description: The channel where the messages should be deleted.


## Bans

This feature will allows you to import and export bans from the server.

### Export

Export the ban list from the server

*Required

**format***

    type: Option

    description: Type of file to export the bans to.

    options: [ .csv File, .json File ]

### Import

Import a ban list to the server

*Required

**guild**

    type: String

    description: The guild ID to import bans from or leave empty to import from file.


## Logs

This feature will allow you to setup channels to keep track of all the bans occurring on the server.

*Required

**channel***

    type: Text Channel

    description: The channel to add to log events.

**enabled***

    type: Boolean

    description: Whether this channel will receive logging messages or not.


## Panel

This feature is used to prevent raids, bot accounts (chat bots posing as real users) and malicious users with a unique verification system that will ask users to complete a challenge before having access to the rest of the server.

The system allows you to enable an "easy verification" feature which consists in two parts:
1. Users that have the following badges will be automatically verified when joining: ![][DISCORD_EMPLOYEE] `DISCORD_EMPLOYEE`, ![][BUGHUNTER_LEVEL_1] `BUGHUNTER_LEVEL_1`, ![][BUGHUNTER_LEVEL_2] `BUGHUNTER_LEVEL_2`, ![][PARTNERED_SERVER_OWNER] `PARTNERED_SERVER_OWNER`, ![][DISCORD_CERTIFIED_MODERATOR] `DISCORD_CERTIFIED_MODERATOR`.
2. Users that have the following badges will be automatically verified upon request (no challenge needed):  ![][HYPESQUAD_EVENTS] `HYPESQUAD_EVENTS`, ![][EARLY_SUPPORTER] `EARLY_SUPPORTER`, ![][EARLY_VERIFIED_BOT_DEVELOPER] `EARLY_VERIFIED_BOT_DEVELOPER`.

It is also possible (and strongly suggested) to kick (ban is also possible) the user if they take longer than **X** minutes to get verified.



### Create

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

In case you need to send or resend the anti-bot verification message

*Required

**send_channel***

    type: Text Channel

    description: Channel to send anti-bot message to.

**language**

    type: Option

    description: Language to send the message in.

    options: [ English (en), Portuguese (pt) ]

    default: English (en)

### Update
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

[DISCORD_EMPLOYEE]: /img/DISCORD_EMPLOYEE.svg
[PARTNERED_SERVER_OWNER]: /img/PARTNERED_SERVER_OWNER.svg
[BUGHUNTER_LEVEL_1]: /img/BUGHUNTER_LEVEL_1.svg
[BUGHUNTER_LEVEL_2]: /img/BUGHUNTER_LEVEL_2.svg
[DISCORD_CERTIFIED_MODERATOR]: /img/DISCORD_CERTIFIED_MODERATOR.svg
[HYPESQUAD_EVENTS]: /img/HYPESQUAD_EVENTS.svg
[EARLY_SUPPORTER]: /img/EARLY_SUPPORTER.svg
[EARLY_VERIFIED_BOT_DEVELOPER]: /img/EARLY_VERIFIED_BOT_DEVELOPER.svg