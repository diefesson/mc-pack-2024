ServerEvents.recipes(event => {
    // Pneumaticcraft => Thermal (Machine Stage)
    // Use Pneumaticcraft items to craft Machine Frames

    event.replaceInput(
        'thermal:machine_frame',
        '#forge:ingots/iron',
        'pneumaticcraft:plastic'
    )
    event.replaceInput(
        'thermal:machine_frame',
        '#forge:gears/tin',
        'pneumaticcraft:printed_circuit_board'
    )
})
