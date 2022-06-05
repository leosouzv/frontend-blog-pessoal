import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [

  {path:'', redirectTo:'entrar', pathMatch: 'full'},
  {path:'entrar', component: LoginComponent},
  {path:'cadastrar', component: SigninComponent},
  {path: 'inicio', component:HomeComponent},
  {path: 'tema', component:ThemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
