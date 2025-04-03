ServerEvents.recipes(event => {
    // Pneumaticcraft => Thermal (Machine Stage)
    // Use Pneumaticcraft items to craft Machine Frames

    let thermalRecipes = [
        'thermal:machine_frame',
        'thermal:energy_cell_frame',
        'thermal:fluid_cell_frame',
    ]

    for (let id of thermalRecipes) {
        event.replaceInput(
            { id: id },
            '#c:glass_blocks',
            'pneumaticcraft:printed_circuit_board'
        )

        event.replaceInput(
            { id: id },
            '#forge:ingots/iron',
            'pneumaticcraft:plastic'
        )

        event.replaceInput(
            { id: id },
            '#forge:ingots/lead',
            'pneumaticcraft:plastic'
        )

        event.replaceInput(
            { id: id },
            '#forge:ingots/copper',
            'pneumaticcraft:plastic'
        )
    }

    // Thermal Extra harvester uses RF, so it should have a RF Coil
    event.replaceInput(
        'thermal_extra:crafting/device_harvester',
        'thermal:redstone_servo',
        'thermal:rf_coil',
    )

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
