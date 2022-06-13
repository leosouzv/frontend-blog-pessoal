import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { ThemeDeleteComponent } from './delete/theme-delete/theme-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [

  {path:'', redirectTo:'entrar', pathMatch: 'full'},
  {path:'entrar', component: LoginComponent},
  {path:'cadastrar', component: SigninComponent},

  {path: 'inicio', component:HomeComponent},
  {path: 'tema', component:ThemeComponent},

  {path: 'tema-edit/:id', component: ThemeEditComponent},
  {path: 'tema-delete/:id', component: ThemeDeleteComponent},
  
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
