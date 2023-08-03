export class ProductType {
  static values = [
    "DAIRY_PRODUCTS",
    "MEAT_AND_POULTRY",
    "SEAFOOD",
    "GRAINS_AND_CEREALS",
    "FRUITS_AND_VEGETABLES",
    "BAKED_GOODS",
    "SNACK_FOODS",
    "BEVERAGES",
    "FROZEN_FOODS",
    "CONVENIENCE_FOODS",
    "ORGANIC_FOODS",
    "ETHNIC_FOODS",
    "NON_FOOD_ITEMS",
  ];

  constructor(value) {
    if (value != null && ProductType.values.indexOf(value) === -1)
      throw Error("ProductType value is not acceptable");
    this.value = value;
  }
}
