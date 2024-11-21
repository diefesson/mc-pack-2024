const SAWDUST = 'thermal:sawdust'
const ASH = 'supplementaries:ash'

ServerEvents.recipes(event => {
    event.smelting(ASH, SAWDUST, 0.1, 20)
})