const END_BIOMES = [
  "minecraft:the_end",
  "minecraft:the_void",
  "minecraft:small_end_islands",
  "minecraft:end_barrens",
  "minecraft:end_highlands",
  "minecraft:end_midlands"
]

const TYPE = {
  ORE: 'industrialforegoing:laser_drill_ore',
  FLUID: 'industrialforegoing:laser_drill_fluid'
}

const LENS = {
  WHITE: "industrialforegoing:laser_lens0",
  ORANGE: "industrialforegoing:laser_lens1",
  MAGENTA: "industrialforegoing:laser_lens2",
  LIGHT_BLUE: "industrialforegoing:laser_lens3",
  YELLOW: "industrialforegoing:laser_lens4",
  LIME: "industrialforegoing:laser_lens5",
  PINK: "industrialforegoing:laser_lens6",
  GRAY: "industrialforegoing:laser_lens7",
  LIGHT_GRAY: "industrialforegoing:laser_lens8",
  CYAN: "industrialforegoing:laser_lens9",
  PURPLE: "industrialforegoing:laser_lens10",
  BLUE: "industrialforegoing:laser_lens11",
  BROWN: "industrialforegoing:laser_lens12",
  GREEN: "industrialforegoing:laser_lens13",
  RED: "industrialforegoing:laser_lens14",
  BLACK: "industrialforegoing:laser_lens15"
}

const POWAH = {
  URANINITE_ORE: 'powah:uraninite_ore'
}

const SILENT_GEAR = {
  RAW_CRIMSON_IRON: 'silentgear:raw_crimson_iron',
  RAW_AZURE_SILVER: 'silentgear:raw_azure_silver'
}

function laserDrillRecipe(event, type, catalyst, entity, output, minDepth, maxDepth, weight, whitelist, blacklist) {
  event.custom({
    type: type,
    catalyst: {
      item: catalyst
    },
    output: output,
    rarity: [
      {
        depth_min: minDepth,
        depth_max: maxDepth,
        weight: weight,
        whitelist: {
          type: 'minecraft:worldgen/biome',
          values: whitelist
        },
        blacklist: {},
      }, {
        depth_min: 0,
        depth_max: 255,
        weight: 1,
        whitelist: {},
        blacklist: {
          type: 'minecraft:worldgen/biome',
          values: blacklist
        }
      }
    ]
  })
}

ServerEvents.recipes(event => {
  laserDrillRecipe(event, TYPE.ORE, LENS.GREEN, null, {item: POWAH.URANINITE_ORE}, 5, 64, 6, [], END_BIOMES) 
})