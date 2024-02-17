---
title: /owroles
description: Give a random role to a list of Overwatch players.
---

## Description
Give a random role to a list of Overwatch players.
Can specify the amount of roles to assign, and also if every player will be assigned a random hero.

## Usage

`/owroles [[players]] [dps] [support] [tank] [assignhero]`

## Cooldown

3 seconds

## Required Arguments

- players: A comma-separated list of players. Example: raccoon,bot,misfit

## Optional Arguments

- dps: Amount of DPS roles to assign (1-2)
- support: Amount of Support roles to assign (1-2)
- tank: Amount of Tank roles to assign (1)
- assignhero: If this is enabled (true), a hero will be assigned to each player, based on their role.

## Extra notes

If no roles are specified, or the amount of players exceeds the amount of assigned roles, random ones will be assigned.