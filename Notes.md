# Angular 2 and NodeJS The Practical Guide

- Setup Project
  - Install Angular CLI: `npm install -g @angular/cli`
  - Create angular app: `ng new mean-course`
- VSCode Extensions
  - Angular Essentials
  - Material Icon Themes (not require by nice to have)
- Angular Folder Structure
  - How an Angular application starts
    - main.ts
      - First thing that runs, this is just a default of angular
- Angular Components
  - Angular apps are built on components
  - Components can be reused
  - You compose and entire with componnents
- Creating a New component
  - Add sub folder to `app` folder
  - Create typesript file and template html file
  - naming convention end files with ".componenet.ts" (e.g: `my-component.component.ts`)
  - TS file should contain a TS class for the comonent
  - This is decorated with the `@Component` decorator from `@angular/core`
    - The `@Component` takes parmeters that identify the selector, template
    - Convention to alway start selectors with `app-`
  - Components can not be accessed by adding the select (e.g `<app-my-compnent>`) with out first registering the component in a model
- Event binding
  - Events on DOM elemetns in the template are bound to methods in the component class
  - For example: `<button (click)="onAddPost()">Save Post</button>`
- DataBinding
  - Template is bound to properties of component class using string interpolation
  - `<p>{{newPost}}</p>`
  - `export class PostCreateComponent { newPost = ''; }`
- Binding to Element properties
  - Bind to properties of a DOM element by wrapping property names in square brackets
  - `<textarea rows="6" [value]="'Static Text'"></textarea>`
    - Binding the value to a hard coded string
  - `<textarea rows="6" [value]="newPost"></textarea>`
    - Binding the value of the text area to the `newPost` property of the component
- Getting User Input
    - Hash References
        - Elements in the template can be marked with hash tags, which can be used in other template code to reference the element
        - The following passes  the entire text area object to onAddPost
            <textarea rows="6" [value]="newPost" #postInput></textarea><hr />
            <button (click)="onAddPost(postInput)">Save Post</button>
            <p>{{ newPost }}</p>
    - Two Way Data Binding
        - Need to first add `@angular/forms` module from core
- Angular Material
    - Prebuilt components for angular built on Google's material design
    - Not just styling like bootrap, actual angular components
    - Install through npm: `npm install --save @angular/material`
    - Install through ng: `ng add @angular/material`
        - This adds it to the package.json but also integrates it into the module
            - Adds style reference to `angular.json`
            - Adds reference to `app.module.ts`
            - Adds google font refereces to `index.html`
  
    


