---
title: /setting mainchannel
description: (SERVER ADMIN ONLY) Set this server's main channel.
---

## Description
**[SERVER ADMIN ONLY]** 

Change the server's main channel. 

All bot messages will be sent to this channel, unless the interaction is made in another channel, in that case the bot will reply in the channel the interaction was sent. Some modules require this to be set for them to work.

## Usage

`/setting mainchannel [[channel]]`

## Cooldown

15 seconds


## Required Arguments

- channel: A text channel to set as the main channel. Bot must have permission to see and send messages to it.

## Modules that require this setting

- birthdays