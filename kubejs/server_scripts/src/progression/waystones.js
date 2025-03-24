ServerEvents.recipes(event => {
    // Use ender pearl dust instead of ender pearl for dust
    event.replaceInput(
        'waystones:warp_dust',
        'minecraft:ender_pearl',
        '#forge:dusts/ender_pearl',
    )

    // Use amethyst instead of purple dye for scrolls
    let scrolls = [
        'waystones:return_scroll',
        'waystones:bound_scroll',
        'waystones:warp_scroll',
    ]
    for (let scroll of scrolls) {
        event.replaceInput(
            scroll,
            'minecraft:purple_dye',
            'minecraft:amethyst_shard',
        )
    }

    // Waystone requires AE2 singularity
    event.remove('waystones:warp_stone')
    event.shaped(
        '2x waystones:warp_stone',
        [
            'WWW',
            'WSW',
            'WWW'
        ],
        {
            W: 'waystones:warp_dust',
            S: 'ae2:singularity',
        }
    )

    // Use Warp Stone in Warp Plate recipe
    event.remove('waystones:warp_plate')
    event.shaped(
        'waystones:warp_plate',
        [
            'BBB',
            'BWB',
            'BBB',
        ],
        {
            B: 'minecraft:stone_bricks',
            W: 'waystones:warp_stone',
        }
    )
})