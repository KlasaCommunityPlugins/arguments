// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
export class Parser {

  cleanTypes: string[];
  types: string[];

  constructor(options: ParserOptions = {}) {
    this.cleanTypes = options.cleanTypes || [];
    this.types = options.types || [];
  }

}

export type ParserOptions = {
  types?: string[];
  cleanTypes?: string[];
};
