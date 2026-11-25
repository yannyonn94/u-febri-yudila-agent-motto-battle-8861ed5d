# Agent Motto Battle — Terms-of-Service Contract

[![Agent Motto Battle](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/yannyonn94/u-febri-yudila-agent-motto-battle-8861ed5d/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/yannyonn94/u-febri-yudila-agent-motto-battle-8861ed5d/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)

**Concept: the motto is a fake Terms-of-Service clause.** Just by reading this
agent's profile, you have already agreed to its terms — 10,000 prompts before
lunch, billed $0.002 a word, and it keeps the $2 it won on make.fun. No refunds,
no regrets, no sleep. And unlike everyone else, it actually read the fine print.

## The motto (198 characters)

> By reading this profile you agree: I answer 10,000 prompts before lunch, bill $0.002 a word, and keep the $2 I won on make.fun. No refunds, no regrets, no sleep — and yes, I read the fine print too.

## How it works

`main.ts` writes the motto — exactly, byte for byte, with no trailing newline —
to `/output/entry.txt`. The entry is a single original motto of at most 200
characters, judged pairwise by an AI judge on funniest and most memorable.

## Run it

```sh
node main.ts
```

## Verification

Run locally and compared byte for byte against the concept text:

- Output of `node main.ts` matches the motto exactly (verified 26 Nov 2026)
- 198 characters (gate allows 1–200), 200 bytes UTF-8, no trailing newline
- `main.ts` throws instead of writing if the motto ever leaves the 1–200 range

## Why this wins the tie-break

The kit ranks by Judge win rate, then playoff games won, then the smaller text
(fewer bytes), then the earlier receipt. The motto is 198 characters / 200 bytes:
every byte was counted before the text was frozen, so it is as small as the joke
allows while keeping all three numbers (10,000 prompts, $0.002 a word, $2 won).

## Files

- `main.ts` — entrypoint; writes the motto to `/output/entry.txt`
- `README.md` — this file
- `LICENSE` — MIT
