ServerEvents.tags('item', event => {
    // Ores
    event.add('forge:ores/uranium', 'bigreactors:deepslate_yellorite_ore')
    event.add('forge:ores/yellorite', 'bigreactors:deepslate_yellorite_ore')
    // Raw materials
    event.add('forge:raw_materials/uranium', 'bigreactors:raw_yellorium')
    // Blocks
    event.add('forge:storage_blocks/uranium', 'bigreactors:yellorium_block')
    event.add('forge:storage_blocks/depleted_uranium', 'bigreactors:cyanite_block')
    event.add('forge:storage_blocks/plutonium', 'bigreactors:blutonium_block')
    // Ingots
    event.add('forge:ingots/depleted_uranium', 'bigreactors:cyanite_ingot')
    // Nuggets
    event.add('forge:nuggets/uranium', 'bigreactors:yellorium_nugget')
    event.add('forge:nuggets/plutonium', 'bigreactors:blutonium_nugget')

})
ServerEvents.tags('block', event => {
    // Ores
    event.add('forge:ores/uranium', 'bigreactors:deepslate_yellorite_ore')
    event.add('forge:ores/yellorite', 'bigreactors:deepslate_yellorite_ore')
    //Blocks
    event.add('forge:storage_blocks/depleted_uranium', 'bigreactors:cyanite_block')
    event.add('forge:storage_blocks/plutonium', 'bigreactors:blutonium_block')
})
