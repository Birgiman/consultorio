import { Module } from '@nestjs/common';
import { AccountsModule } from './modules/accounts/accounts.module';
import { AddressModule } from './modules/address/address.module';
import { ClientsModule } from './modules/clients/clients.module';
import { UnimedsModule } from './modules/unimeds/unimeds.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [
    AccountsModule,
    ClientsModule,
    AddressModule,
    UnimedsModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
