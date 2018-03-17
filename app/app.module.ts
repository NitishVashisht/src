import { CustomErrorHandler } from './posts/CustomErrorHandler';
import { implementationComponent } from './directives/implementation.component';
import { NoneComponent } from './View_encapsulation&shadow_dom/none.component';
import { EmulatedComponent } from './View_encapsulation&shadow_dom/emulated.component';
import { NativeComponent } from './View_encapsulation&shadow_dom/native.component';
import { outputPropertyComponent } from './input_output_propeties/outputproperty.component';
import { inputpropertyComponent } from './input_output_propeties/inputproperty.component';
import { custommodule } from './custom.module';
import { starpipe, summarypipe, titlecasePipe } from './learningpipes/custom.pipe';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CourseService } from './course.service';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { LearningpipesComponent } from './learningpipes/learningpipes.component';
import { PriorityofstylesComponent } from './priorityofstyles/priorityofstyles.component';
import { BootstrapPanelComponent } from './ngcontent&ngcontainer/bootstrap-panel/bootstrap-panel.component';
import { customDirective } from './directives/custom.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { PostsComponent } from './posts/posts.component'
import {HttpModule} from '@angular/http'
import { CrudopsService } from './services/crudops.service';
import { CrudopsComponent } from './posts/crudops.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitComponentComponent } from './git-component/git-component.component';
import { GitServiceService } from './services/git-service.service';
import {RouterModule} from '@angular/router' ;
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    ClassbindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    LearningpipesComponent,
    starpipe,
    summarypipe,
    titlecasePipe,
    inputpropertyComponent,
    outputPropertyComponent,
    PriorityofstylesComponent,
    NativeComponent,
    EmulatedComponent,
    NoneComponent,
    BootstrapPanelComponent,
    implementationComponent,
    customDirective,
    ContactFormComponent,
    SignupFormComponent,  
    FormArrayComponent,
    PostsComponent,CrudopsComponent,
    NavbarComponent, 
    GitComponentComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent
  ],

  imports: [
    BrowserModule,FormsModule,custommodule,ReactiveFormsModule,HttpModule,
    RouterModule.forRoot([
      { path: '',component: HomeComponent},
      { path: 'followers/:userid/:username',component: GithubProfileComponent}, // userid and username are tokens for route parameters
      { path: 'followers',component: GitComponentComponent},
      { path: 'posts',component: PostsComponent},
      { path: '**',component: NotFoundComponent}
    ])
  ],
  providers: [
    CourseService,
    AuthorsService,
    CrudopsService,
    //{provide:ErrorHandler,useClass:CustomErrorHandler}, // its awsome functionality
    GitServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
