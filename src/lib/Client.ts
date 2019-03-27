// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Parser, ParserOptions } from 'breadtags';
import { Client, KlasaClientOptions, PieceOptions, util } from 'klasa';
import { join } from 'path';
import { TagStore } from './structures/TagsStore';

import { OPTIONS } from './util/CONSTANTS';

export interface TagOptions extends PieceOptions {
	description?: string;
	tagType?: string;
	args?: number;
	action?: boolean;
}

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
export class ArgumentsClient extends Client {

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
	constructor(options?: KlasaClientOptions) {
		super(options);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		const typedThis = this as unknown as ArgumentsClient;
		const coreDirectory = join(__dirname, '..', '/');
		util.mergeDefault(OPTIONS, typedThis.options);

		/**
		 * The cache where tags are stored
		 * @since 0.0.1
		 * @type {TagStore}
		 * @name ArgumentsClient#tags
		 */
		typedThis.tags = new TagStore(typedThis, coreDirectory);

		// @ts-ignore
		typedThis.tags.registerCoreDirectory(coreDirectory);

		typedThis.parser = new Parser(typedThis.options.arguments.parser);

		typedThis.registerStore(typedThis.tags);
	}

}

declare module 'klasa' {
	interface PieceDefaults {
		tags?: TagOptions;
	}
}

declare module 'discord.js' {
	interface Client {
		tags: TagStore;
		parser: Parser;
	}

	interface ClientOptions {
		arguments: {
			parser: ParserOptions;
		};
	}
}
