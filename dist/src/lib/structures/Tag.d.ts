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
export declare class Tag extends Piece {
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
    constructor(client: Client, store: TagStore, file: string[], directory: string, options?: TagOptions);
    run(ctx: ArgumentsProcesssData): string | void;
    build(): Builder;
}
export declare type ArgumentsProcesssData = {
    [K: string]: any;
    args: any[];
};
