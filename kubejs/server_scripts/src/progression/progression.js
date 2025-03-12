ServerEvents.recipes(event => {

    ThermalUtils.setup(event)

    // Thermal (Device Stage) => Pneumaticcraft
    // Use Rubber to craft Pressure Pipe

    event.replaceInput(
        { id: 'pneumaticcraft:pressure_tube' },
        '#c:glass_blocks',
        'thermal:cured_rubber',
    )

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

    // Thermal (Machine Stage) => Powah
    // Dielectric Paste is produced on Induction Smelter

    event.remove('powah:crafting/dielectric_paste')
    event.remove('powah:crafting/dielectric_paste_2')

    ThermalUtils.smelter_alloy(
        Item.of('powah:dielectric_paste', 4),
        [
            { item: 'minecraft:amethyst', count: 2 },
            { item: 'minecraft:clay_ball', count: 1 },
            { item: 'minecraft:quartz', count: 2 }
        ]
    )

    // Powah basic machines requires Pneumaticcraft Plastic

    let powahRecipes = [
        'powah:crafting/wrench',
        'powah:crafting/dielectric_casing',
        'powah:crafting/energy_cell_starter',
        'powah:crafting/energy_cell_basic',
        'powah:crafting/energy_cell_basic_2',
        'powah:crafting/furnator_basic',
        'powah:crafting/magmator_basic',
        'powah:crafting/thermo_generator_basic',
        'powah:crafting/solar_panel_basic',
    ]

    for (let id of powahRecipes) {
        event.replaceInput(
            { id: id },
            '#forge:ingots/iron',
            'pneumaticcraft:plastic'
        )
    }


    // Powah (Machine Stage) => Applied Energistics 2
    // Use previous materials to craft AE2 items

    let ae2Replacements = [
        {
            ids: [
                'ae2:tools/misctools_entropy_manipulator',
                'ae2:tools/misctools_charged_staff',
                'ae2:tools/network_color_applicator',
                'ae2:tools/matter_cannon',
                'ae2:tools/network_memory_card',
                'ae2:network/crafting/patterns_blank',
                'ae2:materials/basiccard',
                'ae2:materials/advancedcard',
                'ae2:network/wireless_part',
                'ae2:network/wireless_booster',
            ],
            from: 'minecraft:iron_ingot',
            to: 'pneumaticcraft:plastic'
        },
        {
            ids: [
                'ae2:network/blocks/inscribers',
                'ae2:network/blocks/crystal_processing_charger',
            ],
            from: 'minecraft:copper_ingot',
            to: 'powah:steel_energized'
        }
    ]

    for (let { ids, from, to } of ae2Replacements) {
        for (let id of ids) {
            event.replaceInput(
                { id: id },
                from,
                to
            )
        }
    }

})
