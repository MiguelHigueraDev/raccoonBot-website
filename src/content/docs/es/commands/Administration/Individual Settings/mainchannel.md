---
title: /setting mainchannel
description: (SÓLO ADMINISTRADOR) Selecciona el canal principal del servidor.
---

## Descripción
**[SÓLO ADMINISTRADOR]** 

Cambia el canal principal del servidor.

Todos los mensajes del bot serán enviados a este canal, a lo menos que la interacción sea creada en otro canal, en ese caso el bot responderá en el canal donde se creó la interacción. Algunos módulos
requieren un canal principal para funcionar.

## Uso

`/setting mainchannel [[canal]]`

## Tiempo de espera

15 segundos


## Argumentos necesarios

- canal: Un canal de texto para configurar como principal. El bot debe tener permiso para verlo y enviar mensajes a ése canal.

## Módulos que requieren esta configuración

- birthdays (cumpleaños)