import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainComponent } from './components/template/blockchain/blockchain.component';
import { CurriculumComponent } from './components/template/curriculum/curriculum.component';
import { HeaderComponent } from './components/template/header/header.component';
import { MachineComponent } from './components/template/machine/machine.component';
import { ProgettiComponent } from './components/template/progetti/progetti.component';
import { ProspettiveComponent } from './components/template/prospettive/prospettive.component';
import { UniversitaComponent } from './components/template/universita/universita.component';

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
  },
  {
    path:"universita",
    component:UniversitaComponent
  },
  {
    path:"blockchain",
    component:BlockchainComponent
  },
  {
    path:"machine",
    component:MachineComponent
  },
  {
    path:"prospettive",
    component:ProspettiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
