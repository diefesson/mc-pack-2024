// Adds Forge:seeds and mineacraft:crops tag for Mystical Agriculture seeds and crops
ServerEvents.tags('item', event => {
    event.add('forge:seeds', '#mysticalagriculture:seeds')
})

ServerEvents.tags('block', event => {
    event.add('minecraft:crops', '#mysticalagriculture:crops')
})