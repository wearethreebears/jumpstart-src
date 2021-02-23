export interface Boilerplate {
    class : string
}

export interface BoilerplatePart extends Boilerplate {
	children?: {
		[key: string] : BoilerplatePart
	}
}