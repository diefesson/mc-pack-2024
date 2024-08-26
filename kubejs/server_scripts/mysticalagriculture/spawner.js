ServerEvents.recipes(event => {
    const spawnerRecipe = global['spawnerRecipe']

    event.remove({ type: 'mysticalagriculture:soulium_spawner', input: { item: 'mysticalagriculture:skeleton_essence' } })
    spawnerRecipe(
        event,
        Item.of('mysticalagriculture:skeleton_essence', 16),
        [
            { entity: 'minecraft:skeleton', weight: 18 },
            { entity: 'variantsandventures:murk', weight: 1 },
            { entity: 'variantsandventures:verdant', weight: 1 },
        ]
    )
    event.remove({ type: 'mysticalagriculture:soulium_spawner', input: { item: 'mysticalagriculture:zombie_essence' } })
    spawnerRecipe(
        event,
        Item.of('mysticalagriculture:zombie_essence', 16),
        [
            { entity: 'minecraft:zombie', weight: 17 },
            { entity: 'minecraft:zombie_villager', weight: 1 },
            { entity: 'variantsandventures:gelid', weight: 1 },
            { entity: 'variantsandventures:thicket', weight: 1 },
        ]
    )
})