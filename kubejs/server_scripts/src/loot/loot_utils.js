const LootUtils = {
    /**
     * @template T
     * @param {[T, number][]} entries 
     * @returns T
     */
    weightedChoice(entries) {
        const sum = entries.reduce((acc, e) => acc + e[1], 0)
        const target = Math.random() * sum
        let accumulator = 0
        for (const [value, weight] of entries) {
            accumulator += weight
            if (target < accumulator) {
                return value
            }
        }
        throw new Error('unexpected error')
    },

    /**
     * 
     * @param {[$ItemStack_, number][]} entries 
     * @returns {(item: $ItemStack_) => $ItemStack_}
     */
    itemReplacer(entries) {
        return (i) => {
            const item = this.weightedChoice(entries)
            return item.withCount(i.getCount())
        }
    },

    /**
     * 
     * @param {number} min 
     * @param {number} max 
     * @returns {number}
     */
    randomRange(min, max) {
        return Math.random() * (max - min) + min
    },

    /**
     * 
     * @param {integer} min 
     * @param {integer} max 
     * @returns {integer}
     */
    randomCount(min, max) {
        return Math.round(this.randomCount(min, max))
    }
}