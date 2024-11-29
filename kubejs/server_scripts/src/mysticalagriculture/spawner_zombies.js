ServerEvents.recipes(event => {
    MAUtils.setup(event)

    MAUtils.spawnerRecipe(
        event,
        Item.of('mysticalagriculture:zombie_essence', 16),
        [
            { entity: 'minecraft:zombie', weight: 6 },
            { entity: 'minecraft:zombie_villager', weight: 1 },
            { entity: 'variantsandventures:gelid', weight: 6 },
            { entity: 'variantsandventures:thicket', weight: 6 },
        ]
    )
})