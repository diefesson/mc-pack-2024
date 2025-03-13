ServerEvents.recipes(event => {
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