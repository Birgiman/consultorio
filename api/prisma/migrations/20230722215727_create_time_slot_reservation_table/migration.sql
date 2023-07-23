-- CreateEnum
CREATE TYPE "TimeSlotReservationStatus" AS ENUM ('SCHEDULED', 'CONFIRMED', 'CANCELED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "TimeSlotReservationPeriod" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING');

-- CreateTable
CREATE TABLE "time_slot_reservation" (
    "id" UUID NOT NULL,
    "client_id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "TimeSlotReservationStatus" NOT NULL,
    "period" "TimeSlotReservationPeriod" NOT NULL,

    CONSTRAINT "time_slot_reservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "time_slot_reservation" ADD CONSTRAINT "time_slot_reservation_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
