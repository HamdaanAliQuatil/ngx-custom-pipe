<div align="center">

<h1>ngx-custom-pipe</h1>

![npm](https://img.shields.io/npm/v/ngx-custom-pipe)
![NPM Downloads](https://img.shields.io/npm/dw/ngx-custom-pipe)
![NPM Downloads](https://img.shields.io/npm/dt/ngx-custom-pipe)
[![License: BSD-3-Clause](https://img.shields.io/badge/license-BSD--3--Clause-green.svg?style=rounded)](https://github.com/HamdaanAliQuatil/ngx-custom-pipe/blob/main/LICENSE.md)
![GitHub issues](https://img.shields.io/github/issues/hamdaanaliquatil/ngx-custom-pipe)

A TypeScript library, designed to convert any numeric number into its corresponding representation in words. This powerful pipe eliminates the need for developers to manually implement the logic, saving development time and enabling a faster and more focused development process. Particularly useful in generating invoices, generating reports, or presenting numeric data to end-users in a more friendly and understandable way.

</div>


# Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

# Installation

1. Run the following command at the root of your project:

        npm install ngx-custom-pipe

This will install the `ngx-custom-pipe` package as a project dependency in the node_modules folder.

# Usage

1. Import the NgxCustomPipeModule module in your *.module.ts:

        import { NgxCustomPipeModule } from 'ngx-custom-pipe';

2. Add the NgxCustomPipeModule module to the `imports` array of your `@NgModule` decorator:

        
        import { NgxCustomPipeModule } from 'ngx-custom-pipe';

        @NgModule({
            // ...
            imports: [
            // ...
            NgxCustomPipeModule
            ]
        })
        

3. Pipes can also be injected into components or services. Declare the pipe in the providers array of your `*.module.ts` or `*.component.ts`:

    For example:

        import { NgxCustomPipe } from 'ngx-custom-pipe';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            providers: [NumberToWordsPipe]
        })
        export class AppComponent {
            title = 123456789;
            
            constructor(private numberToWordsPipe: NumberToWordsPipe) {
                console.log(this.numberToWordsPipe.transform(this.title));
            }
        }
        

4. Pipes can also be used in templates.

    ```
    <p>{{ 1234567890 | numberToWords }}</p>
    ```

# Contributing

To contribute to this project, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file.

# License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE.md) file for details.