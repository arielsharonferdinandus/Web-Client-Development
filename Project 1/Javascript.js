// Case 1: Luas Persegi
function rectangleArea(length, width) {
    return length * width;
}
console.log(rectangleArea(5, 3));

// Case 2: Diameter, Keliling dan Luas Lingkaran
function circleProperties(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;

    console.log("Diameter:", diameter);
    console.log("Circumference:", circumference.toFixed(4)); 
    console.log("Area:", area.toFixed(3)); 
}
circleProperties(5);

// Case 3: Sudut ke-3 Segitiga
function thirdAngle(a, b) {
    return 180 - (a + b);
}
console.log(thirdAngle(80, 65));

// Case 4: Selisih Tanggal dalam Hari
function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let diffTime = Math.abs(d2 - d1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}
console.log(dateDifference("2024-03-19", "2024-03-21")); 

// Case 5: Memberikan Inisial dalam Kapital
function getInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log(getInitials("John Doe")); 
