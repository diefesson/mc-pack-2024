// Adds Minecraft seeds and crops tag for Mystical Agriculture seeds
ServerEvents.tags('item', event => {
    event.add('minecraft:seeds', '#mysticalagriculture:seeds')
})

ServerEvents.tags('block', event => {
    event.add('minecraft:crops', '#mysticalagriculture:crops')
})