---
sidebar_position: 2
title: 🌐 Globalban / Globalunban
---

<!-- Imports -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';

<!-- Documentation -->

:::info
Both **global** commands are on the moderator's scope, meaning the ban/unban will be applied on all servers that the bot is in and where the moderator either has `ADMINISTRATOR` permission or has a whitelisted role.
:::

## Globalban

This command is used to globally ban a specific user.

<Tabs>
  <TabItem value="bymember" label="by_member" default>
  
<h3>by_member</h3>
<CodeBlock>
    /globalban by_member
</CodeBlock>

**Parameters**

\*Required

**user\***

    type: User

    description: User to globally ban.

**reason\***

    type: String

    description: Reason to ban the users for.

**days**

    type: Option

    description: Number of days to delete messages.

    options: [ 0 to 7 ]

    default: 7

**Example Usage**

<CodeBlock>
    /globalban by_member user:@user#0000 reason:Spam
</CodeBlock>
  </TabItem>

  <TabItem value="byid" label="by_id">
<h3>by_id</h3>
<CodeBlock>
    /globalban by_id
</CodeBlock>

**Parameters**

\*Required

**user\***

    type: User

    description: User to globally ban.

**reason\***

    type: String

    description: Reason to ban the users for.

**days**

    type: Option

    description: Number of days to delete messages.

    options: [ 0 to 7 ]

    default: 7

**Example Usage**

<CodeBlock>
    /globalban by_id user:312709238164291585 reason:Spam
</CodeBlock>
  </TabItem>
</Tabs>

## Globalunban

This command is used to globally unban a specific user in case a mistake was made.

```
/globalunban
```

**Parameters**

\*Required

**user_id\***

    type: String

    description: User ID to globally unban.

**Example Usage**

```
/globalunban user_id:312709238164291585
```
    