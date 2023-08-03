import { Allergen } from "./Allergen";
import { Category } from "./Category";
import { ProductType } from "./ProductType";

export class Product {
  constructor(
    id,
    name,
    description,
    nutritionalScore,
    type,
    category,
    allergens
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.nutritionalScore = nutritionalScore;
    this.type = new ProductType(type);
    this.category = new Category(category);
    this.allergens = [];
    this.addAllergens(allergens);
  }

  static of({
    id,
    name,
    description,
    nutritionalScore,
    type,
    category,
    allergens,
  }) {
    return new Product(
      id,
      name,
      description,
      nutritionalScore,
      type,
      category,
      allergens
    );
  }

  static ofList(
    productJsonList
  ) {
    const products = []
    try {
      productJsonList.forEach((product, idx) => {
        console.groupCollapsed(idx)
        console.debug('ProductJson:', product)
        const productDto = Product.of(product)
        products.push(productDto)
        console.debug('ProductDto:', productDto)
        console.groupEnd()
      });
    } catch (error) {
      console.error(error)
    }
    return products
  }

  addAllergens(allergens) {
    if (allergens != null && allergens.lenght > 0) {
      allergens.forEach((allergen) => {
        this.allergens.push(new Allergen(allergen));
      });
    }
  }
}
