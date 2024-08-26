ServerEvents.recipes(event => {
    function seedRecipe(seed, middle, sides) {
        event.remove({ output: seed })
        event.shaped(
            seed,
            [
                ' B ',
                'BSB',
                ' B '
            ],
            {
                S: middle,
                B: sides,
            },
        )
    }

    seedRecipe(
        'mysticalagriculture:inferium_seeds',
        'minecraft:wheat_seeds',
        'mysticalagriculture:inferium_block',
    )
    seedRecipe(
        'mysticalagriculture:prosperity_seed_base',
        'minecraft:wheat_seeds',
        'mysticalagriculture:prosperity_block',
    )
    seedRecipe(
        'mysticalagriculture:soulium_seed_base',
        'mysticalagriculture:prosperity_seed_base',
        'mysticalagriculture:soulium_block'
    )
})