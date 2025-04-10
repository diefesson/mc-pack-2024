ServerEvents.recipes(event => {
    // Thermal Extra harvester uses RF, so it should have a RF Coil
    event.replaceInput(
        'thermal_extra:crafting/device_harvester',
        'thermal:redstone_servo',
        'thermal:rf_coil',
    )
})