import { FormErrors } from '~/interfaces/Form'

export class HelperFormErrors {

    errors : FormErrors

    constructor() {
        this.errors = {}
    }

    clear(field : string) {
        delete this.errors[field]
    }

    get(field: string) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    has(field: string) {
        if (this.errors[field]) {
            return true;
        }
        else {
            return false;
        }
    }

    record(errors: FormErrors) {
        this.errors = errors;
    }
}
