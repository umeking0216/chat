// 今回やりたいこと
// ①リアルタイムの時間表示
// ②ログイン機能
// ③相互送信機能
// ④アイコンの表示
// ⑤LINEに近づく見た目



   
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
  import { getDatabase, ref, push, set, onChildAdded, remove,onChildRemoved } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  var uname1 = $("#username").text();
  var uname2 = "";
  var teigi = "";
  var teigi2 = "";
  


  // Your web app's Firebase configuration
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


 const db = getDatabase(app);
const dbRef = ref(db, 'line-2022');





$('#send').on('click',function(){

 const uname = $('#uname').val();
 const text = $('#text').val();

 const msg ={
   uname: uname,
   text: text,
}

const newPostRef = push(dbRef)
set(newPostRef,msg);


// 送信後に、入力欄を空にする

$('#uname').val("");

$('#text').val("");

$('#uname').focus();


});




onChildAdded(dbRef,function(date){

const msg = date.val();
const key = date.key;

console.log(key)

uname2 = msg.uname
console.log(uname1);
console.log(uname2);

if ( uname1 === uname2 ){
teigi = `class="msg2">`
teigi2 = `class="msg1">`

let h = `
<div>
 <p `+teigi2+`${msg.uname}</p>
 <p `+teigi+`${msg.text}</p>
</div>
`;
$("#output").append(h);

teigi = "";
teigi2 = "";


} else {
  teigi = `class="msg3">`
  teigi2 = `class="msg4">`
  }
  let h = `
  <div>
   <p `+teigi2+`${msg.uname}</p>
   <p `+teigi+`${msg.text}</p>
  </div>
  `;
  $("#output").append(h);

teigi = "";
teigi2 = "";
})

  



