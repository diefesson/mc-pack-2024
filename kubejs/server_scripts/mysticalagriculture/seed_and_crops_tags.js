ServerEvents.tags('item', event => {
    event.add('forge:seeds', '#mysticalagriculture:seeds')
})

ServerEvents.tags('block', event => {
    event.add('minecraft:crops', '#mysticalagriculture:crops')
})
