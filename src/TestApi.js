
/*
1   2
3  (4)
5   6
7   8
[1,2], [1,3], [3,5], [5, 6], [5, 7], [6, 8], [7, 8]
*/


function ArrayChallenge(arr) { 

    console.log(arr)
     const desks = arr.shift();
     console.log(desks)
   
     const rows = desks/2
     console.log(rows)
   
     const desk = [];
     let val = 0;
       for (row = 0; row < rows; row ++){
       desk.push([])
         for (col=0; col<2; col ++){
         const bookedSeats = arr.indexOf(val+1) > - 1 ? 0 : 1;
         desk[row].push(bookedSeats)
         val ++
   
       }
     console.log(desk[row])
   
     }
   
     /*
   1   2
   3  (4)
   5   6
   7   8
   [1,2], [1,3], [3,5], [5, 6], [5, 7], [6, 8], [7, 8]
   */
   
     let combination = 0
     for (let i = 0; i < rows -1; i ++ ) {
         if ((desk[i][0]=== 1) && (desk[i][1] === 1)) combination++;
         if ((desk[i][0]=== 1) && (desk[i + 1][0] === 1)) combination++;
         if ((desk[i][1]=== 1) && (desk[i + 1][1] === 1)) combination++;
   }
   
        if ((desk[rows -1][0]=== 1) && ( desk[rows - 1][1] === 1)) combination++;
     return combination; 
   
   }
      
   // keep this function call here 
   console.log(ArrayChallenge(readline()));
   ------------------------------------------------
   
   import React, { useState } from 'react';
   import ReactDOM from 'react-dom';
   
   const style = {
     table: {
       borderCollapse: 'collapse'
     },
     tableCell: {
       border: '1px solid gray',
       margin: 0,
       padding: '5px 10px',
       width: 'max-content',
       minWidth: '150px'
     },
     form: {
       container: {
         padding: '20px',
         border: '1px solid #F0F8FF',
         borderRadius: '15px',
         width: 'max-content',
         marginBottom: '40px'
       },
       inputs: {
         marginBottom: '5px'
       },
       submitBtn: {
         marginTop: '10px',
         padding: '10px 15px',
         border:'none',
         backgroundColor: 'lightseagreen',
         fontSize: '14px',
         borderRadius: '5px'
       }
     }
   }
   
   const models = []
   function comparsion (user, old) {
   if(!user.lastname || !old.lastname){
     return -1
   }
   
     var aLastName = user.lastname[0];
     var bLastName = old.lastname[0 ]; 
     if (aLastName < bLastName) return -1;
     if (aLastName > bLastName) return 1;
     return 0;
   }
   
   function PhoneBookForm({ addEntryToPhoneBook }) {
   const user =  {}
     return (
       <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
         <label>First name:</label>
         <br />
         <input 
           style={style.form.inputs}
           className='userFirstname'
           name='userFirstname' 
           type='text'
           onChange={(e)=>{user.firstname =e.target.value}} 
         />
         <br/>
         <label>Last name:</label>
         <br />
         <input 
           style={style.form.inputs}
           className='userLastname'
           name='userLastname' 
           type='text' 
             onChange={(e)=>{user.lastname =e.target.value}} 
         />
         <br />
         <label>Phone:</label>
         <br />
         <input
           style={style.form.inputs}
           className='userPhone' 
           name='userPhone' 
           type='text'
            onChange={(e)=>{user.phone =e.target.value}} 
         />
         <br/>
         <input 
           style={style.form.submitBtn} 
           className='submitButton'
           type='submit' 
           value='Add User'
           onClick={(e)=>{addEntryToPhoneBook(user)}}
         />
       </form>
     )
   }
   
   function InformationTable({user}) {
   if(user){
   models.push(user)
   }
   const users = models.length >1 ? models.sort(comparsion) : models
     return (
       <table style={style.table} className='informationTable'>
         <thead> 
           <tr>
             <th style={style.tableCell}>First name</th>
             <th style={style.tableCell}>Last name</th>
             <th style={style.tableCell}>Phone</th>
           </tr>
         </thead> 
             <tbody>
         {user?users.map((entity, index) =>
            <tr key={index}>
             <td style={style.tableCell}>{entity.firstname}</td>
             <td style={style.tableCell}>{entity.lastname}</td>
             <td style={style.tableCell}>{entity.phone}</td>
                </tr>
             ):null}
         </tbody> 
       </table>
     );
   }
   
   
   function Application(props) {
     const [user, setUser] = useState()
     return (
       <section>
         <PhoneBookForm addEntryToPhoneBook={setUser}/>
         <InformationTable user={user} />
       </section>
     );
   }
   
   ReactDOM.render(
     <Application />,
     document.getElementById('root')
   );
   
   
   
   
   const https = require('https');
   
   https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
     
   
     let data = '';
    
     resp.on('data', (chunk) => {
       data += chunk;
     });
   
     resp.on('end', () => {
       console.log(JSON.parse(data));
       let body = JSON.parse(data)
   
   function filter(obj){
   Object.keys(obj).forEach((key)=> {
   if(typeof obj[key]==='object' && !obj[key].length){
     Object.keys(obj[key]).forEach(innerKey=>{
     const match = new RegExp(/^-| |N\/A$/,'g').test(obj[key][innerKey])  || obj[key][innerKey]===""
     if(match){
       delete obj[key][innerKey]
     }
     })
   }
   else if(typeof obj[key]==='string'){
     const match = new RegExp(/^-| |N\/A$/,'g').test(obj[key]) || innerKey===""
     if(match){
       delete obj[key]
     }
   }
   else if(obj[key] && obj[key].length){
     obj[key].forEach((innerKey, index)=>{  
     const match = new RegExp(/^-| |N\/A$/,'g').test(innerKey)  || innerKey===""
     if(match){
        obj[key].splice(index, 1)
     }
     })
   }
   })
   console.log(obj)
   }
    filter(body)
     });
   
   }).on("error", (err) => {
     console.log("Error: " + err.message);
   });



/*
function SeatingStudents(arr) {
    arr = [12, 2, 6, 7, 11]
    console.log(arr)
    const number_of_seats = arr.shift();
    console.log(number_of_seats)
    const number_of_rows = Math.round(number_of_seats / 2);
    console.log(number_of_rows)
    const seat = [];
    let idx = 0;
    for (row = 0; row < number_of_rows; row ++) {     
        seat.push([]);
        for (col = 0; col < 2; col ++) {
            const isOccupied = arr.indexOf(idx + 1) > -1 ? true : false;
            //console.log(isOccupied);
           // console.log(row);
            seat[row].push(isOccupied);
            idx ++;
        }
       
   
        console.log(seat[row].join("-"));
    }

    let seating = 0;
    for (let i = 0; i < number_of_rows - 1; i ++) {
        if ((seat[i][0] === false) && (seat[i][1]     === false)) seating ++;
        if ((seat[i][0] === false) && (seat[i + 1][0] === false)) seating ++;
        if ((seat[i][1] === false) && (seat[i + 1][1] === false)) seating ++;
    }
    // check if last row is empty:
    if ((seat[number_of_rows - 1][0] == false) && (seat[number_of_rows - 1][1] == false)) seating ++;
    return seating;
}

const input = [6, 4];
//const input = [8,1,8];

console.log(SeatingStudents(input));

*/