import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { MenuComponent } from './components/menu/menu.component'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, HeaderComponent, MenuComponent, FooterComponent]
})
export class SharedModule {}
