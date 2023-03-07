/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from '@nestjs/common';
import { BookingDto } from '../entities/booking.dto';
import { Booking } from '../entities/booking.entity';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
    constructor(private bookingsService: BookingsService) {}

    @Get()
    findAll(): Promise<Booking[]> {
        return this.bookingsService.findAll();
    }

    @Post()
    create(@Body() booking: BookingDto): Promise<Booking> {
        return this.bookingsService.create(booking);
    }

    
}
