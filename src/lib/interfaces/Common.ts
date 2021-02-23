export interface KeyValuePair {
    [key: string] : string
}

export interface KeyValuePairWithDefault {
    default: string
    [key: string] : string
}