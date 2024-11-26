global['smelterRecipe'] = (event, result, ingredient) => {
    event.custom({
        type: 'thermal:smelter',
        ingredient: ingredient,
        result: result,
        experience: 0.5
    })
}

global['pressRecipe'] = (event, result, input, die) => {
    event.custom({
        type: 'thermal:press',
        ingredients: [
            input,
            die,
        ],
        result: [
            result
        ],
        energy: 400
    })
}

global['press3x3RecipePair'] = (event, block, ingot) => {
    const pressRecipe = global['pressRecipe']
    pressRecipe(event, block, Item.of(ingot, 9), { item: 'thermal:press_packing_3x3_die' })
    pressRecipe(event, Item.of(ingot, 9), block, { item: 'thermal:press_unpacking_die' })
}

global['pulverizerRecipe'] = (event, result, ingredient) => {
    event.custom({
        type: 'thermal:pulverizer',
        ingredient: ingredient,
        result: result,
    })
}
