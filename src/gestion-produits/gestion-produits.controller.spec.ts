import { Test, TestingModule } from '@nestjs/testing';
import { GestionProduitsController } from './gestion-produits.controller';

describe('GestionProduitsController', () => {
  let controller: GestionProduitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestionProduitsController],
    }).compile();

    controller = module.get<GestionProduitsController>(GestionProduitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
