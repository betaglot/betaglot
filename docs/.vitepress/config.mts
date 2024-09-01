import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
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
      '/reference/': sidebarReference(),
      '/dev/': sidebarDevelopment(),
      '/app/': sidebarApp()
    },
    nav: nav(),
  },
})

function sidebarGuide() {
  return [
    { text: '<dev>What is BETAGLOT?</dev>', link: '/guide/WhatBetaglot' },

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
      link: '/guide/WhatBetaglot',
      activeMatch: '/guide/'
    },
    {
      text: 'Examples',
      link: '/examples/ExamplesOverview',
      activeMatch: '/examples/'
    },
    {
      text: 'Tutorial',
      link: '/tutorial/TutorialOverview',
      activeMatch: '/tutorial/'
    },
    {
      text: 'Reference',
      link: '/reference/RefOverview',
      activeMatch: '/reference/'
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
    { text: '<strong>Reference Overview</strong>', link: '/reference/RefOverview' },
    // #Beta
    {
      text: '🔷 <beta>Beta</beta>', link: '/reference/Beta/WhatBeta', collapsed: true, items: [
        { text: '🔷 BetaExamples', link: '/reference/Beta/BetaExample/Example_Betagram' },
        { text: '🔷 BetaLingo', link: '/reference/Beta/BetaLingo/Overview' },
        { text: '🔷 BETAGRAPHY', link: '/reference/Beta/BETAGRAPHY' },
        {
          text: '🔷 BETASYSTEMA', link: '/reference/Beta/BETASYSTEMA/Overview', collapsed: true, items: [
            { text: '🔷 BETATAXON', link: '/reference/Beta/BETATAXON' },
            { text: '🔷 BetaMethod', link: '/reference/Beta/BetaMethod' },
            { text: '🔷 BetaBlock', link: '/reference/Beta/BetaBlock' },
          ]
        },
        {
          text: '🔷 BETAMETRON', link: '/reference/Beta/BETAMETRON/Overview', collapsed: true, items: [
            { text: '🔷 BetaExecutionMETRON', link: '/reference/Beta/BETAMETRON/BetaExecutionMETRON' },
            {
              text: '🔷 BetaDifficultyMETRON', link: '/reference/Beta/BETAMETRON/BetaDifficultyMETRON/Overview', collapsed: true, items: [
                { text: '🔷 BetaComplexityScore', link: '/reference/Beta/BETAMETRON/BetaDifficultyMETRON/BetaComplexityMETRON' },
                { text: '🔷 BetaRiskScore', link: '/reference/Beta/BETAMETRON/BetaDifficultyMETRON/BetaRiskMETRON' },
                { text: '🔷 BetaIntensityScore', link: '/reference/Beta/BETAMETRON/BetaDifficultyMETRON/BetaIntensityMETRON' }
              ]
            }
          ]
        },
        {
          text: '🔷 BETATEKNIK', link: '/reference/Beta/BETATEKNIK/Overview', collapsed: true, items: [
            { text: '🔷 BetaComplexity', link: '/reference/Beta/BETATEKNIK/BetaComplexity' },
            { text: '🔷 BetaIntensity', link: '/reference/Beta/BETATEKNIK/BetaIntensity' },
            { text: '🔷 BetaRisk', link: '/reference/Beta/BETATEKNIK/BetaRisk' }
          ]
        },
        {
          text: '🔷 BetaVideo', link: '/reference/Beta/BetaVideo/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '🔷 BETASKHEMA', link: '/reference/Beta/BETASKHEMA/Overview', collapsed: true, items: [
            {
              text: '🔷 BetaAttribute', link: '/reference/Beta/BePython/Overview', collapsed: true, items: [
                { text: '🔷 BetaRisk', link: '/reference/Beta/BetaDifficulty/BetaRisk' }
              ]
            },
            {
              text: '🔷 BetaMethod', link: '/reference/Beta/BetaMethod/Overview', collapsed: true, items: [
                { text: '🔷 BetaRisk', link: '/reference/Beta/BetaDifficulty/BetaRisk' }
              ]
            },
            {
              text: '🔷 BePython', link: '/reference/Beta/BePython/Overview', collapsed: true, items: [
                { text: '🔷 BetaRisk', link: '/reference/Beta/BetaDifficulty/BetaRisk' }
              ]
            },
          ]
        },
      ]
    },
    // #Eco
    {
      text: '🟩 <eco>Eco</eco>', collapsed: true, link: '/reference/Eco/EcoOverview', items: [
        {
          text: '🔷 EcoDifficulty', link: '/reference/Eco/EcoDifficulty', collapsed: true, items: [
            { text: '🟩 EcoComplexity', link: '/reference/Eco/EcoDifficulty/EcoComplexity' },
            { text: '🟩 EcoIntensity', link: '/reference/Eco/EcoDifficulty/EcoIntensity' },
            { text: '🟩 EcoRisk', link: '/reference/Eco/EcoDifficulty/EcoRisk' },
          ]
        }
      ]
    },
    //#Moto
    {
      text: '🟠 <Moto>Moto</Moto>', link: '/reference/Moto/MotoOverview', collapsed: true, items: [
        { text: '🟠 MotoExamples', link: '/reference/Moto/MotoExamples' },
        { text: '🟠 MotoDiagram', link: '/reference/Moto/MotoDiagram' },
        {
          text: '🟠 BePython', link: '/reference/Moto/PlantMoto/Overview', collapsed: true, items: [
            { text: '🟠 MotoClass', link: '/reference/Moto/MotoClass' },
            { text: '🟠 MotoMethod', link: '/reference/Moto/MotoMethod' },
            { text: '🟠 MotoBlock', link: '/reference/Moto/MotoBlock' },
          ]
        },
        {
          text: '🟠 MotoScore', link: '/reference/Moto/MotoScore/Overview', collapsed: true, items: [
            { text: '🟠 MotoExecutionMETRON', link: '/reference/Moto/MotoScore/MotoExecutionMETRON' },
            {
              text: '🟠 MotoDifficultyMETRON', link: '/reference/Moto/MotoScore/MotoDifficultyMETRON/Overview', collapsed: true, items: [
                { text: '🟠 MotoComplexityScore', link: '/reference/Moto/MotoScore/MotoDifficultyMETRON/MotoComplexityScore' },
                { text: '🟠 MotoRiskScore', link: '/reference/Moto/MotoScore/MotoDifficultyMETRON/MotoRiskScore' },
                { text: '🟠 MotoIntensityScore', link: '/reference/Moto/MotoScore/MotoDifficultyMETRON/MotoIntensityScore' }
              ]
            }
          ]
        },
        {
          text: '🟠 MotoDifficulty', link: '/reference/Moto/MotoDifficulty/Overview', collapsed: true, items: [
            { text: '🟠 MotoComplexity', link: '/reference/Moto/MotoDifficulty/MotoComplexity' },
            { text: '🟠 MotoIntensity', link: '/reference/Moto/MotoDifficulty/MotoIntensity' },
            { text: '🟠 MotoRisk', link: '/reference/Moto/MotoDifficulty/MotoRisk' }
          ]
        },
        {
          text: '🟠 MotoVideo', link: '/reference/Moto/MotoVideo/Overview', collapsed: true, items: [
          ]
        },
      ]
    },
    // #Via
    {
      text: '🔻 <via>Via</via>', link: '/reference/Via/ViaOverview', collapsed: true, items: [
        { text: '🔷 Via Sequence', link: '/reference/Via/ViaSequence/Overview' },
        { text: '🔷 Via Difficulty', link: '/reference/Via/ViaDifficulty' },
        {
          text: '🔻 ViaGeometry', link: '/reference/Via/ViaGeometry/Overview', collapsed: true, items: [
            {
              text: '🔻 ViaPoint', link: '/reference/Via/ViaGeometry/ViaPoint/Overview', collapsed: true, items: [
                { text: '🔻 Viewpoint', link: '/reference/Via/ViaGeometry/ViaPoint/Viewpoint' },
                { text: '🔻 CenterPoint', link: '/reference/Via/ViaGeometry/ViaPoint/CenterPoint' },
                { text: '🔻 InflectionPoint', link: '/reference/Via/ViaGeometry/ViaPoint/InflectionPoint' },
                { text: '🔻 Midpoint', link: '/reference/Via/ViaGeometry/ViaPoint/MidPoint' },
                { text: '🔻 ReferencePoint', link: '/reference/Via/ViaGeometry/ViaPoint/ReferencePoint' },
                { text: '🔻 ReflectionPoint', link: '/reference/Via/ViaGeometry/ViaPoint/ReflectionPoint' },
                { text: '🔻 TargetPoint', link: '/reference/Via/ViaGeometry/ViaPoint/TargetPoint' },
              ]
            },
            {
              text: '🔻 ViaCurve', link: '/reference/Via/ViaGeometry/ViaCurve/Overview', collapsed: true, items: [
                { text: '🔻 AroundCurve', link: '/reference/Via/ViaGeometry/ViaCurve/CircumventCurve' },
                { text: '🔻 GhostLine', link: '/reference/Via/ViaGeometry/ViaCurve/GhostLine' },
                { text: '🔻 ParallelCurve', link: '/reference/Via/ViaGeometry/ViaCurve/ParallelCurve' },
                { text: '🔻 PerimeterCurve', link: '/reference/Via/ViaGeometry/ViaCurve/PerimeterCurve' },
                { text: '🔻 SpiralCurve', link: '/reference/Via/ViaGeometry/ViaCurve/SpiralCurve' },
                { text: '🔻 TurnAroundCurve', link: '/reference/Via/ViaGeometry/ViaCurve/TurnAroundCurve' },
                { text: '🔻 ZigzagCurve', link: '/reference/Via/ViaGeometry/ViaCurve/ZigzagCurve' },
              ]
            },
            {
              text: '🔻 ViaSpace', link: '/reference/Via/ViaGeometry/ViaSpace/Overview', collapsed: true, items: [
                { text: '🔻 MaximumSpacing', link: '/reference/Via/ViaGeometry/ViaSpace/MaximumSpacing' },
                { text: '🔻 MinimumSpacing', link: '/reference/Via/ViaGeometry/ViaSpace/MinimumSpacing' },
                { text: '🔻 OptimalSpacing', link: '/reference/Via/ViaGeometry/ViaSpace/OptimalSpacing' },
                { text: '🔻 ElasticSpacing', link: '/reference/Via/ViaGeometry/ViaSpace/ElasticSpacing' },
                { text: '🔻 SpacingOnSlope', link: '/reference/Via/ViaGeometry/ViaSpace/SpacingOnSlope' },
              ]
            },
            {
              text: '🔻 ViaSurface', link: '/reference/Via/ViaGeometry/ViaSurface/Overview', collapsed: true, items: [
                { text: '🔻 ViaSurface Texture', link: '/reference/Via/ViaSurface/ViaSurfaceTexture' },
              ]
            },
          ]
        },
        { text: '🔻 Via Problem', link: '/reference/Via/ViaProblem/Overview', collapsed: true, items: [] },
        { text: '🔻 Via Theorem', link: '/reference/Via/ViaTheorem/Overview', collapsed: true, items: [] }
      ]
    },
    // #Neuro
    {
      text: '💜 <neuro>Neuro</neuro>', link: '/reference/Neuro/NeuroOverview', collapsed: true, items: [
        { text: '🔷 Neuro Difficulty', link: '/reference/Neuro/NeuroDifficulty' },
        {
          text: '💜 Arousal', link: '/reference/Neuro/Arousal/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Attention', link: '/reference/Neuro/Attention/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Audio', link: '/reference/Neuro/Audio/Overview', collapsed: true, items: [
            {
              text: '💜 Music', link: '/reference/Neuro/Audio/Music/Overview', collapsed: true, items: [
                { text: '💜 Playlists', link: '/reference/Neuro/Audio/Music/Overview' },
              ]
            },
            { text: '💜 BranchBreakSound', link: '/reference/Neuro/Audio/BranchBreakSound' },
            { text: '💜 LogBreakSound', link: '/reference/Neuro/Audio/LogBreakSound' },
            { text: '💜 SlashSound', link: '/reference/Neuro/Audio/SlashSound' },
            { text: '💜 SpadeSound', link: '/reference/Neuro/Audio/SpadeSound' },
            { text: '💜 SoilSound', link: '/reference/Neuro/Audio/SoilSound' },
          ]
        },
        {
          text: '💜 Awareness', link: '/reference/Neuro/Awareness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Counting', link: '/reference/Neuro/Counting/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Decision', collapsed: true, items: [
            { text: '💜 GoOrNoGo', link: '/reference/Neuro/Decision/GoOrNoGo' },
            { text: '💜 MicrositeSelection', link: '/reference/Neuro/Decision/MicrositeSelection' },
          ]
        },
        {
          text: '💜 Emotion', link: '/reference/Neuro/Emotion/Overview', collapsed: true, items: [
            { text: '💜 Anger', link: '/reference/Neuro/Emotion/Anger' },
            { text: '💜 Disgust', link: '/reference/Neuro/Emotion/Disgust' },
            { text: '💜 Fear', link: '/reference/Neuro/Emotion/Fear' },
            { text: '💜 Joy', link: '/reference/Neuro/Emotion/Joy' },
            { text: '💜 Sadness', link: '/reference/Neuro/Emotion/Sadness' },
          ]
        },
        {
          text: '💜 Energy', link: '/reference/Neuro/Energy/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Estimation', collapsed: true, items: [
            { text: '💜 AreaEstimation', link: '/reference/Neuro/Estimation/AreaEstimation' },
            { text: '💜 BagCoverEstimation', link: '/reference/Neuro/Estimation/BagCoverEstimation' },
            { text: '💜 DistanceEstimation', link: '/reference/Neuro/Estimation/DistanceEstimation' },
            { text: '💜 TimeEstimation', link: '/reference/Neuro/Estimation/TimeEstimation' },
          ]
        },
        {
          text: '💜 Event', link: '/reference/Neuro/Event/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Homeostasis', link: '/reference/Neuro/Homeostasis/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Memory', link: '/reference/Neuro/Memory/Overview', collapsed: true, items: [
            { text: '💜 WorkingMemory', link: '/reference/Neuro/Memory/WorkingMemory' },
            { text: '💜 ShortTermMemory', link: '/reference/Neuro/Memory/ShortTermMemory' },
            { text: '💜 LongTermMemory', link: '/reference/Neuro/Memory/LongTermMemory' },
            { text: '💜 NumberMemory', link: '/reference/Neuro/Memory/NumberMemory' },
            { text: '💜 ViaMemory', link: '/reference/Neuro/Memory/ViaMemory' },
          ]
        },
        {
          text: '💜 Mindfulness', link: '/reference/Neuro/Mindfulness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Muscle', link: '/reference/Neuro/Muscle/Overview', collapsed: true, items: [
          ]
        },
        { text: '💜 Proprioception', link: '/reference/Neuro/Proprioception/Overview' },
        { text: '💜 Resilience', link: '/reference/Neuro/Resilience/Overview' },
        {
          text: '💜 SpatialCognition', link: '/reference/Neuro/SpatialCognition/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Time', link: '/reference/Neuro/Time/Overview', collapsed: true, items: [
            { text: '💜 BagUpTime', link: '/reference/Neuro/Time/BagUpTime' },
            { text: '💜 DailySchedule', link: '/reference/Neuro/Time/DailySchedule' },
            { text: '💜 MotoTiming', link: '/reference/Neuro/Time/MotoTiming' },
            { text: '💜 Planning', link: '/reference/Neuro/Time/Planning' },
            { text: '💜 Timer', link: '/reference/Neuro/Time/Timer' },
          ]
        },
        { text: '💜 Thermoception', link: '/reference/Neuro/Thermoception' },
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
    { text: 'Go to Reference', link: '/reference/Overview' },
  ]
}

function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/examples/Overview' },
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
