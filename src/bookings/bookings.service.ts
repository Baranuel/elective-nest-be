/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingDto } from '../entities/booking.dto';
import { Booking } from '../entities/booking.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingsRepository: Repository<Booking> ) {}


    async findAll(): Promise<Booking[]> {
      return await this.bookingsRepository.find();
    }

    async findById(id:number): Promise<Booking> {
        return await this.bookingsRepository.findOneBy({id:id});
    }

    async create(createBooking: BookingDto): Promise<Booking> {
        return await this.bookingsRepository.save(createBooking);
    }

    async update(id:number, updateBooking: BookingDto): Promise<any> {
        return await this.bookingsRepository.update(id, updateBooking);
    }

    async delete(id:number): Promise<any> {
        return await this.bookingsRepository.delete(id);
    }
}


