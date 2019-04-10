///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
export interface FilterDescriptor {
    field?: string | Function;
    operator: string | Function;
    value?: any;
    ignoreCase?: boolean;
}

export interface CompositeFilterDescriptor {
    logic: 'or' | 'and';
    filters: Array<FilterDescriptor | CompositeFilterDescriptor>;
}

export const isCompositeFilterDescriptor = source => source.filters !== null && source.filters !== undefined;
