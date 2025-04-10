ServerEvents.recipes(event => {
    // Thermal (Device Stage) => Pneumaticcraft
    // Use Rubber to craft Pressure Pipe

    event.replaceInput(
        { id: 'pneumaticcraft:pressure_tube' },
        '#c:glass_blocks',
        'thermal:cured_rubber',
    )
})
