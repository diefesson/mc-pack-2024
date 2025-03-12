ServerEvents.recipes(event => {
    // Copper Gear
    event.replaceInput(
        { id: 'thermal:parts/copper_gear' },
        Ingredient.of('#forge:nuggets/iron'),
        Ingredient.of('#forge:ingots/copper')
    )

    // Other Gears
    event.replaceInput(
        { output: Ingredient.of('#forge:gears') },
        Ingredient.of('#forge:nuggets/iron'),
        Ingredient.of('#forge:gears/copper')
    )
    event.replaceInput(
        { id: 'redstone_arsenal:materials/flux_gear' },
        Ingredient.of('#forge:nuggets/iron'),
        Ingredient.of('#forge:gears/copper')
    )
    event.replaceInput(
        { id: 'pneumaticcraft:compressed_iron_gear' },
        Ingredient.of('#forge:ingots/iron'),
        Ingredient.of('#forge:gears/copper')
    )
})
