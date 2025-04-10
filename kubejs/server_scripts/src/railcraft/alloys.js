ServerEvents.recipes(event => {
    ThermalUtils.setup(event)
    event.remove('railcraft:bronze_ingot_crafted_with_ingots')
    event.remove('railcraft:invar_ingot_crafted_with_ingots')
    event.remove('railcraft:brass_ingot_crafted_with_ingots')
    ThermalUtils.smelter_alloy(
        { item: 'railcraft:brass_ingot', count: 2 },
        [
            { tag: 'forge:ingots/zinc', count: 1 },
            { tag: 'forge:ingots/copper', count: 1 },
        ]
    )
    event.shapeless(
        '2x railcraft:brass_ingot',
        [
            '#forge:ingots/copper',
            '#forge:ingots/zinc',
            'minecraft:fire_charge',
        ]
    )
})
