---
sidebar_position: 5
title: 🚨 Raidban
---

This command is used to ban users based on the discord's default join message, selecting a start and a finishing message, you'll be able to select those users (Usefull for raids).

\*Required

**first_message\***

    type: String

    description: First message (id or link) to ban users.

**last_message\***

    type: String

    description: Last message (id or link) to ban users.

**reason\***

    type: String

    description: Reason to ban the users for.

**channel\***

    type: Text Channel

    description: Channel of these messages.

:::note

This option is only needed if you provided message ids.

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
    