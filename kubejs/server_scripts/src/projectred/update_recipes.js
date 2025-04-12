ServerEvents.recipes(event => {
    // Silicon
    event.remove('projectred_core:silicon')
    event.shapeless(
        '8x projectred_core:silicon',
        [
            '#ae2:knife',
            'projectred_core:boule'
        ]
    )

    // Electrotine Dust
    event.shapeless(
        'projectred_core:electrotine_dust',
        [
            '4x minecraft:lapis_lazuli',
            '4x minecraft:redstone',
        ],
    )

    // Plotting Table
    event.replaceInput(
        'projectred_fabrication:plotting_table',
        '#forge:gems/sapphire',
        '#forge:gems/diamond'
    )
})
