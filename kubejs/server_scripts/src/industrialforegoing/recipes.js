ServerEvents.recipes(event => {
    IFUtils.setup(event)

    // Machine frame - Pity
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

    // Machine Frame - Simple
    IFUtils.dissolutionReplaceInput(
        'industrialforegoing:dissolution_chamber/simple_machine_frame',
        Ingredient.of('minecraft:nether_brick'),
        Ingredient.of('minecraft:quartz')
    )

    // Machine Frame - Advanced
    IFUtils.dissolutionReplaceInput(
        'industrialforegoing:dissolution_chamber/advanced_machine_frame',
        Ingredient.of('minecraft:netherite_scrap'),
        Ingredient.of('#forge:ingots/netherite')
    )

    // Machine Frame - Supreme
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
    IFUtils.dissolutionReplaceInput(
        'industrialforegoing:dissolution_chamber/supreme_machine_frame',
        Ingredient.of('#forge:gears/diamond'),
        Ingredient.of('#forge:gears/netherite')
    )

    // Dissolution - Glass Panes => Glass Blocks
    event
        .findRecipeIds({ type: 'industrialforegoing:dissolution_chamber' })
        .forEach(recipeId => {
            IFUtils.dissolutionReplaceInput(
                recipeId,
                Ingredient.of('#forge:glass_panes'),
                Ingredient.of('#forge:glass')
            )
        })

    // Machine - Mob Crusher
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

    // Machine - Black Hole Unit
    event.replaceInput(
        { id: 'industrialforegoing:common_black_hole_unit' },
        Ingredient.of('#forge:gears/iron'),
        Ingredient.of('#forge:gears/copper')
    )

    // Machine - Black Hole Tank
    event.replaceInput(
        { id: 'industrialforegoing:common_black_hole_tank' },
        Ingredient.of('#forge:gears/iron'),
        Ingredient.of('#forge:gears/copper')
    )
})