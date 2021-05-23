<template>
  <div class="home">

  <div>
  <b-card
    title="Adventure Title">
    <b-card-text>
      Title Generator is a work in progress
    </b-card-text>
  </b-card>

   <b-card
    title="Adventure Opening">
    <b-card-text>
      <strong>Setting: </strong>{{ adventureOpening }}
    </b-card-text>
    <b-button href="#" variant="primary" v-on:click="adventureOpeningGenerator()">Re-roll Plot</b-button>
  </b-card>

   <b-card
    title="Opening NPCs">
    <b-card-text>
      <strong>NPCs: </strong>{{ openingNPCsText }}
    </b-card-text>
     <b-button href="#" variant="primary" v-on:click="adventureNPCsGenerator()">Re-roll Plot</b-button>
  </b-card> 

  <b-card
    title="Plot">
    <b-card-text>
      <strong> Plot Hook: </strong>{{ PlotHookText }} <br>
      <strong> Plot Draw: </strong>{{ PlotDrawText }} <br>
      <strong> Plot Concept: </strong>{{ PlotConceptText }} <br>
      <strong> Plot Motivation: </strong>{{ PlotMotivationText }} <br>
      <strong> Plot Fulfilment: </strong>{{ PlotFulfillmentText }} <br>
      <strong> Plot From/Where: </strong>{{ PlotFromWhereText }} <br>
      <strong> Plot Obstacles: </strong>{{ PlotObstaclesText }} <br>
      <strong> Plot Twist: </strong>{{ PlotTwistText }} <br>
    </b-card-text>
     <b-button href="#" variant="primary" v-on:click="plotGenerator()">Re-roll Plot</b-button>
  </b-card> 

  <b-card
    title="Antagonist">
    <b-card-text>
      <strong> Primary Antagonist: </strong>{{ PrimaryAntagonistText }} <br>
      <strong> Primary Antagonist's Trait: </strong>{{ PrimaryAntagonistTraitText }} <br>
    </b-card-text>
    <b-button href="#" variant="primary" v-on:click="antagonistGenerator()">Re-roll Antagonist</b-button>
  </b-card> 

  <b-card
    title="Character Goals and Objectives">
    <b-card-text>
      <strong> Character Goals: </strong>{{ characterGoalText }} <br>
      <strong> Character Objective: </strong>{{ characterObjectiveText }} <br>
    </b-card-text>
    <b-button href="#" variant="primary" v-on:click="characterGenerator()">Re-roll Goals and Objective</b-button>
  </b-card> 

  <br>
    <b-button href="#" variant="primary" v-on:click="roll1d20All()">Generate Adventure</b-button>
  </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      randomNumberOpeningSetting: 0,
      randomNumberOpeningDescription: 0,
      randomNumberOpeningNPCs: 0,
      randomNumberOpeningTemparament: 0,
      randomNumberPlotHook: 0,
      randomNumberPlotDraw: 0,
      randomNumberPlotConcept: 0,
      randomNumberPlotMotivation: 0,
      randomNumberPrimaryAntagonist: 0,
      randomNumberPrimaryAntagonistTrait: 0,
      randomNumberPlotFulfillment: 0,
      randomNumberPlotFromWhere: 0,
      randomNumberPlotObstacles: 0,
      randomNumberPlotTwist: 0,
      randomNumberCharacterGoal: 0,
      randomNumberCharacterObjective: 0,
      adventureOpening: 'Adventure Opening',
      openingNPCsText: 'Opening NPCs',
      PlotHookText: 'nothing',
      PlotDrawText: 'nothing',
      PlotConceptText: 'nothing',
      PlotMotivationText: 'nothing',
      PlotFulfillmentText: 'nothing',
      PlotFromWhereText: 'nothing',
      PlotObstaclesText: 'nothing',
      PlotTwistText: 'nothing',
      PrimaryAntagonistText: 'nothing',
      PrimaryAntagonistTraitText: 'nothing',
      characterGoalText: 'nothing',
      characterObjectiveText: 'nothing',
      adventureTitle: 'Adventure Title',
      adventureTitleArray: [
      { id: 1, name: 'New'},
      { id: 2, name: 'Barcelona' },
      { id: 3, name: 'Hawaii' },
      ],
      openingSetting: [
      { id: 1, name: 'jungle'},
      { id: 2, name: 'island'},
      { id: 3, name: 'mountain range'},
      { id: 4, name: 'black alley'},
      { id: 5, name: 'crypt'},
      { id: 6, name: 'blood-soaked battlefield'},
      { id: 7, name: 'courtesan’s chambers'},
      { id: 8, name: 'noble’s villa'},
      { id: 9, name: 'sewer system'},
      { id: 10, name: 'ruined keep'},
      { id: 11, name: 'hidden temple'},
      { id: 12, name: 'execution chamber'},
      { id: 13, name: 'slaver’s market'},
      { id: 14, name: 'graveyard'},
      { id: 15, name: 'desert'},
      { id: 16, name: 'ocean'},
      { id: 17, name: 'forest'},
      { id: 18, name: 'swamp'},
      { id: 19, name: 'mine'},
      { id: 20, name: 'royal court'},
      ],
      openingDescription: [
      { id: 1, name: 'chaotic'},
      { id: 2, name: 'frozen'},
      { id: 3, name: 'omnious'},
      { id: 4, name: 'claustrophobic'},
      { id: 5, name: 'eerie'},
      { id: 6, name: 'fanthomless'},
      { id: 7, name: 'sprawling'},
      { id: 8, name: 'maladorous'},
      { id: 9, name: 'vibrant'},
      { id: 10, name: 'barren'},
      { id: 11, name: 'oppresive'},
      { id: 12, name: 'obscure'},
      { id: 13, name: 'brackish'},
      { id: 14, name: 'misty'},
      { id: 15, name: 'searing'},
      { id: 16, name: 'empty'},
      { id: 17, name: 'crumbling'},
      { id: 18, name: 'tempestuous'},
      { id: 19, name: 'weird'},
      { id: 20, name: 'foggy'},
      ],
      openingNPCs: [
      { id: 1, name: 'Royalty'},
      { id: 2, name: 'Nobility'},
      { id: 3, name: 'Militia'},
      { id: 4, name: 'Natives'},
      { id: 5, name: 'Mercenary Soldiers'},
      { id: 6, name: 'Porters'},
      { id: 7, name: 'Slaves'},
      { id: 8, name: 'Clergy'},
      { id: 9, name: 'Bounty Hunter'},
      { id: 10, name: 'Hunter'},
      ],
      openingTemparament: [
      { id: 1, name: 'benevolent'},
      { id: 2, name: 'friendly'},
      { id: 3, name: 'indifferent'},
      { id: 4, name: 'unfriendly'},
      { id: 5, name: 'hostile'},
      ],
      plotHook : [
      { id: 1, name: 'A close friend'},
      { id: 2, name: 'A kidnapped relative'},
      { id: 3, name: 'An anonymous letter'},
      { id: 4, name: 'A wizened scholar'},
      { id: 5, name: 'An ancient prophecy'},
      { id: 6, name: 'A fanatical layperson'},
      { id: 7, name: 'A dying man or woman'},
      { id: 8, name: 'A member of a secret society'},
      { id: 9, name: 'An old acquaintance'},
      { id: 10, name: 'A noble'},
      { id: 11, name: 'Unwittingly caught between two opposing forces'},
      { id: 12, name: 'Stumble on a strange event or dangerous location'},
      { id: 13, name: 'A wealthy entrepreneur'},
      { id: 14, name: 'A seemingly freak accident'},
      { id: 15, name: 'A priest or priestess '},
      { id: 16, name: 'A diplomat'},
      { id: 17, name: 'The local militia'},
      { id: 18, name: 'A former enemy'},
      { id: 19, name: 'A member of a royal family'},
      { id: 20, name: 'A despotic tyrant'},
      ],
      plotDraw : [
      { id: 1, name: 'Delivered outrageous demands'},
      { id: 2, name: 'Sent an invitation'},
      { id: 3, name: 'Lied to the player characters'},
      { id: 4, name: 'Delivered sensitive information '},
      { id: 5, name: 'Offered a fortune'},
      { id: 6, name: 'Asked for help'},
      { id: 7, name: 'Attempted blackmail or extortion'},
      { id: 8, name: 'Funded an expedition'},
      { id: 9, name: 'Has mistaken a player character’s identity'},
      { id: 10, name: 'Offered a contract of employment'},
      { id: 11, name: 'Placed an artifact in a player character’s safekeeping with their final breath'},
      { id: 12, name: 'Performed a dangerous ritual'},
      { id: 13, name: 'Called in a debt or favor'},
      { id: 14, name: 'Sent a warning'},
      { id: 15, name: 'Has information on someone relevant who is missing or dead'},
      { id: 16, name: 'Stole from the player characters'},
      { id: 17, name: 'Seeks revenge'},
      { id: 18, name: 'Is worried for their life'},
      { id: 19, name: 'Has been framed for crime or treason'},
      { id: 20, name: 'Offered details on another antagonist'},
      ],
      plotConcept : [
      { id: 1, name: 'Overthrow the ruling elite'},
      { id: 2, name: 'Complete an infernal ritual'},
      { id: 3, name: 'Tear a gateway to an ancient era'},
      { id: 4, name: 'Foment a war'},
      { id: 5, name: 'Destruction of a place, a group, or a creature'},
      { id: 6, name: 'Gather information to prove the existence of something or someone'},
      { id: 7, name: 'Unleash the power of an otherworldly horror'},
      { id: 8, name: 'Protect a person or place'},
      { id: 9, name: 'Gain control of a person or place'},
      { id: 10, name: 'Break a deadlock'},
      { id: 11, name: 'A secret coup'},
      { id: 12, name: 'Dissection and experimentation'},
      { id: 13, name: 'Enact revenge for a wrongdoing (real or perceived)'},
      { id: 14, name: 'Cover up a dirty secret'},
      { id: 15, name: 'Exploitation of a group of people'},
      { id: 16, name: 'The pursuit of knowledge'},
      { id: 17, name: 'Recover an ancient artifact'},
      { id: 18, name: 'Recover an otherworldly relic'},
      { id: 19, name: 'Resurrecting an ancient power'},
      { id: 20, name: 'World domination!'},
      ],
      plotMotivation : [
      { id: 1, name: 'Vengeance'},
      { id: 2, name: 'Pure malice'},
      { id: 3, name: 'Intense hatred'},
      { id: 4, name: 'Envy'},
      { id: 5, name: 'Being manipulated by someone or something'},
      { id: 6, name: 'An ancient prophecy'},
      { id: 7, name: 'The voices have spoken…'},
      { id: 8, name: 'Forbidden knowledge'},
      { id: 9, name: 'Dreams or visions'},
      { id: 10, name: 'Protect interests'},
      { id: 11, name: 'Greed'},
      { id: 12, name: 'Spiritual or (un)ethical beliefs'},
      { id: 13, name: 'To protect a person, place, or belief'},
      { id: 14, name: 'To strike first'},
      { id: 15, name: 'An ancient feud'},
      { id: 16, name: 'To divert attention from the true scheme'},
      { id: 17, name: 'For the greater good'},
      { id: 18, name: 'Repentance for a mistake'},
      { id: 19, name: 'An unpayable debt'},
      { id: 20, name: 'Megalomania'},
      ],
      primaryAntagonist : [
      { id: 1, name: 'An otherworldly entity'},
      { id: 2, name: 'A nefarious cult '},
      { id: 3, name: 'A villainous noble'},
      { id: 4, name: 'A crime syndicate'},
      { id: 5, name: 'A tyrannical overlord'},
      { id: 6, name: 'An evil priest or priestess'},
      { id: 7, name: 'A crime lord'},
      { id: 8, name: 'An infernal sorcerer'},
      { id: 9, name: 'A pirate king or queen'},
      { id: 10, name: 'A tribal chieftain'},
      { id: 11, name: 'A guild leader'},
      { id: 12, name: 'An unfeeling historian'},
      { id: 13, name: 'An insane collector of antiquities'},
      { id: 14, name: 'A mercenary captain'},
      { id: 15, name: 'A legendary gladiator'},
      { id: 16, name: 'An intelligent beast'},
      { id: 17, name: 'A corrupt judiciary'},
      { id: 18, name: 'One or more royal advisors'},
      { id: 19, name: 'One or more members of a royal family'},
      { id: 20, name: 'A despotic king or queen'},
      ],
      primaryAntagonistTrait : [
      { id: 1, name: 'Aggressive'},
      { id: 2, name: 'Disgruntled'},
      { id: 3, name: 'Ambitious'},
      { id: 4, name: 'Manipulative'},
      { id: 5, name: 'Unpredictable'},
      { id: 6, name: 'Obsessed'},
      { id: 7, name: 'Maniacal'},
      { id: 8, name: 'Tortured'},
      { id: 9, name: 'Cruel'},
      { id: 10, name: 'Psychotic'},
      { id: 11, name: 'Impulsive'},
      { id: 12, name: 'Covert'},
      { id: 13, name: 'Disillusioned'},
      { id: 14, name: 'Traitorous'},
      { id: 15, name: 'Conspiratorial'},
      { id: 16, name: 'Intolerant'},
      { id: 17, name: 'Vindictive'},
      { id: 18, name: 'Masochistic'},
      { id: 19, name: 'Seductive'},
      { id: 20, name: 'Ineffable'},
      ],
      plotFulfillment : [
      { id: 1, name: 'Willing sacrificial victims'},
      { id: 2, name: 'Unwilling sacrificial victims'},
      { id: 3, name: 'Subjects for experimentation'},
      { id: 4, name: 'An ancient text'},
      { id: 5, name: 'Hidden knowledge'},
      { id: 6, name: 'A specific location'},
      { id: 7, name: 'An otherworldly gateway'},
      { id: 8, name: 'A relic of the past'},
      { id: 9, name: 'A lock of hair (Primary Antagonist) '},
      { id: 10, name: 'The kidnap of a powerful figure'},
      { id: 11, name: 'A precious jewel'},
      { id: 12, name: 'An extract from an ancient spellbook'},
      { id: 13, name: 'A strange and alien device'},
      { id: 14, name: 'A stone circle'},
      { id: 15, name: 'A cursed object'},
      { id: 16, name: 'A sorcerer’s tome'},
      { id: 17, name: 'An alignment of the stars'},
      { id: 18, name: 'The blood of a royal'},
      { id: 19, name: 'The heart of an otherworldly creature'},
      { id: 20, name: 'The horn of a living dragon'},
      ],
      plotFromWhere : [
      { id: 1, name: 'A distant Mountain'},
      { id: 2, name: 'Undearsea Ruins'},
      { id: 3, name: 'The Frozen Thundra'},
      { id: 4, name: 'A Secret Island'},
      { id: 5, name: 'A sacred temple'},
      { id: 6, name: 'A concealed tomb'},
      { id: 7, name: 'A cursed glade'},
      { id: 8, name: 'A pyramid lost to the desert'},
      { id: 9, name: 'A sunken ship'},
      { id: 10, name: 'A trap-filled dungeon'},
      { id: 11, name: 'The vault of a hidden cult'},
      { id: 12, name: 'A pirate haven'},
      { id: 13, name: 'The hidden depths of the world'},
      { id: 14, name: 'An otherworldly gateway'},
      { id: 15, name: 'An otherworldly entity’s lair'},
      { id: 16, name: 'A cursed and forgotten city'},
      { id: 17, name: 'A sorcerer’s lair'},
      { id: 18, name: 'A royal vault'},
      { id: 19, name: 'A dragon’s lair'},
      { id: 20, name: 'An abbadoned warehouse'},
      ],
      plotObstacles : [
      { id: 1, name: 'On a short timescale'},
      { id: 2, name: 'Considered an unreachable destination (lost island, deep underwater, inside a volcano)'},
      { id: 3, name: 'Numerous distractions along the way (side missions, rival factions, opportunities)'},
      { id: 4, name: 'Key knowledge is required (held in a location or by a person — usually guarded'},
      { id: 5, name: 'Physically or environmentally challenging (frozen tundra, cloying swamp, dense jungle)'},
      { id: 6, name: 'Another non-player character faction is also involved'},
      { id: 7, name: 'It is guarded by at least a high level entity'},
      { id: 8, name: 'They must carry a hindrance (fragile asset, incompetent person, dangerous prisoner)'},
      { id: 9, name: 'Battered by the elements (volcanic activity, sand or snow storms, earthquakes, tsunamis, etc.'},
      { id: 10, name: 'Must cross hotly disputed territory'},
      { id: 11, name: 'Famine'},
      { id: 12, name: 'Poverty stricken (rotten, stolen, corrupted, or faulty equipment)'},
      { id: 13, name: 'Extortionate cost (in something the character’s value)'},
      { id: 14, name: 'Lesser of two evils (working with an uncomfortable ally'},
      { id: 15, name: 'Civil unrest (riots, terrorists)'},
      { id: 16, name: 'Extortion and bribery (a group member is bribed or held to ransom)'},
      { id: 17, name: 'Sold misinformation'},
      { id: 18, name: 'Problems with the authorities (arrested, bounty placed)'},
      { id: 19, name: 'Strange malady that requires the antagonists’ plot fulfillment to cure'},
      { id: 20, name: 'Ambushed!'},
      ],
      plotTwist : [
      { id: 1, name: 'They must make a great personal sacrifice (one or more group member'},
      { id: 2, name: 'They are the experiment (a group or faction is testing their abilities)'},
      { id: 3, name: 'Led into a trap (they are the antagonist’s missing ingredient)'},
      { id: 4, name: 'Into the jaws of death (no one is expected to leave alive)'},
      { id: 5, name: 'The antagonist is part of the group (if played right, maybe even a player character)'},
      { id: 6, name: 'Intelligence leads them to believe there is only one to deal with (they were wrong!)'},
      { id: 7, name: 'Familial connections (the antagonist has close ties to a player character)'},
      { id: 8, name: 'Snake in the grass (a traitor working for an independent faction'},
      { id: 9, name: 'High body count'},
      { id: 10, name: 'Damned if we do… (letting the antagonist escape will save countless lives)'},
      { id: 11, name: 'A person or object that is a required to foil the antagonist is also exactly what the antagonist needs!'},
      { id: 12, name: 'To understand a villain, you must become the villain (they must do bad things to achieve their goal)'},
      { id: 13, name: 'The antagonist is a patsy for the true villain'},
      { id: 14, name: 'The antagonist is performing heinous acts in the hope of preventing a greater evil'},
      { id: 15, name: 'Fulfillment before their eyes (the group arrive too late or the event unfolds around them)'},
      { id: 16, name: 'Cut off and left adrift (the group’s supporters fall strangely silent and no longer provide support)'},
      { id: 17, name: 'A key character of the plot is killed, only to return alivelater (can be keyed to entries 2 or 8 of this table)'},
      { id: 18, name: 'The player characters are working for the real villain and the antagonist is trying to stop them'},
      { id: 19, name: 'Tread dark paths (the player characters must open themselves to Corruption to achieve a greater good'},
      { id: 20, name: 'The person who hired them is the true villain'},
      ],
      characterGoal : [
      { id: 1, name: 'Explore'},
      { id: 2, name: 'Recover'},
      { id: 3, name: 'Plunder'},
      { id: 4, name: 'Destroy'},
      { id: 5, name: 'Protect'},
      { id: 6, name: 'Deliver'},
      { id: 7, name: 'Capture'},
      { id: 8, name: 'Find/Locate'},
      { id: 9, name: 'Negotiate'},
      { id: 10, name: 'Scout'},
      { id: 11, name: 'Divert'},
      { id: 12, name: 'Distract'},
      { id: 13, name: 'Unveil'},
      { id: 14, name: 'Hide'},
      { id: 15, name: 'Understand'},
      { id: 16, name: 'Prove'},
      { id: 17, name: 'Disprove'},
      { id: 18, name: 'Steal'},
      { id: 19, name: 'Infiltrate'},
      { id: 20, name: 'Rescue'},
      ],
      characterObjective : [
      { id: 1, name: 'An ally'},
      { id: 2, name: 'An enemy '},
      { id: 3, name: 'Identity of a person (possible the Antagonist)'},
      { id: 4, name: 'An opponent'},
      { id: 5, name: 'An opponent'},
      { id: 6, name: 'Documents or secrets'},
      { id: 7, name: 'Documents or secrets'},
      { id: 8, name: 'An artifact'},
      { id: 9, name: 'An artifact'},
      { id: 10, name: 'A physical location'},
      { id: 11, name: 'A physical location'},
      { id: 12, name: 'An ancient map to a secret location'},
      { id: 13, name: 'An ancient map to a secret location'},
      { id: 14, name: 'An otherworldly creature’s body part'},
      { id: 15, name: 'An otherworldly creature’s body part'},
      { id: 16, name: 'The current antagonist'},
      { id: 17, name: 'The current antagonist'},
      { id: 18, name: 'A deadly or secret organisation'},
      { id: 19, name: 'A deadly or secret organisation'},
      { id: 20, name: 'A legendary character'},
      ],

    };
  },
  created() {
   
  },
  methods: {
    roll1d20All() {
      this.adventureOpeningGenerator();
      this.adventureNPCsGenerator();
      this.plotGenerator();
      this.antagonistGenerator();
      this.characterGenerator();
    },
    roll1d20Opening() {
      this.randomNumberOpeningSetting = Math.floor(Math.random() * 20);
      this.randomNumberOpeningDescription = Math.floor(Math.random() * 20);
    },
    roll1d20Plot() {
      this.randomNumberPlotHook = Math.floor(Math.random() * 20);
      this.randomNumberPlotDraw = Math.floor(Math.random() * 20);
      this.randomNumberPlotConcept = Math.floor(Math.random() * 20);
      this.randomNumberPlotMotivation = Math.floor(Math.random() * 20);
      this.randomNumberPlotFulfillment = Math.floor(Math.random() * 20);
      this.randomNumberPlotFromWhere = Math.floor(Math.random() * 20);
      this.randomNumberPlotObstacles = Math.floor(Math.random() * 20);
      this.randomNumberPlotTwist = Math.floor(Math.random() * 20);
    },
    roll1d20Character() {
      this.randomNumberCharacterGoal = Math.floor(Math.random() * 20);
      this.randomNumberCharacterObjective = Math.floor(Math.random() * 20);
    },
    roll1d20NPC() {
      this.randomNumberOpeningNPCs = Math.floor(Math.random() * 10);
      this.randomNumberOpeningTemparament = Math.floor(Math.random() * 5);
    },
    roll1d20Antagonist() {
      this.randomNumberPrimaryAntagonist = Math.floor(Math.random() * 10);
      this.randomNumberPrimaryAntagonistTrait = Math.floor(Math.random() * 5);
    },
    adventureOpeningGenerator() {
      this.roll1d20Opening();
      this.adventureOpening = 'A ' + this.openingDescription[this.randomNumberOpeningDescription].name + ' ' +  this.openingSetting[this.randomNumberOpeningSetting].name;
    },
    adventureNPCsGenerator() {
      this.roll1d20NPC();
      this.openingNPCsText = 'A ' + this.openingTemparament[this.randomNumberOpeningTemparament].name + ' ' +  this.openingNPCs[this.randomNumberOpeningNPCs].name;
    },
    plotGenerator() {
      this.roll1d20Plot();
      this.PlotHookText = this.plotHook[this.randomNumberPlotHook].name;
      this.PlotDrawText = this.plotDraw[this.randomNumberPlotDraw].name;
      this.PlotConceptText = this.plotConcept[this.randomNumberPlotConcept].name;
      this.PlotMotivationText = this.plotMotivation[this.randomNumberPlotMotivation].name;
      this.PlotFulfillmentText = this.plotFulfillment[this.randomNumberPlotFulfillment].name;
      this.PlotFromWhereText = this.plotFromWhere[this.randomNumberPlotFromWhere].name;
      this.PlotObstaclesText = this.plotObstacles[this.randomNumberPlotObstacles].name;
      this.PlotTwistText = this.plotTwist[this.randomNumberPlotTwist].name;
    },
    antagonistGenerator() {
      this.roll1d20Antagonist();
      this.PrimaryAntagonistText = this.primaryAntagonist[this.randomNumberPrimaryAntagonist].name;
      this.PrimaryAntagonistTraitText = this.primaryAntagonistTrait[this.randomNumberPrimaryAntagonistTrait].name;
    },
    characterGenerator() {
      this.roll1d20Character();
      this.characterGoalText = this.characterGoal[this.randomNumberCharacterGoal].name;
      this.characterObjectiveText = this.characterObjective[this.randomNumberCharacterObjective].name;
    }
  }
}

</script>

<style scoped>



</style>