import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExamplePdfViewerComponent} from "./example-pdf-viewer/example-pdf-viewer.component";
import {TesterComponent} from "./tester/tester.component";

const routes: Routes = [
  {path: 'test', component: TesterComponent},
  {path: 'pdf', component: ExamplePdfViewerComponent},
  {path: '', redirectTo: 'test', pathMatch: 'full'},
  {path: '**', redirectTo: 'test'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
