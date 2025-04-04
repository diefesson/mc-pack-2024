ServerEvents.recipes(event => {
    // Thermal (Device Stage) => Pneumaticcraft
    // Use Rubber to craft Pressure Pipe

    event.replaceInput(
        { id: 'pneumaticcraft:pressure_tube' },
        '#c:glass_blocks',
        'thermal:cured_rubber',
    )

    // Ammo recipes
    // - Minigun Ammo
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

    // - Freezing Ammo
    event.replaceInput(
        { id: 'pneumaticcraft:gun_ammo_freezing' },
        'minecraft:ice',
        'thermal:blizz_rod'
    )
})