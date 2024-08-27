ServerEvents.recipes(event => {
    event.shapeless(
        'volatiledust:volatile_dust',
        [
            'minecraft:amethyst_shard',
            'minecraft:phantom_membrane',
            'minecraft:redstone',
            'minecraft:blaze_powder'
        ],
    )
    event.shapeless(
        'minecraft:dragon_breath',
        [
            'minecraft:glass_bottle',
            'volatiledust:volatile_dust'
        ]
    )
})
