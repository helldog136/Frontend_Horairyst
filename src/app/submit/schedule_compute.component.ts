/**
 * Created by helldog136 on 6/02/17.
 */

import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {API_URL, ScheduleService} from '../common/schedule.service.js';

@Component({
    selector: 'schedule_compute',
    template: require('./schedule_compute.component.html'),
    styles: [require('./schedule_compute.component.css').toString() ]
})
export class ScheduleComputeComponent implements OnInit {
    public uploader: FileUploader = new FileUploader({url: API_URL + '/file'});
    private hasDropZoneOver: boolean = false;
    private oldFile: any = null;

    title: string = 'Submit Schedule Page';
    private hasFiles: boolean;

    constructor(private scheduleService: ScheduleService) {
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        };
        this.uploader.onCompleteItem = this.scheduleService.getScheduleReceiverCallback();
    }

    ngOnInit() {
    }

    fileOverUploader(e: any): void {
        this.hasDropZoneOver = e;
        this.update();
        if (this.oldFile !== this.uploader.queue[0]) {
            this.scheduleService.clear();
        }
    }

    update(): void {
        this.uploader.queue.reverse();
        while (this.uploader.queue.length > 1) {
          this.uploader.queue.pop();
          this.scheduleService.clear();
        }
        this.hasFiles = this.uploader.queue.length > 0;
        if (!this.hasFiles) {
            this.scheduleService.clear();
        }
    }

    reoptimize() {
      this.scheduleService.reoptimizeSchedule();
    }

}
