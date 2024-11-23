ServerEvents.recipes(event => {
    event.shapeless(
        'diefalpha:volatile_dust',
        [
            'minecraft:amethyst_shard',
            'minecraft:redstone',
            'minecraft:redstone',
            'minecraft:blaze_powder'
        ],
    )
    event.shapeless(
        'minecraft:dragon_breath',
        [
            'minecraft:glass_bottle',
            'diefalpha:volatile_dust'
        ]
    )
})
