ServerEvents.recipes(event => {
    // Thermal Ducts are limitless, lets make them expensive
    event.remove('thermal:energy_duct_4')
    event.remove('thermal:fluid_duct_4')
    event.remove('thermal:fluid_duct_windowed_4')
    event.shaped(
        '4x thermal:energy_duct',
        [
            'GGG',
            'RDR',
            'GGG',
        ],
        {
            G: '#thermal:glass/hardened',
            R: 'minecraft:redstone',
            D: ['thermal_extra:dragonsteel_ingot', 'thermal_extra:abyssal_ingot'],
        }
    )
    event.shaped(
        '4x thermal:fluid_duct_windowed',
        [
            'GGG',
            'CDC',
            'GGG',
        ],
        {
            G: '#thermal:glass/hardened',
            C: 'minecraft:copper_ingot',
            D: ['thermal_extra:dragonsteel_ingot', 'thermal_extra:abyssal_ingot'],
        }
    )
    event.shapeless(
        'thermal:fluid_duct_windowed',
        ['thermal:fluid_duct']
    )
    event.shapeless(
        'thermal:fluid_duct',
        ['thermal:fluid_duct_windowed']
    )
})