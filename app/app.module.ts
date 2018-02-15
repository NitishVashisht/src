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
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { LearningpipesComponent } from './learningpipes/learningpipes.component';
import { PriorityofstylesComponent } from './priorityofstyles/priorityofstyles.component';
import { BootstrapPanelComponent } from './ngcontent&ngcontainer/bootstrap-panel/bootstrap-panel.component';
import { customDirective } from './directives/custom.directive';

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
    customDirective
  ],
  imports: [
    BrowserModule,FormsModule,custommodule
  ],
  providers: [CourseService,AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
