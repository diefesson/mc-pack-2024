ServerEvents.recipes(event => {
    MAUtils.setup(event)

    MAUtils.spawnerRecipe(
        event,
        Item.of('mysticalagriculture:emerald_essence', 64),
        [
            { entity: 'minecraft:villager', weight: 1 }
        ]
    )
})
