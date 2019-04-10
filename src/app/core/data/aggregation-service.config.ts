///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
export enum AggregationType { count, sum, min, max, average }

export class AggregationServiceConfig {
    public collection: string;
    public key: string;
    public items: Array<{ property: string; aggregation: AggregationType }>;
}
