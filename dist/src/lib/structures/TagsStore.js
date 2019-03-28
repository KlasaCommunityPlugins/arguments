"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
const breadtags_1 = require("breadtags");
const klasa_1 = require("klasa");
const Tag_1 = require("./Tag");
/**
 * Stores all the Tags that are part of the plugin
 * @extends external:Store
 */
class TagStore extends klasa_1.Store {
    /**
     * @since 0.0.1
     * @param {ArgumentsClient} client The Klasa client
     */
    constructor(client, coreDirectory) {
        super(client, 'tags', Tag_1.Tag);
        this.registerCoreDirectory(coreDirectory);
    }
    async loadAll() {
        const load = await super.loadAll();
        for await (const builder of this.values()) {
            const built = await builder.build();
            breadtags_1.Parser.loadTag(built);
        }
        return load;
    }
}
exports.TagStore = TagStore;
