// Hide CB Microblock items
ServerEvents.tags('item', event => {
    Item.getList().forEach(item => {
        if (item.id.startsWith('cb_microblock:')) {
            event.add('c:hidden_from_recipe_viewers', item.id)
        }
    })
})

// Remove CB Microblock item recipes
ServerEvents.recipes(event => {
    Item.getList().forEach(item => {
        if (item.id.startsWith('cb_microblock:')) {
            event.remove({ output: item.id })
        }
    })
})

ServerEvents.recipes(event => {
    // Updated recipes
    // - Silicon
    event.remove('projectred_core:silicon')
    event.shapeless(
        '8x projectred_core:silicon',
        [
            '#ae2:knife',
            'projectred_core:boule'
        ]
    )

    // - Electrotine Dust
    event.shapeless(
        'projectred_core:electrotine_dust',
        [
            '4x minecraft:lapis_lazuli',
            '4x minecraft:redstone',
        ],
    )

    // - Plotting Table
    event.replaceInput(
        'projectred_fabrication:plotting_table',
        '#forge:gems/sapphire',
        '#forge:gems/diamond'
    )

    // Unwanted content
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
