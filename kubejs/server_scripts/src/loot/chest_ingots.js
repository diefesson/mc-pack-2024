LootJS.modifiers(loot => {
    const unwantedLoot = ItemFilter.or(
        Ingredient.of('#forge:ores'),
        Ingredient.of('#forge:raw_materials'),
        Ingredient.of('#forge:nuggets'),
        Ingredient.of('#forge:storage_blocks'),
        Item.of('minecraft:netherite_scrap')
    )

    const pureWeight = 3
    const alloyWeight = 1

    const netheriteWeight = 1
    const diamondWeight = 2
    const goldWeight = 4
    const ironWeight = 6
    const copperWeight = 8

    const overworldRolls = [0, 4]
    const overworldChance = 0.20
    const overworldCount = [1, 2]

    const netherRolls = [0, 4]
    const netherChance = 0.30
    const netherCount = [2, 3]

    const endRolls = [0, 4]
    const endChance = 0.40
    const endCount = [3, 4]

    const overworldLoot = [
        LootEntry.of('thermal:tin_ingot').withWeight(copperWeight * pureWeight),
        LootEntry.of('thermal:bronze_ingot').withWeight(copperWeight * alloyWeight),
        LootEntry.of('pneumaticcraft:ingot_iron_compressed').withWeight(ironWeight * alloyWeight),
        LootEntry.of('thermal:nickel_ingot').withWeight(ironWeight * pureWeight),
        LootEntry.of('thermal:lead_ingot').withWeight(ironWeight * pureWeight),
        LootEntry.of('thermal:constantan_ingot').withWeight(ironWeight * alloyWeight),
        LootEntry.of('thermal:invar_ingot').withWeight(ironWeight * alloyWeight),
        LootEntry.of('thermal:silver_ingot').withWeight(goldWeight * pureWeight),
        LootEntry.of('thermal:electrum_ingot').withWeight(goldWeight * alloyWeight),
        LootEntry.of('thermal:signalum_ingot').withWeight(goldWeight * alloyWeight),
        LootEntry.of('thermal:enderium_ingot').withWeight(diamondWeight * alloyWeight),
    ]

    const netherLoot = [
        LootEntry.of('thermal_extra:soul_infused_ingot').withWeight(ironWeight * alloyWeight),
        LootEntry.of('thermal:lumium_ingot').withWeight(goldWeight * alloyWeight),
        LootEntry.of('thermal_extra:twinite_ingot').withWeight(diamondWeight * alloyWeight),
        LootEntry.of('thermal_extra:abyssal_ingot').withWeight(netheriteWeight * alloyWeight),
    ].concat(overworldLoot)

    const endLoot = [
        LootEntry.of('thermal_extra:shellite_ingot').withWeight(ironWeight * alloyWeight),
        LootEntry.of('thermal_extra:shellite_ingot').withWeight(netheriteWeight * alloyWeight),
    ].concat(netherLoot)

    /**
     * 
     * @param {[integer, integer]} rolls 
     * @param {float} chance 
     * @param {[integer, integer]} count
     * @param {$LootEntry_[]} entries
     * @returns {(pool: $GroupedLootBuilder_) => void}
     */
    function poolSetter(rolls, chance, count, entries) {
        return (pool) => {
            pool.rolls(rolls)
            pool.randomChance(chance)
            pool.addWeightedLoot(entries.map(e => e.customFunction({
                function: "set_count",
                count: {
                    min: count[0],
                    max: count[1]
                }
            })))
        }
    }

    loot.addLootTypeModifier(LootType.CHEST)
        .removeLoot(unwantedLoot)

    loot.addLootTypeModifier(LootType.CHEST)
        .anyDimension('overworld')
        .pool(poolSetter(overworldRolls, overworldChance, overworldCount, overworldLoot))


    loot.addLootTypeModifier(LootType.CHEST)
        .anyDimension('the_nether')
        .pool(poolSetter(netherRolls, netherChance, netherCount, netherLoot))


    loot.addLootTypeModifier(LootType.CHEST)
        .anyDimension('the_end')
        .pool(poolSetter(endRolls, endChance, endCount, endLoot))

})
