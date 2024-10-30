const PHYTOSOIL_TILLED = 'thermal:phytosoil_tilled'
const FARMER_PLANTABLE_ON = 'smarterfarmers:farmer_plantable_on'

ServerEvents.tags('block', event => {
    event.add(FARMER_PLANTABLE_ON, PHYTOSOIL_TILLED)
})
