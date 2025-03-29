ServerEvents.recipes(event => {
    // Remove default recipes
    event.remove('alloy_forgery:copper_block')
    event.remove('alloy_forgery:copper_from_ores')
    event.remove('alloy_forgery:copper_from_raw_ores')
    event.remove('alloy_forgery:gold_block')
    event.remove('alloy_forgery:gold_from_ores')
    event.remove('alloy_forgery:gold_from_raw_ores')
    event.remove('alloy_forgery:iron_block')
    event.remove('alloy_forgery:iron_from_ores')
    event.remove('alloy_forgery:iron_from_raw_ores')
    event.remove('alloy_forgery:netherite_from_gold_and_scrap')

    function alloy(output, inputs) {
        event.custom({
            type: 'alloy_forgery:forging',
            inputs: inputs,
            output: output,
            min_forge_tier: 1,
            fuel_per_tick: 5
        })
    }

    // Minecraft alloys
    alloy(
        { id: 'minecraft:netherite_ingot', count: 1 },
        [
            { item: 'minecraft:netherite_scrap', count: 4 },
            { item: 'minecraft:gold_ingot', count: 4 },
        ],
    )

    // Coal coke
    alloy(
        { id: 'thermal:coal_coke', count: 4 },
        [
            { item: 'minecraft:coal', count: 4 }
        ]
    )

    // Common alloys
    alloy(
        { id: 'thermal:steel_ingot', count: 1 },
        [
            { tag: 'forge:coal_coke', count: 1 },
            { tag: 'forge:ingots/iron', count: 1 }
        ]
    )
    alloy(
        { id: 'thermal:bronze_ingot', count: 4 },
        [
            { tag: 'forge:ingots/copper', count: 3 },
            { tag: 'forge:ingots/tin', count: 1 },
        ],
    )
    alloy(
        { id: 'thermal:electrum_ingot', count: 2 },
        [
            { tag: 'forge:ingots/gold', count: 1 },
            { tag: 'forge:ingots/silver', count: 1 },
        ],
    )
    alloy(
        { id: 'thermal:invar_ingot', count: 3 },
        [
            { tag: 'forge:ingots/iron', count: 2 },
            { tag: 'forge:ingots/nickel', count: 1 },
        ],
    )
    alloy(
        { id: 'thermal:constantan_ingot', count: 2 },
        [
            { tag: 'forge:ingots/copper', count: 1 },
            { tag: 'forge:ingots/nickel', count: 1 },
        ],
    )
    alloy(
        { id: 'railcraft:brass_ingot', count: 4 },
        [
            { tag: 'forge:ingots/copper', count: 3 },
            { tag: 'forge:ingots/zinc', count: 1 },
        ],
    )

})