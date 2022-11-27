import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componnents/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MyRequestsFileComponent } from './Pages/my-requests-file/my-requests-file.component';
import { MySuggestionsComponent } from './Pages/my-suggestions/my-suggestions.component';
import { RequestsTableComponent } from './Componnents/requests-table/requests-table.component';
import { MatTableModule } from '@angular/material/table';
import { NewReqFirstFileComponent } from './Pages/newRequstFiles/new-req-first-file/new-req-first-file.component';
import { NewReqSecoundFileComponent } from './Pages/newRequstFiles/new-req-secound-file/new-req-secound-file.component';
import { SidenavComponent } from './Componnents/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericInputComponent } from './Componnents/generic-input/generic-input.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OpenDialogComponent } from './Componnents/open-dialog/open-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { GenericCommantComponent } from './Componnents/generic-commant/generic-commant.component';
import { YesNoButtonsComponent } from './Componnents/yes-no-buttons/yes-no-buttons.component';
import { ProgresSliderComponent } from './Componnents/progres-slider/progres-slider.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { GenericStapperComponent } from './Componnents/generic-stapper/generic-stapper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { NastedStapperComponent } from './Componnents/nasted-stapper/nasted-stapper.component';
import { NavbarTabComponent } from './Componnents/navbar-tab/navbar-tab.component';
import { NavbarIconsComponent } from './Componnents/navbar-icons/navbar-icons.component';
import { ButtonComponent } from './Componnents/button/button.component';
import { MoveToButtonsComponent } from './Componnents/move-to-buttons/move-to-buttons.component';
import { PageTitleComponent } from './Componnents/page-title/page-title.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NewReqThirdFileComponent } from './Pages/newRequstFiles/new-req-third-file/new-req-third-file.component';
import { NewReqPartnerFirstFileComponent } from './Pages/newRequstFiles/new-req-partner-first-file/new-req-partner-first-file.component';
import { NewReqPartnerSecoundFileComponent } from './Pages/newRequstFiles/new-req-partner-secound-file/new-req-partner-secound-file.component';
import { NewReqPartnerThirdFileComponent } from './Pages/newRequstFiles/new-req-partner-third-file/new-req-partner-third-file.component';
import { IncomesPageComponent } from '../app/Pages/Incomes&Commitments/incomes-page/incomes-page.component';
import { CommitmentsPageComponent } from '../app/Pages/Incomes&Commitments/commitments-page/commitments-page.component';
import { FormTextComponent } from './Componnents/form-text/form-text.component';
import { FormDropDownComponent } from './Componnents/form-drop-down/form-drop-down.component';
import { FormClickableComponent } from './Componnents/form-clickable/form-clickable.component';
import { AssetDetailsComponent } from './Pages/asset-details/asset-details.component';
import { MorgagePreferencesComponent } from './Pages/morgage-preferences/morgage-preferences.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExplanationPageComponent } from './Pages/explanation-file/explanation-page/explanation-page.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyRequestsFileComponent,
    MySuggestionsComponent,
    RequestsTableComponent,
    NewReqFirstFileComponent,
    NewReqSecoundFileComponent,
    SidenavComponent,
    GenericInputComponent,
    OpenDialogComponent,
    GenericCommantComponent,
    YesNoButtonsComponent,
    ProgresSliderComponent,
    GenericStapperComponent,
    NastedStapperComponent,
    NavbarTabComponent,
    NavbarIconsComponent,
    ButtonComponent,
    MoveToButtonsComponent,
    PageTitleComponent,
    NewReqThirdFileComponent,
    NewReqPartnerFirstFileComponent,
    NewReqPartnerSecoundFileComponent,
    NewReqPartnerThirdFileComponent,
    IncomesPageComponent,
    CommitmentsPageComponent,
    FormTextComponent,
    FormDropDownComponent,
    FormClickableComponent,
    AssetDetailsComponent,
    MorgagePreferencesComponent,
    ExplanationPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatCardModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
