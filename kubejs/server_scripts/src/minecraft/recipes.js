ServerEvents.recipes(event => {
    event.replaceInput(
        { output: Item.of('minecraft:map') },
        Item.of('minecraft:compass'),
        Item.of('minecraft:black_dye')
    )
})