import { Store } from 'klasa';
import { ArgumentsClient } from '../Client';
import { Tag } from './Tag';
/**
 * Stores all the Tags that are part of the plugin
 * @extends external:Store
 */
export declare class TagStore extends Store<string, Tag> {
    /**
     * @since 0.0.1
     * @param {ArgumentsClient} client The Klasa client
     */
    constructor(client: ArgumentsClient, coreDirectory: string);
    loadAll(): Promise<number>;
}
