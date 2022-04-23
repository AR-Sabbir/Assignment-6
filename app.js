const student=[

['Abdur Rahman','Six','1','Male','Dhaka',11,'200'],

['Sabbir Ahmed','Seven','5','Male','c',12,'300'],

['Nasrin Khatun','Nine','1','Female','Chitagang',14,'500'],

['Sifat Ali','Nine','2','Male','Khulna',14,'500'],

['Dolar Ali','Ten','50','Male','Sylet',16,'600'],

['Bodiur','Eight','15','Male','Dhaka',15,'400'],

['Popiara Begum','Eight','15','Female','Dhaka',15,'400'],

['Nayem Ahmed','Ten','17','Male','Rajshahi',17,'600'],

['Yusuf Ali','Ten','11','Male','Chapainawabganj',13,'600'],

['Raju Ahmed','Seven','6','Male','Moymonsing',13,'300'],

['Helal Ali','Eight','4','Male','Chitagang',20,'400'],

['Majeda Begum','Eight','5','Female','Moymonsing',18,'400'],

['Rohima Begum','nine','14','Female','Rangpur',18,'500'],

['Kamruzzaman','nine','18','Male','Borishal',19,'500'],

['Samima Khatun','Six','23','Female','Rajshahi',13,'200'],

['Rojina Kahtun','Seven','28','Female','Rangpur',14,'300'],

['Rekha Khatun','Eight','40','Female','Chitagang',15,'400'],

['Merina Khatun','Nine','50','Female','Rajshahi',15,'500'],

['Rupali Khatun','Ten','35','Female','Borishal',17,'600'],

['Tohida Begum','Six','80','Female','Dhaka',12,'200'],

['Mahafuza Khatun','Seven','18','Female','Borishal',14,'300'],

['Ziaur Rahman','Eight','3','Male','Rangpur',17,'400'],

['Abdul Korim','Nine','19','Male','Sylet',15,'500'],

['Mosarof Korim','Ten','21','Male','Rangpur',17,'600'],

['Minhaz','Six','37','Male','Khulna',12,'200'],

['Intiaz','Seven','45','Male','Moymonsing',13,'300'],

['Asfak Ahmed','Eight','49','Male','Dhaka',15,'400'],

['Tasrif Ahmed','Nine','','Male','Rajshahi',16,'500'],

['Sagor Ali','Ten','51','Male','Rangpur',17,'600'],

['Mursalin Ahmed','Six','6','Male','Khulna',12,'200'],



] 




// Find class wise student result



let total_student=0;


student.map((data,index)=>{



    if(data[1]=='Ten'){
        

        console.log(`
        Name-${data[0]}
        
        Class-${data[1]}
    
        Roll-${data[2]}
    
        Gender-${data[3]}
    
        Location-${data[4]}
    
        Age-${data[5]}
        Admission Fee-${data[6]}

        
    
          `);

          total_student ++ +(data[0])

          // total_student = total_student + 1

          // total_student += 1

          // total_student ++

          
    }
})

console.log(`
---------------------------------------------
Total Student=${total_student}
`);



// Find All Female Students
let totalFemaleStudent=0;

student.map((data,index)=>{

if(data[3] == 'Female'){

    console.log(`
    Name-${data[0]}
    
    Class-${data[1]}

    Roll-${data[2]}

    Gender-${data[3]}

    Location-${data[4]}

    Age-${data[5]}
    Admission Fee-${data[6]}

    

      `);

      totalFemaleStudent ++ +(data[3])



}




})

console.log(`
---------------------------------------------
Total Student=${totalFemaleStudent}
`);



// - find student between 10 - 25 age



let totalAgeCount=0;

student.sort().map((data,index)=>{

    if(data[5] >10 && data[5] <=25){

        console.log(`
        Name-${data[0]}
        
        Class-${data[1]}
    
        Roll-${data[2]}
    
        Gender-${data[3]}
    
        Location-${data[4]}
    
        Age-${data[5]}
        Admission Fee-${data[6]}
    
        
    
          `)
          
        
        };

        totalAgeCount ++ +(data[5])
})


console.log(`
---------------------------------------------
Total Student=${totalAgeCount}
`);




// Location wise student result


let totalLocation=0;

student.sort().map((data,index)=>{

    if(data[4] =='Rajshahi'){

        console.log(`
        ID-${index+1}
        Name-${data[0]}
        
        Class-${data[1]}
    
        Roll-${data[2]}
    
        Gender-${data[3]}
    
        Location-${data[4]}
    
        Age-${data[5]}
        Admission Fee-${data[6]}
    
        
    
          `)
          totalLocation ++ +(data[4])
        };

        

})


console.log(`
---------------------------------------------
Total Student=${totalLocation}
`);


let totalFee=0;

student.map((data,index)=>{


  totalFee += +(data[6])
  
})


console.log(`
---------------------------------------------
Total Student=${totalFee}
`);
