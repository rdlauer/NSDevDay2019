///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';
import { android } from 'tns-core-modules/application';
import { topmost } from 'tns-core-modules/ui/frame';
import { isIOS, isAndroid } from 'tns-core-modules/platform';

@Injectable()
export class AppConfigService {
    static settings = {}

    init() {
        this.disableOrientation();
    }

    private disableOrientation() {
        if (isIOS) {
            let proto = topmost().ios.controller;

            while (!proto.hasOwnProperty('shouldAutorotate')) {
                proto = Object.getPrototypeOf(proto);
            }

            Object.defineProperty(proto, 'shouldAutorotate', { get: () => false });

            UIDevice.currentDevice.setValueForKey(UIInterfaceOrientation.Portrait, 'orientation');
        }

        if (isAndroid) {
            android.foregroundActivity.setRequestedOrientation(
                global.android.content.pm.ActivityInfo['SCREEN_ORIENTATION_SENSOR_PORTRAIT']
            );
        }
    }
}
