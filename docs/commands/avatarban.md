---
sidebar_position: 2
---

# Avatarban

This command is used to ban users that match a certain avatar.

*Required

**user***

    type: User

    description: User to get the avatar from.

**reason***

    type: String

    description: Reason to ban the users for.

**global**

    type: Boolean

    description: Global ban the users?

    default: False

**role-check**

    type: Boolean

    description: Whether to ban accounts with roles or not.

    default: False

**age**

    type: Number

    description: Accounts older then this value (in days) won't get banned.

**days**

    type: Option

    description: Number of days to delete messages.

    options: [ 0 to 7 ]

    default: 7
