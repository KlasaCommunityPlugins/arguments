// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaClientOptions, util } from 'klasa';
import { join } from 'path';
import { TagStore } from './structures/TagsStore';

import { OPTIONS } from './util/CONSTANTS';

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
export class TagsClient extends Client {

	/**
	 * @typedef {external:KlasaClientOptions} TagsClientOptions
	 * @property {TagsOptions} [tags={}]
	 */

	/**
	 * @typedef {Object} TagsOptions
	 */

	/**
	 * Constructs the tags client.
	 * @since 0.0.1
	 * @param {TagsClientOptions} options The config to pass to the new client
	 */
	constructor(options?: KlasaClientOptions) {
		super(options);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		const typedThis = this as unknown as TagsClient;
		const coreDirectory = join(__dirname, '..', '/');
		util.mergeDefault(OPTIONS, typedThis.options);

		/**
		 * The cache where tags are stored
		 * @since 0.0.1
		 * @type {TagStore}
		 * @name TagStore#tags
		 */
		typedThis.tags = new TagStore(typedThis, coreDirectory);

		typedThis.registerStore(typedThis.tags);
	}

}

declare module 'discord.js' {
	interface Client {
		tags: TagStore;
	}

	interface ClientOptions {
		tags: {
		};
	}
}
