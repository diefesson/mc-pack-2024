// priority: 0

global.mysticalagriculture = {
    headRecipe: (event, output, itemA, itemB) => {
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
    },

    seedRecipe: (event, seed, middle, sides) => {
        event.shaped(
            seed,
            [
                'EEE',
                'ESE',
                'EBE'
            ],
            {
                S: middle,
                B: sides,
            },
        )
    },

    infusionRecipe: (event, result, middle, ingredientA, ingredientB) => {
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
    },

    spawnerRecipe: (event, input, entities) => {
        event.custom({
            type: 'mysticalagriculture:soulium_spawner',
            input: input,
            entities: entities
        })
    },
}