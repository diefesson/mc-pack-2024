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
                false
            ) &&
            !(
                id.includes('stair') ||
                id.includes('slab') ||
                id.includes('wall') ||
                id.includes('plastic_brick') ||
                id.includes('bookshelf') ||
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