import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRequestsFileComponent } from './Pages/my-requests-file/my-requests-file.component';
import { MySuggestionsComponent } from './Pages/my-suggestions/my-suggestions.component';
import { NewReqFirstFileComponent } from './Pages/newRequstFiles/new-req-first-file/new-req-first-file.component';
import { NewReqSecoundFileComponent } from './Pages/newRequstFiles/new-req-secound-file/new-req-secound-file.component';
import { NewReqThirdFileComponent } from './Pages/newRequstFiles/new-req-third-file/new-req-third-file.component';
import { NewReqPartnerFirstFileComponent } from './Pages/newRequstFiles/new-req-partner-first-file/new-req-partner-first-file.component';
import { NewReqPartnerSecoundFileComponent } from './Pages/newRequstFiles/new-req-partner-secound-file/new-req-partner-secound-file.component';
import { NewReqPartnerThirdFileComponent } from './Pages/newRequstFiles/new-req-partner-third-file/new-req-partner-third-file.component';
import { IncomesPageComponent } from '../app/Pages/Incomes&Commitments/incomes-page/incomes-page.component';
import { CommitmentsPageComponent } from '../app/Pages/Incomes&Commitments/commitments-page/commitments-page.component';
import { AssetDetailsComponent } from './Pages/asset-details/asset-details.component';
import { MorgagePreferencesComponent } from './Pages/morgage-preferences/morgage-preferences.component';
import { ExplanationPageComponent } from './Pages/explanation-file/explanation-page/explanation-page.component';
const routes: Routes = [
  {
    path: 'my-requests',
    component: MyRequestsFileComponent,
  },
  { path: 'first', component: NewReqFirstFileComponent },
  { path: 'secound', component: NewReqSecoundFileComponent },
  { path: 'third', component: NewReqThirdFileComponent },
  { path: 'partner/first', component: NewReqPartnerFirstFileComponent },
  { path: 'partner/secound', component: NewReqPartnerSecoundFileComponent },
  { path: 'partner/third', component: NewReqPartnerThirdFileComponent },
  { path: 'my-suggestions', component: MySuggestionsComponent },
  { path: 'incomes', component: IncomesPageComponent },
  { path: 'commitments', component: CommitmentsPageComponent },
  { path: 'assetsdetails', component: AssetDetailsComponent },
  { path: 'morgage-preferences', component: MorgagePreferencesComponent },
  { path: 'explanation-file', component: ExplanationPageComponent },
  { path: '', redirectTo: '/my-requests', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
