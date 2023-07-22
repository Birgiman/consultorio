import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'isFullName', async: false })
export class PersonValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (typeof value !== 'string') return false;

    return /^[a-zA-Z\s]+(\s[a-zA-Z]+)+$/.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `The name needs to be a full name valid like 'First-name Last-name'`;
  }
}

export function IsFullName(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isFullName',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: PersonValidator,
    });
  };
}
