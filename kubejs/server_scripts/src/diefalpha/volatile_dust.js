ServerEvents.recipes(event => {
    event.shapeless(
        'diefalpha:volatile_dust',
        [
            '2x minecraft:redstone',
            'minecraft:amethyst_shard',
            'minecraft:blaze_powder',
        ],
    )
    event.shapeless(
        'minecraft:dragon_breath',
        [
            'minecraft:glass_bottle',
            'diefalpha:volatile_dust',
        ]
    )
})
