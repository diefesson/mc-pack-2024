const PCRUtils = {

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
     * @param {$OutputItem_[]} results 
     * @param {$InputItem_} input 
     */
    explosion(results, input) {
        this.event.custom({
            type: 'pneumaticcraft:explosion_crafting',
            input: input,
            results: results,
            loss_rate: 20,
        })
    },

    /**
     * 
     * @param {$OutputItem_} result 
     * @param {$InputItem_} input 
     * @param {'drill' | 'laser'} program
     */
    assembly(result, input, program) {
        type = (program === 'drill') ? 'pneumaticcraft:assembly_drill' : 'pneumaticcraft:assembly_laser'
        this.event.custom({
            type: type,
            input: input,
            result: result,
            program: program
        })
    },

}
