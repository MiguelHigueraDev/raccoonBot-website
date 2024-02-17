---
title: /settings
description: (SERVER ADMIN ONLY) Show a list of server settings.
---

### Description
**[SERVER ADMIN ONLY]** 

Show a list of server-specific settings and their current values.

After using the command you can browse the settings, check their current values, and reset them by using the buttons in the UI.

For now, the only setting available is *mainchannel*.

**Reminder:** this only shows a list of available settings. To change the value of each one use the command **/setting** with the specified setting.

### Usage

`/settings`

### Current settings

#### [mainchannel](/commands/administration/individual-settings/mainchannel)

This setting defines the main server channel. All bot messages will be sent to this channel, unless the interaction is made in another channel, in that case the bot will reply in the channel the interaction was sent. Some modules require this to be set for them to work.