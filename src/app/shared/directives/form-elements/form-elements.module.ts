import { ErrorMessageComponent } from './error-message/error-message.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FromToDateComponent } from './from-to-date/from-to-date.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { CancelButtonComponent } from './cancel-button/cancel-button.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DownloadFileComponent } from './download-file/download-file.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { TextareaComponent } from './textarea/textarea.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
    declarations: [
        ErrorMessageComponent,
        PasswordInputComponent,
        DropdownComponent,
        FromToDateComponent,
        SubmitButtonComponent,
        InputButtonComponent,
        CancelButtonComponent,
        SearchInputComponent,
        DateInputComponent,
        CheckboxInputComponent,
        TextInputComponent,
        UploadFileComponent,
        DownloadFileComponent,
        TextareaComponent,
        TabsComponent,
        TabComponent,
        RadioButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxFileDropModule
    ],
    exports: [
        ErrorMessageComponent,
        PasswordInputComponent,
        DropdownComponent,
        FromToDateComponent,
        SubmitButtonComponent,
        InputButtonComponent,
        CancelButtonComponent,
        SearchInputComponent,
        DateInputComponent,
        CheckboxInputComponent,
        TextInputComponent,
        UploadFileComponent,
        DownloadFileComponent,
        TextareaComponent,
        TabsComponent,
        TabComponent,
        RadioButtonComponent
    ]
})
export class FormElementsModule { }
