/**
 * Created by helldog136 on 6/02/17.
 */

import {Component} from '@angular/core';
import {Schedule} from '../common/schedule.model.js';
import {FileUploader} from 'ng2-file-upload';

@Component({
    selector: 'schedule_checker',
    template: require('./schedule_checker.component.html')
})
export class ScheduleCheckerComponent {
    public uploader: FileUploader = new FileUploader({url: 'http://localhost:4242/check'});
    private hasDropZoneOver: boolean = false;
    private oldFile: any = null;
    private schedule: Schedule;

    title: string = 'Check Schedule Page';
    private hasFiles: boolean;

    constructor() {
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        };
        let that = this;
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log(status + ' : ' + response);
            if (status === '200') {
                that.schedule = JSON.parse(response);
                console.log(that.schedule);
            }
        };
    }

    fileOverUploader(e: any): void {
        this.hasDropZoneOver = e;
        this.update();
        if (this.oldFile !== this.uploader.queue[0]) {
            this.schedule = null;
        }
    }

    update(): void {
        this.uploader.queue.reverse();
        while (this.uploader.queue.length > 1) {
            this.uploader.queue.pop();
        }
        this.hasFiles = this.uploader.queue.length > 0;
        if (!this.hasFiles) {
            this.schedule = null;
        }
    }

}
