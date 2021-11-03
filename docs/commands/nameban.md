---
sidebar_position: 5
---

# Nameban

This command is used to ban users based on their username allowing to use Regex to have a more accurate filter for the name.

*Required

**name***

    type: String

    description: User's name to ban.

**reason***

    type: String

    description: Reason to ban the users for.

**regex**

    type: Boolean

    description: Do you want to use regex to filter the usernames?.

:::info
If you want to learn a bit more about Regex you can check [regexr.com](https://regexr.com) to help you build your expressions

:::

**global**

    type: Boolean

    description: Global ban the users? (Default: False).

**role-check**

    type: Boolean

    description: Whether to ban accounts with roles or not! (default: false).

**age**

    type: Number

    description: Accounts older then this value (in days) won't get banned!.

**days**

    type: Number

    description: Number of days to delete messages for (0-7).
