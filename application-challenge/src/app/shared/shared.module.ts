import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../misc/material/material.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, MaterialModule],
    exports: [MaterialModule],
})
export class SharedModule {}
