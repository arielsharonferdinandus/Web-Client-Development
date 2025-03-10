// Case 1: Luas Persegi
function rectangleArea(length: number, width: number): number {
    return length * width;
}
console.log(rectangleArea(5, 3)); 

// Case 2: Diameter, Keliling dan Luas Lingkaran
function circleProperties(radius: number) {
    let diameter: number = 2 * radius;
    let circumference: number = 2 * Math.PI * radius;
    let area: number = Math.PI * radius * radius;
    return {
        diameter: diameter,
        circumference: circumference.toFixed(4), // Formatting to 4 decimal places
        area: area.toFixed(3)
    };
}
console.log(circleProperties(5));

// Case 3: Sudut ke-3 Segitiga
function thirdAngle(a: number, b: number): number {
    return 180 - (a + b);
}
console.log(thirdAngle(80, 65)); // Output: 35

// Case 4: Selisih Tanggal dalam Hari
function dateDifference(date1: string, date2: string): number {
    let d1: Date = new Date(date1);
    let d2: Date = new Date(date2);
    let diffTime: number = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
}
console.log(dateDifference("2024-03-19", "2024-03-21")); // Output: 2

// Case 5: Memberi Inisila dalam Kapital
function getInitials(name: string): string {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log(getInitials("John Doe")); // Output: JD
