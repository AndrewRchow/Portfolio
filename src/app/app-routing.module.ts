import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { IntroComponent } from "./intro/intro.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: DashboardComponent, data: {depth:1}},
    {path: 'intro', component: IntroComponent, data: {depth:2}},
    {path: 'skills', component: SkillsComponent, data: {depth:2}},
    {path: 'projects', component: ProjectsComponent, data: {depth:2}},
    {path: 'contact', component: ContactComponent, data: {depth:2}},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}