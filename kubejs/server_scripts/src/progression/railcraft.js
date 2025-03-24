ServerEvents.recipes(event => {
    ThermalUtils.setup(event)

    // Remove armor recipes
    event.remove('railcraft:steel_shovel')
    event.remove('railcraft:steel_pickaxe')
    event.remove('railcraft:steel_axe')
    event.remove('railcraft:steel_hoe')
    event.remove('railcraft:steel_shears')
    event.remove('railcraft:steel_sword')
    event.remove('railcraft:steel_chestplate')
    event.remove('railcraft:steel_leggings')
    event.remove('railcraft:steel_boots')

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
            C: { tag: 'forge:plates/copper' }
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

    // Replace gear material for Manual Rolling Machine
    event.replaceInput(
        { id: 'railcraft:manual_rolling_machine' },
        Ingredient.of('#forge:gears/bronze'),
        Ingredient.of('#forge:gears/iron'),
    )

    // Output thermal ender dust from crusher
    event.remove('railcraft:crusher/crushing_ender_pearl')
    event.custom({
        type: 'railcraft:crusher',
        ingredient: {
            tag: 'forge:ender_pearls'
        },
        outputs: [{
            probability: 1.0,
            result: { item: 'thermal:ender_pearl_dust' }
        }]
    })

    // Remove buggy/irrelevant content
    event.remove('railcraft:solid_fueled_firebox')
    event.remove('railcraft:fluid_fueled_firebox')
    event.remove('railcraft:low_pressure_steam_boiler_tank')
    event.remove('railcraft:high_pressure_steam_boiler_tank')
    event.remove('railcraft:steam_turbine')
    event.remove('railcraft:steam_oven')
    event.remove('railcraft:feed_station')
    event.remove('railcraft:zinc_carbon_battery')
    event.remove('railcraft:zinc_silver_battery')
    event.remove('railcraft:crusher/crushing_zinc_carbon_battery_empty')
    event.remove('railcraft:crusher/crushing_zinc_silver_battery_empty')
    event.remove('railcraft:water_tank_siding')
    event.remove({ output: '#railcraft:iron_tank_valve' })
    event.remove({ output: '#railcraft:iron_tank_gauge' })
    event.remove({ output: '#railcraft:iron_tank_wall' })
    event.remove({ output: '#railcraft:steel_tank_valve' })
    event.remove({ output: '#railcraft:steel_tank_gauge' })
    event.remove({ output: '#railcraft:steel_tank_wall' })
    event.replaceInput(
        'railcraft:steam_locomotive',
        '#railcraft:iron_tank_wall',
        '#forge:plates/iron'
    )
})

ServerEvents.tags('item', event => {
    event.add('forge:dusts/ender_pearl', 'railcraft:ender_dust')
})