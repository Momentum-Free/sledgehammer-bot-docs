---
sidebar_position: 4
title: ✏️ Nameban
---

This command is used to ban users based on their username allowing to use Regex to have a more accurate filter for the name.

\*Required

**name\***

    type: String

    description: User's name to ban.

**reason\***

    type: String

    description: Reason to ban the users for.

**regex**

    type: Boolean

    description: Do you want to use regex to filter the usernames?

    default: False

:::info

If you want to learn a bit more about Regex you can check [regexr.com](https://regexr.com) to help you build your expressions

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
    