interface ClothingItem {
    id: number,
    name: string,
    price: number,
    quantity: number,
    sizes: string[]
}

let item1: ClothingItem = {
id: 122343,
name: "Blabla",
price: 20,
quantity: 500,
sizes: ["S", "M", "L", "XL"]
}
console.log(item1)

//Exercise 2

interface ClothingItem2 {
    id: number,
    name: string,
    price: number,
    quantity: number,
    sizes: string[]
}

//Function to calculate the average priice of items in the inventory
function calculateAveragePrice(items: ClothingItem2[]): number {
    if(items.length === 0) {
        return 0;
    }

    const totalPrice = items.reduce((sum, item) => sum + item.price,0);
    return totalPrice / items.length;
}

//Function to count the total number of items available in the inventory
function countItemsInInventory(items: ClothingItem2[]): number {
    return items.reduce((total, item) => total + item.quantity,0);
}

// Example data to test the functions
const inventory: ClothingItem[] = [
    { id: 1, name: "T-Shirt", price: 19.99, quantity: 150, sizes: ["S", "M", "L", "XL"] },
    { id: 2, name: "Jeans", price: 49.99, quantity: 100, sizes: ["S", "M", "L"] },
    { id: 3, name: "Jacket", price: 89.99, quantity: 50, sizes: ["M", "L", "XL"] }
];

// Test the functions
const averagePrice = calculateAveragePrice(inventory);
const totalItems = countItemsInInventory(inventory);

console.log(`Average Price: $${averagePrice.toFixed(2)}`);
console.log(`Total Items in Inventory: ${totalItems}`);
