// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, Tag, TagStore, version } from '../index';

export default class ArgumentsVersion extends Tag {
  constructor(client: Client, store: TagStore, file: string[], directory: string) {
		super(client, store, file, directory, { enabled: true });
  }

  run() {
		return new this.Builder()
			.setDescription('Displays the version of the arguments plugin')
			.hasAction(false)
			.requiredArgs(0)
			.setProcess((_) => version);
	}
}
