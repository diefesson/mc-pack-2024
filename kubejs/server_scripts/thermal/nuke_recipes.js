ServerEvents.recipes(event => {
    event.shaped(
        Item.of('thermal:nuke_tnt'),
        [
            'tbt',
            'btb',
            'tbt'
        ],
        {
            t: 'minecraft:tnt',
            b: 'bigreactors:blutonium_block',
        }
    )
    event.shaped(
        Item.of('thermal:nuke_grenade', 3),
        [
            'tbt',
            'bib',
            'tbt'
        ],
        {
            t: 'minecraft:tnt',
            b: 'bigreactors:blutonium_block',
            i: 'minecraft:iron_block'
        }
    )
})
