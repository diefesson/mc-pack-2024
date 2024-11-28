LootJS.modifiers(l => {
    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('overworld')
        .modifyLoot(Item.of("minecraft:blaze_powder"), LootUtils.itemReplacer([
            [Item.of('minecraft:blaze_powder'), 100],
            [Item.of('thermal:blitz_powder'), 80],
            [Item.of('thermal:blizz_powder'), 80],
        ]))

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('the_nether')
        .modifyLoot(Item.of("minecraft:blaze_powder"), LootUtils.itemReplacer([
            [Item.of('minecraft:blaze_powder'), 100],
            [Item.of('thermal:basalz_powder'), 80],
        ]))
})
