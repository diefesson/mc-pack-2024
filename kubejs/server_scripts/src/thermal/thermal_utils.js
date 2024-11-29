const ThermalUtils = {

    /**
     * @type {$RecipesEventJS_}
     */
    event: undefined,

    /**
     * 
     * @param {$RecipesEventJS_} e 
     */
    setup(e) {
        this.event = e
    },

    /**
     * 
     * @param {$OutputItem_} result 
     * @param {$InputItem_} ingredient 
     */
    smelter(result, ingredient) {
        this.event.custom({
            type: 'thermal:smelter',
            ingredient: ingredient,
            result: result,
            experience: 0.5
        })
    },

    /**
     * 
     * @param {$OutputItem_} result 
     * @param {$InputItem_} input 
     * @param {$InputItem_} die 
     */
    press(result, input, die) {
        this.event.custom({
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
    },

    /**
     * 
     * @param {$OutputItem_} block 
     * @param {$InputItem_} ingot 
     */
    press2(block, ingot) {
        this.press(block, ingot.withCount(4), Item.of('thermal:press_packing_2x2_die'))
        this.press(ingot.withCount(4), block, Item.of('thermal:press_unpacking_die'))
    },

    /**
     * 
     * @param {$OutputItem_} block 
     * @param {$InputItem_} ingot 
     */
    press3(block, ingot) {
        this.press(block, ingot.withCount(9), Item.of('thermal:press_packing_3x3_die'))
        this.press(ingot.withCount(9), block, Item.of('thermal:press_unpacking_die'))
    },

    /**
     * 
     * @param {$OutputItem_} result 
     * @param {$InputItem_} ingredient 
     */
    pulverizer(result, ingredient) {
        this.event.custom({
            type: 'thermal:pulverizer',
            ingredient: ingredient,
            result: result,
        })
    },

}