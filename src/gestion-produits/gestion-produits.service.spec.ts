import { Test, TestingModule } from '@nestjs/testing';
import { GestionProduitsService } from './gestion-produits.service';

describe('GestionProduitsService', () => {
  let service: GestionProduitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestionProduitsService],
    }).compile();

    service = module.get<GestionProduitsService>(GestionProduitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
