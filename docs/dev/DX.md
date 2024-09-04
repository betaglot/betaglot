
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

:::
