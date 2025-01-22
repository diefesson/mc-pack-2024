ServerEvents.recipes(event => {
    event.remove('naturescompass:natures_compass')
    event.shaped(
        Item.of('naturescompass:naturescompass'),
        [
            'aAb',
            'ACA',
            'cAd'
        ],
        {

            'a': 'minecraft:jungle_sapling',
            'b': 'minecraft:sweet_berries',
            'c': 'minecraft:flowering_azalea',
            'd': 'minecraft:acacia_sapling',
            'A': 'minecraft:amethyst_shard',
            'C': 'minecraft:compass'
        }
    )
})