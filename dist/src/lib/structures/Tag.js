"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
const breadtags_1 = require("breadtags");
const klasa_1 = require("klasa");
/**
 * Base class for all Bread Tags Builder. See {@tutorial CreatingTags} for more information how to use this class
 * to build custom tags.
 * @tutorial CreatingTags
 * @extends external:Piece
 */
class Tag extends klasa_1.Piece {
    /**
     * @since 0.0.1
     * @param {Client} client The Klasa client
     * @param {TagStore} store The Tag Store
     * @param {string} file The path from the pieces folder to the event file
     * @param {boolean} core If the piece is in the core directory or not
     * @param {TagOptions} [options={}] Optional Tag settings
     */
    constructor(client, store, file, directory, options = {}) {
        super(client, store, file, directory, options);
        this.tagType = options.tagType || options.name;
        this.description = options.description || '';
        this.args = options.args || 0;
        this.action = options.action || false;
    }
    run() {
        throw new Error(`${this.type}::${this.name}: Run method was not overwritten!`);
    }
    build() {
        return new breadtags_1.Builder()
            .setDescription(this.description)
            .setType(this.tagType)
            .hasAction(this.action)
            .requiredArgs(this.args)
            .setProcess(this.run);
    }
}
exports.Tag = Tag;
