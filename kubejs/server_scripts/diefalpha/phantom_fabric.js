ServerEvents.recipes(event => {
    event.shapeless(
        'diefalpha:phantom_fabric',
        [
            'minecraft:paper',
            'minecraft:phantom_membrane',
            'minecraft:ender_pearl',
            'minecraft:magma_cream'
        ],
    )
    event.shaped(
        'minecraft:elytra',
        [
            'PSP',
            'P P',
            'P P'
        ],
        {
            'P': 'diefalpha:phantom_fabric',
            'S': 'minecraft:slime_ball'
        }
    )
})
