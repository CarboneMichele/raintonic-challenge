import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// Material Popups & Modals
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Material Data tables

@NgModule({
    declarations: [],
    imports: [CommonModule, MatButtonModule, MatIconModule, MatSnackBarModule],
    exports: [MatButtonModule, MatIconModule, MatSnackBarModule],
})
export class MaterialModule {}
