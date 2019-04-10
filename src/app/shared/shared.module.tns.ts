///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms'
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeChatModule } from "@progress-nativechat/nativescript-nativechat/angular";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";

import { HideNavBarDirective } from "@src/app/shared/directives/hide-nav-bar.directive";
import { ShowNavBarDirective } from "@src/app/shared/directives/show-nav-bar.directive";
import { ActionBarControllerDirective } from "@src/app/shared/directives/action-bar-controller.directive";
import { ChatComponent } from '@src/app/shared/components/mobile-chat/chat.component'
import { KSButtonComponent } from '@src/app/shared/components/mobile-button/button.component';
import { KSListViewComponent } from '@src/app/shared/components/mobile-list-view/list-view.component';
import { KSNavigationLabelComponent } from '@src/app/shared/components/mobile-navigation-label/navigation-label.component';
import { KSSearchBarComponent } from '@src/app/shared/components/mobile-search-bar/search-bar.component';
import { KSFormComponent} from "@src/app/shared/components/mobile-form/form.component"
import { KSTakePictureComponent } from '@src/app/shared/components/mobile-take-picture/take-picture.component'
import { KSDateTimePickerComponent } from '@src/app/shared/components/mobile-date-time-picker/date-time-picker.component';

import { config, transformConfig } from '@src/app/shared/shared.config';

const configMeta: NgModule = {
    providers: [
        ...config.providers
    ],
    declarations: [
        HideNavBarDirective,
        ShowNavBarDirective,
        ActionBarControllerDirective,
        ChatComponent,
        KSButtonComponent,
        KSListViewComponent,
        KSNavigationLabelComponent,
        KSSearchBarComponent,
        KSFormComponent,
        KSTakePictureComponent,
        KSDateTimePickerComponent,
        ...config.declarations
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIGaugeModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeChatModule,
        ReactiveFormsModule,
        NativeScriptDateTimePickerModule,
        ...config.imports
    ],
    exports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIGaugeModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        ReactiveFormsModule,
        NativeScriptDateTimePickerModule,

        HideNavBarDirective,
        ShowNavBarDirective,
        ActionBarControllerDirective,
        ChatComponent,
        KSButtonComponent,
        KSListViewComponent,
        KSNavigationLabelComponent,
        KSSearchBarComponent,
        KSFormComponent,
        KSTakePictureComponent,
        KSDateTimePickerComponent,
        ...config.exports
    ],
    entryComponents: [
        ...config.entryComponents
    ],
    bootstrap: [
        ...config.bootstrap
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        ...config.schemas
    ],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class SharedModule {}
