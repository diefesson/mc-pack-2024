LevelEvents.tick(event => {
    if (!global.occultism_reload) {
        global.occultism_reload = true 
        event.server.runCommandSilent(`reload`)
    }
});
