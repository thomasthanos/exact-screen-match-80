export interface WeaponStat {
  weapon: string;
  hits: string;
}

export interface Vehicle {
  name: string;
  category: "cars" | "helicopters" | "planes" | "special";
  stats: WeaponStat[];
}

export const vehicles: Vehicle[] = [
  // CARS
  { name: "APC", category: "cars", stats: [
    { weapon: "RPG", hits: "8" }, { weapon: "Homing", hits: "8" }, { weapon: "Kanjali Shell", hits: "3" },
    { weapon: "Railgun Rounds", hits: "17" }, { weapon: "Heavy Sniper Mk II EXP", hits: "20" }, { weapon: "Anti-Aircraft", hits: "2" },
  ]},
  { name: "Chernobog", category: "cars", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "1" }, { weapon: "Kanjali Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "1" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Insurgent", category: "cars", stats: [
    { weapon: "RPG", hits: "4" }, { weapon: "Homing", hits: "7" }, { weapon: "Tank Shell", hits: "2" },
    { weapon: "Railgun Rounds", hits: "9" }, { weapon: "Heavy Sniper Mk II EXP", hits: "10" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Insurgent Pick-Up Custom", category: "cars", stats: [
    { weapon: "RPG", hits: "5" }, { weapon: "Homing", hits: "14" }, { weapon: "Tank Shell", hits: "3" },
    { weapon: "Railgun Rounds", hits: "10" }, { weapon: "Heavy Sniper Mk II EXP", hits: "22" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Menacer", category: "cars", stats: [
    { weapon: "RPG", hits: "4" }, { weapon: "Homing", hits: "12" }, { weapon: "Tank Shell", hits: "2" },
    { weapon: "Railgun Rounds", hits: "9" }, { weapon: "Heavy Sniper Mk II EXP", hits: "10" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Nightshark", category: "cars", stats: [
    { weapon: "RPG", hits: "5" }, { weapon: "Homing", hits: "14" }, { weapon: "Tank Shell", hits: "3" },
    { weapon: "Railgun Rounds", hits: "10" }, { weapon: "Heavy Sniper Mk II EXP", hits: "12" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Patriot Mil-Spec", category: "cars", stats: [
    { weapon: "RPG", hits: "2" }, { weapon: "Homing", hits: "6" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "5" }, { weapon: "Heavy Sniper Mk II EXP", hits: "5" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Rhino Tank", category: "cars", stats: [
    { weapon: "RPG", hits: "4" }, { weapon: "Homing", hits: "4" }, { weapon: "Tank Shell", hits: "4" },
    { weapon: "Railgun Rounds", hits: "9" }, { weapon: "Heavy Sniper Mk II EXP", hits: "10" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "TM-02 Khanjali", category: "cars", stats: [
    { weapon: "RPG", hits: "8" }, { weapon: "Homing", hits: "8" }, { weapon: "Tank Shell", hits: "8" },
    { weapon: "Railgun Rounds", hits: "17" }, { weapon: "Heavy Sniper Mk II EXP", hits: "20" }, { weapon: "Anti-Aircraft", hits: "2" },
  ]},

  // HELICOPTERS
  { name: "Akula", category: "helicopters", stats: [
    { weapon: "RPG", hits: "3" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "2" },
    { weapon: "Railgun Rounds", hits: "5-6" }, { weapon: "Heavy Sniper Mk II EXP", hits: "6" }, { weapon: "Anti-Aircraft", hits: "2" },
  ]},
  { name: "Annihilator Stealth", category: "helicopters", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "1" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "1" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Buzzard Attack Chopper", category: "helicopters", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "1" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "1" }, { weapon: "Heavy Sniper Mk II EXP", hits: "2" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Cargobob", category: "helicopters", stats: [
    { weapon: "RPG", hits: "2" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "3" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "FH-1 Hunter", category: "helicopters", stats: [
    { weapon: "RPG", hits: "3" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "2" },
    { weapon: "Railgun Rounds", hits: "5" }, { weapon: "Heavy Sniper Mk II EXP", hits: "6" }, { weapon: "Anti-Aircraft", hits: "2" },
  ]},
  { name: "Savage", category: "helicopters", stats: [
    { weapon: "RPG", hits: "2" }, { weapon: "Homing", hits: "2" }, { weapon: "Tank Shell", hits: "2" },
    { weapon: "Railgun Rounds", hits: "3" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "2" },
  ]},
  { name: "Sparrow", category: "helicopters", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "1" }, { weapon: "Tank Shell", hits: "1-2" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "6" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Valkyrie", category: "helicopters", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "1" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "1" }, { weapon: "Heavy Sniper Mk II EXP", hits: "1" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Weaponized Conada", category: "helicopters", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "1" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "1" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "DH-7 Iron Mule", category: "helicopters", stats: [
    { weapon: "RPG", hits: "3" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "7" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},

  // PLANES
  { name: "P-996 Lazer", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Hydra", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "2" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "1" }, { weapon: "Heavy Sniper Mk II EXP", hits: "2" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "F-160 Raiju", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "B-11 Strikeforce", category: "planes", stats: [
    { weapon: "RPG", hits: "2" }, { weapon: "Homing", hits: "5" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "4" }, { weapon: "Heavy Sniper Mk II EXP", hits: "5" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "RO-86 Alkonost", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "RM-10 Bombushka", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Pyro", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "P-45 Nokota", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "1" }, { weapon: "Tank Shell", hits: "0" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "4" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "MOGUL", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Titan 250D", category: "planes", stats: [
    { weapon: "RPG", hits: "5" }, { weapon: "Homing", hits: "12" }, { weapon: "Tank Shell", hits: "12" },
    { weapon: "Railgun Rounds", hits: "5" }, { weapon: "Heavy Sniper Mk II EXP", hits: "1" }, { weapon: "Anti-Aircraft", hits: "3" },
  ]},
  { name: "V-65 Molotok", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "2" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "LF-22 Starling", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "5" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Rogue", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Volatol", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Tula", category: "planes", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "2" }, { weapon: "Heavy Sniper Mk II EXP", hits: "3" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},

  // SPECIAL
  { name: "Acid LAB", category: "special", stats: [
    { weapon: "RPG", hits: "48" }, { weapon: "Homing", hits: "49" }, { weapon: "Tank Shell", hits: "9" },
    { weapon: "Railgun Rounds", hits: "106" }, { weapon: "Heavy Sniper Mk II EXP", hits: "122" }, { weapon: "Anti-Aircraft", hits: "9" },
  ]},
  { name: "Anti-Aircraft Trailer", category: "special", stats: [
    { weapon: "RPG", hits: "1" }, { weapon: "Homing", hits: "1" }, { weapon: "Tank Shell", hits: "1" },
    { weapon: "Railgun Rounds", hits: "1" }, { weapon: "Heavy Sniper Mk II EXP", hits: "9" }, { weapon: "Anti-Aircraft", hits: "1" },
  ]},
  { name: "Avenger Custom", category: "special", stats: [
    { weapon: "RPG", hits: "9" }, { weapon: "Homing", hits: "22" }, { weapon: "Tank Shell", hits: "3" },
    { weapon: "Railgun Rounds", hits: "20" }, { weapon: "Heavy Sniper Mk II EXP", hits: "23" }, { weapon: "Anti-Aircraft", hits: "2" },
  ]},
  { name: "Mobile Operations Center", category: "special", stats: [
    { weapon: "RPG", hits: "19" }, { weapon: "Homing", hits: "20" }, { weapon: "Tank Shell", hits: "4" },
    { weapon: "Railgun Rounds", hits: "44" }, { weapon: "Heavy Sniper Mk II EXP", hits: "49" }, { weapon: "Anti-Aircraft", hits: "2" },
  ]},
  { name: "RC Bandito", category: "special", stats: [
    { weapon: "RPG", hits: "3" }, { weapon: "Homing", hits: "3" }, { weapon: "Tank Shell", hits: "2" },
    { weapon: "Railgun Rounds", hits: "4" }, { weapon: "Heavy Sniper Mk II EXP", hits: "11" }, { weapon: "Anti-Aircraft", hits: "2" },
  ]},
  { name: "RC Tank", category: "special", stats: [
    { weapon: "RPG", hits: "5" }, { weapon: "Homing", hits: "5" }, { weapon: "Tank Shell", hits: "5" },
    { weapon: "Railgun Rounds", hits: "10" }, { weapon: "Heavy Sniper Mk II EXP", hits: "25" }, { weapon: "Anti-Aircraft", hits: "2" },
  ]},
  { name: "Terrorbyte", category: "special", stats: [
    { weapon: "RPG", hits: "34" }, { weapon: "Homing", hits: "33" }, { weapon: "Tank Shell", hits: "3" },
    { weapon: "Railgun Rounds", hits: "74" }, { weapon: "Heavy Sniper Mk II EXP", hits: "84" }, { weapon: "Anti-Aircraft", hits: "6" },
  ]},
];

export const categories = [
  { id: "cars", label: "Cars", icon: "🚗" },
  { id: "helicopters", label: "Helicopters", icon: "🚁" },
  { id: "planes", label: "Planes", icon: "✈️" },
  { id: "special", label: "Special", icon: "⭐" },
] as const;
