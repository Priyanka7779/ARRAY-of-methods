// array methods


    // push method

    let heros = ["saktiman", "spiderman", "superhero", "varunmaisa"]
    console.log(heros)
    heros.push("sarukh")
    console.log(heros)



    // pop method

    let bollywood = ["sarmankhan", "sarukhkhan", "varun", "ajaydevgan"]
    bollywood.pop()
    console.log(bollywood)



    // shift method

    let movie = ["pushpa2","bhulbhulaiya","hum aapke hai kon","hum sath sath hai"]
    movie.shift("")
    console.log(movie)



    // unshift method

    let movie2 = ["pushpa2","bhulbhulaiya","hum aapke hai kon","hum sath sath hai"]
    movie.shift("")
    console.log(movie2)



    // concat method

    let gujratiMovie = ["maiyarma mandu nathi lagtu","patan thi pakistan","radha tara vina gamtu nathi"]
    // let gujratiMovie2 = ["khedut putra","kadi thi kalol"]
    let result = gujratiMovie.concat("khedut putra","kadi thi kalol")
    console.log(result)



    // inculdes

    let aa = gujratiMovie.includes("appel")
    console.log(aa)



    // join method

    let bb = gujratiMovie.join(",")
    console.log(bb)



    // indexOf method

    let cc = gujratiMovie.indexOf("radha tara vina gamtu nathi")
    console.log(cc)



    // slice method

    let num=[1,2,3,4,5,6,7,8,9,10]
    console.log(num)
    let dd = num.slice(2,9)
    console.log(dd)



    // splice method

    let arr1 =["mango","banana","kiwi","fruit","orange","lichi","painepal","chiku"]
    arr1.splice(3,5)
    console.log(arr1)



    // map method

    const students = [{name:"prishal",grade:81},
            {name:"krish",grade:70},
            {name:"priya",grade:90},
            {name:"vishal",grade:81}]

    let minGrade = 50

    let studentMark = students.map((students)=>students.grade>minGrade)
    console.log("pass",studentMark)



    // filter method

    const evenOdd=[1,2,4,6,8,11,13,12,14,16,18,20]

    let oddEven = evenOdd.map((evenOdd)=>{
       return evenOdd % 2==0
    });
    console.log(oddEven)



    // reduce method

    let arr = [1,2,3,4];

    const output = arr.reduce((pre,curr)=>{
        return pre / curr ;
    });
    console.log(output)
