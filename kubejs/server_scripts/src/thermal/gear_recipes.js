ServerEvents.recipes(event => {
    // Use Copper Gear as base for crafting all gears
    let copper_gear = AlmostUnified.getPreferredItemForTag('forge:gears/copper')
    event.remove({ output: '#forge:gears/copper' })
    event.shaped(
        copper_gear,
        [
            ' I ',
            'III',
            ' I ',
        ],
        {
            I: '#forge:ingots/copper'
        }
    )
    // General gears
    event.replaceInput(
        { output: '#forge:gears' },
        '#forge:nuggets/iron',
        copper_gear,
    )

    // Redstone Arsenal gears
    event.replaceInput(
        { id: 'redstone_arsenal:materials/flux_gear' },
        '#forge:nuggets/iron',
        copper_gear,
    )

    // Pneumaticcraft gears
    event.replaceInput(
        { id: 'pneumaticcraft:compressed_iron_gear' },
        '#forge:ingots/iron',
        copper_gear,
    )

    // Railcraft gears
    event.replaceInput(
        { id: 'railcraft:zinc_gear' },
        'railcraft:bushing_gear',
        copper_gear,
    )
    event.replaceInput(
        { id: 'railcraft:brass_gear' },
        'railcraft:bushing_gear',
        copper_gear,
    )
})
