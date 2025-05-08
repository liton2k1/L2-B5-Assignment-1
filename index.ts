function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {

        return input.toUpperCase();
    }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4)
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
}


class Vehicle {
    constructor(private make: string, private year: number) {
    }
    getInfo() {
        return `"Make: ${this.make}, Year: ${this.year}"`
    }
}

class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `"Model: ${this.model}"`
    }
}



function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2
    }
}


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
        return null;
    }

    let mostExpensiveProduct = products[0];

    for (const product of products) {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product;
        }

    }
    return mostExpensiveProduct;
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday) {
        return "Weekend";
    }
    else {
        return "Weekday"
    }
}


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                resolve(n * n)
            }
        }, 1000)
    })
}

