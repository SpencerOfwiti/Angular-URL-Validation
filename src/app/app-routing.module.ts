import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importing components used in routes
import { FormComponent } from './form/form.component';

// defining routes
const routes: Routes = [
  { path: '', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
