///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ContentChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { View } from 'tns-core-modules/ui/core/view';
import { ListViewEventData } from 'nativescript-ui-listview';
import { RadListViewComponent } from 'nativescript-ui-listview/angular';

import { NavigationService } from '@src/app/core/services/navigation.service';
import { CollectionDataService } from '@src/app/core/data/collection-data.service';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';

@Component({
    selector: 'ks-list-view',
    templateUrl: './list-view.component.html'
})
export class KSListViewComponent {
    @Input()
    public dataService: CollectionDataService<any>;

    @Input()
    public navigateOnItemTap: any;

    @ContentChild(RadListViewComponent)
    protected listViewComponent: RadListViewComponent;

    constructor(
        protected navigationService: NavigationService,
        protected activatedRoute: ActivatedRoute) { }

    public onItemTap(args: ListViewEventData) {
        if (!this.navigateOnItemTap || !this.navigateOnItemTap.module || !this.navigateOnItemTap.view) {
            return;
        }

        const command = [this.navigateOnItemTap.module, this.navigateOnItemTap.view];
        const selectedId = args && args.view && args.view.bindingContext && args.view.bindingContext._id;
        if (selectedId) {
            command.push(selectedId);
        }

        this.navigationService.navigate(command, { relativeTo: this.activatedRoute });
    }

    public onPullToRefreshInitiated({ object: listView }: ListViewEventData) {
        this.dataService.refresh().then(() => listView.notifyPullToRefreshFinished());
    }

    public onLoadMoreDataRequested({ object: listView }: ListViewEventData) {
        this.dataService.loadMore().then(() => listView.notifyLoadOnDemandFinished());
    }

    public onSwipeCellStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const swipeView = args.object;
        const rightItem = swipeView.getViewById<View>('delete-view');
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }

    public onRightSwipeClick({ object: listView }: ListViewEventData) {
        this.dataService.remove(listView.bindingContext);
    }
}
