ServerEvents.recipes(event => {
    let recipes = [
        // Steel tools and armor
        'railcraft:steel_shovel',
        'railcraft:steel_pickaxe',
        'railcraft:steel_axe',
        'railcraft:steel_hoe',
        'railcraft:steel_shears',
        'railcraft:steel_sword',
        'railcraft:steel_helmet',
        'railcraft:steel_chestplate',
        'railcraft:steel_leggings',
        'railcraft:steel_boots',
        'railcraft:steel_anvil',

        // RailCraft gears
        'railcraft:nickel_gear',
        'railcraft:gold_gear',
        'railcraft:invar_gear',
        'railcraft:iron_gear',
        'railcraft:steel_gear',
        'railcraft:copper_gear',
        'railcraft:lead_gear',
        'railcraft:tin_gear',
        'railcraft:bronze_gear',
        'railcraft:silver_gear',

        // Steam multiblocks
        'railcraft:solid_fueled_firebox',
        'railcraft:fluid_fueled_firebox',
        'railcraft:low_pressure_steam_boiler_tank',
        'railcraft:high_pressure_steam_boiler_tank',
        'railcraft:nickel_turbine_blade',
        'railcraft:steel_turbine_blade',
        'railcraft:rolling/nickel_turbine_blade',
        'railcraft:rolling/steel_turbine_blade',
        'railcraft:turbine_disk',
        'railcraft:turbine_rotor',
        'railcraft:steam_turbine',
        'railcraft:steam_oven',

        // Feed Station
        'railcraft:feed_station',

        // Batteries
        'railcraft:rolling/carbon_electrode',
        'railcraft:rolling/iron_electrode',
        'railcraft:rolling/copper_electrode',
        'railcraft:rolling/gold_electrode',
        'railcraft:rolling/lead_electrode',
        'railcraft:rolling/nickel_electrode',
        'railcraft:rolling/silver_electrode',
        'railcraft:rolling/tin_electrode',
        'railcraft:rolling/zinc_electrode',
        'railcraft:rolling/steel_electrode',
        'railcraft:rolling/brass_electrode',
        'railcraft:rolling/bronze_electrode',
        'railcraft:rolling/invar_electrode',
        'railcraft:zinc_carbon_battery',
        'railcraft:zinc_silver_battery',
        'railcraft:nickel_zinc_battery',
        'railcraft:nickel_iron_battery',

        // Tank Multiblock
        'railcraft:water_tank_siding',
        { output: '#railcraft:iron_tank_valve' },
        { output: '#railcraft:iron_tank_gauge' },
        { output: '#railcraft:iron_tank_wall' },
        { output: '#railcraft:steel_tank_valve' },
        { output: '#railcraft:steel_tank_gauge' },
        { output: '#railcraft:steel_tank_wall' },

        // Crusher
        'railcraft:crusher',
        { type: 'railcraft:crusher' },

        // Plates
        'railcraft:rolling/brass_plate',
        'railcraft:rolling/lead_plate',
        'railcraft:rolling/tin_plate',
        'railcraft:rolling/iron_plate',
        'railcraft:rolling/invar_plate',
        'railcraft:rolling/steel_plate',
        'railcraft:rolling/gold_plate',
        'railcraft:rolling/silver_plate',
        'railcraft:rolling/bronze_plate',
        'railcraft:rolling/copper_plate',
        'railcraft:rolling/nickel_plate',
        'railcraft:rolling/zinc_plate',

        // Strengthened Glass
        { output: '#railcraft:strengthened_glass' },

        // Worldspikes
        'railcraft:world_spike',
        'railcraft:personal_world_spike',

        // Saltpeter gunpowder recipe
        // WHY IT USES MINECRAFT NAMESPACE!?
        'minecraft:gunpowder',

        // Coke Oven multiblock
        'railcraft:coke_oven_bricks',
        { type: 'railcraft:coking' },

        // Blast Furnace multiblock
        'railcraft:blast_furnace_bricks',
        { type: 'railcraft:blasting' },

        // Bushing Gear
        'railcraft:bushing_gear_bronze',
        'railcraft:bushing_gear_brass',
        'railcraft:rolling/bushing_gear_bronze',
        'railcraft:rolling/bushing_gear_brass',
    ]

    for (let recipe of recipes) {
        event.remove(recipe)
    }
})

ServerEvents.tags('item', event => {
    let entries = [
        // Ores
        'railcraft:saltpeter_ore',

        // Steel tools and armor
        'railcraft:steel_shovel',
        'railcraft:steel_pickaxe',
        'railcraft:steel_axe',
        'railcraft:steel_hoe',
        'railcraft:steel_shears',
        'railcraft:steel_sword',
        'railcraft:steel_helmet',
        'railcraft:steel_chestplate',
        'railcraft:steel_leggings',
        'railcraft:steel_boots',
        'railcraft:steel_anvil',
        'railcraft:chipped_steel_anvil',
        'railcraft:damaged_steel_anvil',

        // RailCraft gears
        'railcraft:nickel_gear',
        'railcraft:gold_gear',
        'railcraft:invar_gear',
        'railcraft:iron_gear',
        'railcraft:steel_gear',
        'railcraft:copper_gear',
        'railcraft:lead_gear',
        'railcraft:tin_gear',
        'railcraft:bronze_gear',
        'railcraft:silver_gear',

        // Steam multiblocks
        'railcraft:solid_fueled_firebox',
        'railcraft:fluid_fueled_firebox',
        'railcraft:low_pressure_steam_boiler_tank',
        'railcraft:high_pressure_steam_boiler_tank',
        'railcraft:turbine_blade',
        'railcraft:turbine_blade',
        'railcraft:turbine_disk',
        'railcraft:turbine_rotor',
        'railcraft:steam_turbine',
        'railcraft:steam_oven',

        // Feed Station
        'railcraft:feed_station',

        // Batteries
        'railcraft:carbon_electrode',
        'railcraft:iron_electrode',
        'railcraft:copper_electrode',
        'railcraft:gold_electrode',
        'railcraft:lead_electrode',
        'railcraft:nickel_electrode',
        'railcraft:silver_electrode',
        'railcraft:tin_electrode',
        'railcraft:zinc_electrode',
        'railcraft:steel_electrode',
        'railcraft:brass_electrode',
        'railcraft:bronze_electrode',
        'railcraft:invar_electrode',
        'railcraft:zinc_carbon_battery',
        'railcraft:zinc_silver_battery',
        'railcraft:zinc_carbon_battery_empty',
        'railcraft:zinc_silver_battery_empty',
        'railcraft:nickel_zinc_battery',
        'railcraft:nickel_iron_battery',

        // Tank Multiblock
        'railcraft:water_tank_siding',
        '#railcraft:iron_tank_valve',
        '#railcraft:iron_tank_gauge',
        '#railcraft:iron_tank_wall',
        '#railcraft:steel_tank_valve',
        '#railcraft:steel_tank_gauge',
        '#railcraft:steel_tank_wall',

        // Crusher
        'railcraft:crusher',
        'railcraft:crushed_obsidian',
        'railcraft:obsidian_dust',
        'railcraft:saltpeter_dust',
        'railcraft:coal_dust',
        'railcraft:charcoal_dust',

        // Plates
        'railcraft:lead_plate',
        'railcraft:tin_plate',
        'railcraft:iron_plate',
        'railcraft:invar_plate',
        'railcraft:steel_plate',
        'railcraft:gold_plate',
        'railcraft:silver_plate',
        'railcraft:bronze_plate',
        'railcraft:copper_plate',
        'railcraft:nickel_plate',

        // Strengthened Glass
        '#railcraft:strengthened_glass',

        // Worldspikes
        'railcraft:world_spike',
        'railcraft:personal_world_spike',

        // Coke Oven multiblock
        'railcraft:coke_oven_bricks',

        // Blast Furnace multiblock
        'railcraft:blast_furnace_bricks',

        // Bushing Gear
        'railcraft:bushing_gear'
    ]

    for (let entry of entries) {
        event.add('c:hidden_from_recipe_viewers', entry)
    }
})