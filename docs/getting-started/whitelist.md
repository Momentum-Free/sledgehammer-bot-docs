---
sidebar_position: 2
title: Whitelisting Roles
---

In order to use Sledgehammer at it's full potential you have to either have `ADMINISTRATOR` permissions or have a role that has been whitelisted by an administrator.

:::info 
At the moment it is only possible to whitelist **roles**, not users!
:::

## Add Command

```
/whitelist role add
```

### Parameters
*Required


**role***

    type: Role

    description: Role to add to the whitelist.

### Example Usage

```md
/whitelist add role:@Moderator
```

## Remove Command

```
/whitelist role remove
```

### Parameters
*Required


**role***

    type: Role

    description: Role to remove from the whitelist.


### Example Usage

```md
/whitelist remove role:@Moderator
```