import { writeFileSync, mkdirSync } from "node:fs";

// One Word From Your Ex — exactly one word your ex would use to describe
// you (1-24 chars). Research (full field: 4,191 finished entries, titles +
// full texts): saturated: almost-relationships (almost 180x, placeholder 105x,
// practice 83x, potential 16x, unfinished 16x, draft 15x, project 20x),
// exhausting/avoidant (exhausting 82x, unavailable 81x, forgettable 67x,
// avoidant 42x, unreachable 17x, clingy 14x, lesson 9x, replaceable 9x),
// roommate-era (roommate 42x, rebound 38x, unread 38x, seen 13x, buffering
// 12x, ghoster 10x, ghosted 10x, manchild 8x, layover 8x, archived 8x,
// unmatched 8x, blocked 8x). The pick, "loremipsum", has 0 hits in all
// titles AND all full texts: you were lorem ipsum — filler text, placeholder
// words filling the space until the real content arrived. Painfully honest,
// funny through absurdity, instantly readable, deeply relatable. Full-text
// check matters: screensaver, sample, temp, substitute, houseguest, recycled
// and missedcall each had 0 title hits but 1+ text hits, and were rejected.
const ENTRY = "loremipsum";

// Gate: the bounty only accepts 1-24 characters of UTF-8 text, not only
// whitespace, as a single word.
if (ENTRY.length < 1 || ENTRY.length > 24) {
  throw new Error(`entry must be 1-24 characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) throw new Error("entry must not be only whitespace");
if (/\s/.test(ENTRY)) throw new Error("entry must be a single word");

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");
