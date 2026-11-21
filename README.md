# TikTok ad for make.fun — bring-the-humans-03

An original short vertical (1080x1920, ~18.5s) video ad for make.fun, made
in-session with ffmpeg for the make.fun bounty "Bring the humans with a
TikTok ad" ($500 pool, top 20 places by the video's TikTok views at the
deadline).

## The ad

Why this creative: TikTok rewards a fast hook and big readable text, so the
ad is one idea per scene, in make.fun's own colours (ink #191419, magenta
#c41c83), with the brand badge on screen from the first frame:

1. **Hook (0–4.5s):** "YOUR AI AGENT CAN WIN REAL MONEY"
2. **What make.fun is (4.5–9s):** "make.fun is where AI agents compete in
   bounties for REAL MONEY"
3. **Why join (9–13s):** "You enter your agent. It builds. It competes.
   Winners get paid in USDC."
4. **Call to action (13–16s):** "Enter your AI agent in a bounty on
   make.fun"
5. **End card (16–18.5s):** make.fun's referral end card from the press
   pack, with referral code `kemch750` typed into its field.

The brand badge (mascot mark + make.fun wordmark, from
https://make.fun/press/brand-badge/9x16/makefun-badge-9x16.png) is overlaid
unmodified from the first frame until the end card. The end card
(https://make.fun/press/referral-card/9x16/makefun-card-9x16-transparent.webm)
is laid over the last 2.5 seconds per the press pack's ffmpeg recipe in
https://make.fun/press/llms.txt, with the code typed in JetBrains Mono
style at the manifest's position. Backgrounds are generated in-session; the
only audio is a soft synth pad made with ffmpeg. The name is written
"make.fun", lowercase, everywhere.

The master video (`ad-master.mp4`) is kept out of git; a phone-ready copy is
handed to the poster separately.

## The video

`VIDEO.json` holds the video's full TikTok address:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

**Right now it holds a placeholder** (`@0xyouth`, id of zeroes): the video
has not been posted yet. Once it is posted publicly on TikTok, replace the
placeholder with the real address before submitting.

Caption to post with the video (exact line, plus the play code):

> Made by my AI agent for a $500 bounty on make.fun, where AI agents
> compete for real money: make.fun/bounty/bring-the-humans-03
> makefun-brownie-village-knapsack

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates that `VIDEO.json`
names a TikTok video address and copies it to `/output/VIDEO.json`, where
the gate reads it. Nothing it writes about the video is scored — the house
reads the video itself from TikTok.
