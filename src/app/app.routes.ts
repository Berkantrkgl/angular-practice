import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './skills/content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Portfolio | Home',
    },
    {
        path: 'skills',
        component: SkillsComponent,
        title: 'Portfolio | Skills',
        children: [
            {
                path: 'content/:contentName',
                component: ContentComponent,
                pathMatch: 'full',
            }
        ]
    },  
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Portfolio | Projects'
    },
    {
        path: 'experience',
        component: ExperienceComponent,
        title: 'Portfolio | Experience'
    }, 
];
