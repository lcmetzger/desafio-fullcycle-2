import { OrderStatus } from '@prisma/client';

export class CreateOrderDto {
  assetId: string;
  price: number;
  status: OrderStatus;
}
