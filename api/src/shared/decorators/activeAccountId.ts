import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const ActiveAccountId = createParamDecorator<undefined>(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const accountId = request.accountId;

    if (!accountId) {
      throw new UnauthorizedException();
    }

    return accountId;
  },
);
