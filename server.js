const express = require('express');
const app =express();
const path =require('path');

//ini digunakan untuk menyertakan file ekpress atau dengan kata lain mengimportkan fungsi express ke variabel express

app.set("/" , "HTML");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extends:false}));

app.get('/' , (reg, res)=>{
  res.render('index');
 // disini app mengacu pada express yang akan dieksekusi, sedangkan reg dan res merupakan fungsi panggilan balik
});

app.listen(8080, () =>{
  console.log("listening on http://localhost:8080");
// ini adalah akses yang akan digunakan untuk melihat hasil di web broser
});