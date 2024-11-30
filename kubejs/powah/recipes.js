ServerEvents.recipes(event => {
    PowahUtils.setup(event)

    event.remove({ id: 'powah:energizing/energized_steel' })
    event.remove({ id: 'powah:energizing/blazing_crystal' })
    event.remove({ id: 'powah:energizing/blazing_crystal_2' })
    event.remove({ id: 'powah:energizing/niotic_crystal' })
    event.remove({ id: 'powah:energizing/spirited_crystal' })
    event.remove({ id: 'powah:energizing/nitro_crystal' })

    PowahUtils.energizing(
        Item.of('powah:steel_energized', 4),
        [
            Item.of('minecraft:iron_ingot'),
            Item.of('thermal:blitz_rod'),
        ],
        10000
    )

    PowahUtils.energizing(
        Item.of('powah:crystal_blazing', 4),
        [
            Item.of('minecraft:gold_ingot'),
            Item.of('minecraft:blaze_rod')
        ],
        90000
    )

    PowahUtils.energizing(
        Item.of('powah:crystal_niotic', 4),
        [
            Item.of('minecraft:diamond'),
            Item.of('thermal:blizz_rod')
        ],
        300000
    )

    PowahUtils.energizing(
        Item.of('powah:crystal_spirited', 4),
        [
            Item.of('minecraft:emerald'),
            Item.of('thermal:basalz_rod')
        ],
        1000000
    )

    PowahUtils.energizing(
        Item.of('powah:crystal_nitro', 16),
        [
            Item.of('minecraft:nether_star'),
            Item.of('thermal:blitz_rod'),
            Item.of('minecraft:blaze_rod'),
            Item.of('thermal:blizz_rod'),
            Item.of('thermal:basalz_rod'),
        ],
        20000000
    )
})