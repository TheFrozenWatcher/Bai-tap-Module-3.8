//Ex5

var math = 1;
console.log("Điểm Toán: ", math);
var physics = 2;
console.log("Điểm Lý: ", physics);
var chemistry = 3;
console.log("Điểm Hóa: ", chemistry)

var averageScore = (math + physics + chemistry) / 3;
console.log("Điểm trung bình là: ", averageScore);

//Ex6

var usd = 300;
console.log("Số tiền đô la Mỹ: $", usd);
var vnd = 23000 * usd;
console.log("Số tiền quy đổi: ", vnd, "VNĐ");

//Ex 7
//Input: 3 giá trị
//Output: giá trị lớn nhất

var no1 = 2;
var no2 = 3;
var no3 = 1;
console.log("Số lớn nhất là ", Math.max(no1, no2, no3));

//Ex 8


//Ex 11.1
// Input: điểm 3 môn  Vật lý, Hóa học, và Sinh học
// output: điểm trung bình 3 môn Vật lý, Hóa học, và Sinh học
var physics = +window.prompt("Nhập điểm môn Lý");
console.log(typeof physics);
var chemistry = +window.prompt("Nhập điểm môn Hóa");
var biology = +window.prompt("Nhập điểm môn Sinh");
console.log("Lý:", physics);
console.log("Hóa: ", chemistry);
console.log("Sinh: ", biology);
var total = physics + chemistry + biology;
var average = total / 3;
console.log("Điểm trung bình là ", average);
console.log("Tổng điểm là ", total)
//Ex 11.2
//Input: độ C
//Output: độ F
var degC = 15;
var degF = degC / 5 * 9 + 32;
console.log("Độ F quy đổi là ", degF, "oF");

//Ex 11.3, 11.4
//Input: bán kính
//Output: diện tích
var radius = 30;
var area = Math.pow(radius, 2) * Math.PI;
var perimeter = radius * 2 * Math.PI;
console.log("Diện tích hình tròn là ", area);
console.log("Chu vi hình tròn là ", perimeter)


