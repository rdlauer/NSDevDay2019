///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'ks-image',
    templateUrl: './image.component.html',
})
export class KsImageComponent {
    @ViewChild('imageElement') public imageElement: ElementRef;

    @Input() public config: any;
    @Input() public id: string;
    @Input() public src: string;
}
