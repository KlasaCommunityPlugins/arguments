// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
declare module 'breadtags' {
	export class Builder {
		public constructor();
		public type: string[];
		public description: string | null;
		private action: boolean | null;
		private args: number;
		private process: ((data: processParams) => any) | null;
		private variables: Map<string, any>;

		public setType(type: string | string[]): this;
		public setDescription(description: string): this;
		public hasAction(action?: boolean): this;
		public requiredArgs(num: number): this;
		public setProcess(fn: ((data: processParams) => any), thisArg: any): this;
		public onUse(input: any, data: processsData): string;
	}

	export class Parser {
		public constructor(options?: ParserOptions);
		public errorLogging?: boolean;
		public throwErrors?: boolean;
		private tags: Map<string, Builder>;

		public get(tag: string): Builder | null;

		public static loadTag(tags: Builder | Builder[]): void;
	}

	export type ParserOptions = {
		errorLogging?: boolean;
		throwErrors?: boolean;
		disabledTags?: string[];
	};

	export type processParams = {
		addVar: (key: string, val: any) => Map<string, any>;
		getVar: (key: string) => any;
	} & processsData;

	export type processsData = {
		[K: string]: any;
	};
}
