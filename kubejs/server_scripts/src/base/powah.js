const PowahUtils = {
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
     * @param {$InputItem_[]} ingredients 
     * @param {integer} energy 
     */
    energizing(result, ingredients, energy) {
        this.event.custom({
            type: 'powah:energizing',
            result: result,
            ingredients: ingredients,
            energy: energy
        })
    }
}