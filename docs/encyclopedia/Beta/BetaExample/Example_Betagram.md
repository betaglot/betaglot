
# 🔷 <beta>Beta Examples</beta>

![Paper_BetaQuote](/Beta/Paper_BetaQuote2.jpg)

![Paper_BetaQuote](/Beta/Paper_BetaQuote.jpg)

## 🔷<beta>"<via>Follow that <eko>stream</eko> up to the <eko>top corner</eko> <neuro>then</neuro> go left and BoustroCover </via> <neuro>then</neuro> <moto>walk </moto>back to cache"</beta>

🔻<via>"Follow": CoverHeuristic</via>

🟩<eko>"stream": Water</eko>

🔻<via>"up to the": TargetPoint</via>

🟩<eko>"top corner": PieceShape</eko>

💜<neuro>"then": Event</neuro>

🔻<via>"go left and BoustroCover" : ViaDirection, BoustroCover</via>

💜<neuro>"then": Event</neuro>

🟠<moto>"walk": Walk</moto>

🔻<via>"back to the cache": ViaFinishPoint</via>

## 🔷<beta>"<via>Fill</via> the <eko>wet areas</eko> with <eko>spruce</eko>, you don't need to <moto>screef</moto> in the <eko>riparian areas</eko>"</beta>

🔻<via>"Fill": Cover</via>

🟩<eko>"wet areas": WetLand</eko>

💜<neuro>"don't need to": NOT</neuro>

🟩<eko>"spruce": Seedling</eko>

🟠<moto>"screef": ScreefMoto</moto>

## 🔷<beta>"Only <via>flag</via> your <via>line in</via> and <neuro>if</neuro> you <via>leave</via> the <eko>trench</eko>"</beta>

🔷<beta>"Only": </beta>

🟠<moto>"flag": [FlagMoto](/encyclopedia/Moto/ToolMoto/FlagMoto/Overview)</moto>

🔻<via>"line in": </via>

💜<neuro>"if": Logic</neuro>

🟩<eko>"trench": [TrenchLand](/encyclopedia/Eco/Prep/TrenchLand)</eko>

## 🔷<beta>"I've been <via>backfilling</via> this <eko>piece</eko>"</beta>

🔻<via>"backfilling": BackCover</via>

🟩<eko>"piece": Piece</eko>

## 🔷<beta>"<neuro>When</neuro> we <via>get to</via> that <eko>boulder</eko> we'll <via>turn back</via>"</beta>

💜<neuro>"When": Event</neuro>

🔷<beta>"we": TeamBeta</beta>

🔻<via>"get to": ViaPoint</via>

🟩<eko>"boulder": Rock</eko>

🔻<via>"turn back": TurnAroundCurve</via>

## 🔷<beta><moto>Step</moto>.<via>Over</via>(<eko>Log</eko>)</beta>

is not a move, it is Beta since it is composed of 3 modules:

🟠<moto>Step()</moto>

🔻<via>Over()</via>

🟩<eko>Log</eko>

## 🔷<beta>"<via>Close</via> a <eko>piece</eko>"</beta>

🔻<via>Close()</via>

🟩<eko>Piece</eko>

## 🔷<beta>"<via>Close</via> a <eko>Hole</eko>"</beta>

🔻<via>Close()</via>

🟩<eko>Hole</eko>

::: details 🛠 <dev>&&&</dev>

## 🟩<eko>Piece</eko>.<via>Cover(Boustro)</via>

## 🔷<beta>"<moto>Bag up heavy</moto> to <via>backfill</via> this <eko>long piece</eko></beta>

🟠<moto>BagSize</moto>

🔻<via>BackCover</via>

🟩<eko>Long Piece</eko>

## 🔷<beta>"<via>Line in through the</via> <eko>narrow channel </eko><neuro>then</neuro> <via>go left through</via> <eko>another channel</eko> <via>to </via>a <eko>rectangle of PerfectTrenches</eko>"</beta>

1. 🔻<via>LineIn()</via>
2. 🟩<eko>Channel</eko>
3. 💜<neuro>then</neuro>
4. 🔻<via>Go(Left)</via>

## 🔷<beta>Get to the back of the piece then start backfilling</beta>

## DevNotes

-

## DevState

```py
`TagsToHeaders: False`
```

<h2>PageTags</h2>

- "Beta.BetaExamples"
- "Beta.BetaExamples.BetaQuote"
- "Beta.BetaVideo"

:::
