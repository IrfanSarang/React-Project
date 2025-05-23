// validators.ts

export const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
export const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
export const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
export const VALIDATOR_TYPE_MIN = 'MIN';
export const VALIDATOR_TYPE_MAX = 'MAX';
export const VALIDATOR_TYPE_EMAIL = 'EMAIL';
export const VALIDATOR_TYPE_FILE = 'FILE';

// Type for each validator object
export type Validator =
    | { type: 'REQUIRE' }
    | { type: 'FILE' }
    | { type: 'MINLENGTH'; val: number }
    | { type: 'MAXLENGTH'; val: number }
    | { type: 'MIN'; val: number }
    | { type: 'MAX'; val: number }
    | { type: 'EMAIL' };

// Validator creators
export const VALIDATOR_REQUIRE = (): Validator => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = (): Validator => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val: number): Validator => ({
    type: VALIDATOR_TYPE_MINLENGTH,
    val: val
});
export const VALIDATOR_MAXLENGTH = (val: number): Validator => ({
    type: VALIDATOR_TYPE_MAXLENGTH,
    val: val
});
export const VALIDATOR_MIN = (val: number): Validator => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = (val: number): Validator => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = (): Validator => ({ type: VALIDATOR_TYPE_EMAIL });

// Validation function
export const validate = (value: string, validators: Validator[]): boolean => {
    let isValid = true;
    for (const validator of validators) {
        if (validator.type === VALIDATOR_TYPE_REQUIRE) {
            isValid = isValid && value.trim().length > 0;
        }
        if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
            isValid = isValid && value.trim().length >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
            isValid = isValid && value.trim().length <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MIN) {
            isValid = isValid && +value >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAX) {
            isValid = isValid && +value <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        }
    }
    return isValid;
};
