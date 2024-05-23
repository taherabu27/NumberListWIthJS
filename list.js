const persons = [
    {
        id: 1,
        name: 'Abu Taher',
        age:37,
        country: 'Bangladesh',
        city: 'Mymensingh'

    },

    {
        id: 2,
        age:41,
        name: 'Nure Alam',
        country: 'Bangladesh',
        city: 'Rangpur'

    },

    {
        id: 3,
        age: 28,
        name: 'Kamrul Hasan Tushar',
        country: 'Bangladesh',
        city: 'Laxmipur'

    },

    {
        id: 4,
        age: 30,
        name: 'Nazaria Nazim',
        country: 'India',
        city: 'Bengalor'

    }
]


//// show table data


function myTableList(tableData) {
    document.getElementById('myTable').innerHTML = 
    
    `
    <tr class= bg-primary text-white fw-bold>
        
    <td>ID<td>
    <td>Age<td>
    <td>Name<td>
    <td>Country<td>
    <td>City<td>
    
    <tr>
    `
    ;

/// for checking array is empty

if (tableData==""){
    document.getElementById('error').innerHTML=`<span class=text-danger>Not Found<span>`
}
else {
    document.getElementById('error').innerHTML='';

    for (let i=0; i<tableData.length; i++) {
        document.getElementById('myTable').innerHTML += 
        
        `
        <tr>
        <td>${tableData[i].id}<td>
        <td>${tableData[i].age}<td>
        <td>${tableData[i].name}<td>
        <td>${tableData[i].country}<td>
        <td>${tableData[i].city}<td>
        <tr>
        `
    }
}

}


///calling show table data method...
myTableList(persons);


let newArray =[];

//for searching method..
document.getElementById('search'). addEventListener ('keyup', function(){
    const search = this.value.toLowerCase();
   
    newArray= persons.filter (function (val){
if (val.id.includes(search)|| val.age.includes(search)|| val.name.includes(search)||
val.country.includes(search)|| val.city.includes(search)

) {
    const newObject = {id: val.id, age: val.age, name: val.name, country: val.country, city: val.city};
    return newObject;
}
    })
    myTableList(newArray);
})