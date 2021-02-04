export type DateString = string

export type AggregatedValue = string | number
export type ColumnValue = string | number

export interface TableDatum {
    value: AggregatedValue
    columns: {[field: string]: ColumnValue}
}
export type TableData = Array<TableDatum>


export interface FbStatDatumRaw {
    "Lifetime Post Total Reach": number
    "Publié": DateString
}

export interface FbStatDatum {
    "Lifetime Post Total Reach": number
    "Publié": Date
}

export type FbStatDatumNumberFields = "Lifetime Post Total Reach"

export type FbStatDataRaw = Array<FbStatDatumRaw>
export type FbStatData = Array<FbStatDatum>