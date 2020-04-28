//function getMin(arr) {
    //   let newArr = Math.min.apply(null, arr);
    //   console.log(newArr);
    //   return newArr;
    // }
    // getMin([1,61,2,67,-30,12,-77,100,126,6, -1]);
    
    // function getMin(arr) {
    //   let min;
    
    //   for (let i = 0; i < arr.length; i++) {
    //     arr.sort((a, b) => a - b);
    
    //     min = arr[0];
    //     console.log(min);
    //   }
    //   return min;
    // }
    
    // getMin([1, 61, 2, 67, -30, 12, -77, 100, 126, 6, -1]);
    
    
    // function getEven(arr) {
    //   let newArr = [];
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //       newArr.push(arr[i]);
    //       console.log(newArr);
    //     }
    //   }
    //   return newArr;
    // }
    
    // getEven([4, 8, 9, 7, 4, 2, 6]);
    
    // function getEven(arr) {
    //   let newArr = arr.filter((num) => num % 2 === 0);
    
    //   console.log(newArr);
    // }
    
    // getEven([4, 8, 9, 7, 4, 2, 6]);
    
    
    // function searchByName(name) {
    //   const obj = [{
    //       name: "Jonny Walker",
    //       birthDate: "1995-07-12"
    //     },
    //     {
    //       name: "Mike Cooper",
    //       birthDate: "1984-13-10"
    //     },
    //     {
    //       name: "John Biz",
    //       birthDate: "1970-25-01"
    //     },
    //     {
    //       name: "John Biz",
    //       birthDate: "1830-12-12"
    //     }
    //   ];
    
    //   let people = [];
    
    //   obj.filter((person) => {
    //     if (name === person.name) {
    //       people.push(person.name, person.birthDate);
    
    //     }
    
    //     return people;
    //   });
    //   console.log(people);
    // }
    
    //searchByName("John Biz");
    
    function searchByName(name) {
        const obj = [{
                name: "Jonny Walker",
                birthDate: "1995-07-12",
            },
            {
                name: "Mike Cooper",
                birthDate: "1984-13-10",
            },
            {
                name: "John Biz",
                birthDate: "1970-25-01",
            },
            {
                name: "John Biz",
                birthDate: "1830-12-12",
            },
        ];
        let newArr = [];
        for (let i = 0; i < obj.length; i++) {
            if (name === obj[i].name) {
                newArr.push(obj[i]);
                console.log(newArr);
            }
        }
        return newArr;
    }
    
    searchByName("John Biz");