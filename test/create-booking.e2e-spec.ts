/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { BookingDto } from '../src/entities/booking.dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import {Repository, Connection} from 'typeorm';
import { Booking } from '../src/entities/booking.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let bookingRepository: Repository<Booking>;
  let connection: Connection;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    bookingRepository = moduleFixture.get(getRepositoryToken(Booking));
    connection = moduleFixture.get(Connection);
    app = moduleFixture.createNestApplication();
    await app.init();
  });



 it(' should create a booking', async () => {
   for (let i = 0; i < 10; i++) {
    const booking =  new BookingDto('Samuel - ' + Math.random(), 4, new Date(), '123123123','test@gmail.com', 'no' )
    const {body} =  await request(app.getHttpServer())
      .post('/bookings')
      .send(booking)
      .expect(201)

      expect(body).toHaveProperty('id');
      console.log(body);
   }
  });

  it(' should get all bookings', async () => {
    await bookingRepository.insert(new BookingDto('Samuel - ' + Math.random(), Math.floor(Math.random() * 10), new Date(), '123456','email','no'))
    
    const {body}:{body: Booking} =  await request(app.getHttpServer()).get('/bookings')
  })

  afterAll (async () => {
    await app.close();
  });
});

