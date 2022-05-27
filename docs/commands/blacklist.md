---
sidebar_position: 4
title: ⛔ Blacklist
---

<!-- Imports -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Documentation -->
This command is used to take an action on certain types of users based on a list of restrictions.

```
/blacklist
```

## Add

Add a new restriction to the server's blacklists.

```
/blacklist add
```

<Tabs>
<TabItem value="addbyavatar" label="Avatar" default>

<h3>Avatar</h3>

```
/blacklist add by_avatar
```

**Parameters**

\*Required

**user\***

    type: User

    descrption: The user that the avatar will be used as example

**reason\***

    type: String

    description: The reason why you are adding it to the blacklist

**action\***

    type: Option

    description: Action to take with the offenders

    options: [ Kick, Ban ]

**warn**

    type: Boolean

    description: Whether to try to warn the user why the action was taken or not

    default: False

**Example Usage**

```
/blacklist add by_avatar user:User#0000 reason:nsfw pfp action:Kick warn:True
```

</TabItem>
<TabItem value="byname" label="Name" default>

<h3>Name</h3>

```
/blacklist add by_name
```

**Parameters**

\*Required

**name\***

    type: String

    description: The name to add to the blacklist

**reason\***

    type: String

    description: The reason why you are adding it to the blacklist

**action\***

    type: Option

    description: Action to take with the offenders

    options: [ Kick, Ban ]

**warn**

    type: Boolean

    description: Whether to try to warn the user why the action was taken or not

    default: False

**use_regex**

    type: Boolean

    description: Use the name parameter as a Regex expression.

    default: False

**Example Usage**

<Tabs>
<TabItem value="withname" label="Usage with name" default>

```
/blacklist add by_name name:Bitcoin reason:Bitcoin name action:Kick warn:True
```

</TabItem>
<TabItem value="withregex" label="Usage with Regex">

```
/blacklist add by_name name:.*(support|help+)+.* reason:Help/Support Scam action:Kick warn:True use_regex:True
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="byuser" label="User">

<h3>User</h3>

```
/blacklist add by_user
```

**Parameters**

\*Required

**user\***

    type: User

    description: User to add to the blacklist

**reason\***

    type: String

    description: The reason why you are adding it to the blacklist

**action\***

    type: Option

    description: Action to take with the offenders

    options: [ Kick, Ban ]

**warn**

    type: Boolean

    description: Whether to try to warn the user why the action was taken or not

    default: False

**Example Usage**

```
/blacklist add by_user user:User#0000 reason:Phishing link action:Ban warn:True
```

</TabItem>
</Tabs>

## Remove

Remove a restriction from one of the server's blacklists.

```
/blacklist remove
```

<Tabs>
<TabItem value="removebyavatar" label="Avatar" default>

<h3>Avatar</h3>

```
/blacklist remove by_avatar
```

**Parameters**

\*Required

**avatar\***

    type: Option

    description: The avatar hash that will be removed

    Options: [ All your avatar hashs on the blacklist restrictions ]

:::info

These options only show up if you have at least one avatar blacklist restriction.

:::

**Example Usage**

```
/blacklist remove by_avatar avatar:3b2e1c95b0694cb10d392e75c367c2a1
```

</TabItem>
<TabItem value="byname" label="Name" default>

<h3>Name</h3>

```
/blacklist remove by_name
```

**Parameters**

\*Required

**name\***

    type: Option

    description: The name/regex that will be removed

    options: [ All your names on the blacklist restrictions ]

:::info

These options only show up if you have at least one name blacklist restriction.

:::

**Example Usage**

```
/blacklist remove by_name name:.*
```

</TabItem>
<TabItem value="byuser" label="User">

<h3>User</h3>

```
/blacklist remove by_user
```

**Parameters**

\*Required

**user\***

    type: Option

    description: The user id that will be removed

    options: [ All your users id on the blacklist restrictions ]

:::info

These options only show up if you have at least one user id blacklist restriction.

:::

**Example Usage**

```
/blacklist remove by_user userid:974620633881280582
```

</TabItem>
</Tabs>

## Subscribe

Subscribe to another sever's blacklist.

```
/blacklist subscribe
```

**Parameters**

\*Required

**guildid\***

    type: Guild Id

    description: Guild to subscribe the blacklist

**type\***

    type: Option

    description: Type of the blacklist

    options: [ Avatar Blacklist, Name Blacklist, User Blacklist ]

**Example Usage**

```
/blacklist subscribe guildid:974621155140960256 type:User Blacklist
```

## Unsubscribe

Unsubscribe another sever's blacklist.

```
/blacklist  unsubscribe
```

**Parameters**

\*Required

**guildid\***

    type: Guild Id

    description: Guild to unsubscribe the blacklist

**type\***

    type: Option

    description: Type of the blacklist

    options: [ Avatar Blacklist, Name Blacklist, User Blacklist ]

**Example Usage**

```
/blacklist unsubscribe guildid:974621155140960256 type:Avatar Blacklist
```
