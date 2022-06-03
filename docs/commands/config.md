---
sidebar_position: 1
title: 🔧 Config
---

<!-- Imports -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';

<!-- Documentation -->
This command is used to configure multiple aspects and functionalities of the bot.

```
/config
```

## Autodelete

This feature will delete all messages according to the configuration after **X** minutes.

```
/config autodelete
```

### Enable

Adds a auto delete channel to the list

```
/config autodelete enable
```

**Parameters**

\*Required

**channel\***

    type: Text Channel

    description: The channel where the messages should be deleted.

**duration\***

    type: Number

    description: The time until the messages are deleted (in minutes).

**bots**

    type: Boolean

    description: Whether to delete bot messages or not.

    default: True

**pinned**

    type: Boolean

    description: Whether to delete pinned messages or not.

    default: False

**Example Usage**

```
/config autodelete enable channel:#bot-commands duration:5
```

### Disable

Removes a auto delete channel from the list

```
/config autodelete disable
```

**Parameters**

\*Required

**channel\***

    type: Text Channel

    description: The channel where the messages should be deleted.

**Example Usage**

```
/config autodelete disable channel:#bot-commands
```

## Bans

This feature will allow you to import and export bans from the server.

```
/config bans
```

### Export

Export the ban list from the server.

```
/config bans export
```

**Parameters**

\*Required

**format\***

    type: Option

    description: Type of file to export the bans to

    options: [ .csv File, .json File ]

**Example Usage**

```
/config bans export format:.csv File
```

### Import

Import a ban list to the server.

```
/config bans import
```

**Parameters**

**guild**

    type: String

    description: The guild ID to import bans from or leave empty to import from file

**Example Usage**

<Tabs>
<TabItem value="guildid" label="Usage with Guild ID" default>

```
/config bans import guild:966723419775311882
```

</TabItem>
<TabItem value="file" label="Usage with File">

```
/config bans import
```

:::info

To import the bans, you have to upload a `.csv` or `.json` file previous exported via the `/config bans export` command.

:::

</TabItem>
</Tabs>

## Logs

This feature will allow you to setup channels to keep track of all the bans occurring on the server.

```
/config logs
```

**Parameters**

\*Required

**channel\***

    type: Text Channel

    description: The channel to add to log events.

**enabled\***

    type: Boolean

    description: Whether this channel will receive logging messages or not.

**Example Usage**

<Tabs>
  <TabItem value="usage1" label="Enable" default>
    <CodeBlock>
      /config logs channel:#sledge-logs enabled:True
    </CodeBlock>
  </TabItem>
  <TabItem value="usage2" label="Disable">
    <CodeBlock>
      /config logs channel:#sledge-logs enabled:False
    </CodeBlock>
  </TabItem>
</Tabs>

## Panel

This feature is used to prevent raids, bot accounts (chat bots posing as real users) and malicious users with a unique verification system that will ask users to complete a challenge before having access to the rest of the server.

The system allows you to enable an `easy verification` feature which consists in two parts:

| Users that have the following badges will be automatically verified when joining                                                                                                                                                                                           	| Users that have the following badges will be automatically verified upon request (no challenge needed)                                                      	|
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| ![][discord_employee] `DISCORD_EMPLOYEE` <br/> ![][bughunter_level_1] `BUGHUNTER_LEVEL_1` <br/> ![][bughunter_level_2] `BUGHUNTER_LEVEL_2` <br/> ![][partnered_server_owner] `PARTNERED_SERVER_OWNER` <br/> ![][discord_certified_moderator] `DISCORD_CERTIFIED_MODERATOR` 	| ![][hypesquad_events] `HYPESQUAD_EVENTS` <br/> ![][early_supporter] `EARLY_SUPPORTER` <br/> ![][early_verified_bot_developer] `EARLY_VERIFIED_BOT_DEVELOPER` 	|

It is also possible (and strongly suggested) to kick (ban is also possible) the user if they take longer than **X** minutes to get verified.

```
/config panel
```

### Create

Used to complete a full setup for the anti-bot system.

```
/config panel create
```

**Parameters**

\*Required

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

**Example Usage**

<Tabs>
  <TabItem value="usage1" label="Usage with Parameters" default>
    <CodeBlock>
      /config panel create role:@Verified Human easy_verification:True auto_prune_time:5 auto_prune_action:Kick
    </CodeBlock>
  </TabItem>
  <TabItem value="usage2" label="Usage without Parameters">
    <CodeBlock>
      /config panel create
    </CodeBlock>
    <Admonition type="note">
      <p>
        All the parameters are optional, if you do not specify them, the bot will create an anti-bot system with the default options.
      </p>
    </Admonition>
  </TabItem>
</Tabs>

### Send

In case you need to send or resend the anti-bot verification message

```
/config panel send
```

**Parameters**

\*Required

**send_channel\***

    type: Text Channel

    description: Channel to send anti-bot message to.

**language**

    type: Option

    description: Language to send the message in.

    options: [ English (🇬🇧), Portuguese (🇵🇹), Ukrainian (🇺🇦), Russian (🇷🇺), French (🇫🇷) ]

    default: English (🇬🇧)

:::info

If you speak a language that is not currently supported by Sledgehammer, you can create an pull request with your language on the **[Github repo](https://github.com/Momentum-Free/sledgehammer-bot-translations)**.

:::

**Example Usage**

<Tabs>
  <TabItem value="usage1" label="English Message" default>
    <CodeBlock>
      /config panel send send_channel:#verify
    </CodeBlock>

**or**

<CodeBlock>
      /config panel send send_channel:#verify language:English
    </CodeBlock>
  </TabItem>
  <TabItem value="usage2" label="Portuguese Message">
    <CodeBlock>
      /config panel send send_channel:#verify language:Portuguese
    </CodeBlock>
  </TabItem>
</Tabs>

### Update

Used to update specific settings for the anti-bot system

```
/config panel update
```

**Parameters**

\*Required

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

:::info
The auto prune action will only affect users without any role.
:::

**Example Usage**

<Tabs>
  <TabItem value="usage1" label="Update one parameter" default>
    <CodeBlock>
      /config panel update auto_prune_time:1
    </CodeBlock>
    </TabItem>
  <TabItem value="usage2" label="Update multiple parameters">
    <CodeBlock>
      /config panel update auto_prune_time:1 auto_prune_action:Disable
    </CodeBlock>
  </TabItem>
</Tabs>

:::note
The parameters that weren't updated will be the previous ones.
:::

### Disable

Used to disable the anti-bot system

```
/config panel disable
```

## Report

This feature will return you a report about the bot's configurations on the server.

```
/config report
```

[discord_employee]: /img/DISCORD_EMPLOYEE.svg
[partnered_server_owner]: /img/PARTNERED_SERVER_OWNER.svg
[bughunter_level_1]: /img/BUGHUNTER_LEVEL_1.svg
[bughunter_level_2]: /img/BUGHUNTER_LEVEL_2.svg
[discord_certified_moderator]: /img/DISCORD_CERTIFIED_MODERATOR.svg
[hypesquad_events]: /img/HYPESQUAD_EVENTS.svg
[early_supporter]: /img/EARLY_SUPPORTER.svg
[early_verified_bot_developer]: /img/EARLY_VERIFIED_BOT_DEVELOPER.svg
