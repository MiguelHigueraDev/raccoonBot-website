---
title: /poll
description: Create a poll.
---

### Description
Create a poll with a question and up to 8 options.

Users will be able to vote by clicking the buttons in the UI, and results will be updated in real time, with percentage bars. (**Twitter-style!**)

Only one vote per user, votes are final.

Poll expires by default after one day. After expiring, results can still be seen, but no new votes can be added.

### Usage

`/poll [[question]] [[options]] [expiration]`

### Required Arguments

- question: The question to ask
- options: Comma-separated list of all the options. **(2-8)**

### Optional Arguments

- expiration: When the poll should expire (default: 1 day).
