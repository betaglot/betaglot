
# 🛠 DX: Developer Experience

## Python

- Shrubbery.py

## Content Writing

Content can be written outside of VScode, then inserted later.

### Dictation

Dictation will be performed at Arch Street, so the setup is a large TV, laptop, phone

#### DictationError

```py

Homonyms = {
    'cash': 'cache',
    'narrow': 'neuro',
    '/': 'slash',
    'planetary': 'planter',
    'Roland': 'RawLand',
    'Rollins': 'RawLand',
    'screaming': 'screefing',
    'Jay root': 'Jroot' 
}

```

#### Dictation Formatting

- $ "*dollar*" to denote a paragraph

```md

- 
```

- . "*dot*" for period

#### Dictation Phrase

0. SetUp Laptop with Put(Plant) open on left half and the google doc open on the right. Record the audio with your phone being held up close to your mouth.

1. Look at the Page, Tags and the PaperPhotos in <dev>DesignBox</dev> .
    - Think of something to say for each header. Say the header that you're thinking about, eg. "Subelements", "Related Elements", "Element Attributes", "Definition"...etc
    - Say period, new line,

2. Record the audio in a Google Doc until you can't think of anything else to say.
    - Make sure that you're enunciating
    - Use Put(Plant) terminology, don't worry about grammar
    - Glance at the text, but don't read it. Sometimes the recording stops.

3. Paste Raw output into VScode Parse the output by adding empty lines between parts
    - How to use Python to process the raw dictation?
    - Make each dictation into a string
        - str.replace() homonyms, AlsoKnownAs, Common Errors

4. Rephrase and correct grammar
    - Add punctuation
    - Capitalize
    - Replace homonyms

5. Insert into the body of the page, formatted according to [StyleGuide](/dev/StyleGuide)
    - Replace with 'Dictation1' in Design Box after insertion (so you don't find it again in next step)

6. Search for empty design box to find the next page to dictate (there's about 360 left to go, approx 60 hours or work)

```md
::: details 🛠 <dev>&&&</dev>

## DevNotes

-

## DevState

```py
`TagsToHeaders: False`
```

:::

::: tip
Complete all the steps each day to refine your process. For instance after parsing today I realized that for postcedent dictations I need to create new lines and punctuation.
:::

### PaperMine

Use images and video when describing all the Attributes of an element.

Look at a Spade while listing out all the Attributes of the spade instead of using a mental image. Concrete is less cognitively demanding. There is very little creativity when listing Attributes, they're just facts.

### TagSpaces

Use TagSpaces to

Convert the list of Papers associated with a given tag into a markdown photos

```py

PaperList = []

for Paper in PaperPhotoList:
    print(f'## {Paper}')
    print(f'![PaperPhoto](/PaperPhoto/{Paper})')

```

### Planting Videos

## Frontend

### Markdown

### Vue

## Backend

## Typescript

### Database

### Hosting

## VSCode

### Extensions

```md

::: details 🛠 <dev>&&&</dev>

## DevNotes

-

## DevState

```py
`TagsToHeaders: False`
```

:::

## List all Files in a directory

```sh
find -type f -print0 | xargs -0 ls -t
```

## <neuro>WTF is going on?</neuro>

It's ok to be confused by your own work. Complex systems don't start off being coherent.

**Trust your visions**, just because I'm not explaining things well and I'm improvising, doesn't mean that the work is incorrect.

Work at different scopes. You're not going to be able to explain the big picture well if you don't know the details. The details are the individual pages of elements.

::: tip Coherence
Coherence is developed

> the situation when the parts of something fit together in a natural or reasonable way
:::

### <neuro> “I looked forward to another 500 pounds of squat. I looked forward to doing more and more curls until my arms would fall off. Why? Because I knew that every rep that I did and every set that I did and more weights that I lifted, I get one step closer to turning that **vision** into reality.”</neuro>

You're not making it worse, each workblock makes it better, deciding that what you wrote needs to be changed is an improvement. Finding out what doesn't work is a form of improvement. Put(Plant) is a really difficult project, **expect to feel its difficulties!**

Just get as much information out of your head and into data structures, so that they can be processed.

<moto>Keep going!!!</moto>

### Differentiate(Beta, Put(Plant))

Put(Plant) is a language

Plantbeta a beta script. Put(Plant) creates the Attributes of HandMove, like how many fingers you have. Beta can't change the number of fingers. A Hand is part of Put(Plant), a hand is controlled with Beta

- Beta is only during runtime

- To put it simply, coding lets you create a program, while scripting lets you control a program that was created with coding

EcoFactor

ViaFactor

MotoFactor

NeuroFactor

All Elements are objects

Objects have methods to solve problems and Attributes with theoretical value

a data construct that provides a description of something that may be used by a computer (such as a processor, a peripheral, a document, or a data set) and defines its status, its method of operation, and how it interacts with other objects.

> "the interface treats most items, including cells, graphs, and buttons, as objects"

## Influencers

### Claude Shannon

- Encode
- Prediction
- Translating Abstract to Concrete
    - Boolean to Bit
    - Python to Put(Plant)

There shouldn't be beta and putplant, because they a supposed to be the name of the language used by planters. Forget "Beta" make up your own name

Put(Plant) is the language and the

Beta represents moto, but Moto is the move itself. Moto doesn't care about how it's being represented.

### Arnold Schwarzenegger

Every rep

<neuro> “I looked forward to another 500 pounds of squat. I looked forward to doing more and more curls until my arms would fall off. Why? Because I knew that every rep that I did and every set that I did and more weights that I lifted, I get one step closer to turning that **vision** into reality.”</neuro>

### Sherlock Holmes

- Prediction

### Michael Ventris

- Linear B
- Decode
- Try out all the different possibilities

### Temple Grandin

- Think in pictures
- Simulate

### Sam Harris

- Increase the Noticings per minute to observe how you're thinking or using beta.
- Be prepared to be comfortable when you have no idea how you're doing something
- Open yourself

### Aang

#### Generosity

- Open Source

#### Kindness

- Prevent injury
- Positive
- Never trying to make user feel bad

### Beethoven

- Structure
- Need to express inner drive

### Vincent Van Gogh

- Give it a try. Try out an idea.
- It's good enough
- That looks about right
- Approximate the less important parts

### Richard Feynman

- Fun

### Alan Turing

- Computation

### Andrew Huberman

- Growth Mindset

#### Andy Galpin

- Recovery

#### Alia Crum

- Stress
    - FeelOverwhelmed by the amount of elements and words that need to be input.

#### David Goggins

> Do the thing you don't want to do

### Bauhaus

- Bauhaus Manifesto
- Distilled shapes. Less is more

## Model Element

Make a list of DX research models for each module

Moto, Neuro, Eco, Via, Beta

To make prototyping easier. So you don't need to worry about the content

```py

researchModels = {
    'Via': BoustroCover,
    'Neuro':
    'Moto':
    'Beta':
    'Eco':
}
```

::: details 🛠 <dev>&&&</dev>

## DevNotes

-

## DevState

```py
`TagsToHeaders: False`
```

## ToReduceConfusion

## ActualName()

## ()InsteadOf()

## ()AlsoKnownAs()

<h2>PageTags</h2>

- "Dev.DesignProcess"
- "Dev.DesignProcess.Attencide"
- "Dev.DesignProcess.DataCollection"
- "Dev.DesignProcess.DataMining"
- "Dev.DesignProcess.Delegation"
- "Dev.DesignProcess.ExpandIdea"
- "Dev.DesignProcess.Feedback.CaptiveAudience"
- "Dev.DesignProcess.Feedback.Overview"
- "Dev.DesignProcess.Observation"
- "Dev.DesignProcess.PaperMine"
- "Dev.DesignProcess.RefinementRequiresExcess"
- "Dev.DesignProcess.RoughSketch"
- "Dev.DesignProcess.SeedIdea"
- "Dev.DesignProcess.SimplifyIdea"
- "Dev.DesignProcess.StartWithEasy"
- "Dev.DesignProcess.Testing"
- "Dev.SheetInking"

dev/DX.md, <dev>Dev.DesignProcess</dev>, ![0069.jpg](/PaperPhoto/0069.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![0107.jpg](/PaperPhoto/0107.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![0174.jpg](/PaperPhoto/0174.jpg)
dev/DX.md, <dev>Dev.DesignProcess.SimplifyIdea</dev>, ![0448.jpg](/PaperPhoto/0448.jpg)
dev/DX.md, <dev>Dev.DesignProcess.SimplifyIdea</dev>, ![0514.jpg](/PaperPhoto/0514.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Delegation</dev>, ![0876.jpg](/PaperPhoto/0876.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![0965.jpg](/PaperPhoto/0965.jpg)
dev/DX.md, <dev>Dev.DesignProcess.DataMining</dev>, ![0965.jpg](/PaperPhoto/0965.jpg)
dev/DX.md, <dev>Dev.DesignProcess.PaperMine</dev>, ![0965.jpg](/PaperPhoto/0965.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![0965.jpg](/PaperPhoto/0965.jpg)
dev/DX.md, <dev>Dev.DesignProcess.SeedIdea</dev>, ![1051.jpg](/PaperPhoto/1051.jpg)
dev/DX.md, <dev>Dev.DesignProcess.SimplifyIdea</dev>, ![1384.jpg](/PaperPhoto/1384.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![1393.jpg](/PaperPhoto/1393.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![1406.jpg](/PaperPhoto/1406.jpg)
dev/DX.md, <dev>Dev.DesignProcess.ExpandIdea</dev>, ![1409.jpg](/PaperPhoto/1409.jpg)
dev/DX.md, <dev>Dev.DesignProcess.SimplifyIdea</dev>, ![1409.jpg](/PaperPhoto/1409.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Feedback.Overview</dev>, ![1451.jpg](/PaperPhoto/1451.jpg)
dev/DX.md, <dev>Dev.DesignProcess.SeedIdea</dev>, ![1474.jpg](/PaperPhoto/1474.jpg)
dev/DX.md, <dev>Dev.DesignProcess.SeedIdea</dev>, ![1493.jpg](/PaperPhoto/1493.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![1498.jpg](/PaperPhoto/1498.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Feedback.Overview</dev>, ![1527.jpg](/PaperPhoto/1527.jpg)
dev/DX.md, <dev>Dev.DesignProcess.SeedIdea</dev>, ![1554.jpg](/PaperPhoto/1554.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Delegation</dev>, ![1561.jpg](/PaperPhoto/1561.jpg)
dev/DX.md, <dev>Dev.DesignProcess.StartWithEasy</dev>, ![1707.jpg](/PaperPhoto/1707.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Delegation</dev>, ![1739.jpg](/PaperPhoto/1739.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RefinementRequiresExcess</dev>, ![1805.jpg](/PaperPhoto/1805.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![1824.jpg](/PaperPhoto/1824.jpg)
dev/DX.md, <dev>Dev.DesignProcess.DataCollection</dev>, ![1841.jpg](/PaperPhoto/1841.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Feedback.CaptiveAudience</dev>, ![1870.jpg](/PaperPhoto/1870.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Feedback.Overview</dev>, ![1870.jpg](/PaperPhoto/1870.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![1871.jpg](/PaperPhoto/1871.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Testing</dev>, ![1874.jpg](/PaperPhoto/1874.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Testing</dev>, ![1881.jpg](/PaperPhoto/1881.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![2024.jpg](/PaperPhoto/2024.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![2048.jpg](/PaperPhoto/2048.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![2075.jpg](/PaperPhoto/2075.jpg)
dev/DX.md, <dev>Dev.DesignProcess.DataMining</dev>, ![2075.jpg](/PaperPhoto/2075.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![2397.jpg](/PaperPhoto/2397.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![2410.jpg](/PaperPhoto/2410.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Attencide</dev>, ![2881.jpg](/PaperPhoto/2881.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![2893.jpg](/PaperPhoto/2893.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![2894.jpg](/PaperPhoto/2894.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![2933.jpg](/PaperPhoto/2933.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Attencide</dev>, ![2941.jpg](/PaperPhoto/2941.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![3032.jpg](/PaperPhoto/3032.jpg)
dev/DX.md, <dev>Dev.DesignProcess.DataMining</dev>, ![3042.jpg](/PaperPhoto/3042.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![3043.jpg](/PaperPhoto/3043.jpg)
dev/DX.md, <dev>Dev.DesignProcess.RoughSketch</dev>, ![3047.jpg](/PaperPhoto/3047.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Attencide</dev>, ![3048.jpg](/PaperPhoto/3048.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![3087.jpg](/PaperPhoto/3087.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![3097.jpg](/PaperPhoto/3097.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Observation</dev>, ![3097.jpg](/PaperPhoto/3097.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3099.jpg](/PaperPhoto/3099.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3100.jpg](/PaperPhoto/3100.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3101.jpg](/PaperPhoto/3101.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3102.jpg](/PaperPhoto/3102.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3103.jpg](/PaperPhoto/3103.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3104.jpg](/PaperPhoto/3104.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3105.jpg](/PaperPhoto/3105.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3106.jpg](/PaperPhoto/3106.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3107.jpg](/PaperPhoto/3107.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3108.jpg](/PaperPhoto/3108.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3109.jpg](/PaperPhoto/3109.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3110.jpg](/PaperPhoto/3110.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3111.jpg](/PaperPhoto/3111.jpg)
dev/DX.md, <dev>Dev.SheetInking</dev>, ![3114.jpg](/PaperPhoto/3114.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![3116.jpg](/PaperPhoto/3116.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Observation</dev>, ![3157.jpg](/PaperPhoto/3157.jpg)
dev/DX.md, <dev>Dev.DesignProcess.Testing</dev>, ![3157.jpg](/PaperPhoto/3157.jpg)
dev/DX.md, <dev>Dev.DesignProcess</dev>, ![3267.jpg](/PaperPhoto/3267.jpg)

:::
