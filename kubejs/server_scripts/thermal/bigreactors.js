ServerEvents.recipes(event => {
    const press3x3RecipePair = global['press3x3RecipePair']
    const smelterRecipe = global['smelterRecipe']

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
        { item: 'bigreactors:blutonium_nugget' },
    )
})
