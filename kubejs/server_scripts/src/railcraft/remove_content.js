ServerEvents.recipes(event => {
    // Remove buggy/irrelevant content
    // - Steel tools and armor
    event.remove('railcraft:steel_shovel')
    event.remove('railcraft:steel_pickaxe')
    event.remove('railcraft:steel_axe')
    event.remove('railcraft:steel_hoe')
    event.remove('railcraft:steel_shears')
    event.remove('railcraft:steel_sword')
    event.remove('railcraft:steel_helmet')
    event.remove('railcraft:steel_chestplate')
    event.remove('railcraft:steel_leggings')
    event.remove('railcraft:steel_boots')
    event.remove('railcraft:steel_anvil')

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
