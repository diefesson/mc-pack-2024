const MAUtils = {
    /**
     * @type {$RecipesEventJS_}
     */
    event: undefined,

    /**
     * 
     * @param {$RecipesEventJS_} event 
     */
    setup(e) {
        this.event = e
    },

    /**
     * 
     * @param {$OutputItem_} output 
     * @param {$InputItem_} itemA 
     * @param {$InputItem_} itemB 
     */
    headRecipe(output, itemA, itemB) {
        this.event.shaped(
            output,
            [
                'ABA',
                'BSB',
                'ABA'
            ],
            {
                A: itemA,
                B: itemB,
                S: Item.of('mysticalagriculture:blank_skull')
            }
        )
    },

    /**
     * 
     * @param {$OutputItem_} seed 
     * @param {$InputItem_} middle 
     * @param {$InputItem_} sides 
     */
    seedRecipe(seed, middle, sides) {
        this.event.shaped(
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

    /**
     * 
     * @param {$OutputItem_} result 
     * @param {$InputItem_} middle 
     * @param {$InputItem_} ingredientA 
     * @param {$InputItem_} ingredientB 
     */
    infusionRecipe(result, middle, ingredientA, ingredientB) {
        this.event.custom({
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

    /**
     * 
     * @param {$ItemStack_} event 
     * @param {$InputItem_} input 
     * @param {{entity: string}[]} entities 
     */
    spawnerRecipe(event, input, entities) {
        event.remove({ type: 'mysticalagriculture:soulium_spawner', input: input })
        event.custom({
            type: 'mysticalagriculture:soulium_spawner',
            input: input,
            entities: entities
        })
    },
}
