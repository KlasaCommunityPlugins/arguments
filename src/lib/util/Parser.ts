// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Collection } from 'discord.js';
import { ParserEntry } from './ParserFormer';

export class Parser {

  tags: Collection<string, ParserEntry>;

  constructor(options: ParserOptions = {}) {
    this.tags = options.tags || new Collection();
  }

  fetchTags() {
    return [...this.tags.values()].map((i) => i.tag);
  }

  fetchCleanTags() {
    return [...this.tags.values()].map((i) => i.cleanTag);
  }

  formRegex() {
    return new RegExp(`\{(${this.fetchCleanTags().join('|')})\}`, 'gi');
  }

}

export type ParserOptions = {
  tags?: Collection<string, ParserEntry>;
};
