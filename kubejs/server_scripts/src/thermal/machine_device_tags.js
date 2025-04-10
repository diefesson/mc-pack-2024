let dynamos_tag = 'thermal:dynamos'
let machines_tag = 'thermal:machines'
let devices_tag = 'thermal:devices'

let dynamos = [
    'thermal_extra:frost_dynamo'
]

let machines = [
    'thermal_extra:advanced_refinery',
    'thermal_extra:nitratic_igniter',
    'thermal_extra:fluid_mixer',
    'thermal_extra:component_assembly',
    'thermal_extra:endothermic_dehydrator',
]

let devices = [
    'thermal_extra:device_harvester',
    'thermal_extra:device_lava_gen',
    'thermal:device_tree_extractor',
    'thermal:device_composter',
    'thermal:device_water_gen',
    'thermal:device_rock_gen',
    'thermal:device_collector',
    'thermal:device_xp_condenser',
    'thermal:device_nullifier',
    'thermal:device_potion_diffuser',
]

ServerEvents.tags('item', event => {
    for (let i of dynamos) {
        event.add(dynamos_tag, i)
    }
    for (let i of machines) {
        event.add(machines_tag, i)
    }
    for (let i of devices) {
        event.add(devices_tag, i)
    }
})

ServerEvents.tags('block', event => {
    for (let i of dynamos) {
        event.add(dynamos_tag, i)
    }
    for (let i of machines) {
        event.add(machines_tag, i)
    }
    for (let i of devices) {
        event.add(devices_tag, i)
    }
})
