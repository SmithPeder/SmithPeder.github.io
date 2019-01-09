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
      "With an equal pressure gradient at latitude 40 and 60, the geostrophic wind will be:",
    answer1: "The same at both latitudes",
    answer2: "Decrease by 5 kts for every tenth degree lower lat.",
    answer3: "Greater at lat. 40 than at lat. 60",
    answer4: "Greater at lat. 60 than at lat. 40",
    correctAnswer: 3
  },
  {
    question: "The horizontal pressure gradient will increase with:",
    answer1: "decreasing slope angle of the pressure surfaces",
    answer2: "increasing slope angle of the pressure surfaces",
    answer3: "decreasing latitude",
    answer4: "increasing latitude",
    correctAnswer: 2
  },
  {
    question:
      "Turbulence cloud is usually a sheet of Stratus or Stratocumulus some 2000 ft thick with a flat top because:",
    answer1:
      "The lapse rate becomes stable in the friction layer, due to turbulent mixing.",
    answer2:
      "Turbulence steepens the lapse rate producing an inversion above the friction layer.",
    answer3:
      "The air is usually at low temperatures containing little water vapour.",
    answer4:
      "Air is not allowed to remain in contact with the surface due to the strong wind thus maintaining cool surface air with warm air above",
    correctAnswer: 2
  },
  {
    question:
      "Moist unstable air is forced to rise over a mountain, what would you get?:",
    answer1: "Stratiform clouds",
    answer2: "An increase in temperature on the leeward side of the mountain",
    answer3: "Mountain waves",
    answer4: "Thunderstorms",
    correctAnswer: 4
  },
  {
    question:
      "At about mid afternoon the surface wind over an aerodrome was reported at 220/25kt. Using the rule of thumb, what might you expect the 2000ft wind to be?:",
    answer1: "205/50",
    answer2: "250/50",
    answer3: "235/12",
    answer4: "205/15",
    correctAnswer: 2
  },
  {
    question:
      "During the day the surface wind in western Australia is 270/30 kt. After dusk the wind is most likely to be:",
    answer1: "290/40",
    answer2: "290/20",
    answer3: "260/20",
    answer4: "255/40",
    correctAnswer: 2
  },
  {
    question:
      "In the Northern hemisphere the thermal wind component is directed:",
    answer1: "From an area of warm temperature to an area of cold temperature.",
    answer2: "From an area of cold temperature to an area of warm temperature.",
    answer3: "Along contour lines with lower heights on the left.",
    answer4: "Along isotherms with colder temperatures on the left.",
    correctAnswer: 4
  },
  {
    question:
      "The wind is forecasted to 25 m/s over sea. What is the corresponding wind velocity in knots?",
    answer1: "50 knots",
    answer2: "35 knots",
    answer3: "40 knots",
    answer4: "55 knots",
    correctAnswer: 1
  },
  {
    question:
      "What is the relationship between the geostrophic wind and the surface wind over sea in the Northern Hemisphere?",
    answer1:
      "surface wind is reduced to ca. 50% of the geostrophic wind speed and backed ca. 30 degrees",
    answer2:
      "surface wind is reduced to ca. 50% of the geostrophic wind speed and backed ca. 10 degrees",
    answer3:
      "surface wind is reduced to ca. 70% of the geostrophic wind speed and backed ca. 30 degrees",
    answer4:
      "surface wind is reduced to ca. 70% of the geostrophic wind speed and backed ca. 10 degrees",
    correctAnswer: 4
  },
  {
    question:
      "In circumstances where there is a clear sky, calm wind and a high relative humidity in early Autumn:",
    answer1: "Hill fog can be expected.",
    answer2: "Radiation fog will always form during night.",
    answer3: "Radiation fog is likely at sunrise after previous mist.",
    answer4: "Advection fog will form.",
    correctAnswer: 3
  },
  {
    question:
      "A cyclone and an anticyclone have the same pressure gradient and the same 2000 ft gradient wind speed. This can only happen when:",
    answer1: "The anticyclone is at a lower latitude.",
    answer2:
      "The cyclone is due north of the anticyclone in the northern hemisphere.",
    answer3: "The cyclone is at a lower latitude.",
    answer4: "They are at identical latitudes.",
    correctAnswer: 3
  },
  {
    question:
      "Which is correct when it comes to the following wind situations?",
    answer1: "The wind speed increases with a stronger pressure gradient.",
    answer2:
      "The wind blows perpendicular to the isobars and is stronger when there is a strong gradient",
    answer3: "The wind is weak when the pressure surfaces have a steep slope.",
    answer4:
      "There is a risk of mountain waves with weak pressure gradient and rough terrain.",
    correctAnswer: 1
  },
  {
    question: "The gradient wind is composed by ________ and flows _________.",
    answer1: "PGF, Coriolis & Centrifugal force, Parallel to curved isobars",
    answer2: "PGF & Coriolis, Parallel to curved isobars",
    answer3: "PGF, Coriolis & Centrifugal force, Parallel to straight isobars",
    answer4: "PGF & Coriolis, Parallel to straight isobars",
    correctAnswer: 4
  },
  {
    question:
      "Flying from east to west in the southern hemisphere (S.H.) and experience a straight cross wind from the right, you are:",
    answer1: "flying from high to low.",
    answer2: "flying from a cold area to a warm area.",
    answer3: "flying from low to high.",
    answer4: "flying from a warm area to a cold area.",
    correctAnswer: 1
  },
  {
    question: "The horizontal pressure gradient will decrease with:",
    answer1: "decreasing slope angle of the pressure surfaces.",
    answer2: "increasing slope angle of the pressure surfaces",
    answer3: "decreasing latitude",
    answer4: "increasing latitude",
    correctAnswer: 1
  },
  {
    question:
      "Which of the following statements concerning trade winds are correct?",
    answer1: "They are either NW or SW in the southern hemisphere.",
    answer2: "They are either SW or NE in the northern hemisphere",
    answer3:
      "They occur only in the lower part of the troposphere and are more pronounced over the continents.",
    answer4:
      "They reach up to the tropopause and are more pronounced over the oceans.",
    correctAnswer: 2
  },
  {
    question:
      "In the N. hemisphere if the geostrophic wind near the surface was 210/60 kt. The thermal wind was 20 kt with the lowest mean temperature in the northwest. The upper wind was:",
    answer1: "030/80 kt",
    answer2: "210/80 kt",
    answer3: "210/40 kt",
    answer4: "300/40 kt",
    correctAnswer: 2
  },
  {
    question:
      "During summer, a weak pressure gradient covers a coastal airfield in Eastern England resulting in mainly clear skies. The surface wind at dawn was calm. If the alignment of the coastline in the vicinity of the airfield is predominantly north/south, the surface wind is likely to become",
    answer1: "westerly and increase in velocity by afternoon",
    answer2: "westerly and then southerly by evening",
    answer3: "easterly to south-easterly and increase in velocity by afternoon",
    answer4: "easterly and then westerly by afternoon",
    correctAnswer: 1
  },
  {
    question: "A ravine or valley wind:",
    answer1: "Is a wind blowing at reduced speed along a valley.",
    answer2: "Is a wind blowing from a hill or a mountain to a valley below.",
    answer3: "Is a wind blowing up a hill from a valley.",
    answer4: "Is a wind blowing at increased speed along a valley.",
    correctAnswer: 4
  },
  {
    question:
      "The wind is one important factor when planning a flight. You are planning a flight at FL180. Which upper winds chart should be considered?",
    answer1:
      "FL180 is not a standard pressure level. Therefore, 700, 600 or 500 hPa charts could be used at pilots discretion.",
    answer2: "600hPa",
    answer3: "700hPa",
    answer4: "500hPa",
    correctAnswer: 4
  },
  {
    question:
      "Which of the following statements concerning trade winds are correct?",
    answer1:
      "They occur only in the lower part of the troposphere and are more pronounced over the oceans .",
    answer2:
      "They occur only in the lower part of the troposphere and are more pronounced over the continents.",
    answer3:
      "They reach up to the tropopause and are more pronounced over the oceans.",
    answer4:
      "They reach up to the tropopause and are more pronounced over land.",
    correctAnswer: 1
  },
  {
    question:
      "Which cloud type may indicate the presence of severe turbulence?",
    answer1: "Cirrocumulus",
    answer2: "Stratocumulus",
    answer3: "Altocumulus lenticularis",
    answer4: "Nimbostratus",
    correctAnswer: 3
  },
  {
    question:
      "At 2000 ft in the northern hemisphere the wind was 060/20 kt. The likely surface wind over land is:",
    answer1: "030/10kt",
    answer2: "045/10kt",
    answer3: "045/15kt",
    answer4: "075/15kt",
    correctAnswer: 1
  },
  {
    question:
      "The geostrophic wind is composed by ________ and flows _________.",
    answer1: "PGF & Coriolis, Parallel to straight isobars",
    answer2: "PGF, Anticlockwise",
    answer3: "PGF, Coriolis & Centrifugal force, Parallel to straight isobars",
    answer4: "PGF & Coriolis, Parallel to curved isobars",
    correctAnswer: 1
  },
  {
    question:
      "On a day in summer with a slack pressure gradient, an airfield on the west coast of USA has a surface W/V of 350/04 at dawn. The coast/line is in an north/south direction. The most probable W/V at noon would be:",
    answer1: "180/18",
    answer2: "080/06",
    answer3: "280/18",
    answer4: "350/04",
    correctAnswer: 3
  },
  {
    question:
      "The name given to the vector difference between the winds at two levels is:",
    answer1: "The thermal wind.",
    answer2: "The geostrophic wind.",
    answer3: "The cyclostrophic wind.",
    answer4: "The gradient wind.",
    correctAnswer: 1
  },
  {
    question:
      "The addition of which force causes air to flow at either sub or super geostrophic speed around pressure systems with curved isobars?",
    answer1: "centrifugal force",
    answer2: "geostrophic force",
    answer3: "gradient force",
    answer4: "cyclostrophic force",
    correctAnswer: 1
  },
  {
    question:
      "The gradient wind speed observed around a high pressure system is:",
    answer1: "higher than geostrophic wind in the same pressure system.",
    answer2: "2/3rds of the geostrophic windspeed.",
    answer3: "less than geostrophic in N hemisphere.",
    answer4: "less than geostrophic in S hemisphere",
    correctAnswer: 1
  },
  {
    question:
      "A strong wind that rises suddenly, last for some minutes and dies comparatively suddenly away is called:",
    answer1: "a blast",
    answer2: "a gust",
    answer3: "a gale",
    answer4: "a squall",
    correctAnswer: 4
  },
  {
    question:
      "The wind is measured to 20 m/s. What is the wind speed expressed in knots?",
    answer1: "10kt",
    answer2: "25kt",
    answer3: "50kt",
    answer4: "39kt",
    correctAnswer: 4
  },
  {
    question: "Which of the following means a high risk of fog formation?",
    answer1: "Large difference between temperature and dewpoint",
    answer2: "Small difference between temperature and dewpoint",
    answer3: "Low dewpoint",
    answer4: "High dewpoint",
    correctAnswer: 2
  },
  {
    question:
      "You intend to carry out a VFR flight over the alps, on a hot summer day, when the weather is unstable. What is the best time of day to conduct this flight?",
    answer1: "mid-day",
    answer2: "morning",
    answer3: "early evening",
    answer4: "afternoon",
    correctAnswer: 2
  },
  {
    question: "The geostrophic wind blows:",
    answer1: "When pressure values are changing rapidly.",
    answer2: "In a tropical revolving storm.",
    answer3:
      "When geostrophic force(coriolis force) and pressure gradient force are in balance",
    answer4: "Parallel to curved isobars.",
    correctAnswer: 3
  },
  {
    question: "Sea fog is formed when:",
    answer1: "advection of cold air into warm water surface",
    answer2: "when there is rain falling over an ocean",
    answer3: "when a warm airflow is mixed with a cold airflow over sea",
    answer4: "when warm air from the sea is blowing in too a cold surface",
    correctAnswer: 3
  },
  {
    question: "When do valley winds often occur?",
    answer1: "Autumn/Fall",
    answer2: "Winter",
    answer3: "Summer",
    answer4: "Spring",
    correctAnswer: 2
  },
  {
    question: "Freezing fog consists of",
    answer1: "frozen water droplets.",
    answer2: "ice crystals.",
    answer3: "frozen minute snow flakes.",
    answer4: "supercooled water droplets.",
    correctAnswer: 4
  },
  {
    question: "The turbulence associated with cumulonimbus clouds is:",
    answer1: "Nil.",
    answer2: "Always moderate",
    answer3: "Slight to nil.",
    answer4: "Possibly severe.",
    correctAnswer: 4
  },
  {
    question: "The vertical pressure gradient will increase with:",
    answer1: "increasing height and increasing temperature",
    answer2: "increasing height without consideration of the air temperature",
    answer3: "decreasing height and increasing temperature",
    answer4: "decreasing height and decreasing temperature",
    correctAnswer: 4
  },
  {
    question:
      "Flying at FL 180 in the Northern Hemisphere where the wind is geostrophic, the true altitude remains constant. What is true for the wind?",
    answer1:
      "Without knowing the temperature at FL 180, this question can not be answered.",
    answer2: "There is a crosswind from the left.",
    answer3: "There is no crosswind.",
    answer4: "There is a crosswind from the right.",
    correctAnswer: 3
  },
  {
    question:
      "In the Southern Hemisphere, the surface winds in a low would be:",
    answer1: "clockwise across the isobars away from the centre.",
    answer2: "Anti-clockwise across the isobars away from the centre.",
    answer3: "Anti-clockwise across the isobars towards the centre.",
    answer4: "Clockwise across the isobars towards the centre",
    correctAnswer: 4
  },
  {
    question:
      "A wind instrument measuring the wind over an agriculture landscape at a height of 10 meters shows a wind direction of 240 degrees and a wind speed at 15knots. Which is the most likely wind at 3000 ft?",
    answer1: "200 degrees and 20 Kt",
    answer2: "270 degrees and 30 Kt",
    answer3: "240 degrees and 30 Kt",
    answer4: "220 degrees and 25 Kt",
    correctAnswer: 2
  },
  {
    question:
      "In the northern hemisphere, the wind moves relative to a high pressure area in what direction?",
    answer1: "Clockwise around the high pressure area",
    answer2: "Counter-clockwise around the high pressure area",
    answer3: "Directly towards the high pressure area",
    answer4: "Directly outwards from the high pressure area",
    correctAnswer: 1
  },
  {
    question:
      "When descending from 2000 ft to the runway (N.H.), a pilot would notice that generally the wind will:",
    answer1: "back and decrease in speed",
    answer2: "back and increase in speed",
    answer3: "veer and decrease in speed",
    answer4: "veer and increase in speed",
    correctAnswer: 1
  },
  {
    question:
      "Frontal depressions can be assumed to move in the direction of the geostrophic wind",
    answer1: "at the apex of the wave",
    answer2: "in the warm sector",
    answer3: "behind the cold front",
    answer4: "in front of the warm front",
    correctAnswer: 2
  },
  {
    question:
      "Which are the characteristics of an unstable cold air mass moving over a warmer surface?",
    answer1:
      "Cumuliform clouds, turbulence and good visibility except in showers.",
    answer2: "Stratiform clouds, turbulence and good visibility",
    answer3: "Stratiform clouds, smooth air and poor visibility",
    answer4: "Cumuliform clouds, turbulence and always poor visibility.",
    correctAnswer: 1
  },
  {
    question: "Fog may be defined as:",
    answer1:
      "a reduction of visibility to less than 1000 ft due to the presence of water vapour in suspension in the atmosphere",
    answer2:
      "a reduction of visibility to less than 1500 meters due to the presence of water droplets in suspension in the atmosphere",
    answer3:
      "a reduction of visibility to less than 1000 meters due to the presence of water vapour in the atmosphere",
    answer4:
      "a reduction of visibility to less than 1000 meters due to the presence of water droplets in suspension in the atmosphere",
    correctAnswer: 4
  },
  {
    question: "What is the difference between Gradient and Geostrophic winds?",
    answer1: "Different latitudes and densities",
    answer2: "A lot of friction",
    answer3: "Curved isobars and straight isobars",
    answer4: "Difference in temperatures",
    correctAnswer: 1
  },
  {
    question:
      "Fog which reaches only 2 m above ground or 10 m above the sea is called:",
    answer1: "Drifting fog",
    answer2: "Smog",
    answer3: "Mist",
    answer4: "Shallow fog",
    correctAnswer: 4
  },
  {
    question:
      "On a night when radiation fog is forming over most of southern England, the aerodromes likely to be first to experience the fog will be those situated:",
    answer1: "At the top of a hill with clear skies and no wind.",
    answer2: "Near the coast with a light onshore wind and clear skies.",
    answer3: "At the bottom of the hill with a light katabatic wind blowing.",
    answer4: "Near the coast with a land breeze and cloudy skies.",
    correctAnswer: 3
  },
  {
    question: "What is the difference between Gradient and Geostrophic winds?",
    answer1: "Different latitudes and densities",
    answer2: "A lot of friction",
    answer3: "Curved isobars and straight isobars",
    answer4: "Difference in temperatures",
    correctAnswer: 4
  },
  {
    question:
      "With respect to 'local winds', which of the following statements is correct??",
    answer1:
      "The mainly nocturnal katabatic wind is stronger than the daytime anabatic wind",
    answer2:
      "The mainly nocturnal katabatic wind is weaker than the daytime anabatic wind",
    answer3: "Coming soon",
    answer4: "Coming Soon",
    correctAnswer: 1
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
    answer3: "Coming soon",
    answer4: "Coming soon",
    correctAnswer: 1
  },
  {
    question: "Radation fog extends from the surface to around:",
    answer1: "500ft",
    answer2: "800ft",
    answer3: "2000ft",
    answer4: "1500ft",
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
  {}
];
