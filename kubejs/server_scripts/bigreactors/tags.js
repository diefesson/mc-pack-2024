ServerEvents.tags('item', event => {
    event.add('forge:raw_materials/uranium', 'bigreactors:raw_yellorium')
    event.add('forge:nuggets/uranium', 'bigreactors:yellorium_nugget')
    event.add('forge:ores', 'bigreactors:deepslate_yellorite_ore')
    event.add('forge:ores/uranium', 'bigreactors:deepslate_yellorite_ore')
    event.add('forge:ores/yellorite', 'bigreactors:deepslate_yellorite_ore')
    event.add('forge:storage_blocks', 'bigreactors:yellorium_block')
    event.add('forge:storage_blocks/uranium', 'bigreactors:yellorium_block')
})
ServerEvents.tags('block', event => {
    event.add('forge:ores', 'bigreactors:deepslate_yellorite_ore')
    event.add('forge:ores/uranium', 'bigreactors:deepslate_yellorite_ore')
    event.add('forge:ores/yellorite', 'bigreactors:deepslate_yellorite_ore')
})
