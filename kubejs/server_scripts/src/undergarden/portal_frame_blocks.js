ServerEvents.tags('block', event => {
    event.removeAll('undergarden:portal_frame_blocks')
    event.add('undergarden:portal_frame_blocks', 'minecraft:nether_bricks')
    event.add('undergarden:portal_frame_blocks', 'undergarden:shiverstone_bricks')
})