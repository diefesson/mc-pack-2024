ServerEvents.recipes(event => {
    MAUtils.setup(event)
    
    MAUtils.spawnerRecipe(
        event,
        Item.of('mysticalagriculture:basalz_essence', 24),
        [
            { entity: 'thermal:basalz', weight: 1 }
        ]
    )
    MAUtils.spawnerRecipe(
        event,
        Item.of('mysticalagriculture:blizz_essence', 24),
        [
            { entity: 'thermal:blizz', weight: 1 }
        ]
    )
    MAUtils.spawnerRecipe(
        event,
        Item.of('mysticalagriculture:blitz_essence', 24),
        [
            { entity: 'thermal:blitz', weight: 1 }
        ]
    )
})
