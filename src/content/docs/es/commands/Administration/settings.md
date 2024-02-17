---
title: /settings
description: (SÓLO ADMINISTRADOR) Muestra una lista de configuraciones del servidor.
---

## Descripción
**[SÓLO ADMINISTRADOR]** 

Muestra una lista de configuraciones específicas para este servidor y sus valores actuales.

Después de usar el comando puedes navegar las opciones, ver sus valores actuales, y reiniciarlas a su valor por defecto utilizando los botones de la interfaz.

Por ahora, la única configuración disponible es *mainchannel*.

**Aviso:** Esto solo muestra una lista de configuraciones disponibles. Para cambiar el valor de cada una utiliza el comando **/setting** con la configuración a cambiar y su valor.

## Uso

`/settings`

## Tiempo de espera

15 segundos

## Opciones disponibles

### [mainchannel](/es/commands/administration/individual-settings/mainchannel)

Esta configuración define el canal principal del servidor. Todos los mensajes serán enviados a este canal, a lo menos que la interacción sea creada en otro canal, en ese caso el bot responderá
en el canal donde se creó la interacción. Algunos módulos requieren que esto esté configurado para funcionar correctamente.