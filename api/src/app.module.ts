import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AccountsModule } from './modules/accounts/accounts.module';
import { AddressModule } from './modules/address/address.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { ClientsModule } from './modules/clients/clients.module';
import { TimeSlotReservationModule } from './modules/time-slot-reservation/time-slot-reservation.module';
import { UnimedsModule } from './modules/unimeds/unimeds.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [
    AccountsModule,
    ClientsModule,
    AddressModule,
    UnimedsModule,
    DatabaseModule,
    AuthModule,
    TimeSlotReservationModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
