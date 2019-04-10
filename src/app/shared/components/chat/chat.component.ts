///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ks-chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
    @Input() nativeChatConfig: any;
    scriptSrc = "https://web-chat.nativechat.com/1.11.0/sdk/nativechat.js";
    cssSrc = "https://web-chat.nativechat.com/1.11.0/sdk/nativechat.css";

    private get nativeChat(): any {
        return window['NativeChat'];
    }

    ngOnInit(): void {
        this.loadBotScript()
            .then(() => {
                this.nativeChat.load(this.nativeChatConfig);
            });
    }

    private loadBotScript() {
        return new Promise((resolve, reject) => {
            if (this.nativeChat) {
                return resolve();
            }

            const script: any = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.scriptSrc;
            if (script.readyState) {  // IE
                script.onreadystatechange = () => {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null;
                        resolve();
                    }
                };
            } else {
                script.onload = () => resolve();
            }

            script.onerror = (error: any) => reject(error);
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }
}
