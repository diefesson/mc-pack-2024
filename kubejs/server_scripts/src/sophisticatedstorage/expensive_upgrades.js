ServerEvents.recipes(event => {
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