const YELLORITE_ORE = 'bigreactors:yellorite_ore'
const DEEPSLATE_YELLORITE_ORE = 'bigreactors:deepslate_yellorite_ore'
const YELLORIUM_INGOT = 'bigreactors:yellorium_ingot'
const YELLORIUM_DUST = 'bigreactors:yellorium_dust'

const BENITOITE_ORE = 'bigreactors:benitoite_ore'
const ANGLESITE_ORE = 'bigreactors:anglesite_ore'

const ORES = 'forge:ores'
const URANIUM_ORES = 'forge:ores/uranium'
const URANIUM_INGOTS = 'forge:ingots/uranium'
const URANIUM_DUSTS = 'forge:dusts/uranium'
const YELLORITE_ORES = 'forge:ores/yellorite'
const YELLORIUM_ORES = 'forge:ores/yellorium'
const BENITOITE_ORES = 'forge:ores/benitoite'
const ANGLESITE_ORES = 'forge:ores/anglesite'

ServerEvents.tags('block', event => {
    // Yellorite Ore
    event.remove(URANIUM_ORES, YELLORITE_ORE)
    event.remove(YELLORITE_ORES, YELLORITE_ORE)
    event.add(YELLORIUM_ORES, YELLORITE_ORE)

    // Deepslate Yellorite Ore
    event.add(YELLORIUM_ORES, DEEPSLATE_YELLORITE_ORE)

    // Benitoite
    event.add(BENITOITE_ORES, BENITOITE_ORE)

    // Anglesite
    event.add(ANGLESITE_ORES, ANGLESITE_ORE)

    // Tag
    event.add(ORES, `#${YELLORIUM_ORES}`)
    event.add(ORES, `#${BENITOITE_ORES}`)
    event.add(ORES, `#${ANGLESITE_ORES}`)
})

ServerEvents.tags('item', event => {
    // Yellorite Ore
    event.remove(URANIUM_ORES, YELLORITE_ORE)
    event.remove(YELLORITE_ORES, YELLORITE_ORE)
    event.add(YELLORIUM_ORES, YELLORITE_ORE)

    // Deepslate Yellorite Ore
    event.add(YELLORIUM_ORES, DEEPSLATE_YELLORITE_ORE)

    // Yellorium Ingot
    event.remove(URANIUM_INGOTS, YELLORIUM_INGOT)

    // Yellorium Dust
    event.remove(URANIUM_DUSTS, YELLORIUM_DUST)

    // Benitoite
    event.add(BENITOITE_ORES, BENITOITE_ORE)

    // Anglesite
    event.add(ANGLESITE_ORES, ANGLESITE_ORE)

    // Tag
    event.add(ORES, `#${YELLORIUM_ORES}`)
    event.add(ORES, `#${BENITOITE_ORES}`)
    event.add(ORES, `#${ANGLESITE_ORES}`)
})
