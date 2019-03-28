// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Collection } from 'discord.js';
import { ArgumentsProcesssData } from '../structures/Tag';
import { Parser, ParserOptions } from './Parser';

export class ParserFormer {
  types: string[] = [];
  cleanTypes: string[] = [];

  parsers: Collection<string, ParserEntry> = new Collection();

  formParser(options: ParserOptions = {}): Parser {
    return new Parser({
      cleanTypes: this.cleanTypes,
      types: this.types,
      ...options,
    });
  }
}

export type ParserEntry = (ctx: ArgumentsProcesssData) => string;
