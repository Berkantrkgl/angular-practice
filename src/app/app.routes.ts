import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { DocsComponent } from './docs/docs.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './home/content/content.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'aboutus',
        component: AboutComponent,
    }, 
    {
        path: 'docs',
        component: DocsComponent,
    },
    {
        path: 'edit',
        component: EditComponent,
    }, 
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'content/:name',
                component: ContentComponent,
                pathMatch: 'full',
            }
        ]
    }
];
