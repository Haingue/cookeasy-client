export class Allergen {
  static values = [
    "GLUTEN",
    "CRUSTACEANS",
    "EGGS",
    "FISH",
    "PEANUTS",
    "SOYBEANS",
    "MILK",
    "NUTS",
    "CELERY",
    "MUSTARD",
    "SESAME_SEED",
    "SULPHUR_AND_SULPHITES",
    "LUPIN",
    "MOLLUSCS",
  ];

  constructor(value) {
  if (value != null && Allergen.values.indexOf(value) === -1)
      throw Error("Allergen value is not acceptable");
    this.value = value;
  }
}
