ServerEvents.recipes(event => {
    IFUtils.setup(event)

    // Machine frames

    event.replaceInput(
        { id: 'industrialforegoing:machine_frame_pity' },
        Ingredient.of('minecraft:iron_ingot'),
        Ingredient.of('#forge:ingots/copper'),
    )
    event.replaceInput(
        { id: 'industrialforegoing:machine_frame_pity' },
        Ingredient.of('#minecraft:logs'),
        Ingredient.of('#minecraft:planks')
    )

    IFUtils.dissolutionReplaceInput(
        'industrialforegoing:dissolution_chamber/simple_machine_frame',
        Ingredient.of('minecraft:nether_brick'),
        Ingredient.of('minecraft:quartz')
    )
    IFUtils.dissolutionReplaceInput(
        'industrialforegoing:dissolution_chamber/simple_machine_frame',
        Ingredient.of('#forge:gears/gold'),
        Ingredient.of('#forge:gears/tin')
    )

    IFUtils.dissolutionReplaceInput(
        'industrialforegoing:dissolution_chamber/advanced_machine_frame',
        Ingredient.of('minecraft:netherite_scrap'),
        Ingredient.of('minecraft:netherite_ingot')
    )
    IFUtils.dissolutionReplaceInput(
        'industrialforegoing:dissolution_chamber/advanced_machine_frame',
        Ingredient.of('#forge:gears/diamond'),
        Ingredient.of('#forge:gears/nickel')
    )

    IFUtils.dissolutionReplaceInput(
        'industrialforegoing:dissolution_chamber/supreme_machine_frame',
        Ingredient.of('#forge:ingots/netherite'),
        Ingredient.of('#forge:ingots/dragonsteel')
    )
    IFUtils.dissolutionReplaceInput(
        'industrialforegoing:dissolution_chamber/supreme_machine_frame',
        Ingredient.of('#forge:gems/diamond'),
        Ingredient.of('#forge:gems/fluix')
    )

    // Replace glass panes with glass blocks in dissolution recipes

    event
        .findRecipeIds({ type: 'industrialforegoing:dissolution_chamber' })
        .forEach(recipeId => {
            IFUtils.dissolutionReplaceInput(
                recipeId,
                Ingredient.of('#forge:glass_panes'),
                Ingredient.of('#forge:glass')
            )
        })

    // Machines

    event.replaceInput(
        { id: 'industrialforegoing:fluid_extractor' },
        Ingredient.of('#forge:ingots/iron'),
        Ingredient.of('#forge:ingots/tin')
    )
    event.replaceInput(
        { id: 'industrialforegoing:fluid_extractor' },
        Ingredient.of('minecraft:light_weighted_pressure_plate'),
        Ingredient.of('#forge:ingots/gold')
    )

    event.replaceInput(
        { id: 'industrialforegoing:latex_processing_unit' },
        Ingredient.of('#forge:ingots/iron'),
        Ingredient.of('#forge:ingots/tin')
    )

    event.replaceInput(
        { id: 'industrialforegoing:dissolution_chamber' },
        Ingredient.of('#forge:ingots/gold'),
        Ingredient.of('#forge:ingots/tin')
    )
    event.replaceInput(
        { id: 'industrialforegoing:dissolution_chamber' },
        Ingredient.of('#forge:gears/diamond'),
        Ingredient.of('#forge:gears/gold')
    )

    event.replaceInput(
        { id: 'industrialforegoing:plant_fertilizer' },
        Ingredient.of('#forge:gears/iron'),
        Ingredient.of('#forge:gears/silver')
    )

    event.replaceInput(
        { id: 'industrialforegoing:plant_sower' },
        Ingredient.of('#forge:gears/iron'),
        Ingredient.of('#forge:gears/silver')
    )

    event.replaceInput(
        { id: 'industrialforegoing:mob_slaughter_factory' },
        Ingredient.of('#forge:gears/gold'),
        Ingredient.of('#forge:gears/diamond')
    )

    event.replaceInput(
        { id: 'industrialforegoing:animal_rancher' },
        Ingredient.of('#forge:gears/gold'),
        Ingredient.of('#forge:gears/copper')
    )

    event.replaceInput(
        { id: 'industrialforegoing:animal_feeder' },
        Ingredient.of('#forge:gears/iron'),
        Ingredient.of('#forge:gears/copper')
    )

    event.replaceInput(
        { id: 'industrialforegoing:mob_crusher' },
        Ingredient.of('minecraft:iron_sword'),
        Ingredient.of('minecraft:diamond_sword')
    )
    event.replaceInput(
        { id: 'industrialforegoing:mob_crusher' },
        Ingredient.of('minecraft:book'),
        Ingredient.of('minecraft:experience_bottle')
    )

    event.replaceInput(
        { id: 'industrialforegoing:common_black_hole_unit' },
        Ingredient.of('#forge:gears/iron'),
        Ingredient.of('#forge:gears/copper')
    )

    event.replaceInput(
        { id: 'industrialforegoing:common_black_hole_tank' },
        Ingredient.of('#forge:gears/iron'),
        Ingredient.of('#forge:gears/copper')
    )
})