import { Module } from '@nestjs/common';
import { AccountsModule } from './modules/accounts/accounts.module';
import { ClientsModule } from './modules/clients/clients.module';

@Module({
  imports: [AccountsModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
