ServerEvents.recipes(event => {
    ThermalUtils.setup(event)

    const levels = [
        'prosperity',
        'soulium',
        'inferium',
        'prudentium',
        'tertium',
        'imperium',
        'supremium',
        'insanium',
        'awakened_supremium'
    ]
    for (let level of levels) {
        let suffix = 'essence'
        if (level === 'prosperity') suffix = 'shard'
        if (level === 'soulium') suffix = 'dust'
        let block = Item.of(`mysticalagriculture:${level}_block`)
        let item = Item.of(`mysticalagriculture:${level}_${suffix}`)
        let ingot_block = Item.of(`mysticalagriculture:${level}_ingot_block`)
        let ingot = Item.of(`mysticalagriculture:${level}_ingot`)
        let nugget = Item.of(`mysticalagriculture:${level}_nugget`)
        let gemstone_block = Item.of(`mysticalagriculture:${level}_gemstone_block`)
        let gemstone = Item.of(`mysticalagriculture:${level}_gemstone`)

        ThermalUtils.press3(block, item)
        ThermalUtils.press3(ingot_block, ingot)
        ThermalUtils.press3(ingot, nugget)
        ThermalUtils.press3(gemstone_block, gemstone)
    }
})
