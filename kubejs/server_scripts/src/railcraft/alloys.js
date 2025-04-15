ServerEvents.recipes(event => {
    event.remove('railcraft:bronze_ingot_crafted_with_ingots')
    event.remove('railcraft:invar_ingot_crafted_with_ingots')
    event.remove('railcraft:brass_ingot_crafted_with_ingots')
    event.shapeless(
        '2x railcraft:brass_ingot',
        [
            '#forge:ingots/copper',
            '#forge:ingots/zinc',
            'minecraft:fire_charge',
        ]
    )
})
