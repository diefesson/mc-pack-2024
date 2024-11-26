const COBALT_OBSIDIAN = 'regions_unexplored:cobalt_obsidian'
const OBSIDIANS_TAG = 'forge:obsidian'

ServerEvents.tags('block', event => {
    event.add(OBSIDIANS_TAG, COBALT_OBSIDIAN)
})

ServerEvents.tags('item', event => {
    event.add(OBSIDIANS_TAG, COBALT_OBSIDIAN)
})
