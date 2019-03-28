import { Parser, ParserOptions } from 'breadtags';
import { Client, KlasaClientOptions, PieceOptions } from 'klasa';
import { TagStore } from './structures/TagsStore';
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
export declare class ArgumentsClient extends Client {
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
    constructor(options?: KlasaClientOptions);
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
