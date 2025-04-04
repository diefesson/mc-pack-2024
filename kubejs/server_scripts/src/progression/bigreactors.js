ServerEvents.tags('block', event => {
    // Fix tags
    // - Yellorite Ore
    event.remove('forge:ores/uranium', 'bigreactors:yellorite_ore')
    event.remove('forge:ores/yellorite', 'bigreactors:yellorite_ore')
    event.add('forge:ores/yellorium', 'bigreactors:yellorite_ore')

    // - Deepslate Yellorite Ore
    event.add('forge:ores/yellorium', 'bigreactors:deepslate_yellorite_ore')
})

ServerEvents.tags('item', event => {
    // Fix tags
    // - Yellorite Ore
    event.remove('forge:ores/uranium', 'bigreactors:yellorite_ore')
    event.remove('forge:ores/yellorite', 'bigreactors:yellorite_ore')
    event.add('forge:ores/yellorium', 'bigreactors:yellorite_ore')

    // - Deepslate Yellorite Ore
    event.add('forge:ores/yellorium', 'bigreactors:deepslate_yellorite_ore')

    // - Yellorium Ingot
    event.remove('forge:ingots/uranium', 'bigreactors:yellorium_ingot')

    // - Yellorium Dust
    event.remove('forge:dusts/uranium', 'bigreactors:yellorium_dust')

    // - Blutonium Ingot
    event.remove('forge:ingots/plutonium', 'bigreactors:blutonium_ingot')

    // - Blutonium Ingot
    event.remove('forge:dusts/plutonium', 'bigreactors:blutonium_dust')
})

ServerEvents.recipes(event => {
    event.remove('bigreactors:misc/book/erguide_alt')
    event.remove('bigreactors:reactor/basic/controller_ingots_uranium')
    event.remove('bigreactors:reactor/basic/fuelrod_ingots_uranium')
    event.remove('bigreactors:reactor/reinforced/controller_ingots_uranium')
    event.remove('bigreactors:reactor/reinforced/fuelrod_ingots_uranium')
})