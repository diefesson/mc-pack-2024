// Import necessary classes
const Registry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
const blockRegistry = Registry.BLOCK

ServerEvents.tags("block", event => {
    Registry.BLOCK.keySet().forEach(block => {
        /** @type {string}*/
        let id = block.toString()

        if (
            (
                id.includes('brick') ||
                id.includes('chiseled') ||
                id.includes('cracked') ||
                id.includes('tiles') ||
                id.includes('polished') ||
                id.includes('pavers') ||
                id.includes('plates') ||
                id.includes('pillar') ||
                id.includes('shingles') ||
                id.includes('stair') ||
                id.includes('planks') ||
                id.includes('slab') ||
                id.includes('wool') ||
                id.includes('carpet') ||
                id.includes('treated_wood') ||
                id.includes('concrete') ||
                false
            ) &&
            !(
                id.includes('wall') ||
                id.includes('plastic_brick') ||
                id.includes('bookshelf') ||
                id.includes('powder') ||
                id.includes('sprayed') ||
                id.includes('pot') ||
                id.includes('framedblocks:') ||
                false
            )
        ) {
            event.add('diefalpha:building_blocks', id)
        }

        if (
            (
                id.includes('path') ||
                false
            )
        ) {
            event.add('diefalpha:road_blocks', id)
        }
    })
})