ServerEvents.recipes(event => {
    for (var tier of global.mysticalAgricultureTiers) {
        var wateringCan = `mysticalagriculture:${tier}_watering_can`
        var ingot = `mysticalagriculture:${tier}_ingot`
        var gemstone = `mysticalagriculture:${tier}_gemstone`
        var ingotBlock = `mysticalagriculture:${tier}_ingot_block`
        var gemstoneBlock = `mysticalagriculture:${tier}_gemstone_block`
        console.log([wateringCan, ingot, gemstone, ingotBlock, gemstoneBlock])
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
