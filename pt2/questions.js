const questions = [
  {
    question:
      "Air Temperature is 12C, Dewpoint is 10C and the sea temperature is 8C, What might you expect if the air is blown over the sea? ",
    answer1: "Advection fog",
    answer2: "Radiation fog ",
    answer3: "Steam fog ",
    answer4: "Frontal fog",
    correctAnswer: 1
  },
  {
    question:
      "The intensity of precipitation associated with dense nimbostratus is: ",
    answer1: "nil",
    answer2: "Light",
    answer3: "Moderate or Heavy",
    answer4: "heavy, possibly hail",
    correctAnswer: 3
  },
  {
    question: "The thermal wind component",
    answer1: "is generally weaker at higher level or with greater thickness",
    answer2: "is generally stronger at lower level or with greater thickness",
    answer3: "is generally weaker at lower level or with less thickness",
    answer4: "is generally stronger at higher level with greater thickness",
    correctAnswer: 4
  },
  {
    question: "What will snow most likely fall from?",
    answer1: "Ns",
    answer2: "Ac",
    answer3: "Ci",
    answer4: "Cs",
    correctAnswer: 1
  },
  {
    question:
      "The geostrophic wind is greater than the gradient wind around a low pressure system because the:",
    answer1: "Coriolis force is added to the pressure gradient",
    answer2: "Coriolis force opposes centrifugal force",
    answer3: "Centrifugal force opposes the pressure gradient",
    answer4: "Centrifugal force is added the pressure gradient",
    correctAnswer: 3
  },
  {
    question:
      "METAR for Paris reports the surface wind at 260/20. The wind at 2000ft would most likely be:",
    answer1: "290/20",
    answer2: "290/40",
    answer3: "230/10",
    answer4: "215/5",
    correctAnswer: 2
  },
  {
    question: "Convective clouds are formed",
    answer1: "In a stable air mass",
    answer2: "In an unstable air mass",
    answer3: "In the summer during the day only",
    answer4: "In mid latitudes only",
    correctAnswer: 2
  },
  {
    question: "The fastest moving thunderstorms are",
    answer1: "Thermal",
    answer2: "Orographic",
    answer3: "Frontal",
    answer4: "formed by lifting processes",
    correctAnswer: 3
  },
  {
    question:
      "One of the main reasons for radiation fog to dissipate or become low stratus is:",
    answer1: "surface cooling",
    answer2: "decreasing wind speed",
    answer3: "Surface heating",
    answer4: "Lifting against the slope of a hill",
    correctAnswer: 3
  },
  {
    question:
      "In relation to the isobars on the sea level chart, the surface wind:",
    answer1: "Is inclined towards the area of low pressure",
    answer2: "Is inclined towards the area of high pressure",
    answer3:
      "Blows along the isobars with high pressure to the left in the northern hemisphere",
    answer4:
      "blows along the isobars with high pressure to the right in the northern hemisphere",
    correctAnswer: 1
  },
  {
    question: "Radation fog extends from the surface to around:",
    answer1: "500ft",
    answer2: "800ft",
    answer3: "2000ft",
    answer4: "10000ft",
    correctAnswer: 2
  },
  {
    question: "A ravine wind blows",
    answer1: "more strongly around a headland",
    answer2: "Along a narrow valley",
    answer3: "Down the side of ravine",
    answer4: "up the side of ravine",
    correctAnswer: 2
  },
  {
    question: "What type of cloud is usually found at high level?",
    answer1: "Ns",
    answer2: "St",
    answer3: "Ac",
    answer4: "Cc",
    correctAnswer: 4
  },
  {
    question: "A vertical windshear is:",
    answer1: "Only present in a CB",
    answer2:
      "A change of horizontal wind direction and/or speed with horizontal distance",
    answer3: "A change of vertical wind direction and/or speed",
    answer4:
      "A change of horizontal wind direction and/or speed with change in level",
    correctAnswer: 4
  },
  {
    question: "A cause of radiation fog is:",
    answer1: "a marked increase in ground wind speed",
    answer2: "a marked increase in wind speed close to the ground",
    answer3: "warm air moving over warm surface",
    answer4: "Ground cooling due to radiation",
    correctAnswer: 4
  },
  {
    question: "Flying conditions and horizontal visibility in Ci cloud are:",
    answer1: "greater than 1000m visibility, no icing",
    answer2: "greater than 1000ft visibility, no icing",
    answer3: "greater than 1000m visibility, icing",
    answer4: "greater than 1000ft visibility, icing",
    correctAnswer: 1
  },
  {
    question:
      "Changes in altitude and/or attitude occur but the aircraft remains in positive control at all times. IAS fluctates 15-25kt",
    answer1: "Extreme Turbulence",
    answer2: "Light Turbulence",
    answer3: "Severe Turbulence",
    answer4: "Moderate Turbulence",
    correctAnswer: 4
  },
  {
    question:
      "Inside the aircraft, occupants feel definite strains against seat belts or shoulder straps and unsecured objects are dislodged. Food service and walking are difficult. What degree of Turbulence should be reported?",
    answer1: "Light Turbulence",
    answer2: "Extreme Turbulence",
    answer3: "Severe Turbulence",
    answer4: "Moderate Turbulence",
    correctAnswer: 4
  },
  {
    question: "Of what does a lenticular cloud provide evidence?",
    answer1: "Areas of high level clear air Turbulence",
    answer2: "Jet streams",
    answer3: "Stratospheric inversions",
    answer4: "Mountain waves",
    correctAnswer: 4
  },
  {
    question:
      "In addition to a stable layer of air over a substantial mountain range, the conditions most favourable to the development of standing waves are",
    answer1:
      "Conditional instability, wind speed constant from a direction parallel to the mountain range",
    answer2:
      "Wind speed excess of 20kt at the surface and increasing with height, wind direction perpendicular to the general direction of the range",
    answer3:
      "Significant moisture loss due to precipitation, rapid lowering of the tropopause in the area of the mountain range.",
    answer4:
      "Steep dry adiabatic lapse rate, wind speed increasing and changing direction rapidly with increase in height",
    correctAnswer: 2
  },
  {
    question:
      "Hill fog will be most likely when which of the following conditions prevail?",
    answer1: "precipitation is liftedd by air blowing over the hills",
    answer2: "High RH, Unstable air",
    answer3: "Clear sky, little wind, dry air",
    answer4: "Humid, stable air blowing onto a range of hills",
    correctAnswer: 4
  },
  {
    question:
      "In the northern hemisphere a man observes a low-pressure system passing him to the south travelling from west to east",
    answer1: "Backs then steady",
    answer2: "Constantly backs",
    answer3: "Backs then veers",
    answer4: "Veers then backs",
    correctAnswer: 2
  },
  {
    question:
      "If an observer stands with his back to the wind, in the northern hemisphere, the pressure to his left is lower than the pressure to his right. This is know as:",
    answer1: "Charles Law",
    answer2: "Boyles Law",
    answer3: "Normands Theorem",
    answer4: "Buys Ballots law",
    correctAnswer: 4
  },
  {
    question:
      "Around an area of high pressure, in the northern hemisphere, the geostrophic wind compared to the gradient wind will be: ",
    answer1: "Impossible to asses",
    answer2: "greater",
    answer3: "Exactly the same",
    answer4: "less",
    correctAnswer: 4
  },
  {
    question:
      "When descending from 2000ft to the runway, a pilot in the northern hemisphere would notice that generally the W/V would: ",
    answer1: "Veer and increase",
    answer2: "back and increase",
    answer3: "veer and decrease",
    answer4: "back and decrease",
    correctAnswer: 4
  },
  {
    question:
      "Diurnal variation of the surface W/V in the northern hemisphere is:",
    answer1: "The wind veers and increases by night",
    answer2: "The wind backs and decreases by night",
    answer3: "The wind veers and decreases by night",
    answer4: "The wind backs and increases by night",
    correctAnswer: 2
  },
  {
    question:
      "With respect to local winds, which of the following statements are correct",
    answer1:
      "The nocturnal land breeze is stronger than the daytime sea breeze",
    answer2:
      "The mainly nocturnal katabatic wind is stronger than the daytime anabatic wind",
    answer3:
      "the fohn wind is a warm moist wind down the lee slope of a mountain",
    answer4:
      "The anabatic wind can occur by both day and night in a snow covered enviroment",
    correctAnswer: 4
  },
  {
    question: "A fohn wind is:",
    answer1: "A katabatic effect in a valley",
    answer2: "a warm moist downflow on the downwind side of the mountain range",
    answer3: "a warm downflow resulting from anabatic effect",
    answer4: "a warm dry downflow on the downwind side of a mountain range",
    correctAnswer: 4
  },
  {}
];
