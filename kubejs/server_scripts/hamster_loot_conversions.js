/*
LootJS.lootTables(event => {
    event
        .getLootTable("adorablehamsterpets:blocks/cucumber_crop")
        .firstPool()
        .modifyItemEntry(entry => {
            if (entry.item.id === "adorablehamsterpets:cucumber") {
                return LootEntry.of("kubejs:cucumber")
            }
            return entry
        })


    event
        .getLootTable("adorablehamsterpets:blocks/green_beans_crop")
        .firstPool()
        .modifyItemEntry(entry => {
            if (entry.item.id === "adorablehamsterpets:green_beans") {
                return LootEntry.of("kubejs:green_beans")
            }
            return entry
        })
})
*/