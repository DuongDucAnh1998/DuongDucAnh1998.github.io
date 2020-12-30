// 1 .Viết chương trình tính chu vi của hình tròn

var r = parseInt(prompt("Nhập bán kính"));

function cCircle()
{

    pi = 3.14
    return r * 2 * pi;

}

var chuvi = cCircle();

 
document.write("Chu vi hình tròn bằng "+chuvi+". ");
console.log("Chu vi hình tròn bằng "+chuvi);


// 2. Viết chương trình tính diện tích hình tròn

function sCircle()
{

    pi = 3.14
    return r ** 2 * pi;

}

var dientich = sCircle();

document.write("Diện tích hình tròn bằng "+dientich+". ");
console.log("Diện tích hình tròn bằng "+dientich);

// 3. Viết chương trình có chức năng quy đổi từ cm => m

var cm = parseInt(prompt("Nhập kích thước"));

function cmM()
{
    
    return cm / 100;

}

var m = cmM()
document.write("Quy đổi: "+cm+"cm = "+m+"m"+". ");
console.log("Quy đổi: "+cm+"cm = "+m+"m"+". ");

// Viết chương trình có chức năng quy đổi từ phút => giờ

var minute = parseInt(prompt("số phút"));

function mH()
{

    return minute / 60;

}

var h = mH()
document.write("Quy đổi: "+minute+"phút = "+h+"giờ. ");
console.log("Quy đổi: "+minute+"phút = "+h+"giờ. ");

// 5. Viết chương trình trả về nghiệm của phương trình bậc nhất (Ax + b = c)

var a = parseInt(prompt("Nhập số a"));
var b = parseInt(prompt("Nhập số b"));
var c = parseInt(prompt("Nhập số c"));

function firstDegreeEquation()

{
    
    return (c - b) / a;

}

var x = firstDegreeEquation()
document.write("Phương trình có nghiệm x = "+x+". ");
console.log("Phương trình có nghiệm x = "+x+". ");

// 6. Viết chương trình đổi từ độ C => độ F

var cC = parseInt(prompt("Độ C"));

function cF()
{

    return ( 9/5 * cC + 32 )

}

var f = cF()
document.write("Quy đổi: "+cC+"độ C = "+f+"độ F. ");
console.log("Quy đổi: "+cC+"độ C = "+f+"độ F. ");

// 7. Viết chương trình tính chỉ số BMI của 1 người (BMI là gì? công thức như nào? học viên tự tham khảo trên mạng)

var weight = parseInt(prompt("cân nặng (kg)"));
var height = parseInt(prompt("Chiều cao (m)"));

function bmiTotal()

{

    return Math.floor(weight / (height * 2))

}

var bmi = bmiTotal()
document.write("BMI = "+ bmi+". ");
console.log("BMI = "+ bmi+". ");


//8 Viết chương trình random 1 số trong khoảng min - max (min, max là 2 số nguyên dương tùy ý)

function random(min = 5, max = 300) {
    
    return Math.floor(Math.random() * (max - min) + min);
   
}

var number = random(min = 5, max = 300)
document.write("Min 5, max 300: "+number)
console.log("Min 5, max 300: "+number)