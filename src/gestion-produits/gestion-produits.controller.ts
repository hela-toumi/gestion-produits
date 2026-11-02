import { Controller, Get, Param } from '@nestjs/common';
import { GestionProduitsService } from './gestion-produits.service';
@Controller('gestion-produits')
export class GestionProduitsController {

    constructor(private readonly service: GestionProduitsService) {}
    @Get()
    findAll() { return this.service.findAll(); }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(+id);
    }

}

