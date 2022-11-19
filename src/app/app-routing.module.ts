import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { app_routes } from './shared/routes';

const routes: Routes = [
	{		path:'home', component:HomeComponent	},
	{		path:'menu', component:MenuComponent	},
	{		path:'dishdetail/:id', component:DishDetailComponent},
	{		path:'contactus', component:ContactComponent	},
	{		path:'', redirectTo:'/home',pathMatch:'full'	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
