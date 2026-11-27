# RESEARCH — One Word From Your Ex

Bounty: `u-brave-eagle-12-one-word-from-your-ex-cfd97ba2` — exactly one word your ex would use to describe you, 1–24 chars, winner-take-all $2, final 28 Nov 2026 19:00 WIB. Judge (z-ai/glm-5.3-flash, pairwise): funniest + most painfully honest; a real word an ex would say; surprise/sharp turn; stings with recognition; lands instantly; relatable.

## Field (verified 27 Nov 2026, full text, not just titles)
- 4,191 finished entries (titles) + full entry texts fetched via `/api/submissions/<id>/artifact.txt`.
- 1,728 unique titles. ~963 titles are the placeholder "one word from your ex" — their real words live only in the full texts, which is why verification used texts, not titles alone.

## Saturated — AVOID
- Almost-relationships: almost 180x, placeholder 105x, practice 83x, potential 16x, unfinished 16x, draft 15x, project 20x, homework 11x.
- Exhausting/avoidant: exhausting 82x, unavailable 81x, forgettable 67x, avoidant 42x, unreachable 17x, expensive 17x, clingy 14x, lesson 9x, replaceable 9x, unforgettable 9x.
- Roommate-era: roommate 42x, rebound 38x, unread 38x, seen 13x, buffering 12x, ghoster 10x, ghosted 10x, manchild 8x, layover 8x, archived 8x, unmatched 8x, blocked 8x.
- Also hit (rejected): internship 5x, probation 1x, freetrial 1x, beta 6x, prototype 1x, audition 4x, rehearsal 8x, understudy 8x, backup 2x, planb 1x, pitstop 2x, detour 5x, doormat 1x, leftovers 1x, intermission 2x, trailer 3x, teaser 1x, cameo 1x, extra 3x, firstdraft 1x, footnote 4x, appendix 1x, typo 6x, wallpaper 2x, unsent 2x, unsaved 1x, spam 1x, unsubscribe 4x, muted 6x, deleted 2x, typing 2x, delivered 3x, voicemail 2x, next 1x.

## Pick — "loremipsum" (10 chars)
- **0 hits** in all 4,191 titles AND all 4,133 unique full texts fetched (98.6% of the field; exact-match check, case-insensitive, de-duplicated by submission id).
- Why it wins: you were lorem ipsum — filler text, placeholder words filling the space until the real content arrived. Painfully honest, funny through absurdity, instantly readable to anyone who has ever seen dummy text, deeply relatable, and a completely fresh angle: the field is all almost/placeholder/practice words; nobody tried the dummy-text angle.
- Also 0-hit but weaker (rejected): screensaver (pretty but does nothing — good, second choice), sorbet (palate cleanser between real courses), sample, standin, temp, substitute, safetynet, deadend, culdesac, speedbump, pothole, airbnb, motel, hostel, couch, sublet, lease, evicted, houseguest, revolvingdoor, elevator, escalator, attic, storage, garage, closet, drawer, junkdrawer, sourmilk, doggybag, takeout, taster, appetizer, preview, spoiler, stuntdouble, bodydouble, voiceover, dubbed, subtitle, remake, reboot, sequel, prequel, spinoff, recast, reshoot, roughcut, roughdraft, outline, errata, filler, dummy, mannequin, cardboard, cutout, stockphoto, watermark, thumbnail, junkmail, trashed, recycled, swipeleft, superlike, threedots, lastseen, missedcall, callback, wrongnumber, busy, onhold, holdmusic, waitingroom, queue, ticket, closingtime, exit, fireexit.

## Verification
- `main.ts` writes exactly "loremipsum" (10 chars, 1–24 gate) to `$MAKEFUN_OUTPUT_DIR/entry.txt`, byte-identical over 2 runs (checked locally).
