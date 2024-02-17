---
title: /poll
description: Crea una encuesta.
---

### Descripción
Crea una encuesta con una pregunta y hasta 8 alternativas.

Los usuarios podrán votar haciendo clic en los botones de la interfaz y los resultados se actualizarán en tiempo real, con barras de porcentaje.

### Uso

`/poll [[pregunta]] [[alternativas]] [expiración]`

### Tiempo de espera

30 minutos

### Argumentos necesarios

- pregunta: La pregunta a realizar
- alternativas: Lista separada por comas de todas las alternativas. **(2-8)**

### Argumentos opcionales

- expiración: Fecha de expiración de la encuesta (por defecto: 1 día).

### Notas extra

Sólo un voto por usuario, los votos son definitivos.

La encuesta expira por defecto después de un día. Tras expirar, se pueden seguir viendo los resultados, pero no se puede votar más.
