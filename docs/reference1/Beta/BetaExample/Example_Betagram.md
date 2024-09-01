
# 🔷 <beta>Beta Examples</beta>

![Paper_BetaQuote](/Beta/Paper_BetaQuote2.jpg)

![Paper_BetaQuote](/Beta/Paper_BetaQuote.jpg)

## 🔷<beta>"<via>Follow that <eco>stream</eco> up to the <eco>top corner</eco> <neuro>then</neuro> go left and BoustroCover </via> <neuro>then</neuro> <moto>walk </moto>back to cache"</beta>

🔻<via>"Follow": CoverHeuristic</via>

🟩<eco>"stream": Water</eco>

🔻<via>"up to the": TargetPoint</via>

🟩<eco>"top corner": PieceShape</eco>

💜<neuro>"then": Event</neuro>

🔻<via>"go left and BoustroCover" : ViaDirection, BoustroCover</via>

💜<neuro>"then": Event</neuro>

🟠<moto>"walk": Walk</moto>

🔻<via>"back to the cache": ViaFinishPoint</via>

## 🔷<beta>"<via>Fill</via> the <eco>wet areas</eco> with <eco>spruce</eco>, you don't need to <moto>screef</moto> in the <eco>riparian areas</eco>"</beta>

🔻<via>"Fill": Cover</via>

🟩<eco>"wet areas": WetLand</eco>

💜<neuro>"don't need to": NOT</neuro>

🟩<eco>"spruce": Seedling</eco>

🟠<moto>"screef": ScreefMoto</moto>

## 🔷<beta>"Only <via>flag</via> your <via>line in</via> and <neuro>if</neuro> you <via>leave</via> the <eco>trench</eco>"</beta>

🔷<beta>"Only": </beta>

🟠<moto>"flag": [FlagMoto](/reference/Moto/ToolMoto/FlagMoto/Overview)</moto>

🔻<via>"line in": </via>

💜<neuro>"if": Logic</neuro>

🟩<eco>"trench": [TrenchLand](/reference/Eco/Prep/TrenchLand)</eco>

## 🔷<beta>"I've been <via>backfilling</via> this <eco>piece</eco>"</beta>

🔻<via>"backfilling": BackCover</via>

🟩<eco>"piece": Piece</eco>

## 🔷<beta>"<neuro>When</neuro> we <via>get to</via> that <eco>boulder</eco> we'll <via>turn back</via>"</beta>

💜<neuro>"When": Event</neuro>

🔷<beta>"we": TeamBeta</beta>

🔻<via>"get to": ViaPoint</via>

🟩<eco>"boulder": Rock</eco>

🔻<via>"turn back": TurnAroundCurve</via>

## 🔷<beta><moto>Step</moto>.<via>Over</via>(<eco>Log</eco>)</beta>

is not a move, it is Beta since it is composed of 3 modules:

🟠<moto>Step()</moto>

🔻<via>Over()</via>

🟩<eco>Log</eco>

## 🔷<beta>"<via>Close</via> a <eco>piece</eco>"</beta>

🔻<via>Close()</via>

🟩<eco>Piece</eco>

## 🔷<beta>"<via>Close</via> a <eco>Hole</eco>"</beta>

🔻<via>Close()</via>

🟩<eco>Hole</eco>

::: details 🛠 <dev>&&&</dev>

## 🟩<eco>Piece</eco>.<via>Cover(Boustro)</via>

## 🔷<beta>"<moto>Bag up heavy</moto> to <via>backfill</via> this <eco>long piece</eco></beta>

🟠<moto>BagSize</moto>

🔻<via>BackCover</via>

🟩<eco>Long Piece</eco>

## 🔷<beta>"<via>Line in through the</via> <eco>narrow channel </eco><neuro>then</neuro> <via>go left through</via> <eco>another channel</eco> <via>to </via>a <eco>rectangle of PerfectTrenches</eco>"</beta>

1. 🔻<via>LineIn()</via>
2. 🟩<eco>Channel</eco>
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
