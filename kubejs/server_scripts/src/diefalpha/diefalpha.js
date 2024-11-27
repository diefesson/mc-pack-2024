const DiefAlpha = {
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

    itemReplacer(entries) {
        return (i) => {
            const item = this.weightedChoice(entries)
            return item.withCount(i.getCount())
        }
    }
}