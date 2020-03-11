import { NativeModules } from "react-native";

export class Category {
    constructor(name, icon) {
        this.categoryName = name; /* string */
        this.icon = icon; /* string */
        this.subcategories = []; /* Category[] */
    }

    addSubcategory(category) {
        this.subcategories.push(category);
    }
}
