import { Type } from "class-transformer";
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { OrderItem } from "./order.item";

export class CreateOrder {
  @IsNotEmpty()
  recipientName: string;

  @IsNotEmpty()
  postalCode: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsOptional()
  addressDetail?: string;

  @IsNotEmpty()
  contact: string;

  @IsNotEmpty()
  deliveryRequest: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItem)
  orderItems: OrderItem[];

  @IsNotEmpty()
  deliveryFee: number;

  @IsNotEmpty()
  totalPrice: number;
}
