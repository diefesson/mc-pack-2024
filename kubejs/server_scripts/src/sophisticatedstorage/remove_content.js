let sophisticatedStorageUpgrades = [
    // Stack Upgrades
    'sophisticatedstorage:stack_upgrade_tier_1',
    'sophisticatedstorage:stack_upgrade_tier_1_plus',
    'sophisticatedstorage:stack_upgrade_tier_2',
    'sophisticatedstorage:stack_upgrade_tier_3',
    'sophisticatedstorage:stack_upgrade_tier_4',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_omega_tier',
    'sophisticatedstorage:survival_infinity_upgrade',
    // Stack Downgrades
    'sophisticatedstorage:stack_downgrade_tier_1',
    'sophisticatedstorage:stack_downgrade_tier_2',
    'sophisticatedstorage:stack_downgrade_tier_3',
    // Other Upgrades
    'sophisticatedstorage:pickup_upgrade',
    'sophisticatedstorage:advanced_pickup_upgrade',
    'sophisticatedstorage:magnet_upgrade',
    'sophisticatedstorage:advanced_magnet_upgrade',
    'sophisticatedstorage:advanced_magnet_upgrade_from_basic',
    'sophisticatedstorage:feeding_upgrade',
    'sophisticatedstorage:advanced_feeding_upgrade',
    'sophisticatedstorage:smelting_upgrade',
    'sophisticatedstorage:auto_smelting_upgrade',
    'sophisticatedstorage:smoking_upgrade',
    'sophisticatedstorage:auto_smoking_upgrade',
    'sophisticatedstorage:blasting_upgrade',
    'sophisticatedstorage:auto_blasting_upgrade',
    'sophisticatedstorage:pump_upgrade',
    'sophisticatedstorage:advanced_pump_upgrade',
    'sophisticatedstorage:xp_pump_upgrade',
    'sophisticatedstorage:alchemy_upgrade',
    'sophisticatedstorage:advanced_alchemy_upgrade',
]

ServerEvents.recipes(event => {
    for (let upgrade of sophisticatedStorageUpgrades) {
        event.remove({ output: upgrade })
    }
})

ServerEvents.tags('item', event => {
    for (let upgrade of sophisticatedStorageUpgrades) {
        event.add('c:hidden_from_recipe_viewers', upgrade)
    }
})