// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Piece, PieceOptions } from 'klasa';
import { ArgumentsClient as Client } from '../Client';
import { TagStore } from './TagsStore';

/**
 * Base class for all Bread Tags Builder. See {@tutorial CreatingTags} for more information how to use this class
 * to build custom tags.
 * @tutorial CreatingTags
 * @extends external:Piece
 */
export class Tag extends Piece {

	/**
	 * @since 0.0.1
	 * @param {Client} client The Klasa client
	 * @param {TagStore} store The TAg Store
	 * @param {string} file The path from the pieces folder to the event file
	 * @param {boolean} core If the piece is in the core directory or not
	 * @param {external:PieceOptions} [options={}] Optional Tag settings
	 */
	constructor(client: Client, store: TagStore, file: string[], directory: string, options: PieceOptions = {}) {
		super(client, store, file, directory, options);
	}
}
