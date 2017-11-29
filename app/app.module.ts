import { custommodule } from './custom.module';
import { starpipe, summarypipe } from './learningpipes/custom.pipe';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CourseService } from './course.service';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { LearningpipesComponent } from './learningpipes/learningpipes.component';

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
    summarypipe
  ],
  imports: [
    BrowserModule,FormsModule,custommodule
  ],
  providers: [CourseService,AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
