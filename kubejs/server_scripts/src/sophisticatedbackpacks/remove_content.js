let sophisticatedBackpackUpgrades = [
    // Stack Upgrades
    'sophisticatedbackpacks:stack_upgrade_starter_tier',
    'sophisticatedbackpacks:stack_upgrade_tier_1',
    'sophisticatedbackpacks:stack_upgrade_tier_2',
    'sophisticatedbackpacks:stack_upgrade_tier_3',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'sophisticatedbackpacks:stack_upgrade_omega_tier',
    'sophisticatedbackpacks:survival_infinity_upgrade',
    // Stack Downgrades
    'sophisticatedbackpacks:stack_downgrade_tier_1',
    'sophisticatedbackpacks:stack_downgrade_tier_2',
    'sophisticatedbackpacks:stack_downgrade_tier_3',
    // Other Upgrades
    'sophisticatedbackpacks:magnet_upgrade',
    'sophisticatedbackpacks:advanced_magnet_upgrade',
    'sophisticatedbackpacks:feeding_upgrade',
    'sophisticatedbackpacks:advanced_feeding_upgrade',
    'sophisticatedbackpacks:inception_upgrade',
    'sophisticatedbackpacks:smelting_upgrade',
    'sophisticatedbackpacks:auto_smelting_upgrade',
    'sophisticatedbackpacks:smoking_upgrade',
    'sophisticatedbackpacks:auto_smoking_upgrade',
    'sophisticatedbackpacks:blasting_upgrade',
    'sophisticatedbackpacks:auto_blasting_upgrade',
    'sophisticatedbackpacks:battery_upgrade',
    'sophisticatedbackpacks:pump_upgrade',
    'sophisticatedbackpacks:advanced_pump_upgrade',
    'sophisticatedbackpacks:xp_pump_upgrade',
    'sophisticatedbackpacks:anvil_upgrade',
    'sophisticatedbackpacks:smithing_upgrade',
    'sophisticatedbackpacks:tank_upgrade',
]

ServerEvents.recipes(event => {
    for (let upgrade of sophisticatedBackpackUpgrades) {
        event.remove({ output: upgrade })
    }
})

ServerEvents.tags('item', event => {
    for (let upgrade of sophisticatedBackpackUpgrades) {
        event.add('c:hidden_from_recipe_viewers', upgrade)
    }
})