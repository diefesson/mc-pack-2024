LootJS.modifiers(event => {
    const alternativeGroups = [
        [
            { item: Item.of('copper_ingot'), weight: 100, value: 1.0 },
            { item: Item.of('minecraft:coal'), weight: 100, value: 1.2 },
            { item: Item.of('thermal:tin_ingot'), weight: 100, value: 1.5 },
            { item: Item.of('thermal:constantan_ingot'), weight: 50, value: 2.5 },
        ], [
            { item: Item.of('minecraft:iron_ingot'), weight: 100, value: 1.0 },
            { item: Item.of('thermal:lead_ingot'), weight: 50, value: 1.2 },
            { item: Item.of('thermal:nickel_ingot'), weight: 50, value: 2.0 },
            { item: Item.of('thermal:invar_ingot'), weight: 30, value: 2.0 },
            { item: Item.of('pneumaticcraft:ingot_iron_compressed'), weight: 30, value: 1.2 },
            { item: Item.of('silentgear:crimson_iron_ingot'), weight: 10, value: 2.0 },
        ], [
            { item: Item.of('minecraft:gold_ingot'), weight: 100, value: 1.0 },
            { item: Item.of('thermal:silver_ingot'), weight: 50, value: 2.0 },
            { item: Item.of('thermal:signalum_ingot'), weight: 30, value: 2.0 },
        ], [
            { item: Item.of('minecraft:diamond'), weight: 100, value: 1.0 },
            { item: Item.of('thermal:enderium_ingot'), weight: 50, value: 1.0 },
        ], [
            { item: Item.of('minecraft:blaze_rod'), weight: 100, value: 1.0 },
            { item: Item.of('thermal:basalz_rod'), weight: 80, value: 1.0 },
            { item: Item.of('thermal:blitz_rod'), weight: 80, value: 1.0 },
            { item: Item.of('thermal:blizz_rod'), weight: 80, value: 1.0 },
        ], [
            { item: Item.of('minecraft:blaze_powder'), weight: 100, value: 1.0 },
            { item: Item.of('thermal:basalz_powder'), weight: 80, value: 1.0 },
            { item: Item.of('thermal:blitz_powder'), weight: 80, value: 1.0 },
            { item: Item.of('thermal:blizz_powder'), weight: 80, value: 1.0 },
        ]
    ]

    function findGroup(item) {
        return alternativeGroups.find(g => g.some(e => e.item.id == item.id))
    }

    function replaceFilter(item) {
        return findGroup(item) !== undefined
    }

    function weightedChoice(values, weights) {
        const sum = weights.reduce((a, b) => a + b)
        const target = Math.random() * sum
        let top = 0
        for (let i = 0; i < values.length; i++) {
            top += weights[i]
            if (target <= top) {
                return values[i]
            }
        }
    }

    function alternativeItem(item) {
        const group = findGroup(item)
        const itemEntry = group.find(e => e.item.id == item.id)
        const weights = group.map(e => e.weight)
        const targetEntry = weightedChoice(group, weights)
        const count = Math.min(1, item.count * (targetEntry.value / itemEntry.value))
        return targetEntry.item.withCount(count)
    }

    event
        .addLootTypeModifier(LootType.CHEST)
        .modifyLoot(Ingredient.all, (item) => {
            if (findGroup(item)) {
                return alternativeItem(item)
            } else {
                return item
            }
        })
})