ServerEvents.recipes(event => {

    event.remove('pneumaticcraft:gun_ammo')
    event.shaped(
        'pneumaticcraft:gun_ammo',
        [
            ' L ',
            'CGC',
            'CGC',
        ],
        {
            'L': '#forge:ingots/lead',
            'C': 'pneumaticcraft:ingot_iron_compressed',
            'G': 'minecraft:gunpowder'
        }
    )

    event.replaceInput(
        {id: 'pneumaticcraft:gun_ammo_freezing'},
        'minecraft:ice',
        'thermal:blizz_rod'
    )
})