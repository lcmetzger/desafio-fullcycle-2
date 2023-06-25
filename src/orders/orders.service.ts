import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        assetId: createOrderDto.assetId,
        price: createOrderDto.price,
        status: OrderStatus.PENDING,
      },
    });
  }

  findAll() {
    return this.prisma.order.findMany();
  }
}
