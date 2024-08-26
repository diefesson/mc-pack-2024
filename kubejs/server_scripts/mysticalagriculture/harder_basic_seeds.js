ServerEvents.recipes(event => {
    const seedRecipe = global['seedRecipe']

    seedRecipe(
        event,
        'mysticalagriculture:inferium_seeds',
        'minecraft:wheat_seeds',
        'mysticalagriculture:inferium_block',
    )
    seedRecipe(
        event,
        'mysticalagriculture:prosperity_seed_base',
        'minecraft:wheat_seeds',
        'mysticalagriculture:prosperity_block',
    )
    seedRecipe(
        event,
        'mysticalagriculture:soulium_seed_base',
        'mysticalagriculture:prosperity_seed_base',
        'mysticalagriculture:soulium_block'
    )
})
