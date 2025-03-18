ServerEvents.recipes(event => {
    // Pneumaticcraft => Thermal (Machine Stage)
    // Use Pneumaticcraft items to craft Machine Frames

    let thermalRecipes = [
        'thermal:machine_frame',
        'thermal:energy_cell_frame',
        'thermal:fluid_cell_frame',
    ]

    for (let id of thermalRecipes) {
        event.replaceInput(
            { id: id },
            '#c:glass_blocks',
            'pneumaticcraft:printed_circuit_board'
        )

        event.replaceInput(
            { id: id },
            '#forge:ingots/iron',
            'pneumaticcraft:plastic'
        )

        event.replaceInput(
            { id: id },
            '#forge:ingots/lead',
            'pneumaticcraft:plastic'
        )

        event.replaceInput(
            { id: id },
            '#forge:ingots/copper',
            'pneumaticcraft:plastic'
        )
    }

    // Let's use Powah cables
    event.remove('thermal:energy_duct_4')
    event.shaped(
        '8x thermal:energy_duct',
        [
            'CCC',
            'CDC',
            'CCC',
        ],
        {
            C: 'powah:energy_cable_nitro',
            D: 'thermal_extra:dragonsteel_ingot',
        }
    )
})
