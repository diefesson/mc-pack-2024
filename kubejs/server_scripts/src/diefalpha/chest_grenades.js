LootJS.modifiers(l => {
    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('overworld')
        .randomChance(0.3)
        .addWeightedLoot([
            LootEntry.of('thermal:explosive_grenade').withChance(100),
            LootEntry.of('thermal:explosive_grenade', 2).withChance(40),
            LootEntry.of('thermal:lightning_grenade').withChance(80),
            LootEntry.of('thermal:ice_grenade').withChance(80),
        ])

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('the_nether')
        .randomChance(0.5)
        .addWeightedLoot([
            LootEntry.of('thermal:fire_grenade').withChance(100),
            LootEntry.of('thermal:fire_grenade', 2).withChance(40),
            LootEntry.of('thermal:earth_grenade').withChance(80),
        ])

    l.addLootTypeModifier(LootType.CHEST)
        .anyBiome('minecraft:warped_forest')
        .randomChance(0.5)
        .addWeightedLoot([
            LootEntry.of('thermal:ender_grenade').withChance(100),
            LootEntry.of('thermal:ender_grenade', 2).withChance(40),
        ])

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('the_end')
        .randomChance(0.5)
        .addWeightedLoot([
            LootEntry.of('thermal:ender_grenade').withChance(100),
            LootEntry.of('thermal:ender_grenade', 2).withChance(40),
        ])
})
