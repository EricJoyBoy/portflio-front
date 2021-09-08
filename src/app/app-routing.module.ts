import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './components/template/curriculum/curriculum.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ProgettiComponent } from './components/template/progetti/progetti.component';

const routes: Routes = [
  {
    path:"",
    component:HeaderComponent
  },
  {
    path:"curriculum",
    component:CurriculumComponent
  },
  {
    path:"progetti",
    component:ProgettiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
