import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class TestAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext): boolean {
    console.log('TestAuthGuard called');
    return true;
  }
}
