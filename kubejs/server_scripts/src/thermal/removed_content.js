ServerEvents.tags('item', event => {
    let entries = [
        // Ruby
        'thermal:ruby_ore',
        'thermal:deepslate_ruby_ore',
        'thermal:ruby_block',
        'thermal:ruby',
        'thermal:ruby_dust',
        'thermal:ruby_gear',
        // Sapphire
        'thermal:sapphire_ore',
        'thermal:deepslate_sapphire_ore',
        'thermal:sapphire',
        'thermal:sapphire_dust',
        'thermal:sapphire_gear',
        // Rich Slag
        'thermal:rich_slag',
        'thermal:rich_slag_block',
        'thermal:polished_slag',
        'thermal:chiseled_slag',
        'thermal:rich_slag_bricks',
        'thermal:cracked_rich_slag_bricks',
        // Cinnabar
        'thermal:cinnabar_block',
        'thermal:cinnabar_ore',
        'thermal:deepslate_cinnabar_ore',
        'thermal:cinnabar',
        'thermal:cinnabar_dust',
        // Apatite
        'thermal:apatite_ore',
        'thermal:deepslate_apatite_ore',
        'thermal:apatite',
        'thermal:apatite_dust',
        'thermal:apatite_block',
        // Bitumen
        'thermal:bitumen',
        'thermal:tar',
        'thermal:bitumen_block',
        'thermal:tar_block',
        // Rosin
        'thermal:rosin',
        'thermal:rosin_block',
        // Items
        'thermal:syrup_bottle',
        'thermal:compost',
        'thermal:phytogro',
        // Machines
        'thermal:energy_cell',
        'thermal:fluid_cell',
        'thermal:machine_frame',
        'thermal:energy_cell_frame',
        'thermal:fluid_cell_frame',
    ]

    for (let entry of entries) {
        event.add('c:hidden_from_recipe_viewers', entry)
    }
})
