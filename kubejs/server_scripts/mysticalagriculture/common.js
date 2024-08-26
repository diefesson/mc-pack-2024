global['headRecipe'] = (event, output, itemA, itemB) => {
    event.shaped(
        output,
        [
            'ABA',
            'BSB',
            'ABA'
        ],
        {
            A: itemA,
            B: itemB,
            S: 'mysticalagriculture:blank_skull'
        }
    )
}

global['seedRecipe'] = (event, seed, middle, sides) => {
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

global['infusionRecipe'] = (event, result, middle, ingredientA, ingredientB) => {
    event.custom({
        type: 'mysticalagriculture:infusion',
        input: middle,
        ingredients: [
            ingredientA,
            ingredientB,
            ingredientA,
            ingredientB,
            ingredientA,
            ingredientB,
            ingredientA,
            ingredientB,
        ],
        result: result
    })
}

global['spawnerRecipe'] = (event, input, entities) => {
    event.custom({
        type: 'mysticalagriculture:soulium_spawner',
        input: input,
        entities: entities
    })
}
