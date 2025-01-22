ServerEvents.recipes(event => {
    event.remove('explorerscompass:explorers_compass')
    event.shaped(
        Item.of('explorerscompass:explorerscompass'),
        [
            'aAb',
            'ACA',
            'cAd'
        ],
        {

            'a': '#minecraft:decorated_pot_sherds',
            'b': '#minecraft:skull',
            'c': 'minecraft:heart_of_the_sea',
            'd': '#minecraft:trim_templates',
            'A': 'minecraft:amethyst_shard',
            'C': 'minecraft:compass'
        }
    )
})