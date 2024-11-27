LootJS.modifiers(l => {

    const copperFilter = ItemFilter.or(Item.of('minecraft:copper_ingot'))
    const ironFilter = ItemFilter.or(Item.of('minecraft:iron_ingot'), Item.of('minecraft:bone'))
    const goldFilter = ItemFilter.or(Item.of('minecraft:gold_ingot'), Item.of('silentgear:blaze_gold_ingot'))
    const diamondFilter = ItemFilter.or(Item.of('minecraft:diamond'))
    const netheriteFilter = ItemFilter.or(Item.of('minecraft:netherite_ingot'))

    const unwantedLoot = ItemFilter.or(
        Ingredient.of('#forge:ores'),
        Ingredient.of('#forge:raw_materials'),
        Ingredient.of('#forge:nuggets'),
        Ingredient.of('#forge:storage_blocks'),
        Item.of('minecraft:netherite_scrap')
    )

    l.addLootTypeModifier(LootType.CHEST)
        .removeLoot(unwantedLoot)

    // Overworld

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('overworld')
        .modifyLoot(copperFilter, DiefAlpha.itemReplacer([
            [Item.of('minecraft:copper_ingot'), 100],
            [Item.of('thermal:tin_ingot'), 80],
            [Item.of('thermal:bronze_ingot'), 40],
        ]))

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('overworld')
        .modifyLoot(ironFilter, DiefAlpha.itemReplacer([
            [Item.of('minecraft:iron_ingot'), 100],
            [Item.of('pneumaticcraft:ingot_iron_compressed'), 80],
            [Item.of('thermal:nickel_ingot'), 80],
            [Item.of('thermal:lead_ingot'), 80],
            [Item.of('thermal:constantan_ingot'), 40],
            [Item.of('thermal:invar_ingot'), 40],
        ]))

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('overworld')
        .modifyLoot(goldFilter, DiefAlpha.itemReplacer([
            [Item.of('minecraft:gold_ingot'), 100],
            [Item.of('thermal:silver_ingot'), 80],
            [Item.of('silentgear:blaze_gold_ingot'), 40],
            [Item.of('thermal:electrum_ingot'), 40],
            [Item.of('thermal:signalum_ingot'), 40],
        ]))

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('overworld')
        .modifyLoot(diamondFilter, DiefAlpha.itemReplacer([
            [Item.of('minecraft:diamond'), 100],
            [Item.of('thermal:enderium_ingot'), 80],
        ]))

    // Nether

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('the_nether')
        .modifyLoot(ironFilter, DiefAlpha.itemReplacer([
            [Item.of('minecraft:iron_ingot'), 100],
            [Item.of('pneumaticcraft:ingot_iron_compressed'), 80],
            [Item.of('thermal_extra:soul_infused_ingot'), 40],
        ]))

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('the_nether')
        .modifyLoot(goldFilter, DiefAlpha.itemReplacer([
            [Item.of('minecraft:gold_ingot'), 100],
            [Item.of('silentgear:blaze_gold_ingot'), 40],
            [Item.of('thermal:lumium_ingot'), 40],
            [Item.of('thermal_extra:twinite_ingot'), 40],
        ]))

    l.addLootTypeModifier(LootType.CHEST)
        .anyDimension('the_nether')
        .modifyLoot(netheriteFilter, DiefAlpha.itemReplacer([
            [Item.of('minecraft:netherite_ingot'), 100],
            [Item.of('thermal_extra:abyssal_ingot'), 40],
        ]))
})
