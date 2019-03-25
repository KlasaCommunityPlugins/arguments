declare module 'bread-tags' {
	export class TagBuilder {
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

	export class TagsParser {
		public constructor(options?: ParserOptions);
		public errorLogging?: boolean;
		public throwErrors?: boolean;
		private tags: Map<string, TagBuilder>;

		public static loadTag(tags: TagBuilder | TagBuilder[]): void;
	}

	export type ParserOptions = {
		errorLogging: boolean;
		throwErrors: boolean;
		disabledTags: string[];
	};

	export type processParams = {
		addVar: (key: string, val: any) => Map<string, any>;
		getVar: (key: string) => any;
	} & processsData;

	export type processsData = {
		[K: string]: any;
	};
}
