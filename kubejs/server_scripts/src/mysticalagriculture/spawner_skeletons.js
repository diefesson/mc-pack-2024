ServerEvents.recipes(event => {
    MAUtils.setup(event)

    MAUtils.spawnerRecipe(
        event,
        Item.of('mysticalagriculture:skeleton_essence', 16),
        [
            { entity: 'minecraft:skeleton', weight: 1 },
            { entity: 'variantsandventures:murk', weight: 1 },
            { entity: 'variantsandventures:verdant', weight: 1 },
        ]
    )
})
