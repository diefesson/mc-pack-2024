ServerEvents.tags('block', event => {
    event.remove('forge:ores/uranium', 'bigreactors:yellorite_ore')
    event.remove('forge:ores/uranium', 'bigreactors:deepslate_yellorite_ore')
})

ServerEvents.tags('item', event => {
    event.remove('forge:raw_materials/uranium', 'bigreactors:raw_yellorium')
    event.remove('forge:storage_blocks/raw_uranium', 'bigreactors:raw_yellorium_block')
    event.remove('forge:ingots/uranium', 'bigreactors:yellorium_ingot')
    event.remove('forge:storage_blocks/uranium', 'bigreactors:yellorium_block')
    event.remove('forge:dusts/uranium', 'bigreactors:yellorium_dust')

    event.remove('forge:ingots/plutonium', 'bigreactors:blutonium_ingot')
    event.remove('forge:dusts/plutonium', 'bigreactors:blutonium_dust')
})