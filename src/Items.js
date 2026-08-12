import IMG_Ares_Predator_V from './assets/ItemImages/Ares Predator V.png';
import IMG_Cyberdeck from './assets/ItemImages/Cyberdeck Erika MCD-1.jpg';
import IMG_Trauma_Patch from './assets/ItemImages/Trauma Patch.png';
import IMG_Synaptic_Booster from './assets/ItemImages/Synaptic Booster (Rating 2).png';
import IMG_Fichetti_Security_600 from './assets/ItemImages/Fichetti Security 600.png';
import IMG_Ares_Alpha from './assets/ItemImages/AresAlpha.png';
import IMG_Colt_Cobra_TZ30 from './assets/ItemImages/ColtCobraTZ30.jpg';
import IMG_Yamaha_Pulsar from './assets/ItemImages/YamahaPulsar.png';
import IMG_Steel_Lynx from './assets/ItemImages/SteelLynx.jpg';
import IMG_Medkit_Rating6 from './assets/ItemImages/MedkitRating6.jpg';
import IMG_Fake_SIN from './assets/ItemImages/FakeSIN.png';
import IMG_Renraku_Sensei from './assets/ItemImages/RenrakuSensei.png';
import IMG_Wired_Reflexes from './assets/ItemImages/WiredReflexes.png';
import IMG_Dermal_Plating from './assets/ItemImages/DermalPlating.png';
import IMG_Power_Focus from './assets/ItemImages/PowerFocus.jpg';
import IMG_Stealth_Tag from './assets/ItemImages/StealthTag.jpg';



const itemData=[
  {
    "name": "Ares Predator V",
    "description": "A heavy-duty semi-automatic pistol favored by street samurai and corp security alike. Reliable, powerful, and iconic in the shadows of the Sixth World.",
    "stats": {
      "type": "Heavy Pistol",
      "damage": "8P",
      "accuracy": 5,
      "ammo": "15 (c)",
      "availability": 7,
      "cost": "725¥"
    },
    "image": IMG_Ares_Predator_V
  },
  {
    "name": "Cyberdeck: Erika MCD-1",
    "description": "An entry-level cyberdeck used by deckers to jack into the Matrix, run programs, and hack corporate systems from the shadows.",
    "stats": {
      "type": "Cyberdeck",
      "attack": 3,
      "sleaze": 4,
      "dataProcessing": 3,
      "firewall": 2,
      "availability": 6,
      "cost": "4000¥"
    },
    "image": IMG_Cyberdeck
  },
  {
    "name": "Trauma Patch",
    "description": "A self-adhesive medical patch that automatically injects stabilizing chemicals into a wounded runner, buying critical time before proper medical care.",
    "stats": {
      "type": "Medical Gear",
      "effect": "Stabilizes dying character, +1 Box healed",
      "availability": 4,
      "cost": "500¥"
    },
    "image": IMG_Trauma_Patch
  },
  {
    "name": "Synaptic Booster (Rating 2)",
    "description": "Cyberware implant that accelerates neural response time, giving the user faster reflexes in combat and Matrix actions alike.",
    "stats": {
      "type": "Cyberware - Bioware Hybrid",
      "initiativeBonus": "+2 Initiative Dice",
      "essenceCost": 1.0,
      "availability": 12,
      "cost": "95000¥"
    },
    "image": IMG_Synaptic_Booster
  },
  {
    "name": "Fichetti Security 600",
    "description": "A compact, easily concealable pistol popular among infiltrators who need reliable firepower without sacrificing stealth.",
    "stats": {
      "type": "Light Pistol",
      "damage": "6P",
      "accuracy": 6,
      "ammo": "30 (c)",
      "concealability": "+3",
      "availability": 4,
      "cost": "300¥"
    },
    "image": IMG_Fichetti_Security_600
  },
  {
    "name": "Ares Alpha",
    "description": "The standard-issue assault rifle of Ares Macrotechnology's own security forces, featuring an integrated smartgun system and an under-barrel grenade launcher.",
    "stats": {
      "type": "Assault Rifle",
      "damage": "10P",
      "accuracy": 5,
      "ammo": "42 (c)",
      "availability": 11,
      "cost": "5900¥"
    },
    "image": IMG_Ares_Alpha
  },
  {
    "name": "Colt Cobra TZ-30",
    "description": "A sleek machine pistol favored for its high rate of fire and easy concealment, making it a common backup weapon among shadowrunners.",
    "stats": {
      "type": "Machine Pistol",
      "damage": "7P",
      "accuracy": 6,
      "ammo": "32 (c)",
      "concealability": "+2",
      "availability": 8,
      "cost": "1150¥"
    },
    "image": IMG_Colt_Cobra_TZ30
  },
  {
    "name": "Yamaha Pulsar",
    "description": "A lightweight, agile motorcycle popular with couriers and runners who need to slip through Seattle traffic without drawing attention.",
    "stats": {
      "type": "Vehicle - Motorcycle",
      "handling": 5,
      "speed": 5,
      "acceleration": 2,
      "body": 6,
      "armor": 9,
      "availability": 4,
      "cost": "6000¥"
    },
    "image": IMG_Yamaha_Pulsar
  },
  {
    "name": "Steel Lynx Combat Drone",
    "description": "A rugged, wheeled combat drone bristling with weapon mounts, often deployed by rigger crews as mobile fire support.",
    "stats": {
      "type": "Drone - Combat",
      "handling": 4,
      "speed": 4,
      "body": 8,
      "armor": 10,
      "sensor": 4,
      "availability": 10,
      "cost": "27000¥"
    },
    "image": IMG_Steel_Lynx
  },
  {
    "name": "Medkit (Rating 6)",
    "description": "A portable diagnostic and treatment kit used to patch up wounded runners in the field, with higher-rated kits offering better first aid results.",
    "stats": {
      "type": "Medical Gear",
      "effect": "+6 dice pool for First Aid tests",
      "uses": 6,
      "availability": 6,
      "cost": "1500¥"
    },
    "image": IMG_Medkit_Rating6
  },
  {
    "name": "Fake SIN (Rating 4)",
    "description": "A forged System Identification Number complete with matching licenses, allowing a runner to pass as a legitimate citizen under a false identity.",
    "stats": {
      "type": "Identification",
      "rating": 4,
      "effect": "Opposed by Rating x2 in scrutiny checks",
      "availability": 8,
      "cost": "20000¥"
    },
    "image": IMG_Fake_SIN
  },
  {
    "name": "Renraku Sensei",
    "description": "A mid-tier cyberdeck balancing performance and price, popular among independent deckers who need reliable Matrix capability without corp-level cost.",
    "stats": {
      "type": "Cyberdeck",
      "attack": 5,
      "sleaze": 5,
      "dataProcessing": 4,
      "firewall": 3,
      "availability": 9,
      "cost": "16000¥"
    },
    "image": IMG_Renraku_Sensei
  },
  {
    "name": "Wired Reflexes (Rating 2)",
    "description": "A cyberware implant that rewires the nervous system for accelerated reaction speed, a staple upgrade for street samurai seeking a combat edge.",
    "stats": {
      "type": "Cyberware",
      "initiativeBonus": "+2 Initiative Dice",
      "reactionBonus": "+2",
      "essenceCost": 3.0,
      "availability": 10,
      "cost": "39000¥"
    },
    "image": IMG_Wired_Reflexes
  },
  {
    "name": "Dermal Plating (Rating 3)",
    "description": "Subdermal armor plates grafted beneath the skin, offering discreet protection against physical attacks without bulky external armor.",
    "stats": {
      "type": "Cyberware",
      "armorBonus": "+3",
      "essenceCost": 1.5,
      "availability": 9,
      "cost": "18000¥"
    },
    "image": IMG_Dermal_Plating
  },
  {
    "name": "Power Focus (Rating 3)",
    "description": "An enchanted focus that channels magical energy, boosting a spellcaster's ability to shape and control their spells during combat.",
    "stats": {
      "type": "Magical Gear - Focus",
      "rating": 3,
      "effect": "+3 dice to Spellcasting tests",
      "bondingCost": "Rating x Force karma",
      "availability": 12,
      "cost": "60000¥"
    },
    "image": IMG_Power_Focus
  },
  {
    "name": "Stealth Tag",
    "description": "A miniature RFID tracking device disguised as innocuous debris, used by riggers and fixers to covertly monitor targets or cargo.",
    "stats": {
      "type": "Surveillance Gear",
      "signalRange": "Rating x100m",
      "concealability": "+6",
      "availability": 6,
      "cost": "100¥"
    },
    "image": IMG_Stealth_Tag
  }
]

export default itemData;