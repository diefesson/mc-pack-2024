ServerEvents.recipes(event => {
    const spawnerRecipe = global.mysticalagriculture.spawnerRecipe

    spawnerRecipe(
        event,
        Item.of('mysticalagriculture:emerald_essence', 64),
        [
            { entity: 'minecraft:villager', weight: 1 }
        ]
    )
})
