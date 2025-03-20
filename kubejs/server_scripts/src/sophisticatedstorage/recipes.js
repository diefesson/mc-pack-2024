ServerEvents.recipes(event => {
    let upgrades = [
        'sophisticatedstorage:pickup_upgrade',
        'sophisticatedstorage:advanced_pickup_upgrade',
        'sophisticatedstorage:filter_upgrade',
        'sophisticatedstorage:advanced_filter_upgrade',
        'sophisticatedstorage:magnet_upgrade',
        'sophisticatedstorage:advanced_magnet_upgrade',
        'sophisticatedstorage:advanced_magnet_upgrade_from_basic',
        'sophisticatedstorage:feeding_upgrade',
        'sophisticatedstorage:advanced_feeding_upgrade',
        'sophisticatedstorage:compacting_upgrade',
        'sophisticatedstorage:advanced_compacting_upgrade',
        'sophisticatedstorage:void_upgrade',
        'sophisticatedstorage:advanced_void_upgrade',
        'sophisticatedstorage:smelting_upgrade',
        'sophisticatedstorage:auto_smelting_upgrade',
        'sophisticatedstorage:smoking_upgrade',
        'sophisticatedstorage:auto_smoking_upgrade',
        'sophisticatedstorage:blasting_upgrade',
        'sophisticatedstorage:auto_blasting_upgrade',
        'sophisticatedstorage:crafting_upgrade',
        'sophisticatedstorage:stonecutter_upgrade',
        'sophisticatedstorage:jukebox_upgrade',
        'sophisticatedstorage:advanced_jukebox_upgrade',
        'sophisticatedstorage:pump_upgrade',
        'sophisticatedstorage:advanced_pump_upgrade',
        'sophisticatedstorage:xp_pump_upgrade',
        'sophisticatedstorage:compression_upgrade',
        'sophisticatedstorage:hopper_upgrade',
        'sophisticatedstorage:advanced_hopper_upgrade',
    ]

    for (let upgrade of upgrades) {
        event.remove({ output: upgrade })
    }

    event.replaceInput(
        'sophisticatedstorage:stack_upgrade_tier_1_plus',
        '#forge:ingots/copper',
        '#forge:storage_blocks/copper',
    )

    event.replaceInput(
        'sophisticatedstorage:stack_upgrade_tier_2',
        '#forge:ingots/iron',
        '#forge:storage_blocks/iron',
    )

    event.replaceInput(
        'sophisticatedstorage:stack_upgrade_tier_2_from_tier_1_plus',
        '#forge:ingots/iron',
        '#forge:storage_blocks/iron',
    )

    event.replaceInput(
        'sophisticatedstorage:stack_upgrade_tier_3',
        '#forge:ingots/gold',
        '#forge:storage_blocks/gold',
    )

    event.replaceInput(
        'sophisticatedstorage:stack_upgrade_tier_4',
        '#forge:gems/diamond',
        '#forge:storage_blocks/diamond',
    )

    event.replaceInput(
        'sophisticatedstorage:stack_upgrade_tier_5',
        '#forge:ingots/netherite',
        '#forge:storage_blocks/netherite',
    )
})