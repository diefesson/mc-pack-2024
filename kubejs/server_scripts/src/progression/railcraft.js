ServerEvents.recipes(event => {
    ThermalUtils.setup(event)

    // Remove crafting table allowing
    event.remove('railcraft:bronze_ingot_crafted_with_ingots')
    event.remove('railcraft:invar_ingot_crafted_with_ingots')
    event.remove('railcraft:brass_ingot_crafted_with_ingots')
    ThermalUtils.smelter_alloy(
        Item.of('railcraft:brass_ingot', 4),
        [
            Item.of('#forge:ingots/zinc', 1),
            Item.of('#forge:ingots/copper', 3),
        ]
    )

    // Use Thermal Resin and Creosote buckets to make Wooden Ties
    event.remove('railcraft:wooden_tie_bottle')
    event.remove('railcraft:wooden_tie')
    event.shaped(
        '3x railcraft:wooden_tie',
        [
            ' B ',
            'SSS',
            '   ',
        ],
        {
            B: 'thermal:creosote_bucket',
            S: '#minecraft:wooden_slabs'
        }
    )
    event.shaped(
        '3x railcraft:wooden_tie',
        [
            ' B ',
            'SSS',
            '   ',
        ],
        {
            B: 'thermal:resin_bucket',
            S: '#minecraft:wooden_slabs'
        }
    )

    // Use copper in Gear Bushing recipe
    event.remove('railcraft:bushing_gear_bronze')
    event.remove('railcraft:bushing_gear_brass')
    event.remove('railcraft:rolling/bushing_gear_bronze')
    event.remove('railcraft:rolling/bushing_gear_brass')
    event.shaped(
        'railcraft:bushing_gear',
        [
            ' C ',
            'C C',
            ' C ',
        ],
        {
            C: '#forge:ingots/copper'
        }
    )
    event.custom({
        type: 'railcraft:rolling',
        key: {
            C: { tag: 'forge:ingots/copper' }
        },
        pattern: [
            ' C ',
            'C C',
            ' C ',
        ],
        result: {
            count: 4,
            item: 'railcraft:bushing_gear'
        }
    })

    // Use gear bushing for crafting all gears
    event.replaceInput(
        { output: Ingredient.of('#forge:gears') },
        Ingredient.of('#forge:nuggets/iron'),
        Ingredient.of('railcraft:bushing_gear')
    )
    event.replaceInput(
        { id: 'redstone_arsenal:materials/flux_gear' },
        Ingredient.of('#forge:nuggets/iron'),
        Ingredient.of('railcraft:bushing_gear')
    )
    event.replaceInput(
        { id: 'pneumaticcraft:compressed_iron_gear' },
        Ingredient.of('#forge:ingots/iron'),
        Ingredient.of('railcraft:bushing_gear')
    )

    // Remove buggy/irrelevant content
    // - RailCraft gears
    event.remove('railcraft:nickel_gear')
    event.remove('railcraft:gold_gear')
    event.remove('railcraft:invar_gear')
    event.remove('railcraft:iron_gear')
    event.remove('railcraft:steel_gear')
    event.remove('railcraft:copper_gear')
    event.remove('railcraft:lead_gear')
    event.remove('railcraft:tin_gear')
    event.remove('railcraft:bronze_gear')
    event.remove('railcraft:silver_gear')

    // - Steam multiblocks
    event.remove('railcraft:solid_fueled_firebox')
    event.remove('railcraft:fluid_fueled_firebox')
    event.remove('railcraft:low_pressure_steam_boiler_tank')
    event.remove('railcraft:high_pressure_steam_boiler_tank')
    event.remove('railcraft:nickel_turbine_blade')
    event.remove('railcraft:steel_turbine_blade')
    event.remove('railcraft:rolling/nickel_turbine_blade')
    event.remove('railcraft:rolling/steel_turbine_blade')
    event.remove('railcraft:turbine_disk')
    event.remove('railcraft:turbine_rotor')
    event.remove('railcraft:steam_turbine')
    event.remove('railcraft:steam_oven')

    // - Feed Station
    event.remove('railcraft:feed_station')

    // - Batteries
    event.remove('railcraft:rolling/carbon_electrode')
    event.remove('railcraft:rolling/iron_electrode')
    event.remove('railcraft:rolling/copper_electrode')
    event.remove('railcraft:rolling/gold_electrode')
    event.remove('railcraft:rolling/lead_electrode')
    event.remove('railcraft:rolling/nickel_electrode')
    event.remove('railcraft:rolling/silver_electrode')
    event.remove('railcraft:rolling/tin_electrode')
    event.remove('railcraft:rolling/zinc_electrode')
    event.remove('railcraft:rolling/steel_electrode')
    event.remove('railcraft:rolling/brass_electrode')
    event.remove('railcraft:rolling/bronze_electrode')
    event.remove('railcraft:rolling/invar_electrode')
    event.remove('railcraft:zinc_carbon_battery')
    event.remove('railcraft:zinc_silver_battery')
    event.remove('railcraft:nickel_zinc_battery')
    event.remove('railcraft:nickel_iron_battery')

    // - Tank Multiblock
    event.remove('railcraft:water_tank_siding')
    event.remove({ output: '#railcraft:iron_tank_valve' })
    event.remove({ output: '#railcraft:iron_tank_gauge' })
    event.remove({ output: '#railcraft:iron_tank_wall' })
    event.remove({ output: '#railcraft:steel_tank_valve' })
    event.remove({ output: '#railcraft:steel_tank_gauge' })
    event.remove({ output: '#railcraft:steel_tank_wall' })

    // - Crusher
    event.remove('railcraft:crusher')
    event.remove({ type: 'railcraft:crusher' })

    // - Plates
    event.remove('railcraft:rolling/brass_plate')
    event.remove('railcraft:rolling/lead_plate')
    event.remove('railcraft:rolling/tin_plate')
    event.remove('railcraft:rolling/iron_plate')
    event.remove('railcraft:rolling/invar_plate')
    event.remove('railcraft:rolling/steel_plate')
    event.remove('railcraft:rolling/gold_plate')
    event.remove('railcraft:rolling/silver_plate')
    event.remove('railcraft:rolling/bronze_plate')
    event.remove('railcraft:rolling/copper_plate')
    event.remove('railcraft:rolling/nickel_plate')
    event.remove('railcraft:rolling/zinc_plate')

    // - Tank/Energy Minecart
    event.remove('railcraft:tank_minecart')
    event.remove('railcraft:energy_minecart')

    // - Strengthened Glass
    event.remove({ output: '#railcraft:strengthened_glass' })

    // - Worldspikes
    event.remove('railcraft:world_spike')
    event.remove('railcraft:personal_world_spike')

    // - Saltpeter gunpowder recipe
    event.remove('minecraft:gunpowder') // WHY IT USES MINECRAFT NAMESPACE!?

    // - Coke Oven multiblock
    event.remove('railcraft:coke_oven_bricks')
    event.remove({ type: 'railcraft:coking' })

    // Blast Furnace multiblock
    event.remove('railcraft:blast_furnace_bricks')
    event.remove({ type: 'railcraft:blasting' })

    // Alternative recipes
    // - Bag of Cement
    event.remove('railcraft:bag_of_cement')
    event.remove('railcraft:bag_of_cement_slag')
    event.shapeless(
        'railcraft:bag_of_cement',
        [
            '2x minecraft:gravel',
            '2x #forge:slag'
        ]
    )

    // - Steam Locomotive
    event.replaceInput(
        'railcraft:steam_locomotive',
        '#railcraft:iron_tank_wall',
        '#forge:ingots/iron'
    )

    // - Electric Locomotive
    event.remove('railcraft:electric_locomotive')
    event.shaped(
        'railcraft:electric_locomotive',
        [
            'LS ',
            'MBM',
            'GCG',
        ],
        {
            L: 'minecraft:redstone_lamp',
            S: 'minecraft:steel_ingot',
            M: 'railcraft:charge_motor',
            B: 'minecraft:redstone_block',
            G: '#forge:gears/steel',
            C: 'minecraft:minecart',
        }
    )

    // - Raw Firestone
    event.smelting('railcraft:raw_firestone', 'railcraft:firestone_ore')

    // - Replace plates by ingots
    event.replaceInput(
        'railcraft:charge_coil',
        '#forge:plates/iron',
        '#forge:ingots/iron',
    )
    event.replaceInput(
        'railcraft:frame_iron_plate',
        '#forge:plates/iron',
        '#forge:ingots/iron',
    )
    event.replaceInput(
        'railcraft:frame_steel_plate',
        '#forge:plates/steel',
        '#forge:ingots/steel',
    )
    event.replaceInput(
        'railcraft:frame_bronze_plate',
        '#forge:plates/bronze',
        '#forge:ingots/bronze',
    )
    event.replaceInput(
        'railcraft:frame_brass_plate',
        '#forge:plates/brass',
        '#forge:ingots/brass',
    )
    event.replaceInput(
        'railcraft:force_track_emitter',
        '#forge:plates/tin',
        '#forge:ingots/tin',
    )
    event.replaceInput(
        'railcraft:charge_motor',
        '#forge:plates/tin',
        '#forge:ingots/tin',
    )
    event.replaceInput(
        'railcraft:dumping_track_kit',
        '#forge:plates/steel',
        '#forge:ingots/steel',
    )
    event.replaceInput(
        'railcraft:charge_terminal',
        '#forge:plates/brass',
        '#forge:ingots/brass',
    )

    // - Minecart with Worldspike
    event.replaceInput(
        'railcraft:world_spike_minecart',
        'railcraft:world_spike',
        'chunkloaders:basic_chunk_loader'
    )
})

ServerEvents.tags('item', event => {
    event.add('forge:dusts/ender_pearl', 'railcraft:ender_dust')
})