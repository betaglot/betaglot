# 🔷 Difficulty Score Overview

Based on the **RICscale** which was developed by Tonde Katiyo and Jacky Godoffe, and was first published in Godoffe's book [My Keys to Routesetting](http://jackygodoffe.com/book.html). The RICscale is an acronym for Risk, Intensity, and Complexity. Sometimes 'E' is added to the scale for Emotion, BETATHLON places emotion in the [Neuro](/reference/Neuro/NeuroOverview) part of Beta instead.

![MyKeysToRoutesetting](/MyKeysToRoutesetting.png)

The RICscale is used mostly by Betatekts to design and describe their Routes. In a BETATHLON the RICscale can be applied to Routes, Moves, and to the Wall itself.

![BetaScores](/BetaScore/BetaScores.png)

## Numerical Score

Each performed Element has a particular numerical value.

## Example

For example this Route:

TODO A Tagged Storyboard of a Climber on a <eco>Route</eco>

::: tip Beta Difficulty

:::

::: tip Move Difficulty

Move Risk

Moto Intensity

Moto Complexity
:::

---

::: tip <eco>Route</eco> Difficulty

Route Risk

Via Intensity

Route Complexity
:::

---

::: tip Eco Difficulty

Eco Risk

Eco Intensity

- Wall Angle

Eco Complexity

- High Altitude Climbing

:::

## Levels of BetaDifficultyScore

The Dimensions of DifficultyScore give the <eco>Route</eco> its difficulty.

IntensityMatching

### Relationship between RouteDifficultyGrade and BetaDifficultyScore.

BetaDifficultyScore is relative to DifficultyGrade and ClimberAbility.

- A CrimpGrip is very HighMotoIntensity for a V2 Climber.

## RelativeScore

The value of one RICscore Instance is relative to another instance of RICscore.

### Fractional

#### Quote

Double
> “RouteA is twice as (Risky, Intense, Complex) as RouteB”

Half

> “RouteA is half as (Risky, Intense, Complex) as RouteB”

> “ClimbRIC half as Intense”

Percentage

> “RouteA is 50% more (Risky, Intense, Complex) than RouteB”

## DifficultyScoreAlgebra

- Addition
- Subtraction
- Division
- Multiplication

## Notation

### DotNotation

(BetaRICscore != Climb.RIC), (MovementRisk != Movement.R), (ViaIntensity != Route.I)

- BetaRICscore is an object name while Climb.RIC is a variable name which has an Integer value.

- BetaRICscore contains concepts which compose each of the BetaRICscore’s dimensions while Climb.RIC only represents the Integer values of each dimension.

### Comparison

Risk(StemmingRest.FootSmear > StemmingRest.FootEdge)

### Climb.RIC Modification

Differentiate(RiskLevelNotation, RiskModificationNotation)

- ((HighRisk = Risk+) != (IncreaseRisk = Risk(++)))

- ((LowRisk = Risk-) != (DecreaseRisk = Risk(--)))

Notation is borrowed from Javascript.

- ‘(++)’ is called the IncrementOperator
- ‘(--)’ is called the DecrementOperator

Don’t write the dimension which isn’t changing

- (Climb.RI(++)C = Climb.I(++))
- Error
    - (Climb.R(++)I(++)C(++) = Climb.RIC(++))

#### Increase Climb.RIC

- ‘(++)’ is called the IncrementOperator

- Climb.RIC(++), Climb.R(++), Climb.RI(++), Climb.RC(++), Climb.IC(++), Climb.I(++), Climb.C(++),

- Movement.RIC(++), Movement.R(++), Movement.RI(++), Movement.RC(++),  Movement.IC(++), Movement.I(++), Movement.C(++)

- Route.RIC(++), Route.R(++), Route.RI(++), Route.RC(++), Route.IC(++), Route.I(++), Route.C(++)

- Increase two dimensions of BetaRICscore ((DryViaSurface => WetViaSurface) = R.RI(++)) = “ViaRisk and ViaIntensity when a DryViaSurface becomes a WetViaSurface”)

#### (Movement, Route)Modification decreases BetaRICscore.value

- ‘(--)’ is called the DecrementOperator

Modify two dimensions of BetaRICscore

- Simplify by removing redundant IncrementOperator
    - (Climb.R(++)I(++) == Climb.RI(++))
    - (Climb.I(++)C(++) == Climb.IC(++))

- Increase one dimension while decreasing dimensions
- Climb.R(++)I(--)
- Climb.I(++)C(--)
- Climb.R(++)I(--)C(++)

### (Low, High)

Differentiate(RiskLevelNotation, RiskModificationNotation)

- ((HighRisk = Risk+) != (IncreaseRisk = Risk(++)))
- ((LowRisk = Risk-) != (DecreaseRisk = Risk(--)))
- ((HandParallelCrack.R.I-C+) = “A HandParallelCrack is ViaIntensity.Low and ViaComplexity.High”)
- Climb.Risk.High = C.R+
- (Move.Risk.High = M.R+)
- (Move.Risk.Low = M.R-)
- (Route.Risk.High = R.R+)
- (Route.Risk.Low = R.R-)

### (1, 2, 3, 4, 5)

- (Move.Risk.4 = M.R4)
- (Route.Risk.4 = R.R4)

Each letter of the BetaRICscore is given a number. This method is useful because the numbers can be added up to give a BetaRICscoreTotal.

## DifficultyScore.UserExperience

### Who

#### DesignPrompt

Why would a Betatekt, Climber, Coach, Spectator, Spotter, Judge care to know this information? Practical not theoretical?

#### Betatekt

CompetitionRoutesetting

- CompetitionRound.RICscore
    - To compare (QualifierRound, SemiRound, FinalRound) in Competitions.

RouteConsistency

- Use (++) and (--) to adjust the RICscore dimensions of a Route.
- Consistent Difficulty for each Grade
    - To ensure that each <eco>Route</eco> of the gym’s arbitrary grading scale has the same difficulty.
    > “That move doesn’t feel like a Blue level move”

- ConsistentRICscoreValue
    - “Too cruxy”
    - Usually applies to Intensity

GoodRoute to RICscore

- Explain why a <eco>Route</eco> is ‘good’.

RICscore to GoodRoute

- HeadBetatekt assigns a RIC.value or RIC.description.
- Make a GoodRoute.

BetatektPedagogy

- RouteFeedback
- For instructors to articulate better.

#### Coaching

Teach Climbers how to articulate the attributes of Movement or Route

Use Use (++) and (--) to adjust the RICscore dimensions of a Movement.

Help climbers to find the easiest way to send the route.

#### Competitor

### What

#### ClimbType

SoloOnsightAttempt
ProtectionType

- BoulderClimb
- FreeSolo()Climb
- TopRopeClimb
- Lead()Climb
    - Free()Climb
        - SportClimb
        - TradClimb
    - Aid()Climb

#### BetaRICscoreScope

What aspect of climbing is the BetaRICscore describing?

Scopes are arranged in a hierarchical structure

- CompetitionRouteHierarchy
    - (ViaSurface < Hold < Wall < <eco>Route</eco> < CompetitionRound < Competition)

- MultipitchRouteHierarchy
    - (ViaSurface < Hold < Wall < <eco>Route</eco> < Pitch < Multipitch)

### Why

- To articulate how a <eco>Route</eco> is (Hard, Difficult, Tough, Challenging, Problematic).

- To articulate how a <eco>Route</eco> is (Hard, Difficult, Tough, Challenging, Problematic).
- To modify the difficulty of each
- To specify particular instances when a Climber is on the Wall.
- To describe Movements.
- To describe Movements more precisely.
- To increase the sophistication of how Routesetting is spoken about.
Climbers already use the concepts of the RICscore, now the concepts are being organized into a single document.
- To ensure variability in setting to prevent Climber boredom.
    - ViaComposition
    - WallComposition
    - RoundComposition
    - GymComposition

### How

#### Instruction

- HeadBetatekt
- BetatektLesson
- ClimberLesson
- CoachLesson
- ImperativeMood
    - Definition(ImperativeMood)
    > “The imperative mood is used to demand or require that an action be performed. It is usually found only in the present tense, second person. To form the imperative mood, use the base form of the verb. For example: Heat the water to 65°C before adding the sample.”

#### Modify Climb.RIC

Remember that BetaRICscore is used by Increasing or decreasing the values of its dimensions. Don’t fall into trying to rank movements along a precise continuum. Maybe that will be possible in the future, but for now focus on the MotoScore values can be changed and how they are related to each other

Modify Route.RIC

- Route.RIC changes relative to ClimberAttributes ClimberType

EcoInfluences

- Time
    - RouteTiming
    - Does <eco>Route</eco> contain Time?\TimeLimit\The LappnorProject has a season. DawnWall has a time of day before it gets too warm.

Maximize
Minimize
Increase
Decrease
Maintain

#### Routesetting

Comparison of Climb.RIC

- RouteConsistency
    - Comparison of RouteSection.RIC
    - A ComplexMovement after a Dyno.

- MovementConsistency

    > “It’s just hard because there’s no rest, there isn’t a definite CruxMoto”

- CruxIdentification
    - What makes the crux a crux?

- Comparatives
    > “Easier”, “Better”, “Shittier”, “Worse”, “More difficult”

    > “Riskier”, “More intense”, “More complex”

    > “Highly”, “Mildly”, “Low”, “High”

- Superlative

    > “Riskiest, “most intense”, “Most complex”, MovementCrux, ComplexityCrux, IntensityCrux, RiskCrux

- LevelAssignment
    - IntensityMatching
    - HeadBetatekt
    - RoutesettingTeamConsensus
        - BetatektBias can be mitigated by RoutesettingTeamConsensus

ClimberBias
ClimberHeight
ClimberAbility

CognitiveBias

- CurseOfKnowledge
- MovementLiteracy
- Chunking

Sandbagging
Observation

- DeduceLevel
- RouteTesting
    - AlsoKnownAs(Forerunning)
    - Adjust RIC during RouteTesting
    > “Tweak the Route”

#### Note Taking

Why take notes?

- Record RIC values

SetUp to take notes

- Table on paper or spreadsheet
    - List of ColumnNames:
    RouteLocation,
    ViaRisk,
    RouteHoldCount,
    ViaIntensity,
    ViaComplexity,
    RouteRICtotal

Whiteboard

- HeadBetatekt assigns RICscore values to each Betatekt on the whiteboard
- It is common to have a matrix of all Routes in a competition round. With RouteName, RouteLocation, and a column for each of Risk, Intensity, Complexity, and frequently a column for RouteTheme or RouteIntention
