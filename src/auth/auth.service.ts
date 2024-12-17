import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaPostgresService } from '../prisma/prisma.postgres.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaPostgresService,
    private readonly jwtService: JwtService
  ) {}

  async register(email: string, password: string, nombre: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.usuario.create({
      data: { email, password: hashedPassword, nombre, tipo: 'particular' },
    });
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.usuario.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Credenciales inválidas');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new UnauthorizedException('Credenciales inválidas');

    return user;
  }

  async login(user: any) {
    const payload = { id: user.id, email: user.email, tipo: user.tipo };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
