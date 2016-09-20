import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [BreadcrumbComponent],
    providers: [BreadcrumbService],
    exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {
}