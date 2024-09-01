import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference1/site-config
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
      '/guide1/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/tutorial/': sidebarTutorial(),
      '/reference1/': sidebarReference(),
      '/dev/': sidebarDevelopment(),
      '/app/': sidebarApp()
    },
    nav: nav(),
  },
})

function sidebarGuide() {
  return [
    { text: '<dev>What is Betaglot?</dev>', link: '/guide1/WhatBetaglot' },

  ]
}

function sidebarDevelopment() {
  return [
    { text: '<dev>Dev Overview</dev>', link: '/dev/DevOverview' },
    { text: '<dev>🔷 Betaglot</dev>', link: '/dev/Betaglot' },
    { text: '<dev>Contact</dev>', link: '/dev/Contact' },
    { text: '<dev>Academia</dev>', link: '/dev/Academia' },
    { text: '<dev>Art</dev>', link: '/dev/art/Overview' },
    { text: '<dev>👩‍💻 BePython</dev>', link: '/dev/BePython' },
    { text: '<dev>Contribute</dev>', link: '/dev/Contribute' },
    { text: '<dev>Downloads</dev>', link: '/dev/Downloads' },
    { text: '<dev>DX</dev>', link: '/dev/DX' },
    { text: '<dev>ElementGraph</dev>', link: '/dev/ElementsGraph' },
    { text: '<dev>Cinematography</dev>', link: '/dev/Cinematography' },
    { text: '<dev>FireBeta</dev>', link: '/FireBeta/FireBeta' },
    { text: '<dev>GoPro</dev>', link: '/dev/GoPro' },
    {
      text: '<dev>Graphics</dev>', collapsed: true, items: [
        { text: '<dev>Overview</dev>', link: '/dev/Graphics/Overview' },
        { text: '<beta>Beta Graphics</beta>', link: '/dev/Graphics/BetaGraphic' },
        { text: '<eco>EcoGraphics</eco>', link: '/dev/Graphics/EcoGraphic' },
        { text: '<moto>Moto Graphics</moto>', link: '/dev/Graphics/MotoGraphic' },
        { text: 'Neuro Graphics', link: '/dev/Graphics/NeuroGraphic' },
        { text: 'Via Graphics', link: '/dev/Graphics/ViaGraphic' },
        { text: 'UX Graphics', link: '/dev/Graphics/UXGraphic' },
        { text: '<dev>DX Graphics</dev>', link: '/dev/Graphics/DXGraphic' },
      ]
    },
    { text: '<dev>Mindmap</dev>', link: '/dev/Mindmap' },
    { text: '<dev>Offline</dev>', link: '/dev/Offline' },
    { text: '<dev>Open Source</dev>', link: '/dev/OpenSource' },
    { text: '<dev>Podcast</dev>', link: '/dev/Podcast' },
    { text: '<dev>Pylanter</dev>', link: '/dev/Pylanter' },
    { text: '<dev>Research Questions</dev>', link: '/dev/ResearchQuestions' },
    { text: '<dev>Roadmap</dev>', link: '/dev/Roadmap' },
    { text: '<dev>Sequence</dev>', link: '/dev/Sequence' },
    { text: '<dev>SocialMedia</dev>', link: '/dev/SocialMedia' },
    { text: '<dev>Storytelling</dev>', link: '/dev/Storytelling' },
    { text: '<dev>StyleGuide</dev>', link: '/dev/StyleGuide' },
    { text: '<dev>Tagging</dev>', link: '/dev/Tagging' },
    { text: '<dev>TaskList</dev>', link: '/dev/TaskList' },
    { text: '<dev>ToDo</dev>', link: '/dev/ToDo' },
    { text: '<dev>Tools</dev>', link: '/dev/Tools' },
    { text: '<dev>UX</dev>', link: '/dev/UX' },
    { text: '<dev>AfternoonTask</dev>', link: '/dev/AfternoonTask' },
  ]
}

function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide1/WhatBetaglot',
      activeMatch: '/guide1/'
    },
    {
      text: 'Examples',
      link: '/examples1/ExamplesOverview',
      activeMatch: '/examples/'
    },
    {
      text: 'Tutorial',
      link: '/tutorial/TutorialOverview',
      activeMatch: '/tutorial/'
    },
    {
      text: 'Reference',
      link: '/reference1/RefOverview',
      activeMatch: '/reference1/'
    },
    {
      text: '🔷',
      link: '/app/Overview',
      activeMatch: '/app/'
    },
    {
      text: '🛠',
      link: 'dev/DevOverview',
      activeMatch: '/dev/'
    }
  ]
}

function sidebarReference() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/reference1/RefOverview' },
    // #Beta
    {
      text: '🔷 <beta>Beta</beta>', link: '/reference1/Beta/WhatBeta', collapsed: true, items: [
        { text: '🔷 BetaExamples', link: '/reference1/Beta/BetaExample/Example_Betagram' },
        { text: '🔷 BetaLingo', link: '/reference1/Beta/BetaLingo/Overview' },
        { text: '🔷 BETAGRAPHY', link: '/reference1/Beta/Betagraphy' },
        {
          text: '🔷 BETASYSTEMA', link: '/reference1/Beta/BetaSystema/Overview', collapsed: true, items: [
            { text: '🔷 BETATAXON', link: '/reference1/Beta/BetaTaxon' },
            { text: '🔷 BetaMethod', link: '/reference1/Beta/BetaMethod' },
            { text: '🔷 BetaBlock', link: '/reference1/Beta/BetaBlock' },
          ]
        },
        {
          text: '🔷 BETAMETRON', link: '/reference1/Beta/BetaMetron/Overview', collapsed: true, items: [
            { text: '🔷 BetaExecutionMETRON', link: '/reference1/Beta/BetaMetron/BetaExecutionMetron' },
            {
              text: '🔷 BetaDifficultyMETRON', link: '/reference1/Beta/BetaMetron/BetaDifficultyMetron/Overview', collapsed: true, items: [
                { text: '🔷 BetaComplexityScore', link: '/reference1/Beta/BetaMetron/BetaDifficultyMetron/BetaComplexityMetron' },
                { text: '🔷 BetaRiskScore', link: '/reference1/Beta/BetaMetron/BetaDifficultyMetron/BetaRiskMetron' },
                { text: '🔷 BetaIntensityScore', link: '/reference1/Beta/BetaMetron/BetaDifficultyMetron/BetaIntensityMetron' }
              ]
            }
          ]
        },
        {
          text: '🔷 BETATEKNIK', link: '/reference1/Beta/BetaTeknik/Overview', collapsed: true, items: [
            { text: '🔷 BetaComplexity', link: '/reference1/Beta/BetaTeknik/BetaComplexity' },
            { text: '🔷 BetaIntensity', link: '/reference1/Beta/BetaTeknik/BetaIntensity' },
            { text: '🔷 BetaRisk', link: '/reference1/Beta/BetaTeknik/BetaRisk' }
          ]
        },
        {
          text: '🔷 BetaVideo', link: '/reference1/Beta/BetaVideo/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '🔷 BETASKHEMA', link: '/reference1/Beta/BetaSkhema/Overview', collapsed: true, items: [
            {
              text: '🔷 BetaAttribute', link: '/reference1/Beta/BePython/Overview', collapsed: true, items: [
                { text: '🔷 BetaRisk', link: '/reference1/Beta/BetaTeknik/BetaRisk' }
              ]
            },
            {
              text: '🔷 BetaMethod', link: '/reference1/Beta/BetaMethod/Overview', collapsed: true, items: [
                { text: '🔷 BetaRisk', link: '/reference1/Beta/BetaTekn/BetaRisk' }
              ]
            },
            {
              text: '🔷 BePython', link: '/reference1/Beta/BePython/Overview', collapsed: true, items: [
                { text: '🔷 BetaRisk', link: '/reference1/Beta/BetaDifficulty/BetaRisk' }
              ]
            },
          ]
        },
      ]
    },
    // #Eco
    {
      text: '🟩 <eco>Eco</eco>', collapsed: true, link: '/reference1/Eco/EcoOverview', items: [
        {
          text: '🔷 EcoTeknik', link: '/reference1/Eco/EcoTeknik', collapsed: true, items: [
            { text: '🟩 EcoComplexity', link: '/reference1/Eco/EcoTeknik/EcoComplexity' },
            { text: '🟩 EcoIntensity', link: '/reference1/Eco/EcoTeknik/EcoIntensity' },
            { text: '🟩 EcoRisk', link: '/reference1/Eco/EcoTeknik/EcoRisk' },
          ]
        }
      ]
    },
    //#Moto
    {
      text: '🟠 <Moto>Moto</Moto>', link: '/reference1/Moto/MotoOverview', collapsed: true, items: [
        { text: '🟠 MotoExamples', link: '/reference1/Moto/MotoExamples' },
        { text: '🟠 MotoDiagram', link: '/reference1/Moto/MotoDiagram' },
        {
          text: '🟠 BePython', link: '/reference1/Moto/PlantMoto/Overview', collapsed: true, items: [
            { text: '🟠 MotoClass', link: '/reference1/Moto/MotoClass' },
            { text: '🟠 MotoMethod', link: '/reference1/Moto/MotoMethod' },
            { text: '🟠 MotoBlock', link: '/reference1/Moto/MotoBlock' },
          ]
        },
        {
          text: '🟠 MotoScore', link: '/reference1/Moto/MotoScore/Overview', collapsed: true, items: [
            { text: '🟠 MotoExecutionMetron', link: '/reference1/Moto/MotoScore/MotoExecutionMetron' },
            {
              text: '🟠 MotoTeknikMetron', link: '/reference1/Moto/MotoScore/MotoTeknikMetron/Overview', collapsed: true, items: [
                { text: '🟠 MotoComplexityScore', link: '/reference1/Moto/MotoScore/MotoTeknikMetron/MotoComplexityMetron' },
                { text: '🟠 MotoRiskScore', link: '/reference1/Moto/MotoScore/MotoTeknikMetron/MotoRiskMetron' },
                { text: '🟠 MotoIntensityScore', link: '/reference1/Moto/MotoScore/MotoTeknikMetron/MotoIntensityMetron' }
              ]
            }
          ]
        },
        {
          text: '🟠 MotoTeknik', link: '/reference1/Moto/MotoTeknik/Overview', collapsed: true, items: [
            { text: '🟠 MotoComplexity', link: '/reference1/Moto/MotoTeknik/MotoComplexity' },
            { text: '🟠 MotoIntensity', link: '/reference1/Moto/MotoTeknik/MotoIntensity' },
            { text: '🟠 MotoRisk', link: '/reference1/Moto/MotoTeknik/MotoRisk' }
          ]
        },
        {
          text: '🟠 MotoVideo', link: '/reference1/Moto/MotoVideo/Overview', collapsed: true, items: [
          ]
        },
      ]
    },
    // #Via
    {
      text: '🔻 <via>Via</via>', link: '/reference1/Via/ViaOverview', collapsed: true, items: [
        { text: '🔷 Via Sequence', link: '/reference1/Via/ViaSequence/Overview' },
        { text: '🔷 ViaTeknik', link: '/reference1/Via/ViaTeknik' },
        {
          text: '🔻 ViaGeometry', link: '/reference1/Via/ViaGeometry/Overview', collapsed: true, items: [
            {
              text: '🔻 ViaPoint', link: '/reference1/Via/ViaGeometry/ViaPoint/Overview', collapsed: true, items: [
                { text: '🔻 Viewpoint', link: '/reference1/Via/ViaGeometry/ViaPoint/Viewpoint' },
                { text: '🔻 CenterPoint', link: '/reference1/Via/ViaGeometry/ViaPoint/CenterPoint' },
                { text: '🔻 InflectionPoint', link: '/reference1/Via/ViaGeometry/ViaPoint/InflectionPoint' },
                { text: '🔻 Midpoint', link: '/reference1/Via/ViaGeometry/ViaPoint/MidPoint' },
                { text: '🔻 ReferencePoint', link: '/reference1/Via/ViaGeometry/ViaPoint/ReferencePoint' },
                { text: '🔻 ReflectionPoint', link: '/reference1/Via/ViaGeometry/ViaPoint/ReflectionPoint' },
                { text: '🔻 TargetPoint', link: '/reference1/Via/ViaGeometry/ViaPoint/TargetPoint' },
              ]
            },
            {
              text: '🔻 ViaCurve', link: '/reference1/Via/ViaGeometry/ViaCurve/Overview', collapsed: true, items: [
                { text: '🔻 AroundCurve', link: '/reference1/Via/ViaGeometry/ViaCurve/CircumventCurve' },
                { text: '🔻 GhostLine', link: '/reference1/Via/ViaGeometry/ViaCurve/GhostLine' },
                { text: '🔻 ParallelCurve', link: '/reference1/Via/ViaGeometry/ViaCurve/ParallelCurve' },
                { text: '🔻 PerimeterCurve', link: '/reference1/Via/ViaGeometry/ViaCurve/PerimeterCurve' },
                { text: '🔻 SpiralCurve', link: '/reference1/Via/ViaGeometry/ViaCurve/SpiralCurve' },
                { text: '🔻 TurnAroundCurve', link: '/reference1/Via/ViaGeometry/ViaCurve/TurnAroundCurve' },
                { text: '🔻 ZigzagCurve', link: '/reference1/Via/ViaGeometry/ViaCurve/ZigzagCurve' },
              ]
            },
            {
              text: '🔻 ViaSpace', link: '/reference1/Via/ViaGeometry/ViaSpace/Overview', collapsed: true, items: [
                { text: '🔻 MaximumSpacing', link: '/reference1/Via/ViaGeometry/ViaSpace/MaximumSpacing' },
                { text: '🔻 MinimumSpacing', link: '/reference1/Via/ViaGeometry/ViaSpace/MinimumSpacing' },
                { text: '🔻 OptimalSpacing', link: '/reference1/Via/ViaGeometry/ViaSpace/OptimalSpacing' },
                { text: '🔻 ElasticSpacing', link: '/reference1/Via/ViaGeometry/ViaSpace/ElasticSpacing' },
                { text: '🔻 SpacingOnSlope', link: '/reference1/Via/ViaGeometry/ViaSpace/SpacingOnSlope' },
              ]
            },
            {
              text: '🔻 ViaSurface', link: '/reference1/Via/ViaGeometry/ViaSurface/Overview', collapsed: true, items: [
                { text: '🔻 ViaSurface Texture', link: '/reference1/Via/ViaSurface/ViaSurfaceTexture' },
              ]
            },
          ]
        },
        { text: '🔻 Via Problem', link: '/reference1/Via/ViaProblem/Overview', collapsed: true, items: [] },
        { text: '🔻 Via Theorem', link: '/reference1/Via/ViaTheorem/Overview', collapsed: true, items: [] }
      ]
    },
    // #Neuro
    {
      text: '💜 <neuro>Neuro</neuro>', link: '/reference1/Neuro/NeuroOverview', collapsed: true, items: [
        { text: '🔷 Neuro Difficulty', link: '/reference1/Neuro/NeuroTeknik' },
        {
          text: '💜 Arousal', link: '/reference1/Neuro/Arousal/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Attention', link: '/reference1/Neuro/Attention/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Audio', link: '/reference1/Neuro/Audio/Overview', collapsed: true, items: [
            {
              text: '💜 Music', link: '/reference1/Neuro/Audio/Music/Overview', collapsed: true, items: [
                { text: '💜 Playlists', link: '/reference1/Neuro/Audio/Music/Overview' },
              ]
            },
            { text: '💜 BranchBreakSound', link: '/reference1/Neuro/Audio/BranchBreakSound' },
            { text: '💜 LogBreakSound', link: '/reference1/Neuro/Audio/LogBreakSound' },
            { text: '💜 SlashSound', link: '/reference1/Neuro/Audio/SlashSound' },
            { text: '💜 SpadeSound', link: '/reference1/Neuro/Audio/SpadeSound' },
            { text: '💜 SoilSound', link: '/reference1/Neuro/Audio/SoilSound' },
          ]
        },
        {
          text: '💜 Awareness', link: '/reference1/Neuro/Awareness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Counting', link: '/reference1/Neuro/Counting/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Decision', collapsed: true, items: [
            { text: '💜 GoOrNoGo', link: '/reference1/Neuro/Decision/GoOrNoGo' },
            { text: '💜 MicrositeSelection', link: '/reference1/Neuro/Decision/MicrositeSelection' },
          ]
        },
        {
          text: '💜 Emotion', link: '/reference1/Neuro/Emotion/Overview', collapsed: true, items: [
            { text: '💜 Anger', link: '/reference1/Neuro/Emotion/Anger' },
            { text: '💜 Disgust', link: '/reference1/Neuro/Emotion/Disgust' },
            { text: '💜 Fear', link: '/reference1/Neuro/Emotion/Fear' },
            { text: '💜 Joy', link: '/reference1/Neuro/Emotion/Joy' },
            { text: '💜 Sadness', link: '/reference1/Neuro/Emotion/Sadness' },
          ]
        },
        {
          text: '💜 Energy', link: '/reference1/Neuro/Energy/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Estimation', collapsed: true, items: [
            { text: '💜 AreaEstimation', link: '/reference1/Neuro/Estimation/AreaEstimation' },
            { text: '💜 BagCoverEstimation', link: '/reference1/Neuro/Estimation/BagCoverEstimation' },
            { text: '💜 DistanceEstimation', link: '/reference1/Neuro/Estimation/DistanceEstimation' },
            { text: '💜 TimeEstimation', link: '/reference1/Neuro/Estimation/TimeEstimation' },
          ]
        },
        {
          text: '💜 Event', link: '/reference1/Neuro/Event/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Homeostasis', link: '/reference1/Neuro/Homeostasis/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Memory', link: '/reference1/Neuro/Memory/Overview', collapsed: true, items: [
            { text: '💜 WorkingMemory', link: '/reference1/Neuro/Memory/WorkingMemory' },
            { text: '💜 ShortTermMemory', link: '/reference1/Neuro/Memory/ShortTermMemory' },
            { text: '💜 LongTermMemory', link: '/reference1/Neuro/Memory/LongTermMemory' },
            { text: '💜 NumberMemory', link: '/reference1/Neuro/Memory/NumberMemory' },
            { text: '💜 ViaMemory', link: '/reference1/Neuro/Memory/ViaMemory' },
          ]
        },
        {
          text: '💜 Mindfulness', link: '/reference1/Neuro/Mindfulness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Muscle', link: '/reference1/Neuro/Muscle/Overview', collapsed: true, items: [
          ]
        },
        { text: '💜 Proprioception', link: '/reference1/Neuro/Proprioception/Overview' },
        { text: '💜 Resilience', link: '/reference1/Neuro/Resilience/Overview' },
        {
          text: '💜 SpatialCognition', link: '/reference1/Neuro/SpatialCognition/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Time', link: '/reference1/Neuro/Time/Overview', collapsed: true, items: [
            { text: '💜 BagUpTime', link: '/reference1/Neuro/Time/BagUpTime' },
            { text: '💜 DailySchedule', link: '/reference1/Neuro/Time/DailySchedule' },
            { text: '💜 MotoTiming', link: '/reference1/Neuro/Time/MotoTiming' },
            { text: '💜 Planning', link: '/reference1/Neuro/Time/Planning' },
            { text: '💜 Timer', link: '/reference1/Neuro/Time/Timer' },
          ]
        },
        { text: '💜 Thermoception', link: '/reference1/Neuro/Thermoception' },
      ]
    },
  ]
}

function sidebarTutorial() {
  return [
    { text: 'Tutorial Overview', link: '/tutorial/TutorialOverview' },
    { text: 'Lesson Plans', link: '/tutorial/LessonPlans' },
    { text: 'Video Tutorials Overview', link: '/tutorial/VideoTutorialsOverview' },
    { text: 'Labelling', link: '/tutorial/Test_LabelDiagram' },
    { text: 'Matching', link: '/tutorial/Test_Matching' },
    { text: 'MultipleChoice', link: '/tutorial/Test_MultipleChoice' },
    { text: 'Sequencing', link: '/tutorial/Test_Sequencing' },
    { text: 'Go to Reference', link: '/reference1/Overview' },
  ]
}

function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/examples1/ExamplesOverview' },
    { text: 'Go to Tutorial', link: '/tutorial/TutorialOverview' },
  ]
}

function sidebarApp() {
  return [
    {
      text: 'App', link: '/app/Overview', collapsed: false, items: [
        { text: 'BetaCard', link: '/app/BetaCard' },
        { text: 'BetaDataAnalysis', link: '/app/BetaDataAnalysis' },
        { text: 'BetaEditor', link: '/app/BetaEditor' },
        { text: 'BetaGraph', link: '/app/BetaGraph' },
        { text: 'BetaParser', link: '/app/BetaParser' },
        { text: 'BetaStringer', link: '/app/BetaStringer' },
        { text: 'BetaTranscriber', link: '/app/BetaTranscriber' },
      ]
    },
  ]
}
