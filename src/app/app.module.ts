import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ManagermentComponentComponent } from './managerment-component/managerment-component.component';
import { UserManagermentComponentComponent } from './user-managerment-component/user-managerment-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ExitComponentComponent } from './exit-component/exit-component.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const mgtChildrenRoutes: Routes =[
  {path:'user',component:UserManagermentComponentComponent},
  {path:'product',component:ProductComponentComponent},
  {path:'exit',component:ExitComponentComponent},
  {path:'',redirectTo:'user',pathMatch:'full'}
];
const routes:Routes = [
  {path:'home',component:HomeComponentComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}, //若什么都没有就跳到home,全匹配的方式
  {path:'login',component:LoginComponentComponent},
  {path:'management',component:ManagermentComponentComponent,
  children:mgtChildrenRoutes,canActivate:[LoginGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    ManagermentComponentComponent,
    UserManagermentComponentComponent,
    ProductComponentComponent,
    ExitComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ LoginGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
