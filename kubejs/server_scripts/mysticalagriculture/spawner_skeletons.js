ServerEvents.recipes(event => {
    const spawnerRecipe = global.mysticalagriculture.spawnerRecipe

    event.remove({ type: 'mysticalagriculture:soulium_spawner', input: { item: 'mysticalagriculture:skeleton_essence' } })
    spawnerRecipe(
        event,
        Item.of('mysticalagriculture:skeleton_essence', 16),
        [
            { entity: 'minecraft:skeleton', weight: 1 },
            { entity: 'variantsandventures:murk', weight: 1 },
            { entity: 'variantsandventures:verdant', weight: 1 },
        ]
    )
})
