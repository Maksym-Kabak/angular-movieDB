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
import { MainContentWraperComponent } from './main-content-wraper/main-content-wraper.component';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';



@NgModule({
  declarations: [PosterCardComponent, MainContentWraperComponent],
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
    RouterModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '2px',
      primaryColour: '#C71585',
    })
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
    NgxLoadingModule,
    PosterCardComponent,
    MainContentWraperComponent
  ]
})
export class SharedModule { }
