ServerEvents.recipes(event => {
    // Bag of Cement
    event.remove('railcraft:bag_of_cement')
    event.remove('railcraft:bag_of_cement_slag')
    event.shapeless(
        'railcraft:bag_of_cement',
        [
            '2x minecraft:gravel',
            '2x #forge:slag'
        ]
    )

    // Steam Locomotive
    event.replaceInput(
        'railcraft:steam_locomotive',
        '#railcraft:iron_tank_wall',
        '#forge:plates/iron'
    )

    // Electric Locomotive
    event.replaceInput(
        'railcraft:electric_locomotive',
        ['railcraft:nickel_iron_battery', 'nickel_zinc_battery'],
        '#forge:storage_blocks/redstone',
    )

    // Raw Firestone
    event.smelting('railcraft:raw_firestone', 'railcraft:firestone_ore')

    // Cut Firestone
    event.replaceInput(
        'railcraft:cut_firestone',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_scrap'
    )

    // Minecart with Worldspike
    event.replaceInput(
        'railcraft:world_spike_minecart',
        'railcraft:world_spike',
        'chunkloaders:basic_chunk_loader'
    )
})