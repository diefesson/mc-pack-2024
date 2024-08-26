ServerEvents.recipes(event => {
    function smelterRecipe(result, ingredient, experience) {
        event.custom({
            type: 'thermal:smelter',
            ingredient: ingredient,
            result: result,
            experience: experience
        })
    }

    function pressRecipe(result, input, die, energy) {
        event.custom({
            type: 'thermal:press',
            ingredients: [
                input,
                die,
            ],
            result: [
                result
            ],
            energy
        })
    }

    function press3x3RecipePair(block, ingot, energy) {
        pressRecipe(block, Item.of(ingot, 9), { item: 'thermal:press_packing_3x3_die' }, energy)
        pressRecipe(Item.of(ingot, 9), block, { item: 'thermal:press_unpacking_die' }, energy)
    }

    smelterRecipe(
        [
            { tag: 'forge:ingots/uranium', chance: 1.25 },
            { item: 'thermal:lead_nugget', chance: 1.0 },
        ],
        [
            { tag: 'forge:raw_materials/uranium' }
        ],
        0.5
    )
    smelterRecipe(
        [
            { tag: 'forge:ingots/uranium', chance: 2.0 },
            { item: 'thermal:lead_ingot', chance: 0.1 }
        ],
        [
            { tag: 'forge:ores/uranium' }
        ],
        0.5
    )

    press3x3RecipePair(
        { tag: 'forge:storage_blocks/uranium' },
        { tag: 'forge:ingots/uranium' },
        400
    )
    press3x3RecipePair(
        { tag: 'forge:ingots/uranium' },
        { tag: 'forge:nuggets/uranium' },
        400
    )

    press3x3RecipePair(
        { tag: 'forge:storage_blocks/depleted_uranium' },
        { tag: 'forge:ingots/depleted_uranium' },
        400
    )

    press3x3RecipePair(
        { tag: 'forge:storage_blocks/plutonium' },
        { tag: 'forge:ingots/plutonium' },
        400
    )
    press3x3RecipePair(
        { tag: 'forge:ingots/plutonium' },
        { tag: 'forge:nuggets/plutonium' },
        400
    )
})
