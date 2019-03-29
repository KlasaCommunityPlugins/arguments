// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Store } from 'klasa';
import { ArgumentsClient } from '../Client';
import { ArgumentsProcesssData, Tag } from './Tag';

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
		for await (const builder of this.values()) {
			const former = this.client.parser.former;
			former.addParser({
				cleanTypeTag: builder.cleanTagType,
				parser: (builder.run as ((ctx: ArgumentsProcesssData) => string)),
				tag: builder,
				typeTag: builder.tagType,
			});
		}
		this.client.parser = {
			former: this.client.parser.former,
			parser: this.client.parser.former.formParser(),
		};
		return load;
	}
}
