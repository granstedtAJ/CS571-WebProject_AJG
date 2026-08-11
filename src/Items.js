import IMG_Ares_Predator_V from './assets/ItemImages/Ares Predator V.png';
import IMG_Cyberdeck from './assets/ItemImages/Cyberdeck Erika MCD-1.jpg';
import IMG_Trauma_Patch from './assets/ItemImages/Trauma Patch.png';
import IMG_Synaptic_Booster from './assets/ItemImages/Synaptic Booster (Rating 2).png';
import IMG_Fichetti_Security_600 from './assets/ItemImages/Fichetti Security 600.png';

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
  }
]

export default itemData;