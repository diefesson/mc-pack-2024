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
        '#forge:ingots/iron'
    )

    // Electric Locomotive
    event.remove('railcraft:electric_locomotive')
    event.shaped(
        'railcraft:electric_locomotive',
        [
            'LS ',
            'MBM',
            'GCG',
        ],
        {
            L: 'minecraft:redstone_lamp',
            S: 'minecraft:steel_ingot',
            M: 'railcraft:charge_motor',
            B: 'minecraft:redstone_block',
            G: '#forge:gears/steel',
            C: 'minecraft:minecart',
        }
    )

    // Raw Firestone
    event.smelting('railcraft:raw_firestone', 'railcraft:firestone_ore')

    // Replace plates by ingots
    event.replaceInput(
        'railcraft:charge_coil',
        '#forge:plates/iron',
        '#forge:ingots/iron',
    )
    event.replaceInput(
        'railcraft:frame_iron_plate',
        '#forge:plates/iron',
        '#forge:ingots/iron',
    )
    event.replaceInput(
        'railcraft:frame_steel_plate',
        '#forge:plates/steel',
        '#forge:ingots/steel',
    )
    event.replaceInput(
        'railcraft:frame_bronze_plate',
        '#forge:plates/bronze',
        '#forge:ingots/bronze',
    )
    event.replaceInput(
        'railcraft:frame_brass_plate',
        '#forge:plates/brass',
        '#forge:ingots/brass',
    )
    event.replaceInput(
        'railcraft:force_track_emitter',
        '#forge:plates/tin',
        '#forge:ingots/tin',
    )
    event.replaceInput(
        'railcraft:charge_motor',
        '#forge:plates/tin',
        '#forge:ingots/tin',
    )
    event.replaceInput(
        'railcraft:dumping_track_kit',
        '#forge:plates/steel',
        '#forge:ingots/steel',
    )
    event.replaceInput(
        'railcraft:charge_terminal',
        '#forge:plates/brass',
        '#forge:ingots/brass',
    )

    // Minecart with Worldspike
    event.replaceInput(
        'railcraft:world_spike_minecart',
        'railcraft:world_spike',
        'chunkloaders:basic_chunk_loader'
    )
})