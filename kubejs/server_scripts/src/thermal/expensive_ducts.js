ServerEvents.recipes(event => {
    // Thermal Ducts are limitless, lets make them expensive
    event.remove('thermal:energy_duct_4')
    event.remove('thermal:fluid_duct_4')
    event.remove('thermal:fluid_duct_windowed_4')
    event.shaped(
        '16x thermal:energy_duct',
        [
            'GGG',
            'RER',
            'GGG',
        ],
        {
            G: '#thermal:glass/hardened',
            R: 'minecraft:redstone',
            E: '#forge:ingots/enderium',
        }
    )
    event.shaped(
        '16x thermal:fluid_duct_windowed',
        [
            'GGG',
            'CEC',
            'GGG',
        ],
        {
            G: '#thermal:glass/hardened',
            C: 'minecraft:copper_ingot',
            E: '#forge:ingots/enderium',
        }
    )

})