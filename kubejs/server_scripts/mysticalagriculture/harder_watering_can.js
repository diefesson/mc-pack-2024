const wateringCanTiers = [
    'inferium',
    'prudentium',
    'tertium',
    'imperium',
    'supremium',
]

ServerEvents.recipes(event => {

    for (var tier of wateringCanTiers) {
        var wateringCan = `mysticalagriculture:${tier}_watering_can`
        var ingot = `mysticalagriculture:${tier}_ingot`
        var gemstone = `mysticalagriculture:${tier}_gemstone`
        var ingotBlock = `mysticalagriculture:${tier}_ingot_block`
        var gemstoneBlock = `mysticalagriculture:${tier}_gemstone_block`
        event.replaceInput(
            { output: wateringCan },
            ingot,
            ingotBlock
        )
        event.replaceInput(
            { output: wateringCan },
            gemstone,
            gemstoneBlock
        )
    }
})
