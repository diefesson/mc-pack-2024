const IFUtils = {
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
     * @param {$OutputItem_} output 
     * @param {integer} processingTime 
     * @param {$InputFluid_} inputFluid 
     * @param {$InputItem_[]} input 
     */
    dissolution(output, processingTime, inputFluid, input) {
        this.event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            output: output,
            processingTime: processingTime,
            inputFluid: inputFluid,
            input: input,
        })
    },


    /**
     * 
     * @param {Special.RecipeId} id 
     * @param {$Ingredient_} match 
     * @param {$Ingredient_} replacement 
     */
    dissolutionReplaceInput(id, match, replacement) {
        this.event.forEachRecipe({ id: id }, recipe => {
            const input = recipe.json.get('input')
            const newInput = []
            for (let ingredient of input) {
                if (match.test(ingredient)) {
                    newInput.push(replacement)
                } else {
                    newInput.push(ingredient)
                }
            }
            recipe.json.add('input', newInput)
        })
    }
}