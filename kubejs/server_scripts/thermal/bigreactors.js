ServerEvents.recipes(event => {
    const press3x3RecipePair = global['press3x3RecipePair']
    const smelterRecipe = global['smelterRecipe']

    smelterRecipe(
        event,
        [
            { tag: 'forge:ingots/uranium', chance: 1.25 },
            { item: 'thermal:lead_nugget', chance: 1.0 },
        ],
        [
            { tag: 'forge:raw_materials/uranium' }
        ],
    )
    smelterRecipe(
        event,
        [
            { tag: 'forge:ingots/uranium', chance: 2.0 },
            { item: 'thermal:lead_ingot', chance: 0.1 }
        ],
        [
            { tag: 'forge:ores/uranium' }
        ],
    )

    press3x3RecipePair(
        event,
        { tag: 'forge:storage_blocks/uranium' },
        { tag: 'forge:ingots/uranium' },
    )
    press3x3RecipePair(
        event,
        { tag: 'forge:ingots/uranium' },
        { tag: 'forge:nuggets/uranium' },
    )

    press3x3RecipePair(
        event,
        { tag: 'forge:storage_blocks/depleted_uranium' },
        { tag: 'forge:ingots/depleted_uranium' },
    )

    press3x3RecipePair(
        event,
        { tag: 'forge:storage_blocks/plutonium' },
        { tag: 'forge:ingots/plutonium' },
    )
    press3x3RecipePair(
        event,
        { tag: 'forge:ingots/plutonium' },
        { tag: 'forge:nuggets/plutonium' },
    )
})
