---
sidebar_position: 6
---

# Raidban

This command is used to ban users based on the discord's default join message, selecting a start and a finishing message, you'll be able to select those users (Usefull for raids).

*Required

**first_message***

    type: String

    description: First message (id or link) to ban users.

**last_message***

    type: String

    description: Last message (id or link) to ban users.

**reason***

    type: String

    description: Reason to ban the users for.

**channel***

    type: Text Channel

    description: Channel of these messages (only needed if you provided channel ids!).

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
