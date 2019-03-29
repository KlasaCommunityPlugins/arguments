// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client as KlasaClient } from 'klasa';
import { ArgumentsClient as Client, TagOptions } from './lib/Client';
import { ArgumentsProcesssData, Tag } from './lib/structures/Tag';
import { TagStore } from './lib/structures/TagsStore';
import { VERSION } from './lib/util/CONSTANTS';

export { Client, VERSION, TagStore, Tag, ArgumentsProcesssData, TagOptions };
// @ts-ignore
exports[KlasaClient.plugin] = Client[KlasaClient.plugin];

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
