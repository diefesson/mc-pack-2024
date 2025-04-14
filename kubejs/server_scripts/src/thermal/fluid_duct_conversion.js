ServerEvents.recipes(event => {
    event.shapeless(
        'thermal:fluid_duct_windowed',
        ['thermal:fluid_duct']
    )
    event.shapeless(
        'thermal:fluid_duct',
        ['thermal:fluid_duct_windowed']
    )
})