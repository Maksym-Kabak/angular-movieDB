import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RatingModule} from 'ng-starrating';
import {PosterCardComponent} from '../../components/ui/poster-card/poster-card.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PosterCardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatSliderModule,
    MatExpansionModule,
    MatTooltipModule,
    SwiperModule,
    FlexLayoutModule,
    LazyLoadImageModule,
    RatingModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatSliderModule,
    MatExpansionModule,
    MatTooltipModule,
    SwiperModule,
    FlexLayoutModule,
    LazyLoadImageModule,
    RatingModule,
    PosterCardComponent
  ]
})
export class SharedModule { }
