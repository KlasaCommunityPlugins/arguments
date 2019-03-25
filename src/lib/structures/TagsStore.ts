// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Builder, Parser } from 'breadtags';
import { Store } from 'klasa';
import { ArgumentsClient } from '../Client';
import { Tag } from './Tag';

/**
 * Stores all the Tags that are part of the plugin
 * @extends external:Store
 */
export class TagStore extends Store<string, Tag> {
	/**
	 * @since 0.0.1
	 * @param {ArgumentsClient} client The Klasa client
	 */
	constructor(client: ArgumentsClient, coreDirectory: string) {
		super(client, 'tags', Tag);
		this.registerCoreDirectory(coreDirectory);
	}

	async loadAll(): Promise<number> {
		const load = await super.loadAll();
		for (const build of this.values()) {
			const b = build.run() as Builder;
			Parser.loadTag(b);
		}
		return load;
	}
}
