export class Category {
  static values = [
    "APPAREL_AND_ACCESSORIES",
    "ELECTRONICS",
    "HOME_GOODS",
    "BEAUTY_AND_PERSONAL_CARE",
    "SPORTS_AND_OUTDOOR_EQUIPMENT",
    "AUTOMOTIVE",
    "BOOKS_MUSIC_AND_MEDIA",
    "TOYS_AND_GAMES",
    "FURNITURE_AND_HOME_DECOR",
    "FOOD_AND_GROCERY",
    "PET_SUPPLIES",
    "HEALTH_AND_WELLNESS",
    "OFFICE_SUPPLIES",
    "TOOLS_AND_HARDWARE",
    "BABY_AND_CHILD_PRODUCTS",
    "JEWELRY_AND_WATCHES",
    "MUSICAL_INSTRUMENTS",
    "COLLECTIBLES_AND_ART",
    "GARDEN_AND_OUTDOOR_LIVING",
    "TRAVEL_AND_LUGGAGE",
    "BUSINESS_SUPPLIES_AND_EQUIPMENT",
    "INDUSTRIAL_AND_SCIENTIFIC",
    "SERVICE",
    "PHARMACEUTICALS",
    "PERSONAL_HYGIENE_AND_SANITATION",
  ];

  constructor(value) {
    if (value != null && Category.values.indexOf(value) === -1)
      throw Error("Category value is not acceptable");
    this.value = value;
  }
}
