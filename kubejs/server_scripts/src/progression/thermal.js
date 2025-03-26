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

    event.replaceInput(
        'thermal_extra:crafting/device_harvester',
        'thermal:redstone_servo',
        'thermal:rf_coil',
    )
})
