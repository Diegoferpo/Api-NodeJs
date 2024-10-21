import ShoeEntity from '../Entities/ShoeEntity.js';

class ShoeMapper {
  // Convierte un documento de MongoDB en una entidad de dominio (ShoeEntity)
  static toEntity(mongoDocument) {
    return new ShoeEntity({
      id: mongoDocument._id.toString(),
      name: mongoDocument.name,
      style: mongoDocument.style,
      lastArrival: mongoDocument.lastArrival,
      price: mongoDocument.price,
      color: mongoDocument.color
    });
  }


  static toDatabase(entity) {
    return {
      name: entity.name,
      style: entity.style,
      lastArrival: entity.lastArrival,
      price: entity.price,
      color: entity.color
    };
  }
}

export default ShoeMapper;
