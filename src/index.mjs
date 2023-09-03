// var val1 = "var変数";
// console.log(val1);
// console.log("aaa");

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(1,2));

// const myProfile = {
//   name: "だけん",
//   age: "40"
// }

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message2);

// const myProfile = ["だけん", 40];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`名前は${name}です。`);
// sayHello("だけん");

// const arr1 = [1,2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arrName = ["田中","山田","鈴木"];
// for(i=0; i<arrName.length; i++){
//   console.log(`${i + 1}番目は${arrName[i]}です。`);
// };

// const arrName2 = arrName.map((name)=>{
//   return name;
// })
// console.log(arrName2);

// arrName.map((name, i) => console.log(`${i+1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = arrName.map((name)=>{
//   if(name === "田中"){
//     return name;
//   }else{
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

// 三項演算子
// 条件 ? trueのとき : falseのとき
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

const num1 = 1300;
const num2 = "1300"
// console.log(num1.toLocaleString());
// console.log(num2.toLocaleString());

// const formattedNum1 = typeof num1 === "number" ? num1.toLocaleString() : "数値を入力してください";
// const formattedNum2 = typeof num2 === "number" ? num2.toLocaleString() : "数値を入力してください";
// console.log(formattedNum1);
// console.log(formattedNum2);

const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? console.log("100以上です！！") : console.log("許容範囲です");
}
checkSum(50, 60);