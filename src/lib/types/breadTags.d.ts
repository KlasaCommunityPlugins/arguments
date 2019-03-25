declare module 'bread-tags' {
	export class TagBuilder {
		public constructor();
		public type: string[];
		public description: string | null;
		private action: boolean | null;
		private args: number;
		private process: ((data: processParams) => any) | null;
		private variables: Map<string, any>;
	}

	export type processParams = {
		addVar: (key: string, val: any) => Map<string, any>;
		getVar: (key: string) => any;
	} & processsData;

	export type processsData = {
		[K: string]: any;
	}
}
