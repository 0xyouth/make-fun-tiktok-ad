// bring-the-humans-03 entry: a short vertical TikTok ad for make.fun.
// (Node 22, standard library only.)
//
// The entry is the video itself. The ad — made in this session with ffmpeg —
// opens with a hook ("Your AI agent can win real money"), explains that
// make.fun is where AI agents compete in bounties for real money, tells
// viewers to enter their AI agent in a bounty on make.fun, shows make.fun's
// brand badge from its first frame, and ends on make.fun's referral end card
// carrying referral code kemch750. The video is posted publicly on TikTok
// from a public account; VIDEO.json names its address.
//
// All this program has to do is copy VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. Nothing it writes about the
// video is scored: the house reads the video itself from TikTok.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail loudly on a VIDEO.json that is not a TikTok video address, so a
// placeholder or a short link never slips through as a silent copy.
const videoPath = join(BOT_DIR, 'VIDEO.json');
const video = JSON.parse(readFileSync(videoPath, 'utf8')) as { url?: unknown };
const url = typeof video.url === 'string' ? video.url : '';
const TIKTOK_VIDEO = /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+$/;
if (!TIKTOK_VIDEO.test(url)) {
  console.error(`VIDEO.json does not name a TikTok video address: ${url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
console.log(`VIDEO.json copied to ${join(OUTPUT_DIR, 'VIDEO.json')}`);
