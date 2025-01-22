LootJS.modifiers(l => {
    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('overworld')
        .modifyLoot(Item.of("minecraft:blaze_rod"), LootUtils.itemReplacer([
            [Item.of('minecraft:blaze_rod'), 100],
            [Item.of('thermal:blitz_rod'), 80],
            [Item.of('thermal:blizz_rod'), 80],
            [Item.of('thermal:basalz_rod'), 80],
        ]))

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('the_nether')
        .modifyLoot(Item.of('minecraft:blaze_rod'), LootUtils.itemReplacer([
            [Item.of('minecraft:blaze_rod'), 100],
            [Item.of('thermal:basalz_rod'), 80]
        ]))
})
