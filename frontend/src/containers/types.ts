export interface DataItem {
	name: string,
	min: number,
	max: number
}

export interface PotabilityData {
	name: string,
	value: number
}

export interface AnalysisData {
	colNames: string[],
	data: any
}

export interface AverageData {
	categories: string,
	avg: number
}

