import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { UsersComponent } from './users/users';
import { UserFormComponent } from './user-form/user-form';

@NgModule({
    declarations: [
        LoginComponent,
        UsersComponent,
        UserFormComponent
    ],
    imports: [],
    exports: [
        LoginComponent,
        UsersComponent,
        UserFormComponent
    ]
})

export class ComponentsModule {}
