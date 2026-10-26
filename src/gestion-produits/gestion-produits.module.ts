import { Module } from '@nestjs/common';
import { GestionProduitsController } from './gestion-produits.controller';
import { GestionProduitsService } from './gestion-produits.service';

@Module({
  controllers: [GestionProduitsController],
  providers: [GestionProduitsService]
})
export class GestionProduitsModule {}
