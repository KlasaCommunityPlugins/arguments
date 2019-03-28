import { Client, Tag, TagStore } from '../index';
export default class ArgumentsVersion extends Tag {
    constructor(client: Client, store: TagStore, file: string[], directory: string);
    run(): string;
}
