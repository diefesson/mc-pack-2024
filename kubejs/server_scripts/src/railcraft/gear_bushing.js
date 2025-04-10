ServerEvents.recipes(event => {
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
})