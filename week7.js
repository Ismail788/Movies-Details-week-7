const myName = ['Ismail','Soliman','Ibrahim'];
console.log('this just test', myName);
/*1-Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

Your solution could be something like this:*/
const numbers = [1, 2, 3, 4];
const newNumbers = [];
for (let i = 0; i < numbers.length;i++){
if(numbers[i] %2 !==0){
  newNumbers[i] = numbers[i]*2;
}
}
console.log("the doubled numbers are",newNumbers);
const x = numbers.map(x => x*2);
console.log('the map numbers are', x);
const evene = numbers.filter(x => x%2);
console.log('the filter numbers are',evene);

//2Using [this json file]
//we need load the url of the move by json
//const url =[''];
const url = 'https://gist.githubusercontent.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json'+name;
const req = new XMLHttpRequest();
req.addEventListener('load', function (data) {
    if (this.status === 200) {
    const responseText = req.responseText;
    const data = JSON.parse(responseText);
    for(let i = 0; i <data.length; i++){
    let doubled = data.map(a => a*2);
    console.log(doubled);
   const sum = data.reduce((runningSum, a) =>runningSum  + a, 8);
   console.log(sum.data);
   const ratings = [];
    const averageRating='4,6';
    function getMovesList(movies){
    const ratings = movies.map(m => parseFloat(m.rating));
    const averageRating = ratings.reduce((sum, r) => sum + r, 0) / ratings.length;
};
console.log(averageRating);

};
    console.log(data);
  } else {
          console.log('Something is probably wrong with the url');
      }
  });
  req.addEventListener('error', function () {
      console.log('Server error like timeout');
  });

  req.open("GET", url);
  req.send();
