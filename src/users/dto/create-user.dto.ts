// src/users/dto/create-user.dto.ts
import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  nombre!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @IsNotEmpty()
  @IsString()
  tipo!: string;
}