///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input } from "@angular/core";
import { NativeChatConfig } from "@progress-nativechat/nativescript-nativechat";
import { Page } from "tns-core-modules/ui/page";
import * as app from "tns-core-modules/application";

@Component({
    selector: 'ks-chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent {
    @Input() nativeChatConfig: NativeChatConfig;

    constructor(private page: Page) {
        if (app.android) {
            this.page.once("loaded", () => {
                const window = app.android.startActivity && app.android.startActivity.getWindow();
                // fix the issue where the keyboard on Android overlaps the view
                if (window) {
                    window.setSoftInputMode(global.android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
                }
            });
        }

    }

    onChatLoaded({ object: chat }) {
        chat.config = this.nativeChatConfig;
        if (app.android) {
            // hide the zoom buttons on Android webview
            chat._webView.android.getSettings().setDisplayZoomControls(false);
        }
    }
}
