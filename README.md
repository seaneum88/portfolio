# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Installing Angular Material
Run `ng add @angular/material`

## Installing ngrx state management
Run `npm install @ngrx/store --save`
and run `ng add @ngrx/store@latest`
then install tools by running
    `npm install @ngrx/store --save`
    `npm install @ngrx/effects --save`
    `npm install @ngrx/entity --save`
    `npm install @ngrx/store-devtools --save`


## Installing Flex-Layout
Run `npm install @angular/flex-layout @angular/cdk --save`

## Fixing 404 routing problem
add useHash property in your RouterModule
`imports: [RouterModule.forRoot(routes, {useHash: true})],`
