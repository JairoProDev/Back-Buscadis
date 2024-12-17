import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @MinLength(6)
  readonly password?: string;

  @IsOptional()
  @IsString()
  readonly tipo?: string;
}
