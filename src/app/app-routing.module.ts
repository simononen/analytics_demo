import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'disclosure',
    loadChildren: () =>
      import('./disclosure/disclosure.module').then((m) => m.DisclosureModule),
  },
  {
    path: 'localforeign',
    loadChildren: () =>
      import('./localforeign/localforeign.module').then(
        (m) => m.LocalforeignModule
      ),
  },
  {
    path: 'distribution',
    loadChildren: () =>
      import('./distribution/distribution.module').then(
        (m) => m.DistributionModule
      ),
  },
  {
    path: 'bids',
    loadChildren: () => import('./bids/bids.module').then((m) => m.BidsModule),
  },
  {
    path: 'marketprice',
    loadChildren: () =>
      import('./marketprice/marketprice.module').then(
        (m) => m.MarketpriceModule
      ),
  },
  {
    path: 'competition',
    loadChildren: () =>
      import('./competition/competition.module').then(
        (m) => m.CompetitionModule
      ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
