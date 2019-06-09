import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { MaterialModule } from './shared/material.module'
import { SharedModule } from './shared/shared.module'
import { HeaderComponent } from './shared/components/header/header.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { MenuComponent } from './shared/components/menu/menu.component'
import { MatToolbar } from '@angular/material'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, SharedModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
})
