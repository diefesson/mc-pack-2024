ServerEvents.recipes(event => {
    let recipes = [
        'computercraft:computer_normal',
        'computercraft:computer_advanced',
        'computercraft:turtle_normal',
        'computercraft:turtle_advanced',
        'computercraft:pocket_computer_normal',
        'computercraft:pocket_computer_advanced',
        'computercraft:wireless_modem_normal',
        'computercraft:wireless_modem_advanced',
        'computercraft:monitor_normal',
        'computercraft:monitor_advanced',
        'computercraft:speaker',
        'computercraft:printer',
        'computercraft:disk_drive',
    ]

    for (let recipe of recipes) {
        event.replaceInput(
            recipe,
            'minecraft:stone',
            'minecraft:iron_ingot',
        )
        event.replaceInput(
            recipe,
            'minecraft:redstone',
            'pneumaticcraft:printed_circuit_board',
        )
        event.replaceInput(
            recipe,
            '#c:glass_panes',
            'minecraft:tinted_glass',
        )
        event.replaceInput(
            recipe,
            'minecraft:golden_apple',
            'pneumaticcraft:module_expansion_card'
        )
        event.replaceInput(
            recipe,
            '#forge:ender_pearls',
            'ae2:wireless_receiver',
        )
        event.replaceInput(
            recipe,
            'minecraft:ender_eye',
            'ae2:wireless_receiver',
        )
    }

    event.replaceInput(
        'computercraft:cable',
        'minecraft:stone',
        'pneumaticcraft:plastic',
    )

    event.replaceInput(
        'computercraft:redstone_relay',
        'minecraft:stone',
        'minecraft:copper_ingot',
    )
})