---
sidebar_position: 3
title: ⚙️ Export / Import Bans
---

<!-- Imports -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Documentation -->
If you manage multiple communities and want to import or export bans from one server to the other, this is the feature for you.

```
/config bans
```

### Export

Export the ban list from the server.

```
/config bans export
```

**Parameters**

\*Required

**format\***

    type: Option

    description: Type of file to export the bans to

    options: [ .csv File, .json File ]

**Example Usage**

```
/config bans export format:.csv File
```

### Import

Import a ban list to the server.

```
/config bans import
```

**Parameters**

**guild**

    type: String

    description: The guild ID to import bans from or leave empty to import from file

**Example Usage**

<Tabs>
<TabItem value="guildid" label="Usage with Guild ID" default>

```
/config bans import guild:966723419775311882
```

</TabItem>
<TabItem value="file" label="Usage with File">

```
/config bans import
```

:::info

To import the bans, you have to upload a `.csv` or `.json` file previous exported via the `/config bans export` command.

:::

</TabItem>
</Tabs>
