import { NgModule } from '@angular/core';
import { BultBarComponent } from './bult-bar/bult-bar';
import { BultComponent } from './bult/bult';
@NgModule({
	declarations: [BultBarComponent,
    BultBarComponent,
    BultComponent],
	imports: [],
	exports: [BultBarComponent,
    BultBarComponent,
    BultComponent]
})
export class ComponentsModule {}
