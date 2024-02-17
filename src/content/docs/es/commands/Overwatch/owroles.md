---
title: /owroles
description: Asigna un rol aleatorio a una lista de jugadores de Overwatch.
---

## Descripción
Asigna un rol aleatorio a una lista de jugadores de Overwatch.
Se puede especificar la cantidad de roles a asignar, y además si también se les asignará un héroe aleatorio a cada jugador.

## Uso

`/owroles [[jugadores]] [dps] [support] [tank] [asignarhéroe]`

## Tiempo de espera

3 segundos

## Argumentos necesarios

- players: A comma-separated list of players. Example: raccoon,bot,misfit

## Argumentos opcionales

- dps: Cantidad de DPS a asignar (1-2)
- support: Cantidad de Support a asignar (1-2)
- tank: Cantidad de Tanques a asignar (1)
- assignhero: Si está activado, un héroe se asignará a cada jugador, de acuerdo a su rol.

## Notas extra

Si no se especifican roles, o la cantidad de jugadores es mayor a la cantidad de roles asignados, se asignarán roles al azar para los jugadores que no alcancen.