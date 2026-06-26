//DISABLED DUE TO RESPAWNING ANIMALS MOD BEING REMOVED

//Fun fact, there USED to be a way to do this without loading java classes. Well, not anymore!
/*
const Registries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

ServerEvents.tags('entity_type', event => {
    const blacklist = [ //These won't get tagged
        'adorablehamsterpets:hamster',
        'quark:crab',
        'quark:shiba',
        'quark:stoneling',
        'quark:toretoise',
        'crittersandcompanions:dragonfly',
        'minecraft:chicken'
    ]

    Registries.ENTITY_TYPE.forEach((entry) => {
        let id = entry.builtInRegistryHolder().key().location().toString()
        //The category check prevents tagging a bunch of entities for no reason, the mod checks for that anyway.
        if(!blacklist.includes(id) && entry.getCategory().getName() == "creature") {
            event.add("respawninganimals:persistent_animals",id);
        }
    });    
    
})
*/