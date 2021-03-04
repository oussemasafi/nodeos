import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { NodeosSharedModule } from 'app/shared/shared.module';
import { NodeosCoreModule } from 'app/core/core.module';
import { NodeosAppRoutingModule } from './app-routing.module';
import { NodeosHomeModule } from './home/home.module';
import { NodeosEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    NodeosSharedModule,
    NodeosCoreModule,
    NodeosHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    NodeosEntityModule,
    NodeosAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class NodeosAppModule {}
