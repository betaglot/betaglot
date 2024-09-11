import { defineConfig } from 'vitepress'

// https://vitepress.dev/encyclopedia/site-config
export default defineConfig({
  title: "BETAGLOT",
  description: "EVERYTHING IS CONNECTED",
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  appearance: 'dark',
  head: [
    ["link", { rel: "apple-touch-icon", href: "/Betaglot_Logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/Betaglot_Logo.png" }]
  ],
  themeConfig: {
    siteTitle: "BETAGLOT",
    outline: [2, 4],
    logo: '/Betaglot_Logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/betaglot/betaglot' }
    ],
    // footer: {
    //   message: "Library released under <a style='text-decoration:underline;' href='https://github.com/betaglot/betaglot/blob/main/LICENSE'>MIT License</a>.",
    //   copyright: `Copyright © 2024–${new Date().getUTCFullYear()} Christopher Duncan`
    // },
    search: {
      provider: 'local'
    },
    sidebar: {
      '/guide/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/tutorial/': sidebarTutorial(),
      '/encyclopedia/': sidebarEncyclopedia(),
      '/dev/': sidebarDevelopment(),
      '/agora/': sidebarAgora(),
    },
    nav: nav(),
  },
})

function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/WhatBetaglot',
      activeMatch: '/guide/'
    },
    {
      text: 'Examples',
      link: '/examples/ExamplesOverview',
      activeMatch: '/examples/'
    },
    {
      text: 'Learn',
      link: '/tutorial/Overview',
      activeMatch: '/tutorial/'
    },
    {
      text: 'ENCYCLOPEDIA',
      link: '/encyclopedia/RefOverview',
      activeMatch: '/encyclopedia/'
    },
    {
      text: '👥 AGORA',
      link: '/agora/Overview',
      activeMatch: '/agora/'
    },
    {
      text: '🛠',
      link: 'dev/DevOverview',
      activeMatch: '/dev/'
    }
  ]
}


function sidebarAgora() {
  return [
    { text: 'Art', link: '/agora/Art/Overview'},
    { text: 'Contribute', link: '/agora/Contribute'},
    { text: 'Events', link: '/agora/Events'},
    { text: 'Mentor', link: '/agora/Mentor'},
    { text: 'Merch', link: '/agora/Merch'},
    { text: 'Podcast', link: '/agora/Podcast'},
    { text: 'Trivia', link: '/agora/Trivia'},
    { text: 'WakingUp', link: '/agora/WakingUp'},
  ]
}

function sidebarGuide() {
  return [
    { text: 'What is BETAGLOT?', link: '/guide/WhatBetaglot' },
    {
      text: 'Origins of BETAGLOT', link: '/guide/Origin/Overview', collapsed: false, items: [
        {
          text: 'Design', link: '/guide/Origin/Design/Overview', collapsed: false, items: [
            { text: 'Art', link: '/guide/Origin/Art' },
            { text: 'Architecture', link: '/guide/Origin/Architecture' },
            { text: 'Choreography', link: '/guide/Origin/Choreography' },
            { text: 'GraphicDesign', link: '/guide/Origin/GraphicDesign' },
          ]
        },
        {
          text: 'Sport', link: '/guide/Origin/Sport/Overview', collapsed: false, items: [
            { text: 'Climbing', link: '/guide/Origin/Sport/Climbing' },
            { text: 'CodeOfPoints', link: '/guide/Origin/Sport/CodeOfPoints' },
            { text: 'Olympics', link: '/guide/Origin/Sport/Olympics' },
            { text: 'TreePlanting', link: '/guide/Origin/Sport/TreePlanting' },
          ]
        },
        {
          text: 'STEM', link: '/guide/Origin/STEM/Overview', collapsed: false, items: [
            { text: 'Cognition', link: '/guide/Origin/Cognition' },
            { text: 'Computation', link: '/guide/Origin/Computation' },
            { text: 'Geometry', link: '/guide/Origin/Geometry' },
            { text: 'Internet', link: '/guide/Origin/Internet' },
            { text: 'Physics', link: '/guide/Origin/Physics' },
            { text: 'Smartphone', link: '/guide/Origin/Smartphone' },
          ]
        },
        { text: 'Canada', link: '/guide/Origin/Canada' },
      ]
    },
  ]
}

function sidebarDevelopment() {
  return [
    { text: '<dev>Dev Overview</dev>', link: '/dev/DevOverview' },
    { text: '<dev>DX</dev>', link: '/dev/DX' },
    {
      text: '<dev>Graphic</dev>', link: '/dev/Graphic/Overview', collapsed: true, items: [
        { text: '<dev>Cards</dev>', link: '/dev/Graphic/Cards/Overview' },
        { text: '<beta>Beta Graphics</beta>', link: '/dev/Graphic/Betagramic' },
        { text: '<eko>EcoGraphics</eko>', link: '/dev/Graphic/EcoGraphic' },
        { text: '<moto>Moto Graphics</moto>', link: '/dev/Graphic/MotoGraphic' },
        { text: '<via>Via Graphics</via>', link: '/dev/Graphic/ViaGraphic' },
        { text: '<neuro>Neuro Graphics</neuro>', link: '/dev/Graphic/NeuroGraphic' },
        { text: 'UX Graphics', link: '/dev/Graphic/UXGraphic' },
        { text: '<dev>DX Graphics</dev>', link: '/dev/Graphic/DXGraphic' },
      ]
    },
    { text: '<dev>Mindmap</dev>', link: '/dev/Mindmap' },
    { text: '<dev>Pitfalls</dev>', link: '/dev/Pitfalls' },
    {
      text: '<dev>Python</dev>', link: '/dev/Python/Overview', collapsed: true, items: [
        { text: '<dev>Game</dev>', link: '/dev/Python/Game/Overview' },
        { text: '<dev>AI</dev>', link: '/dev/Python/AI' },
        { text: '<dev>OpenSource</dev>', link: '/dev/Python/OpenSource' },
        { text: '<dev>Tagging</dev>', link: '/dev/Python/Tagging' },
      ]
    },
    {
      text: '<dev>Research</dev>', link: '/dev/Research/Overview', collapsed: true, items: [
        { text: '<dev>Affordance</dev>', link: '/dev/Research/Affordance' },
        { text: '<dev>Interdisciplinary</dev>', link: '/dev/Research/Interdisciplinary' },
        { text: '<dev>Questions</dev>', link: '/dev/Research/Questions' },
      ]
    },
    { text: '<dev>Roadmap</dev>', link: '/dev/Roadmap' },
    { text: '<dev>Story</dev>', link: '/dev/Story' },
    {
      text: '<dev>StyleGuide</dev>', link: '/dev/StyleGuide/Overview', collapsed: true, items: [
        { text: '<dev>Etymology</dev>', link: '/dev/StyleGuide/Etymology' },
        { text: '<dev>ClassicStyle</dev>', link: '/dev/StyleGuide/ClassicStyle' },

      ]
    },
    { text: '<dev>TaskList</dev>', link: '/dev/TaskList' },
    {
      text: '<dev>Video</dev>', link: '/dev/Video/Overview', collapsed: true, items: [
        { text: '<dev>Cinematography</dev>', link: '/dev/Video/Cinematography' },
        { text: '<dev>Enthousiasmos</dev>', link: '/dev/Video/Enthousiasmos' },
        { text: '<dev>GoPro</dev>', link: '/dev/Video/GoPro' },

      ]
    },
    { text: '<dev>UX</dev>', link: '/dev/UX' },
  ]
}


function sidebarEncyclopedia() {
  return [
    { text: '<strong>ENCYCLOPEDIA</strong>', link: '/encyclopedia/RefOverview' },
    // #Beta
    {
      text: '🔷 <beta>BETA</beta>', link: '/encyclopedia/Beta/WhatBeta', collapsed: true, items: [
        {
          text: '🔷 SYSTEMA', link: '/encyclopedia/Beta/BetaSystema/Overview', collapsed: true, items: [
            {
              text: '🔷 PRAKTIK', link: '/encyclopedia/Beta/BetaSystema/Praktik/Overview', collapsed: true, items: [
                { text: '🔷 AskBeta', link: '/encyclopedia/Beta/BetaSystema/Praktik/AskBeta' },
                { text: '🔷 BetaAdapt', link: '/encyclopedia/Beta/BetaSystema/Praktik/BetaAdapt' },
                { text: '🔷 BetaExperiment', link: '/encyclopedia/Beta/BetaSystema/Praktik/BetaExperiment' },
                { text: '🔷 BetaGnosis', link: '/encyclopedia/Beta/BetaSystema/Praktik/BetaGnosis' },
                { text: '🔷 BetaIdea', link: '/encyclopedia/Beta/BetaSystema/Praktik/BetaIdea' },
                { text: '🔷 BetaParse', link: '/encyclopedia/Beta/BetaSystema/Praktik/BetaParse' },
                { text: '🔷 BetaSkope', link: '/encyclopedia/Beta/BetaSystema/Praktik/BetaSkope' },
                { text: '🔷 GetBeta', link: '/encyclopedia/Beta/BetaSystema/Praktik/GetBeta' },
                { text: '🔷 GiveBeta', link: '/encyclopedia/Beta/BetaSystema/Praktik/GiveBeta' },
                { text: '🔷 LinkBeta', link: '/encyclopedia/Beta/BetaSystema/Praktik/LinkBeta' },
                { text: '🔷 MimeBeta', link: '/encyclopedia/Beta/BetaSystema/Praktik/MimeBeta' },
                { text: '🔷 PerformBeta', link: '/encyclopedia/Beta/BetaSystema/Praktik/PerformBeta' },
                { text: '🔷 SpeakBeta', link: '/encyclopedia/Beta/BetaSystema/Praktik/SpeakBeta' },
                { text: '🔷 SprayBeta', link: '/encyclopedia/Beta/BetaSystema/Praktik/SprayBeta' },
              ]
            },
            {
              text: '🔷 THEORIA', link: '/encyclopedia/Beta/BetaSystema/Theoria/Overview', collapsed: true, items: [
                {
                  text: '🔷 TYPE', link: '/encyclopedia/Beta/BetaSystema/Theoria/Type/Overview', collapsed: true, items: [
                    { text: '🔷 ', link: '/encyclopedia/Beta/BetaSystema/Theoria/Type/Overview' },
                  ]
                },
                {
                  text: '🔷 TAXA', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Overview', collapsed: true, items: [
                    {
                      text: '🔷 ATTRIBUTE', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Overview', collapsed: true, items: [
                        { text: '🔷 ANALOGY', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Analogy' },
                        { text: '🔷 ANATOMY', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Anatomy' },
                        { text: '🔷 ARITHMOS', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Arithmos' },
                        { text: '🔷 CRUX', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Crux' },
                        { text: '🔷 ERROR', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Error' },
                        { text: '🔷 GEOMETRY', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Geometry' },
                        { text: '🔷 KRATOS', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Kratos' },
                        { text: '🔷 ONOMA', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Onoma' },
                        { text: '🔷 TYPE', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Type' },
                        { text: '🔷 PROBABILITAS', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Probabilitas' },
                        { text: '🔷 SKHEMA', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Skhema' },
                        { text: '🔷 TEKNIK', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attributes/Teknik' },
                      ]
                    },
                    { text: '🔷 METHOD', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Methods/Overview' },
                  ]
                },
              ]
            },
          ]
        },
        { text: '🔷 BETAGRAPHY', link: '/encyclopedia/Beta/Betagraphy' },
        {
          text: '🔷 BETAMETRON', link: '/encyclopedia/Beta/BetaMetron/Overview', collapsed: true, items: [
            { text: '🔷 PRAKTIKMETRON', link: '/encyclopedia/Beta/BetaMetron/PraktikMetron' },
            {
              text: '🔷 THEORIAMETRON', link: '/encyclopedia/Beta/BetaMetron/TheoriaMetron/Overview', collapsed: true, items: [
                { text: '🔷 TEKNIKMETRON', link: '/encyclopedia/Beta/BetaMetron/TekninkMetron/TeknikMetron' },
                { text: '🔷 PROBABILTYMETRON', link: '/encyclopedia/Beta/BetaMetron/TeknikMetron/ProbabilitasMetron' },
                { text: '🔷 KRATOSMETRON', link: '/encyclopedia/Beta/BetaMetron/TeknikMetron/KratosMetron' }
              ]
            }
          ]
        },
        {
          text: '🔷 BETATEKNIK', link: '/encyclopedia/Beta/BetaTeknik/Overview', collapsed: true, items: [
            { text: '🔷 BetaTeknik', link: '/encyclopedia/Beta/BetaTeknik/BetaTeknik' },
            { text: '🔷 BetaKratos', link: '/encyclopedia/Beta/BetaTeknik/BetaKratos' },
            { text: '🔷 BetaProbabilitas', link: '/encyclopedia/Beta/BetaTeknik/BetaProbabilitas' }
          ]
        },
        {
          text: '🔷 BetaVideo', link: '/encyclopedia/Beta/BetaVideo/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '🔷 BETASKHEMA', link: '/encyclopedia/Beta/BetaSkhema/Overview', collapsed: true, items: [
            {
              text: '🔷 Attribute', link: '/encyclopedia/Beta/BetaPython/Overview', collapsed: true, items: [
                { text: '🔷 BetaProbabilitas', link: '/encyclopedia/Beta/BetaTeknik/BetaProbabilitas' }
              ]
            },
            {
              text: '🔷 Method', link: '/encyclopedia/Beta/BetaMethod/Overview', collapsed: true, items: [
                { text: '🔷 BetaProbabilitas', link: '/encyclopedia/Beta/BetaTekn/BetaProbabilitas' }
              ]
            },
            {
              text: '🔷 BetaPython', link: '/encyclopedia/Beta/BetaPython/Overview', collapsed: true, items: [
                { text: '🔷 BetaProbabilitas', link: '/encyclopedia/Beta/BetaTheoria/BetaProbabilitas' }
              ]
            },
          ]
        },
      ]
    },
    // #Eko
    {
      text: '🟩 <eko>EKO</eko>', collapsed: true, link: '/encyclopedia/Eko/EkoOverview', items: [
        {
          text: '🟩 Eko Theoria', link: '/encyclopedia/Eko/Theoria', collapsed: true, items: [
            { text: '🟩 EkoTeknik', link: '/encyclopedia/Eko/Teknik/EkoTeknik' },
            { text: '🟩 EkoKratos', link: '/encyclopedia/Teknik/EkoKratos' },
            { text: '🟩 EkoProbabilitas', link: '/encyclopedia/Eko/Teknik/EkoProbabilitas' },
          ]
        }
      ]
    },
    //#Moto
    {
      text: '🟠 <Moto>MOTO</Moto>', link: '/encyclopedia/Moto/MotoOverview', collapsed: true, items: [
        { text: '🟠 MotoExample', link: '/encyclopedia/Moto/MotoExample/Overview', collapsed: true, items: [
          {text: 'Profile Example', link: '/encyclopedia/Moto/MotoExample/Example_Moto_Profile'}
        ] },
        { text: '🟠 MotoDiagram', link: '/encyclopedia/Moto/MotoDiagram' },
        {
          text: '🟠 BetaPython', link: '/encyclopedia/Moto/PlantMoto/Overview', collapsed: true, items: [
            { text: '🟠 MotoClass', link: '/encyclopedia/Moto/MotoTaxon' },
            { text: '🟠 MotoMethod', link: '/encyclopedia/Moto/MotoMethod' },
            { text: '🟠 MotoBlock', link: '/encyclopedia/Moto/MotoBlock' },
          ]
        },
        {
          text: '🟠 MotoScore', link: '/encyclopedia/Moto/MotoScore/Overview', collapsed: true, items: [
            { text: '🟠 MotoPraktikMetron', link: '/encyclopedia/Moto/MotoScore/MotoPraktikMetron' },
            {
              text: '🟠 MotoTheoriaMetron', link: '/encyclopedia/Moto/MotoTheoriaMetron/Overview', collapsed: true, items: [
                { text: '🟠 MotoTeknikScore', link: '/encyclopedia/Moto/MotoTheoriaMetron/MotoTeknikMetron' },
                { text: '🟠 MotoProbabilitasScore', link: '/encyclopedia/Moto/MotoTheoriaMetron/MotoProbabilitasMetron' },
                { text: '🟠 MotoKratosScore', link: '/encyclopedia/Moto/MotoTheoriaMetron/MotoKratosMetron' }
              ]
            }
          ]
        },
        {
          text: '🟠 MotoTheoria', link: '/encyclopedia/Moto/MotoTheoria/Overview', collapsed: true, items: [
            { text: '🟠 MotoTeknik', link: '/encyclopedia/Moto/MotoTheoria/MotoTeknik' },
            { text: '🟠 MotoKratos', link: '/encyclopedia/Moto/MotoTheoria/MotoKratos' },
            { text: '🟠 MotoProbabilitas', link: '/encyclopedia/Moto/MotoTheoria/MotoProbabilitas' }
          ]
        },
        {
          text: '🟠 MotoVideo', link: '/encyclopedia/Moto/MotoVideo/Overview', collapsed: true, items: [
          ]
        },
      ]
    },
    // #Via
    {
      text: '🔻 <via>VIA</via>', link: '/encyclopedia/Via/ViaOverview', collapsed: true, items: [
        { text: '🔷 Via Sequence', link: '/encyclopedia/Via/ViaSequence/Overview' },
        { text: '🔷 ViaTeknik', link: '/encyclopedia/Via/ViaTeknik' },
        {
          text: '🔻 ViaGeometry', link: '/encyclopedia/Via/ViaGeometry/Overview', collapsed: true, items: [
            {
              text: '🔻 ViaPoint', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/Overview', collapsed: true, items: [
                { text: '🔻 Viewpoint', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/Viewpoint' },
                { text: '🔻 CenterPoint', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/CenterPoint' },
                { text: '🔻 InflectionPoint', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/InflectionPoint' },
                { text: '🔻 Midpoint', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/MidPoint' },
                { text: '🔻 ReferencePoint', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/ReferencePoint' },
                { text: '🔻 ReflectionPoint', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/ReflectionPoint' },
                { text: '🔻 TargetPoint', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/TargetPoint' },
              ]
            },
            {
              text: '🔻 ViaCurve', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/Overview', collapsed: true, items: [
                { text: '🔻 AroundCurve', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/CircumventCurve' },
                { text: '🔻 GhostLine', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/GhostLine' },
                { text: '🔻 ParallelCurve', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/ParallelCurve' },
                { text: '🔻 PerimeterCurve', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/PerimeterCurve' },
                { text: '🔻 SpiralCurve', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/SpiralCurve' },
                { text: '🔻 TurnAroundCurve', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/TurnAroundCurve' },
                { text: '🔻 ZigzagCurve', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/ZigzagCurve' },
              ]
            },
            {
              text: '🔻 ViaSpace', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/Overview', collapsed: true, items: [
                { text: '🔻 MaximumSpacing', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/MaximumSpacing' },
                { text: '🔻 MinimumSpacing', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/MinimumSpacing' },
                { text: '🔻 OptimalSpacing', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/OptimalSpacing' },
                { text: '🔻 ElasticSpacing', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/ElasticSpacing' },
                { text: '🔻 SpacingOnSlope', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/SpacingOnSlope' },
              ]
            },
            {
              text: '🔻 ViaSurface', link: '/encyclopedia/Via/ViaGeometry/ViaSurface/Overview', collapsed: true, items: [
                { text: '🔻 ViaSurface Texture', link: '/encyclopedia/Via/ViaSurface/ViaSurfaceTexture' },
              ]
            },
          ]
        },
        { text: '🔻 Via Problem', link: '/encyclopedia/Via/ViaProblem/Overview', collapsed: true, items: [] },
        { text: '🔻 Via Theorem', link: '/encyclopedia/Via/ViaTheorem/Overview', collapsed: true, items: [] }
      ]
    },
    // #Neuro
    {
      text: '💜 <neuro>NEURO</neuro>', link: '/encyclopedia/Neuro/NeuroOverview', collapsed: true, items: [
        {
          text: '🔷 Neuro Theoria', link: '/encyclopedia/Neuro/NeuroTheoria//Overview', collapsed: true, items: [
            {
              text: '💜 Arousal', link: '/encyclopedia/Neuro/NeuroTheoria/Arousal/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '💜 Attention', link: '/encyclopedia/Neuro/NeuroTheoria/Attention/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '💜 Audio', link: '/encyclopedia/Neuro/NeuroTheoria/Audio/Overview', collapsed: true, items: [
                {
                  text: '💜 Music', link: '/encyclopedia/Neuro/NeuroTheoria/Audio/Music/Overview', collapsed: true, items: [
                    { text: '💜 Playlists', link: '/encyclopedia/Neuro/NeuroTheoria/Audio/Music/Overview' },
                  ]
                },
                { text: '💜 BranchBreakSound', link: '/encyclopedia/Neuro/NeuroTheoria/Audio/BranchBreakSound' },
                { text: '💜 LogBreakSound', link: '/encyclopedia/Neuro/NeuroTheoria/Audio/LogBreakSound' },
                { text: '💜 SlashSound', link: '/encyclopedia/Neuro/NeuroTheoria/Audio/SlashSound' },
                { text: '💜 SpadeSound', link: '/encyclopedia/Neuro/NeuroTheoria/Audio/SpadeSound' },
                { text: '💜 SoilSound', link: '/encyclopedia/Neuro/NeuroTheoria/Audio/SoilSound' },
              ]
            },
            {
              text: '💜 Awareness', link: '/encyclopedia/Neuro/NeuroTheoria/Awareness/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '💜 Counting', link: '/encyclopedia/Neuro/NeuroTheoria/Counting/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '💜 Decision', collapsed: true, items: [
                { text: '💜 GoOrNoGo', link: '/encyclopedia/Neuro/NeuroTheoria/Decision/GoOrNoGo' },
                { text: '💜 MicrositeSelection', link: '/encyclopedia/Neuro/NeuroTheoria/Decision/MicrositeSelection' },
              ]
            },
            {
              text: '💜 Emotion', link: '/encyclopedia/Neuro/NeuroTheoria/Emotion/Overview', collapsed: true, items: [
                { text: '💜 Anger', link: '/encyclopedia/Neuro/NeuroTheoria/Emotion/Anger' },
                { text: '💜 Disgust', link: '/encyclopedia/Neuro/NeuroTheoria/Emotion/Disgust' },
                { text: '💜 Fear', link: '/encyclopedia/Neuro/NeuroTheoria/Emotion/Fear' },
                { text: '💜 Joy', link: '/encyclopedia/Neuro/NeuroTheoria/Emotion/Joy' },
                { text: '💜 Sadness', link: '/encyclopedia/Neuro/NeuroTheoria/Emotion/Sadness' },
              ]
            },
            {
              text: '💜 Energy', link: '/encyclopedia/Neuro/NeuroTheoria/Energy/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '💜 Estimation', collapsed: true, items: [
                { text: '💜 AreaEstimation', link: '/encyclopedia/Neuro/NeuroTheoria/Estimation/AreaEstimation' },
                { text: '💜 BagCoverEstimation', link: '/encyclopedia/Neuro/NeuroTheoria/Estimation/BagCoverEstimation' },
                { text: '💜 DistanceEstimation', link: '/encyclopedia/Neuro/NeuroTheoria/Estimation/DistanceEstimation' },
                { text: '💜 TimeEstimation', link: '/encyclopedia/Neuro/NeuroTheoria/Estimation/TimeEstimation' },
              ]
            },
            {
              text: '💜 Event', link: '/encyclopedia/Neuro/NeuroTheoria/Event/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '💜 Homeostasis', link: '/encyclopedia/Neuro/NeuroTheoria/Homeostasis/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '💜 Memory', link: '/encyclopedia/Neuro/NeuroTheoria/Memory/Overview', collapsed: true, items: [
                { text: '💜 WorkingMemory', link: '/encyclopedia/Neuro/NeuroTheoria/Memory/WorkingMemory' },
                { text: '💜 ShortTermMemory', link: '/encyclopedia/Neuro/NeuroTheoria/Memory/ShortTermMemory' },
                { text: '💜 LongTermMemory', link: '/encyclopedia/Neuro/NeuroTheoria/Memory/LongTermMemory' },
                { text: '💜 NumberMemory', link: '/encyclopedia/Neuro/NeuroTheoria/Memory/NumberMemory' },
                { text: '💜 ViaMemory', link: '/encyclopedia/Neuro/NeuroTheoria/Memory/ViaMemory' },
              ]
            },
            {
              text: '💜 Mindfulness', link: '/encyclopedia/Neuro/NeuroTheoria/Mindfulness/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '💜 Muscle', link: '/encyclopedia/Neuro/NeuroTheoria/Muscle/Overview', collapsed: true, items: [
              ]
            },
            { text: '💜 Probability', link: '/encyclopedia/Neuro/NeuroTheoria/Probability/Overview' },
            { text: '💜 Proprioception', link: '/encyclopedia/Neuro/NeuroTheoria/Proprioception/Overview' },
            { text: '💜 Resilience', link: '/encyclopedia/Neuro/NeuroTheoria/Resilience/Overview' },
            {
              text: '💜 SpatialCognition', link: '/encyclopedia/Neuro/NeuroTheoria/SpatialCognition/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '💜 Time', link: '/encyclopedia/Neuro/NeuroTheoria/Time/Overview', collapsed: true, items: [
                { text: '💜 BagUpTime', link: '/encyclopedia/Neuro/NeuroTheoria/Time/BagUpTime' },
                { text: '💜 DailySchedule', link: '/encyclopedia/Neuro/NeuroTheoria/Time/DailySchedule' },
                { text: '💜 MotoTiming', link: '/encyclopedia/Neuro/NeuroTheoria/Time/MotoTiming' },
                { text: '💜 Planning', link: '/encyclopedia/Neuro/NeuroTheoria/Time/Planning' },
                { text: '💜 Timer', link: '/encyclopedia/Neuro/NeuroTheoria/Time/Timer' },
              ]
            },
            { text: '💜 Thermoception', link: '/encyclopedia/Neuro/NeuroTheoria/Thermoception' },
          ]
        },

      ]
    },
  ]
}

function sidebarTutorial() {
  return [
    { text: 'Tutorial Overview', link: '/tutorial/Overview' },
    { text: 'Lesson Plans', link: '/tutorial/LessonPlans' },
    { text: 'Video Tutorials Overview', link: '/tutorial/VideoTutorialsOverview' },
    { text: 'Labelling', link: '/tutorial/Test_LabelDiagram' },
    { text: 'Matching', link: '/tutorial/Test_Matching' },
    { text: 'MultipleChoice', link: '/tutorial/Test_MultipleChoice' },
    { text: 'Sequencing', link: '/tutorial/Test_Sequencing' },
    { text: 'Go to Reference', link: '/encyclopedia/Overview' },
  ]
}

function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/examples/ExamplesOverview' },
    { text: 'Go to Tutorial', link: '/tutorial/TutorialOverview' },
  ]
}

