ServerEvents.recipes(event => {
    ThermalUtils.setup(event)
    PowahUtils.setup(event)

    // Thermal (Machine Stage) => Powah
    // Dielectric Paste is produced using dusts

    event.remove('powah:crafting/dielectric_paste')
    event.remove('powah:crafting/dielectric_paste_2')

    event.shapeless(
        '8x powah:dielectric_paste',
        [
            '#forge:dusts/obsidian',
            '#forge:dusts/lead',
            'minecraft:clay_ball'
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

    // Powah Ender Core requires Applied Energistics 2 Singularity
    event.remove('powah:energizing/ender_core')

    PowahUtils.energizing(
        Item.of('powah:ender_core'),
        [
            Item.of('minecraft:ender_eye'),
            Item.of('ae2:singularity'),
        ],
        50000
    )

    // Remove Powah cables and update ender gate/cell recipes
    let levels = [
        'starter',
        'basic',
        'hardened',
        'blazing',
        'niotic',
        'spirited',
        'nitro',
    ]
    let materials = [
        '#forge:nuggets/iron',
        '#forge:ingots/iron',
        'powah:steel_energized',
        'powah:crystal_blazing',
        'powah:crystal_niotic',
        'powah:crystal_spirited',
        'powah:crystal_nitro',
    ]
    for (let level of levels) {
        event.remove({ output: `powah:energy_cable_${level}` })
        event.remove({ output: `powah:ender_gate_${level}` })
        event.remove({ output: `powah:ender_cell_${level}` })
    }
    for (let i = 0; i < levels.length; i++) {
        let level = levels[i]
        let material = materials[i]
        event.shaped(
            `powah:ender_gate_${level}`,
            [
                'DMD',
                'MCM',
                'DMD',
            ],
            {
                D: 'thermal:energy_duct',
                M: material,
                C: 'powah:ender_core'
            }
        )
        event.shaped(
            `powah:ender_cell_${level}`,
            [
                'OOO',
                'OGO',
                'OOO',
            ],
            {
                O: 'minecraft:obsidian',
                G: `powah:ender_gate_${level}`
            }
        )
    }
})