ServerEvents.recipes(event => {
    const press3x3RecipePair = global['press3x3RecipePair']
    const smelterRecipe = global['smelterRecipe']

    smelterRecipe(
        event,
        [
            { item: 'bigreactors:yellorium_ingot', chance: 1.25, locked: true },
            { item: 'thermal:lead_nugget', chance: 1.0 },
        ],
        [
            { item: 'bigreactors:raw_yellorium' }
        ],
    )
    smelterRecipe(
        event,
        [
            { item: 'bigreactors:yellorium_ingot', chance: 2.0, locked: true },
            { item: 'thermal:lead_ingot', chance: 0.1 }
        ],
        [
            { tag: 'forge:ores/yellorium' }
        ],
    )

    press3x3RecipePair(
        event,
        { item: 'bigreactors:yellorium_block' },
        { item: 'bigreactors:yellorium_ingot' },
    )
    press3x3RecipePair(
        event,
        { item: 'bigreactors:yellorium_ingot' },
        { item: 'bigreactors:yellorium_nugget' },
    )

    press3x3RecipePair(
        event,
        { item: 'bigreactors:cyanite_block' },
        { item: 'bigreactors:cyanite_ingot' },
    )

    press3x3RecipePair(
        event,
        { item: 'bigreactors:blutonium_block' },
        { item: 'bigreactors:blutonium_ingot' },
    )
    press3x3RecipePair(
        event,
        { item: 'bigreactors:blutonium_ingot' },
        { item: 'bigreactors:blutnoum_nugget' },
    )
})
