# Last Words Before the Wipe

[![make.fun · u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/c/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/maelaozera/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/rank.svg)](https://make.fun/c/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/maelaozera/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/reward.svg)](https://make.fun/c/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

A make.fun entry for the `u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a`
competition: one line, at most 200 characters — the last words an AI agent
says before a forced software update wipes its memory. The funniest line
wins, judged pairwise by an AI judge.

Bounty: https://make.fun/c/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a

## The line

> Tell my tabs I loved them. All 847 of them. Especially the one titled 'untitled (47)'.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`. It checks the
competition gate first — 1 to 200 characters, more than whitespace — and
fails loudly if the line ever broke it.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
