class ShoeEntity {
    constructor({ id, name, style, lastArrival, price, color }) {
      this.id = id; // Identificador único
      this.name = name;
      this.style = style;
      this.lastArrival = lastArrival;
      this.price = price;
      this.color = color;
    }
  
    // Ejemplo de métodos de dominio, si los necesitas
    changePrice(newPrice) {
      this.price = newPrice;
    }
  
    isAvailable() {
      const today = new Date();
      return this.lastArrival <= today;
    }
  }
  
  export default ShoeEntity;
  