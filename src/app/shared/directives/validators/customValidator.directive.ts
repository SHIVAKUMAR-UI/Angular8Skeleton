import { AbstractControl } from '@angular/forms';

export class CustomValidator {

    static name_ = new RegExp('^[A-Za-z]*$');   //RegExp for letters only
    static numeric_ = new RegExp('^[0-9]*$');    //RegExp for numbers only
    static alphaNumeric_ = new RegExp('^[a-zA-Z0-9]+$');    //RegExp for alpha-numeric
    static password_ = new RegExp('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$');    //RegExp for password with number, character, soecial character and length atleast 8

    static ValidateImei(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.numeric_, 15);
        if (isValidate) {
            return { 'imei': isValidate };
        }
        return null;
    }

    static ValidatePhoneNumber(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.numeric_, 10);
        if (isValidate) {
            return { 'phoneNumber': isValidate };
        }
        return null;
    }

    static ValidatePassportNumber(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 30);
        if (isValidate) {
            return { 'passportNumber': isValidate };
        }
        return null;
    }

    static ValidatePassword(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.password_, 30);
        if (isValidate) {
            return { 'password': isValidate };
        }
        return null;
    }

    static ValidateFirstName(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.name_, 100);
        if (isValidate) {
            return { 'firstName': isValidate };
        }
        return null;
    }

    static ValidateMiddleName(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.name_, 100);
        if (isValidate) {
            return { 'middleName': isValidate };
        }
        return null;
    }

    static ValidateLastName(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.name_, 100);
        if (isValidate) {
            return { 'lastName': isValidate };
        }
        return null;
    }

    static ValidateAddress(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 100);
        if (isValidate) {
            return { 'address': isValidate };
        }
        return null;
    }

    static ValidateCity(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 30);
        if (isValidate) {
            return { 'city': isValidate };
        }
        return null;
    }

    static ValidateZipCode(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 15);
        if (isValidate) {
            return { 'zipCode': isValidate };
        }
        return null;
    }

    static ValidateNationality(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 30);
        if (isValidate) {
            return { 'nationality': isValidate };
        }
        return null;
    }

    static ValidatePostCode(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 6);
        if (isValidate) {
            return { 'postCode': isValidate };
        }
        return null;
    }

    static ValidateBrandName(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 15);
        if (isValidate) {
            return { 'brandName': isValidate };
        }
        return null;
    }

    static ValidateModel(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 15);
        if (isValidate) {
            return { 'model': isValidate };
        }
        return null;
    }

    static ValidateSerialNumber(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 30);
        if (isValidate) {
            return { 'serialNumber': isValidate };
        }
        return null;
    }

    static ValidateDeviceDescription(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 100);
        if (isValidate) {
            return { 'deviceDescription': isValidate };
        }
        return null;
    }

    static ValidateMarketingComment(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 100);
        if (isValidate) {
            return { 'marketingComment': isValidate };
        }
        return null;
    }

    static ValidateRoleName(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 50);
        if (isValidate) {
            return { 'roleName': isValidate };
        }
        return null;
    }

    static ValidateRoleDescription(control: AbstractControl) {
        let isValidate = CustomValidator.validate(control, CustomValidator.alphaNumeric_, 50);
        if (isValidate) {
            return { 'roleDescription': isValidate };
        }
        return null;
    }

    static validate(control, reg_, length) {
        if (control.value && !(reg_.test(control.value) && control.value.length === length)) {
            return true;
        }
        return false;
    }
}
