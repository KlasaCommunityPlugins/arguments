// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, Tag, TagStore, version } from '../index';

export default class ArgumentsVersion extends Tag {
  constructor(client: Client, store: TagStore, file: string[], directory: string) {
		super(client, store, file, directory, {
      action: false,
      enabled: true,
    });
  }

  run() {
		return version;
	}
}
