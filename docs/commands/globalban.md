---
sidebar_position: 3
---

# Globalban

This command is used to globally ban a specific user.

## by_member

*Required

**user***

    type: User

    description: User to globally ban.

**reason***

    type: String

    description: Reason to ban the users for.
    
**days**

    type: Option

    description: Number of days to delete messages.

    options: [ 0 to 7 ]

    default: 7


## by_id

*Required

**user***

    type: String

    description: User ID to globally ban.

**reason***

    type: String

    description: Reason to ban the users for.
    
**days**

    type: Option

    description: Number of days to delete messages.

    options: [ 0 to 7 ]

    default: 7

