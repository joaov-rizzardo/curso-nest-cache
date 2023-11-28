import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoEntity } from './produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoService } from './produto.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntity]), CacheModule.register()],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}