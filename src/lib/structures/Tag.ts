// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Collection } from 'discord.js';
import { Piece } from 'klasa';
import { ArgumentsClient as Client, TagOptions } from '../Client';
import { TagStore } from './TagsStore';

const variables: Collection<string, any> = new Collection();

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

	cleanTagType: string;

	private variables: Collection<string, any> = variables;

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

		this.cleanTagType = this.tagType.replace(/[.]/gi, '\\$&');
	}

	run(ctx: ArgumentsProcesssData): string | void;
	run(): void {
		throw new Error(`${this.type}::${this.name}: Run method was not overwritten!`);
	}

	addVariable(K: string, V: any): Collection<string, any> {
		return this.variables.set(K, V);
	}

	getVariable(K: string): any {
		return this.variables.get(K);
	}

	fetchVariables(): Collection<string, any> {
		return this.variables;
	}

}

export type ArgumentsProcesssData = {
  [K: string]: any;
  args: any[];
};
