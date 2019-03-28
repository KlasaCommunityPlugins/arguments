"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
const klasa_1 = require("klasa");
const package_json_1 = require("../package.json");
exports.version = package_json_1.version;
const Client_1 = require("./lib/Client");
exports.Client = Client_1.ArgumentsClient;
const Tag_1 = require("./lib/structures/Tag");
exports.Tag = Tag_1.Tag;
const TagsStore_1 = require("./lib/structures/TagsStore");
exports.TagStore = TagsStore_1.TagStore;
// @ts-ignore
exports[klasa_1.Client.plugin] = Client_1.ArgumentsClient[klasa_1.Client.plugin];
/**
 * @external KlasaClient
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/KlasaClient}
 */
/**
 * @external KlasaClientOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaClientOptions}
 */
/**
 * @external KlasaPieceDefaults
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaPieceDefaults}
 */
/**
 * @external PieceOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/PieceOptions}
 */
/**
 * @external Piece
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Piece}
 */
/**
 * @external Store
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Store}
 */
