ServerEvents.recipes(event => {
    ThermalUtils.setup(event)
    PowahUtils.setup(event)

    let tiers = [
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

    // Remove unwanted content
    // - Furnators
    for (let tier of tiers) {
        event.remove({ output: `powah:furnator_${tier}` })
    }

    // - Magmators
    for (let tier of tiers) {
        event.remove({ output: `powah:magmator_${tier}` })
    }

    // - Thermo Generators
    for (let tier of tiers) {
        event.remove({ output: `powah:thermo_generator_${tier}` })
    }
    event.remove('powah:crafting/thermoelectric_plate')

    // - Solar Panels
    for (let tier of tiers) {
        event.remove({ output: `powah:solar_panel_${tier}` })
    }
    event.remove('powah:crafting/photoelectric_pane')

    // - Cables
    for (let tier of tiers) {
        event.remove({ output: `powah:energy_cable_${tier}` })
    }

    // - Extra Energy Cell (Basic) recipe
    event.remove('powah:crafting/energy_cell_basic')


    // Thermal (Machine Stage) => Powah
    // Dielectric Paste is produced using dusts
    event.remove('powah:crafting/dielectric_paste')
    event.remove('powah:crafting/dielectric_paste_2')
    event.shapeless(
        '4x powah:dielectric_paste',
        [
            '1x #forge:dusts/obsidian',
            '1x #forge:dusts/lead',
            '2x minecraft:clay_ball'
        ]
    )

    // Powah basic machines requires Pneumaticcraft Plastic
    let powahRecipes = [
        'powah:crafting/wrench',
        'powah:crafting/dielectric_casing',
        'powah:crafting/energy_cell_starter',
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
        Item.of('powah:ender_core', 2),
        [
            Item.of('minecraft:ender_eye'),
            Item.of('ae2:singularity'),
        ],
        50000
    )

    // Update Ender Gate/Cell recipes

    for (let level of tiers) {
        event.remove({ output: `powah:ender_gate_${level}` })
        event.remove({ output: `powah:ender_cell_${level}` })
    }
    for (let i = 0; i < tiers.length; i++) {
        let tier = tiers[i]
        let material = materials[i]
        event.shaped(
            `powah:ender_gate_${tier}`,
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
            `powah:ender_cell_${tier}`,
            [
                'OOO',
                'OGO',
                'OOO',
            ],
            {
                O: 'minecraft:obsidian',
                G: `powah:ender_gate_${tier}`
            }
        )
    }
})