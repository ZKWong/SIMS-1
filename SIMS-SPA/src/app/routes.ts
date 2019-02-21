import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ExitsurveysComponent } from './exitsurveys/exitsurveys.component';
import { GraduatesurveysComponent } from './graduatesurveys/graduatesurveys.component';

export const appRoutes: Routes = [
    { path : '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path : 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            { path : 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            { path : 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver},
                                    canDeactivate: [PreventUnsavedChanges]},
            { path : 'exitsurveys', component: ExitsurveysComponent },
            { path : 'graduatesurveys', component: GraduatesurveysComponent },
        ]
    },
    { path : '**', redirectTo: '', pathMatch: 'full' }
];
