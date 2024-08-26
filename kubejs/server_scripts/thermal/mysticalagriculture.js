ServerEvents.recipes(event => {
    const press3x3RecipePair = global['press3x3RecipePair']
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

        press3x3RecipePair(event, block, item)
        press3x3RecipePair(event, ingot_block, ingot)
        press3x3RecipePair(event, ingot, nugget)
        press3x3RecipePair(event, gemstone_block, gemstone)
    }
})
