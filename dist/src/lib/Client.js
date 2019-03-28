"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
const breadtags_1 = require("breadtags");
const klasa_1 = require("klasa");
const path_1 = require("path");
const TagsStore_1 = require("./structures/TagsStore");
const CONSTANTS_1 = require("./util/CONSTANTS");
/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
class ArgumentsClient extends klasa_1.Client {
    /**
     * @typedef {external:KlasaClientOptions} ArgumentsClientOptions
     * @property {ArgumentsOptions} [arguments={}]
     * @property {ArgumentsClientPieceDefaults} [pieceDefaults={}] Overrides the defaults for all pieces
     */
    /**
     * @typedef {external:KlasaPieceDefaults} ArgumentsClientPieceDefaults
     * @property {TagOptions} [tags={}]
     */
    /**
     * @typedef {Object} ArgumentsOptions
     */
    /**
     * Constructs the arguments client.
     * @since 0.0.1
     * @param {ArgumentsClientOptions} options The config to pass to the new client
     */
    constructor(options) {
        super(options);
        // @ts-ignore
        this.constructor[klasa_1.Client.plugin].call(this);
    }
    static [klasa_1.Client.plugin]() {
        const typedThis = this;
        const coreDirectory = path_1.join(__dirname, '..', '/');
        klasa_1.util.mergeDefault(CONSTANTS_1.OPTIONS, typedThis.options);
        /**
         * The cache where tags are stored
         * @since 0.0.1
         * @type {TagStore}
         * @name ArgumentsClient#tags
         */
        typedThis.tags = new TagsStore_1.TagStore(typedThis, coreDirectory);
        // @ts-ignore
        typedThis.tags.registerCoreDirectory(coreDirectory);
        typedThis.parser = new breadtags_1.Parser(typedThis.options.arguments.parser);
        typedThis.registerStore(typedThis.tags);
    }
}
exports.ArgumentsClient = ArgumentsClient;
