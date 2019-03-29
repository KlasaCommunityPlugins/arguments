// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Collection } from 'discord.js';
import { ArgumentsProcesssData } from '../structures/Tag';
import { Parser, ParserOptions } from './Parser';

export class ParserFormer {
  parsers: Collection<string, ParserEntry> = new Collection();

  addParser(entry: ParserEntry) {
    return this.parsers.set(entry.tag, entry);
  }

  formParser(options: ParserOptions = {}): Parser {
    return new Parser({
      tags: this.parsers,
      ...options,
    });
  }
}

export type ParserEntry = {
  tag: string;
  cleanTag: string;
  parser(ctx: ArgumentsProcesssData): string;
};
