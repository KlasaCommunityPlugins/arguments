// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Builder } from 'breadtags';
import { Piece } from 'klasa';
import { ArgumentsClient as Client, TagOptions } from '../Client';
import { TagStore } from './TagsStore';

/**
 * Base class for all Bread Tags Builder. See {@tutorial CreatingTags} for more information how to use this class
 * to build custom tags.
 * @tutorial CreatingTags
 * @extends external:Piece
 */
export class Tag extends Piece {
	tagType: string;
	description: string;
	args: number;
	action: boolean;

	/**
	 * @since 0.0.1
	 * @param {Client} client The Klasa client
	 * @param {TagStore} store The Tag Store
	 * @param {string} file The path from the pieces folder to the event file
	 * @param {boolean} core If the piece is in the core directory or not
	 * @param {TagOptions} [options={}] Optional Tag settings
	 */
	constructor(client: Client, store: TagStore, file: string[], directory: string, options: TagOptions = {}) {
		super(client, store, file, directory, options);

		this.tagType = options.tagType || options.name!;
		this.description = options.description || '';
		this.args = options.args || 0;
		this.action = options.action || false;
	}

	run(ctx: ArgumentsProcesssData): string | void;
	run(): void {
		throw new Error(`${this.type}::${this.name}: Run method was not overwritten!`);
	}

	build(): Builder {
		return new Builder()
			.setDescription(this.description)
			.setType(this.tagType)
			.hasAction(this.action)
			.requiredArgs(this.args)
			.setProcess(this.run);
	}

}

export type ArgumentsProcesssData = {
  [K: string]: any;
  args: any[];
};
