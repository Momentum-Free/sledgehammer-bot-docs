---
sidebar_position: 3
title: Import / Export Bans
---

If you manage multiple communities and want to import or export bans from one server to the other, this is the feature for you. 

## Import Command

```
/config bans import
```

### Parameters
*Required


**guild**

    type: Guild Id

    description: Guild to import bans from.

### Example Usage

```md
/config bans import guild:802536093995892806
```

:::info
The guild parameter is optional, if you do not specify it, you will be prompted with a message, requesting you to send a bans file previously exported. (Example: **exportedbans.json** or **exportedbans.csv**)
:::

```md
/config bans import
```

## Export Command

```
/config bans export
```

### Parameters
*Required


**format***

    type: Option

    description: File format to export the bans to.

    choices: [ .csv File, .json File ]

### Example Usage

```md
/config bans export format:json
```