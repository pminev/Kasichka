export class Category {
    constructor(name, icon) {
        this.categoryName = name; /* string */
        this.icon = icon;
        this.subcategories = []; /* Category[] */
    }

    addSubcategory(category) {
        this.subcategories.push(category);
    }
}