///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { SortDescriptor } from '@src/app/core/data/state/sort-descriptor.interface';
import { CompositeFilterDescriptor } from '@src/app/core/data/state/filter-descriptor.interface';

export interface CollectionState {
    skip?: number;
    take?: number;
    sort?: Array<SortDescriptor>;
    filter?: CompositeFilterDescriptor;
    group?: Array<any>;
}
