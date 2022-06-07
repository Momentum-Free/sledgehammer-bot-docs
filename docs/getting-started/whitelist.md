---
sidebar_position: 2
title: 🗳️ Whitelisting Roles
---

<!-- Imports -->

<!-- Documentation -->
In order to use Sledgehammer at it's full potential you have to either have `ADMINISTRATOR` permissions or have a role that has been whitelisted by an administrator.

:::info

At the moment it is only possible to whitelist **roles**, not users!

:::

```
/whitelist role
```

## Add

Add a new role to the server's whitelist.

```
/whitelist role add
```

**Parameters**

\*Required

**role\***

    type: Role

    description: Role to add to the whitelist.

**Example Usage**

```
/whitelist add role:@Moderator
```

## Remove

Remove a role from the server's whitelist.

```
/whitelist role remove
```

**Parameters**

\*Required

**role\***

    type: Role

    description: Role to remove from the whitelist.

**Example Usage**

```
/whitelist remove role:@Moderator
```
