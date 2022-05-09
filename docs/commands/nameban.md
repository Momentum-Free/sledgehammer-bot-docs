---
sidebar_position: 4
title: ✏️ Nameban
---

<!-- Imports -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';

<!-- Documentation -->
This command is used to ban users based on their username allowing to use Regex to have a more accurate filter for the name.

```
/nameban
```

**Parameters**

\*Required

**name\***

    type: String

    description: User's name to ban.

**reason\***

    type: String

    description: Reason to ban the users for.

**regex**

    type: Boolean

    description: Use the name parameter as a Regex expression.

    default: False

:::info

If you want to learn a bit more about Regex you can check [regexr.com](https://regexr.com) to help you build your expressions.

:::

**global**

    type: Boolean

    description: Global ban the users?

    default: False

**role-check**

    type: Boolean

    description: Whether to ban accounts with roles or not!

    default: False

**age**

    type: Number

    description: Accounts older then this value (in days) won't get banned!.

**days**

    type: Option

    description: Number of days to delete messages.

    options: [ 0 to 7 ]

    default: 7

**Example Usage**

<Tabs>
    <TabItem value="withname" label="Usage with Name" default>
        <CodeBlock>
            /nameban name:Support reason:Scam
        </CodeBlock>
    </TabItem>
    <TabItem value="withregex" label="Usage with Regex">
        <CodeBlock>
            /nameban name:(?i)(support|helpdesk) reason:Raid regex:True
        </CodeBlock>
    </TabItem>
</Tabs>
    