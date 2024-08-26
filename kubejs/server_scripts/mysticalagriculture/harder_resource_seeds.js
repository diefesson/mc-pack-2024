const CropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')

const tierToBlock = {
    'elemental': 'mysticalagriculture:inferium_block',
    '1': 'mysticalagriculture:inferium_block',
    '2': 'mysticalagriculture:prudentium_block',
    '3': 'mysticalagriculture:tertium_block',
    '4': 'mysticalagriculture:imperium_block',
    '5': 'mysticalagriculture:supremium_block',
    '6': 'mysticalagradditions:insanium_block',
}

function findRecipe(event, seedsItem) {
    let recipe = null
    event.forEachRecipe({ type: 'mysticalagriculture:infusion' }, r => {
        let json = r.json
        let resultItem = String(json.get('result').get('item'))
        resultItem = resultItem.substring(1, resultItem.length - 1)
        if (resultItem == seedsItem) {
            recipe = json
        }
    })
    return recipe
}

function infusionRecipe(event, middle, ingredientA, ingredientB, result) {
    let recipeJson = {
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
    }
    event.custom(recipeJson)
}

ServerEvents.recipes(event => {
    const cropRegistryInstance = CropRegistry.getInstance()
    const crops = cropRegistryInstance.getCrops()
    for (let crop of crops) {
        if (crop.isEnabled()) {
            let name = crop.getName()
            let tier = crop.getTier().getName()
            let ingredientA = crop.getCraftingMaterial()
            let ingredientB = tierToBlock[tier]
            let seedsItem = `mysticalagriculture:${crop.getSeedsItem()}`
            let recipe = findRecipe(event, seedsItem)
            if (recipe != null) {
                event.remove({ id: `mysticalagriculture:seed/infusion/${name}` })
                infusionRecipe(
                    event,
                    recipe.get('input'),
                    ingredientA,
                    Item.of(ingredientB, 1),
                    Item.of(seedsItem, 1)
                )
            }
        }
    }
})


