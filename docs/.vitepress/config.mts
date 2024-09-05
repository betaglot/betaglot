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
      '/app/': sidebarApp()
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
      link: '/tutorial/TutorialOverview',
      activeMatch: '/tutorial/'
    },
    {
      text: 'ENCYCLOPEDIA',
      link: '/encyclopedia/RefOverview',
      activeMatch: '/encyclopedia/'
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
            { text: 'Climbing', link: '/guide/Origin/Climbing' },
            { text: 'CodeOfPoints', link: '/guide/Origin/CodeOfPoints' },
            { text: 'Olympics', link: '/guide/Origin/Olympics' },
            { text: 'TreePlanting', link: '/guide/Origin/TreePlanting' },
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
    { text: '<dev>🔷 Betaglot</dev>', link: '/dev/Betaglot' },
    { text: '<dev>Contact</dev>', link: '/dev/Contact' },
    { text: '<dev>Academia</dev>', link: '/dev/Academia' },
    { text: '<dev>Art</dev>', link: '/dev/art/Overview' },
    { text: '<dev>👩‍💻 BetaPython</dev>', link: '/dev/BetaPython' },
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
        { text: '<eko>EcoGraphics</eko>', link: '/dev/Graphics/EcoGraphic' },
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
                { text: '🔷 BETATAXON', link: '/encyclopedia/Beta/BetaTaxon' },
                { text: '🔷 BetaMethod', link: '/encyclopedia/Beta/BetaMethod' },
                { text: '🔷 BetaBlock', link: '/encyclopedia/Beta/BetaBlock' },
              ]
            },
            {
              text: '🔷 THEORIA', link: '/encyclopedia/Beta/BetaSystema/Theoria/Overview', collapsed: true, items: [
                {
                  text: '🔷 PARAMETER', link: '/encyclopedia/Beta/BetaSystema/Theoria/Parameter/Overview', collapsed: true, items: [
                    { text: '🔷 ', link: '/encyclopedia/Beta/BetaSystema/Theoria/Parameter/Overview' },
                  ]
                },
                {
                  text: '🔷 TAXA', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Overview', collapsed: true, items: [
                    {
                      text: '🔷 ATTRIBUTE', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attribute/Overview', collapsed: true, items: [
                        { text: '🔷 KRATOS', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attribute/Kratos' },
                        { text: '🔷 GEOMETRY', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attribute/Geometry' },
                        { text: '🔷 PROBABILITY', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attribute/Probability' },
                        { text: '🔷 TEKNIK', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Attribute/Teknik' },
                      ]
                    },
                    { text: '🔷 METHOD', link: '/encyclopedia/Beta/BetaSystema/Theoria/Taxa/Method/Overview' },
                  ]
                },
              ]
            },
            {
              text: '🔷 PYTHON', link: '/encyclopedia/Beta/BetaSystema/Python/Overview', collapsed: true, items: [
            
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
                { text: '🔷 PROBABILTYMETRON', link: '/encyclopedia/Beta/BetaMetron/TeknikMetron/ProbabilityMetron' },
                { text: '🔷 KRATOSMETRON', link: '/encyclopedia/Beta/BetaMetron/TeknikMetron/KratosMetron' }
              ]
            }
          ]
        },
        {
          text: '🔷 BETATEKNIK', link: '/encyclopedia/Beta/BetaTeknik/Overview', collapsed: true, items: [
            { text: '🔷 BetaTeknik', link: '/encyclopedia/Beta/BetaTeknik/BetaTeknik' },
            { text: '🔷 BetaKratos', link: '/encyclopedia/Beta/BetaTeknik/BetaKratos' },
            { text: '🔷 BetaProbability', link: '/encyclopedia/Beta/BetaTeknik/BetaProbability' }
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
                { text: '🔷 BetaProbability', link: '/encyclopedia/Beta/BetaTeknik/BetaProbability' }
              ]
            },
            {
              text: '🔷 Method', link: '/encyclopedia/Beta/BetaMethod/Overview', collapsed: true, items: [
                { text: '🔷 BetaProbability', link: '/encyclopedia/Beta/BetaTekn/BetaProbability' }
              ]
            },
            {
              text: '🔷 BetaPython', link: '/encyclopedia/Beta/BetaPython/Overview', collapsed: true, items: [
                { text: '🔷 BetaProbability', link: '/encyclopedia/Beta/BetaTheoria/BetaProbability' }
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
            { text: '🟩 EkoProbability', link: '/encyclopedia/Eko/Teknik/EkoProbability' },
          ]
        }
      ]
    },
    //#Moto
    {
      text: '🟠 <Moto>Moto</Moto>', link: '/encyclopedia/Moto/MotoOverview', collapsed: true, items: [
        { text: '🟠 MotoExamples', link: '/encyclopedia/Moto/MotoExamples' },
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
                { text: '🟠 MotoProbabilityScore', link: '/encyclopedia/Moto/MotoTheoriaMetron/MotoProbabilityMetron' },
                { text: '🟠 MotoKratosScore', link: '/encyclopedia/Moto/MotoTheoriaMetron/MotoKratosMetron' }
              ]
            }
          ]
        },
        {
          text: '🟠 MotoTheoria', link: '/encyclopedia/Moto/MotoTheoria/Overview', collapsed: true, items: [
            { text: '🟠 MotoTeknik', link: '/encyclopedia/Moto/MotoTheoria/MotoTeknik' },
            { text: '🟠 MotoKratos', link: '/encyclopedia/Moto/MotoTheoria/MotoKratos' },
            { text: '🟠 MotoProbability', link: '/encyclopedia/Moto/MotoTheoria/MotoProbability' }
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
      text: '🔻 <via>Via</via>', link: '/encyclopedia/Via/ViaOverview', collapsed: true, items: [
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
      text: '💜 <neuro>Neuro</neuro>', link: '/encyclopedia/Neuro/NeuroOverview', collapsed: true, items: [
        { text: '🔷 Neuro Theoria', link: '/encyclopedia/Neuro/NeuroTeknik' },
        {
          text: '💜 Arousal', link: '/encyclopedia/Neuro/Arousal/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Attention', link: '/encyclopedia/Neuro/Attention/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Audio', link: '/encyclopedia/Neuro/Audio/Overview', collapsed: true, items: [
            {
              text: '💜 Music', link: '/encyclopedia/Neuro/Audio/Music/Overview', collapsed: true, items: [
                { text: '💜 Playlists', link: '/encyclopedia/Neuro/Audio/Music/Overview' },
              ]
            },
            { text: '💜 BranchBreakSound', link: '/encyclopedia/Neuro/Audio/BranchBreakSound' },
            { text: '💜 LogBreakSound', link: '/encyclopedia/Neuro/Audio/LogBreakSound' },
            { text: '💜 SlashSound', link: '/encyclopedia/Neuro/Audio/SlashSound' },
            { text: '💜 SpadeSound', link: '/encyclopedia/Neuro/Audio/SpadeSound' },
            { text: '💜 SoilSound', link: '/encyclopedia/Neuro/Audio/SoilSound' },
          ]
        },
        {
          text: '💜 Awareness', link: '/encyclopedia/Neuro/Awareness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Counting', link: '/encyclopedia/Neuro/Counting/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Decision', collapsed: true, items: [
            { text: '💜 GoOrNoGo', link: '/encyclopedia/Neuro/Decision/GoOrNoGo' },
            { text: '💜 MicrositeSelection', link: '/encyclopedia/Neuro/Decision/MicrositeSelection' },
          ]
        },
        {
          text: '💜 Emotion', link: '/encyclopedia/Neuro/Emotion/Overview', collapsed: true, items: [
            { text: '💜 Anger', link: '/encyclopedia/Neuro/Emotion/Anger' },
            { text: '💜 Disgust', link: '/encyclopedia/Neuro/Emotion/Disgust' },
            { text: '💜 Fear', link: '/encyclopedia/Neuro/Emotion/Fear' },
            { text: '💜 Joy', link: '/encyclopedia/Neuro/Emotion/Joy' },
            { text: '💜 Sadness', link: '/encyclopedia/Neuro/Emotion/Sadness' },
          ]
        },
        {
          text: '💜 Energy', link: '/encyclopedia/Neuro/Energy/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Estimation', collapsed: true, items: [
            { text: '💜 AreaEstimation', link: '/encyclopedia/Neuro/Estimation/AreaEstimation' },
            { text: '💜 BagCoverEstimation', link: '/encyclopedia/Neuro/Estimation/BagCoverEstimation' },
            { text: '💜 DistanceEstimation', link: '/encyclopedia/Neuro/Estimation/DistanceEstimation' },
            { text: '💜 TimeEstimation', link: '/encyclopedia/Neuro/Estimation/TimeEstimation' },
          ]
        },
        {
          text: '💜 Event', link: '/encyclopedia/Neuro/Event/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Homeostasis', link: '/encyclopedia/Neuro/Homeostasis/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Memory', link: '/encyclopedia/Neuro/Memory/Overview', collapsed: true, items: [
            { text: '💜 WorkingMemory', link: '/encyclopedia/Neuro/Memory/WorkingMemory' },
            { text: '💜 ShortTermMemory', link: '/encyclopedia/Neuro/Memory/ShortTermMemory' },
            { text: '💜 LongTermMemory', link: '/encyclopedia/Neuro/Memory/LongTermMemory' },
            { text: '💜 NumberMemory', link: '/encyclopedia/Neuro/Memory/NumberMemory' },
            { text: '💜 ViaMemory', link: '/encyclopedia/Neuro/Memory/ViaMemory' },
          ]
        },
        {
          text: '💜 Mindfulness', link: '/encyclopedia/Neuro/Mindfulness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Muscle', link: '/encyclopedia/Neuro/Muscle/Overview', collapsed: true, items: [
          ]
        },
        { text: '💜 Proprioception', link: '/encyclopedia/Neuro/Proprioception/Overview' },
        { text: '💜 Resilience', link: '/encyclopedia/Neuro/Resilience/Overview' },
        {
          text: '💜 SpatialCognition', link: '/encyclopedia/Neuro/SpatialCognition/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 Time', link: '/encyclopedia/Neuro/Time/Overview', collapsed: true, items: [
            { text: '💜 BagUpTime', link: '/encyclopedia/Neuro/Time/BagUpTime' },
            { text: '💜 DailySchedule', link: '/encyclopedia/Neuro/Time/DailySchedule' },
            { text: '💜 MotoTiming', link: '/encyclopedia/Neuro/Time/MotoTiming' },
            { text: '💜 Planning', link: '/encyclopedia/Neuro/Time/Planning' },
            { text: '💜 Timer', link: '/encyclopedia/Neuro/Time/Timer' },
          ]
        },
        { text: '💜 Thermoception', link: '/encyclopedia/Neuro/Thermoception' },
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
    { text: 'Go to Reference', link: '/encyclopedia/Overview' },
  ]
}

function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/examples/ExamplesOverview' },
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
