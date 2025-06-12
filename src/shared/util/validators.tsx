// validator.ts

export const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
export const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
export const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
export const VALIDATOR_TYPE_MIN = 'MIN';
export const VALIDATOR_TYPE_MAX = 'MAX';
export const VALIDATOR_TYPE_EMAIL = 'EMAIL';
export const VALIDATOR_TYPE_FILE = 'FILE';

// Validator Type Definitions
type ValidatorType =
  | 'REQUIRE'
  | 'MINLENGTH'
  | 'MAXLENGTH'
  | 'MIN'
  | 'MAX'
  | 'EMAIL'
  | 'FILE';

interface Validator {
  type: ValidatorType;
  val?: number;
}

// Validator Creators
export const VALIDATOR_REQUIRE = (): Validator => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = (): Validator => ({ type: VALIDATOR_TYPE_FILE });

export const VALIDATOR_MINLENGTH = (val: number): Validator => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val
});

export const VALIDATOR_MAXLENGTH = (val: number): Validator => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val
});

export const VALIDATOR_MIN = (val: number): Validator => ({
  type: VALIDATOR_TYPE_MIN,
  val
});

export const VALIDATOR_MAX = (val: number): Validator => ({
  type: VALIDATOR_TYPE_MAX,
  val
});

export const VALIDATOR_EMAIL = (): Validator => ({
  type: VALIDATOR_TYPE_EMAIL
});

// Validation Function
export const validate = (value: string, validators: Validator[]): boolean => {
  let isValid = true;

  for (const validator of validators) {
    switch (validator.type) {
      case VALIDATOR_TYPE_REQUIRE:
        isValid = isValid && value.trim().length > 0;
        break;

      case VALIDATOR_TYPE_MINLENGTH:
        isValid = isValid && value.trim().length >= (validator.val ?? 0);
        break;

      case VALIDATOR_TYPE_MAXLENGTH:
        isValid = isValid && value.trim().length <= (validator.val ?? Infinity);
        break;

      case VALIDATOR_TYPE_MIN:
        isValid = isValid && +value >= (validator.val ?? 0);
        break;

      case VALIDATOR_TYPE_MAX:
        isValid = isValid && +value <= (validator.val ?? Infinity);
        break;

      case VALIDATOR_TYPE_EMAIL:
        isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        break;

      case VALIDATOR_TYPE_FILE:
        // You can handle file validation differently if needed
        isValid = isValid; // Placeholder
        break;

      default:
        isValid = isValid;
    }
  }

  return isValid;
};
