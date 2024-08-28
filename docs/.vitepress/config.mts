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
    logo: 'Betaglot_Logo.png',
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
        { text: '<eco>Eco Graphics</eco>', link: '/dev/Graphics/EcoGraphic' },
        { text: '<moto>Moto Graphics</moto>', link: '/dev/Graphics/MotoGraphic' },
        { text: '<neuro>Neuro Graphics</neuro>', link: '/dev/Graphics/NeuroGraphic' },
        { text: '<via>Via Graphics</via>', link: '/dev/Graphics/ViaGraphic' },
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
        { text: '🔷 <beta>BetaExamples</beta>', link: '/reference/Beta/BetaExamples' },
        { text: '🔷 <beta>BetaLingo</beta>', link: '/reference/Beta/BetaLingo/Overview' },
        { text: '🔷 <beta>BetaDiagram</beta>', link: '/reference/Beta/BetaDiagram' },
        {
          text: '🔷 <beta>Plantbeta</beta>', link: '/reference/Beta/Plantbeta/Overview', collapsed: true, items: [
            { text: '🔷 <beta>BetaClass</beta>', link: '/reference/Beta/BetaClass' },
            { text: '🔷 <beta>BetaMethod</beta>', link: '/reference/Beta/BetaMethod' },
            { text: '🔷 <beta>BetaBlock</beta>', link: '/reference/Beta/BetaBlock' },
          ]
        },
        {
          text: '🔷 <beta>BetaScore</beta>', link: '/reference/Beta/BetaScore/Overview', collapsed: true, items: [
            { text: '🔷 <beta>BetaExecutionScore</beta>', link: '/reference/Beta/BetaScore/BetaExecutionScore' },
            {
              text: '🔷 <beta>BetaDifficultyScore</beta>', link: '/reference/Beta/BetaScore/BetaDifficultyScore/Overview', collapsed: true, items: [
                { text: '🔷 <beta>BetaComplexityScore</beta>', link: '/reference/Beta/BetaScore/BetaDifficultyScore/BetaComplexityScore' },
                { text: '🔷 <beta>BetaRiskScore</beta>', link: '/reference/Beta/BetaScore/BetaDifficultyScore/BetaRiskScore' },
                { text: '🔷 <beta>BetaIntensityScore</beta>', link: '/reference/Beta/BetaScore/BetaDifficultyScore/BetaIntensityScore' }
              ]
            }
          ]
        },
        {
          text: '🔷 <beta>BetaDifficulty</beta>', link: '/reference/Beta/BetaDifficulty/Overview', collapsed: true, items: [
            { text: '🔷 <beta>BetaComplexity</beta>', link: '/reference/Beta/BetaDifficulty/BetaComplexity' },
            { text: '🔷 <beta>BetaIntensity</beta>', link: '/reference/Beta/BetaDifficulty/BetaIntensity' },
            { text: '🔷 <beta>BetaRisk</beta>', link: '/reference/Beta/BetaDifficulty/BetaRisk' }
          ]
        },
        {
          text: '🔷 <beta>BetaVideo</beta>', link: '/reference/Beta/BetaVideo/Overview', collapsed: true, items: [
          ]
        },
      ]
    },
    // #Eco
    {
      text: '🟩 <eco>Eco</eco>', collapsed: true, link: '/reference/Eco/EcoOverview', items: [
        {
          text: '🔷 <eco>Eco Difficulty</eco>', link: '/reference/Eco/EcoDifficulty', collapsed: true, items: [
            { text: '🟩 <eco>EcoComplexity</eco>', link: '/reference/Eco/EcoDifficulty/EcoComplexity' },
            { text: '🟩 <eco>EcoIntensity</eco>', link: '/reference/Eco/EcoDifficulty/EcoIntensity' },
            { text: '🟩 <eco>EcoRisk</eco>', link: '/reference/Eco/EcoDifficulty/EcoRisk' },
          ]
        }
      ]
    },
    // #Via
    {
      text: '🔻 <via>Via</via>', link: '/reference/Via/ViaOverview', collapsed: true, items: [
        { text: '🔷 <via>Via Sequence</via>', link: '/reference/Via/ViaSequence/Overview' },
        { text: '🔷 <via>Via Difficulty</via>', link: '/reference/Via/ViaDifficulty' },
        {
          text: '🔻 <via>ViaGeometry</via>', link: '/reference/Via/ViaGeometry/Overview', collapsed: true, items: [
            {
              text: '🔻 <via>ViaPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/Overview', collapsed: true, items: [
                { text: '🔻 <via>Viewpoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/Viewpoint' },
                { text: '🔻 <via>CenterPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/CenterPoint' },
                { text: '🔻 <via>InflectionPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/InflectionPoint' },
                { text: '🔻 <via>Midpoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/MidPoint' },
                { text: '🔻 <via>ReferencePoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/ReferencePoint' },
                { text: '🔻 <via>ReflectionPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/ReflectionPoint' },
                { text: '🔻 <via>TargetPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/TargetPoint' },
              ]
            },
            {
              text: '🔻 <via>ViaCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/Overview', collapsed: true, items: [
                { text: '🔻 <via>AroundCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/CircumventCurve' },
                { text: '🔻 <via>GhostLine</via>', link: '/reference/Via/ViaGeometry/ViaCurve/GhostLine' },
                { text: '🔻 <via>ParallelCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/ParallelCurve' },
                { text: '🔻 <via>PerimeterCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/PerimeterCurve' },
                { text: '🔻 <via>SpiralCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/SpiralCurve' },
                { text: '🔻 <via>TurnAroundCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/TurnAroundCurve' },
                { text: '🔻 <via>ZigzagCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/ZigzagCurve' },
              ]
            },
            {
              text: '🔻 <via>ViaSpace</via>', link: '/reference/Via/ViaGeometry/ViaSpace/Overview', collapsed: true, items: [
                { text: '🔻 <via>MaximumSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/MaximumSpacing' },
                { text: '🔻 <via>MinimumSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/MinimumSpacing' },
                { text: '🔻 <via>OptimalSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/OptimalSpacing' },
                { text: '🔻 <via>ElasticSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/ElasticSpacing' },
                { text: '🔻 <via>SpacingOnSlope</via>', link: '/reference/Via/ViaGeometry/ViaSpace/SpacingOnSlope' },
              ]
            },
            {
              text: '🔻 <via>ViaSurface</via>', link: '/reference/Via/ViaGeometry/ViaSurface/Overview', collapsed: true, items: [
                { text: '🔻 <via>ViaSurface Texture</via>', link: '/reference/Via/ViaSurface/ViaSurfaceTexture' },
              ]
            },
          ]
        },
        {text: '🔻 <via>Via Problem</via>', link: '/reference/Via/ViaProblem/Overview', collapsed: true, items: []},
        {text: '🔻 <via>Via Theorem</via>', link: '/reference/Via/ViaTheorem/Overview', collapsed: true, items: []}
      ]
    },
    // #Neuro
    {
      text: '💜 <neuro>Neuro</neuro>', link: '/reference/Neuro/NeuroOverview', collapsed: true, items: [
        { text: '🔷 <neuro>Neuro Difficulty</neuro>', link: '/reference/Neuro/NeuroDifficulty' },
        {
          text: '💜 <neuro>Arousal</neuro>', link: '/reference/Neuro/Arousal/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <neuro>Attention</neuro>', link: '/reference/Neuro/Attention/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <neuro>Audio</neuro>', link: '/reference/Neuro/Audio/Overview', collapsed: true, items: [
            {
              text: '💜 <neuro>Music</neuro>', link: '/reference/Neuro/Audio/Music/Overview', collapsed: true, items: [
                { text: '💜 <neuro>Playlists</neuro>', link: '/reference/Neuro/Audio/Music/Overview' },
              ]
            },
            { text: '💜 <neuro>BranchBreakSound</neuro>', link: '/reference/Neuro/Audio/BranchBreakSound' },
            { text: '💜 <neuro>LogBreakSound</neuro>', link: '/reference/Neuro/Audio/LogBreakSound' },
            { text: '💜 <neuro>SlashSound</neuro>', link: '/reference/Neuro/Audio/SlashSound' },
            { text: '💜 <neuro>SpadeSound</neuro>', link: '/reference/Neuro/Audio/SpadeSound' },
            { text: '💜 <neuro>SoilSound</neuro>', link: '/reference/Neuro/Audio/SoilSound' },
          ]
        },
        {
          text: '💜 <neuro>Awareness</neuro>', link: '/reference/Neuro/Awareness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <neuro>Counting</neuro>', link: '/reference/Neuro/Counting/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <neuro>Decision</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>GoOrNoGo</neuro>', link: '/reference/Neuro/Decision/GoOrNoGo' },
            { text: '💜 <neuro>MicrositeSelection</neuro>', link: '/reference/Neuro/Decision/MicrositeSelection' },
          ]
        },
        {
          text: '💜 <neuro>Emotion</neuro>', link: '/reference/Neuro/Emotion/Overview', collapsed: true, items: [
            { text: '💜 <neuro>Anger</neuro>', link: '/reference/Neuro/Emotion/Anger' },
            { text: '💜 <neuro>Disgust</neuro>', link: '/reference/Neuro/Emotion/Disgust' },
            { text: '💜 <neuro>Fear</neuro>', link: '/reference/Neuro/Emotion/Fear' },
            { text: '💜 <neuro>Joy</neuro>', link: '/reference/Neuro/Emotion/Joy' },
            { text: '💜 <neuro>Sadness</neuro>', link: '/reference/Neuro/Emotion/Sadness' },
          ]
        },
        {
          text: '💜 <neuro>Energy</neuro>', link: '/reference/Neuro/Energy/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <neuro>Estimation</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>AreaEstimation</neuro>', link: '/reference/Neuro/Estimation/AreaEstimation' },
            { text: '💜 <neuro>BagCoverEstimation</neuro>', link: '/reference/Neuro/Estimation/BagCoverEstimation' },
            { text: '💜 <neuro>DistanceEstimation</neuro>', link: '/reference/Neuro/Estimation/DistanceEstimation' },
            { text: '💜 <neuro>TimeEstimation</neuro>', link: '/reference/Neuro/Estimation/TimeEstimation' },
          ]
        },
        {
          text: '💜 <neuro>Event</neuro>', link: '/reference/Neuro/Event/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <neuro>Homeostasis</neuro>', link: '/reference/Neuro/Homeostasis/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <neuro>Memory</neuro>', link: '/reference/Neuro/Memory/Overview', collapsed: true, items: [
            { text: '💜 <neuro>WorkingMemory</neuro>', link: '/reference/Neuro/Memory/WorkingMemory' },
            { text: '💜 <neuro>ShortTermMemory</neuro>', link: '/reference/Neuro/Memory/ShortTermMemory' },
            { text: '💜 <neuro>LongTermMemory</neuro>', link: '/reference/Neuro/Memory/LongTermMemory' },
            { text: '💜 <neuro>NumberMemory</neuro>', link: '/reference/Neuro/Memory/NumberMemory' },
            { text: '💜 <neuro>ViaMemory</neuro>', link: '/reference/Neuro/Memory/ViaMemory' },
          ]
        },
        {
          text: '💜 <neuro>Mindfulness</neuro>', link: '/reference/Neuro/Mindfulness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <neuro>Muscle</neuro>', link: '/reference/Neuro/Muscle/Overview', collapsed: true, items: [
          ]
        },
        { text: '💜 <neuro>Proprioception</neuro>', link: '/reference/Neuro/Proprioception/Overview' },
        { text: '💜 <neuro>Resilience</neuro>', link: '/reference/Neuro/Resilience/Overview' },
        {
          text: '💜 <neuro>SpatialCognition</neuro>', link: '/reference/Neuro/SpatialCognition/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <neuro>Time</neuro>', link: '/reference/Neuro/Time/Overview', collapsed: true, items: [
            { text: '💜 <neuro>BagUpTime</neuro>', link: '/reference/Neuro/Time/BagUpTime' },
            { text: '💜 <neuro>DailySchedule</neuro>', link: '/reference/Neuro/Time/DailySchedule' },
            { text: '💜 <neuro>MotoTiming</neuro>', link: '/reference/Neuro/Time/MotoTiming' },
            { text: '💜 <neuro>Planning</neuro>', link: '/reference/Neuro/Time/Planning' },
            { text: '💜 <neuro>Timer</neuro>', link: '/reference/Neuro/Time/Timer' },
          ]
        },
        { text: '💜 <neuro>Thermoception</neuro>', link: '/reference/Neuro/Thermoception' },
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
