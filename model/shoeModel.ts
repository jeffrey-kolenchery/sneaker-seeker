/**
 * @class shoeModel
 * Contains information about an individual shoe. 
 * These attributes will be used in the domain-logic model to calculate other potential shoes to show to the user.
 * 
 */

class shoeModel {

    id: String;
    brand: String;
    name: String;
    colorway: String;
    gender: String;
    silhouette: String;
    releaseYear: Number;
    image: String;

    constructor(id: String, brand: string, name: string, colorway: string, 
      gender: string, silhouette: string, releaseYear: number, image: string) {
      this.id = id;
      this.brand = brand;
      this.name = name;
      this.colorway = colorway;
      this.gender = gender;
      this.silhouette = silhouette;
      this.releaseYear = releaseYear;
      this.image = image;
    }

  }
    