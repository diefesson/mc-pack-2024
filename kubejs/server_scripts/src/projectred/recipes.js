ServerEvents.recipes(event => {
    event.shaped(
        'projectred_core:electrotine_dust',
        [
            'RRR',
            'RLR',
            'RRR',
        ],
        {
            R: 'minecraft:redstone',
            L: 'minecraft:lapis_lazuli'
        }
    )

    event.replaceInput(
        'projectred_fabrication:plotting_table',
        '#forge:gems/sapphire',
        '#forge:gems/diamond'
    )

    event.remove('projectred_core:electrotine_silicon_comp')
    event.remove('projectred_core:electrotine_silicon')
    event.remove('projectred_core:copper_coil')
    event.remove('projectred_core:iron_coil')
    event.remove('projectred_core:gold_coil')
    event.remove('projectred_core:motor')
    event.remove('projectred_core:woven_cloth')
    event.remove('projectred_core:sail')
    event.remove('projectred_core:draw_plate')
})