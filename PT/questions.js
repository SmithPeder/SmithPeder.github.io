const questions = [
  {
    question:
      "An aircraft with 100kts of Vs (level flight) turns with a bank angle of 45 degrees. Calculate the new Vs",
    answer1: "70",
    answer2: "80",
    answer3: "141",
    answer4: "118",
    correctAnswer: 4
  },
  {
    question:
      "An aicraft whose weight is 503 100N stalls at 152kts. At a weight of 600 380N. It would stall at: ",
    answer1: "139  ",
    answer2: "166",
    answer3: "145 ",
    answer4: "160",
    correctAnswer: 2
  },
  {
    question: "How will CL change if IAS is increased from 100kt to 140kt?",
    answer1: "CL will decrease   ",
    answer2: "CL will increase ",
    answer3: "CL will remain the same ",
    correctAnswer: 1
  },
  {
    question:
      "How will the retraction of flaps affect the value and speed for CL/CD max? ",
    answer1:
      "The value of CL/CD max will remain constant, but the speed for it will decrease ",
    answer2: "The speed for minimum drag and the value of L/D will increase ",
    answer3: "The speed for minimum drag and the value of L/D will decrease",
    answer4: "No effect, CL/CD will only be affected by aircraft weight ",
    correctAnswer: 2
  },
  {
    question:
      "Minimum drag of an aeroplane in straight and level flight occurs at the ",
    answer1: "Maximum CL/CD ratio   ",
    answer2: "Minimum Speed ",
    answer3: "Minimum CD value ",
    answer4: "Minimum Angle of Attack ",

    correctAnswer: 1
  },
  {
    question:
      "Which wing planform gives the highest local lift at the wing root? ",
    answer1: "Swept Back ",
    answer2: "Rectangular  ",
    answer3: "Elliptical ",
    answer4: "Tapered ",

    correctAnswer: 2
  },
  {
    question: "Dihedral of a wing is the angle between: ",
    answer1:
      "The wing plane and the horizontal with the aeroplane in an unbanked, level condition",
    answer2: "The leading edge of the wing and the lateral axis ",
    answer3: "The quearter chord line of the wing and the vertical axis ",
    answer4: "The quarter chord line of the wing and the horizon ",

    correctAnswer: 1
  },
  {
    question: "State the main factors resulting in a deep stall ",
    answer1: "Swept wing, aft mounted engines",
    answer2: "Swept wing, T - tail ",
    answer3: "Straight Wing, aft mounted engines ",
    answer4: "Straight Wing, T - tail ",

    correctAnswer: 2
  },
  {
    question: "The relative thickness of an aerofoil is expressed in ",
    answer1: "% chord ",
    answer2: "Degrees cross sectional tail angle ",
    answer3: "Meters",
    answer4: "% camber",

    correctAnswer: 1
  },
  {
    question:
      "When trailing edge flaps are lowered the stalling angle of attack of the wing: ",
    answer1: "Decreases, but Clmax increases ",
    answer2: "Decreases, but Clmax remains the same ",
    answer3: "Remains the same, but Clmax increases ",
    answer4: "Increases and Clmax increases ",

    correctAnswer: 1
  },
  {
    question:
      "An important advantage of a turbulent boundary layer over a laminar layer is that the turbulent layer: ",
    answer1: "Has lower skin friction drag ",
    answer2: "Is thinner ",
    answer3: "Has less tendency to separate from the surface  ",
    answer4: "Has less energy ",

    correctAnswer: 3
  },
  {
    question: "What will happen in ground effect during a normal landing? ",
    answer1: "An increase in strength of the wing tip vortices ",
    answer2: "The wing downwash on the tail surfaces increases ",
    answer3: "The induced angle of attack and induced drag decreases ",
    answer4: "A significant increase in thrust required ",

    correctAnswer: 3
  },
  {
    question:
      "Considering subsonic incompressible airflow, which statement is correct? The static pressure in the undisturbed airflow is higher than in the throat The speed in the undisturbed airflow is the same as in the throat ",
    answer1: "1 is incorrect, 2 is incorrect ",
    answer2: "1 is incorrect, 2 is correct ",
    answer3: "1 is correct, 2 is incorrect ",
    answer4: "1 is correct, 2 i correct ",

    correctAnswer: 3
  },
  {
    question:
      "Comparing the lift coefficient and drag coefficient for conventional aeroplane: ",
    answer1: "CL is much greater then CD   ",
    answer2: "CL has approx the same value as CD ",
    answer3: "CL is lower than CD ",
    answer4: "CL is much lower than CD ",

    correctAnswer: 1
  },
  {
    question: "Angle of attack is the angle between: ",
    answer1: "The angle between the wing chord line ad the relative wind ",
    answer2: "The angle between the wing and tailplane incidence ",
    answer3: "The angle between the relative airflow and the horizontal axis",
    answer4: "The angle that determines the magnitude of the lift force ",

    correctAnswer: 1
  },
  {
    question: "Slots increase the stalling angle of attack by: ",
    answer1: "Increasing leading edge camber ",
    answer2: "Reducing the span wise flow ",
    answer3: "Delaying separation  ",
    answer4: "Reducing the effective angle of attack ",

    correctAnswer: 3
  },
  {
    question: "A stall strip will: ",
    answer1: "Re - energize the boundary layer at the wing root ",
    answer2: "Cause the wing to stall first at the root   ",
    answer3: "Cause the wing to stall at the tip first ",
    answer4: "Delay wing root stalling ",

    correctAnswer: 2
  },
  {
    question:
      "An aeroplane has a clean stall speed of 83kt at a mass of 8100kg. What is the stall speed at 6800kg ",
    answer1: "90kt  ",
    answer2: "76kt ",
    answer3: "100kt ",
    answer4: "92kt ",

    correctAnswer: 2
  },
  {
    question: "The boundary layer: ",
    answer1:
      "Is a layer on the wing in which the stream velocity is lower than the free stream velocity",
    answer2: "Suction at the upper wing side ",
    answer3: "The normal shock wave at transonic speeds ",
    answer4: "A turbulent stream pattern around a the wing ",

    correctAnswer: 1
  },
  {
    question:
      "An aeroplane has a clean stall speed of 73kt at a mass of 6800kg. What is the stall speed at 8100kg? ",
    answer1: "66 ",
    answer2: "79",
    answer3: "80",
    answer4: "60",

    correctAnswer: 2
  },
  {
    question: "What is the mean camber line? ",
    answer1: "A straight line from the leading edge to the trailing edge ",
    answer2:
      "A line from the leading to the trailing edge equidistant from the ƒupper and lower surfaces  ",
    answer3: "The profile of the upper surface of an aerofoil section ",
    answer4: "An arc of circle from the leading edge to the trailing edge ",

    correctAnswer: 2
  },
  {
    question: "Bernoullis equation is: ",
    answer1: "Pstat + 1/2 rho IAS = Constant ",
    answer2: "Pstat + 1/2 rho TAS = Constant ",
    answer3: "Ptot + 1/2 rho TAS = Constant ",
    answer4: "Pdyn + 1/2 rho IAS = Constant ",

    correctAnswer: 2
  },
  {
    question: "Angle of incidence is: ",
    answer1:
      "The angle between the chord line of the wing and the longitudinal axis ",
    answer2: "The angle between the wing chord line ad the relative wind",
    answer3: "The angle between the wing and tailplane incidence ",
    correctAnswer: 1
  },
  {
    question: "Winglets: ",
    answer1: "Create an elliptical lift distribution ",
    answer2: "Decrease the induced drag ",
    answer3: "Decrease the static lateral stability ",
    answer4: "Increase the manoeuvrability ",

    correctAnswer: 2
  },
  {
    question: "What will happen on entering ground effect? ",
    answer1: "The effective angle of attack is decreased ",
    answer2: "The induced angle of attack is increased ",
    answer3: "The Lift is increased and the drag is decreased ",
    answer4: "Drag and lift are both reduced ",

    correctAnswer: 3
  },
  {
    question:
      "The effects of very heavy rain on the aerodynamic characteristics of an aeroplane are: ",
    answer1: "Decrease of Clmax and increase of drag   ",
    answer2: "Decrease of Clmax and decrease of drag ",
    answer3: "Increase Clmax and increase of drag ",
    answer4: "Increase of Clmax and decrease of drag ",

    correctAnswer: 1
  },
  {
    question: "Assuming constant IAS, when aeroplane leaves ground effect: ",
    answer1: "The effective angle of attack increases ",
    answer2: "The induced angle of attack decreases ",
    answer3: "Induced drag decreases ",
    answer4: "The effective angle of attack decreases ",

    correctAnswer: 4
  },
  {
    question: "Assuming constant IAS, when aeroplane enter ground effect: ",
    answer1: "Induced drag increases ",
    answer2: "Downwash reduces ",
    answer3: "The effective angle of attack decreases ",
    answer4: "Downwash does not change ",

    correctAnswer: 2
 
 
  },
  {
    question: "Stall speed:",
    answer1: "Increases with the length of the wingspan ",
    answer2: "Decreases with an increased weight ",
    answer3: "Does not depend on weight ",
    answer4: "Increase with increased weight ",

    correctAnswer: 4
  },
  {
    question:
      "Which of the following flaps systems will give the largest increase in CL?",
    answer1: "Plain Flap ",
    answer2: "Fowler flap ",
    answer3: "Split flap ",
    answer4: "Single slotted flap ",

    correctAnswer: 2
  },
  {
    question: "What can be seen in the polar curve?",
    answer1: "Vs (clean a/c) ",
    answer2: "Vs (flaps down) ",
    answer3: "CL CD max ",
    answer4: "Total drag ",

    correctAnswer: 3
  },
  {
    question: "1.5Vs produces what % of Clmax?",
    answer1: "44  ",
    answer2: "150",
    answer3: "50",
    answer4: "67",

    correctAnswer: 1
  },
  {
    question:
      "If IAS is increased in level flight from 77kt to 154kts, what would be the effect on (I) C(DI) and (II) D(I)",
    answer1: "(I) 4 (II) 16 ",
    answer2: "(I) 1/16 (II) 1/4 ",
    answer3: "(I) 1/4 (II) 4 ",
    answer4: "(I) 4 (II) 2 ",

    correctAnswer: 2
  }
];