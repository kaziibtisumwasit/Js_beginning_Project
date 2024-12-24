//js diye html element select kora//
//selector 
//By tag name mane holo HTML tag dhore select kora
//eti array te return korbe tai [0] use kora hoise    //array er 1st element
// document.getElementsByTagName("h1")[0].style.color = "red";

// selector array hishebe return kore jodi tag,class name diye select kora hoy
// const target=document.getElementsByTagName("h1");
// console.log(target);
document.getElementsByClassName("title")[3].style.color = "blue";
//document.getElementsByClassName("class_name")[index].style.property="value";

document.getElementById("1").style.color = 'green';
//document.getElementById("id_name") =>>single element return kore ba select kore id er maddhome




//query selector use korle array hishebe return kore na
//queryselector use korle oi tag er 1st element return kore
// document.querySelector("h1").style.color="red"///

// ......................................................................
/*

document is an object jar moddhe element ache...er jonno document object ke . diye access korte hoi
getElementsByTagname(),getElementsByClassName() 
=>>array hishebe return kore,[index] index use kore oi tag er ba class er 
 elements select kora jay

 .........................
      querySelector()=> diye tag,class,id select kora jay,but array hishebe return kore na 1st index er element return kore



*/




const allBox = document.getElementsByClassName("box");

for (let i = 0; i < allBox.length; i++) {
      const element = allBox[i];//element variable er moddhe allBox object er ek ek kore element ashtese
      if (element.innerText == "Box 5") {
            //inerText diye element er moddhe text access kora jay.oi element
            //er moddhe je text ache ta jodi inner tex e diye dewa hoi ta hole 
            // ta access korte pare==> .innerText="text"
            element.style.backgroundColor = "yellow";
      }
      else {
            element.style.backgroundColor = "gray";
      }
}

//.............................................................................
//way1  ==>js file e addEventListener use kora
document.getElementById("btn").addEventListener("click", (event_ghotlo) => {
      console.log("Click to mere dila button e  Boom Boom Futlo");
});

//Way 2.==>HTML file e onclick use kora & js function ti html theke call kora 
const action = (event) => {
      console.log("HTML file theke ei function call hocche.je button click korle ei function call hobe.oi button er moddhe onclick=function ti call kore dile eta kaj korbe");
}




////.....................................................

/*
HTML er text file select korar jonno innerText use kora hoi
HTML er Input field er value select korar jonno value use kora hoi
HTML er attribute select korar jonno getAttribute use kora hoi
HTML er attribute change korar jonno setAttribute use kora hoi
HTML er attribute remove korar jonno removeAttribute use kora hoi
HTML er class change korar jonno classList use kora hoi
HTML er class add korar jonno classList.add use kora hoi
HTML er class remove korar jonno classList.remove use kora hoi
HTML er class toggle korar jonno classList.toggle use kora hoi
HTML er class check korar jonno classList.contains use kora hoi
HTML er style change korar jonno style use kora hoi
HTML er style add korar jonno style add use kora hoi
HTML er style remove korar jonno style remove use kora hoi
HTML er style check korar jonno style check use kora hoi
HTML er style set korar jonno style set use kora hoi
HTML er style get korar jonno style get use kora hoi
HTML er style clear korar jonno style clear use kora hoi
HTML er style toggle korar jonno style toggle use kora hoi
HTML er style contains korar jonno style contains use kora hoi
HTML er style replace korar jonno style replace use kora hoi
HTML er style insert korar jonno style insert use kora hoi
HTML er style append korar jonno style append use kora hoi
HTML er style prepend korar jonno style prepend use kora hoi
HTML er style before korar jonno style before use kora hoi
HTML er style after korar jonno style after use kora hoi
HTML er style replaceWith korar jonno style replaceWith use kora hoi
HTML er style removeChild korar jonno style removeChild use kora hoi
HTML er style appendChild korar jonno style appendChild use kora hoi
HTML er style insertBefore korar jonno style insertBefore use kora hoi
HTML er style insertAfter korar jonno style insertAfter use kora hoi

*/

//.............................................................................
//input fild er value nibo

const take_input_btn=(event)=>{
      const t_value=document.getElementById("take_val").value;//HTML er input fild er value nite hole value use kora hoi
    
      const container_for_output=document.getElementById("output");//eta holo output er jonno ekta div er id
      

      //create tag for HTML in js
      const p=document.createElement("p");//p tag create korlam ==>> <p></p>

      //p tag ke ekta class dibo js er maddhome
      p.classList.add("output_text");//p tag er moddhe class add kora==> <p class="output_text"></p>

      //p tag er moddhe input fild er value ta add korlam
      p.innerText=t_value;//p tag er moddhe input fild er value ta add korlam==> <p>input fild er value</p>
      
      // console.log(p);
      //Output div er moddhe p tag ta add korte hole appendChild use kora hoi
      container_for_output.appendChild(p);//Output div er moddhe p tag ta add korte hole appendChild use kora hoi
      //output_divname or display_divname.appendChild(tag_name) ==>je tag er moddhe text add kora hoyeche ta output div er moddhe show korbe


      //inputfind er value jokhon input newa sesh & display kora sesh then input fild ba box ti clear korte hole empty string assign kore dite hobe
      document.getElementById('take_val').value="";//input fild er value clear korte hole empty string assign kore dite hobe jate input box clean hoye jai value input howar por



      //output div er moddhe joto p tag add kora hoise sob p tag ke ekshate khorbo class name diye
       const all_output_text=document.getElementsByClassName("output_text");//output div er moddhe joto p tag add kora hoise sob p tag ke ekshate class name diye dhore all_output_text variable e rakhlam


       //shortcut version of for loop that is for of loop
       //for(const single_element_of_array of je_array_er Upor_loop_chalabo_oi_array_er_nam)
       for(const element of all_output_text){
            // console.log(element);
            //all_output_text array theke sob p tag ek ek kore element variable e paitessi
            //element er upor addEventListener bohsbo er fole sob element er upor addEventListener add hoye jabe
            element.addEventListener("click",(e)=>{
                  //eikahne e holo event object er short form,click korar por oi click kora opject ti e er moddhe asbe
                  console.log(e.target);//je jinish ta click korsi oi jinish ta dekhte hole e.target er moddhe jete hobe
                  //e.target mane holo je jinish ta click korsi oi jinish ta
                  console.log(e.target.parentNode);//e.target.parentNode mane holo je jinish ta click korsi oi jinish ta er parent node ta
                  //parentNode holo oi node ta je tar moddhe p tag ghula store korsilam .that is output-container

                  //e.target ==> je jinish ta click korlam shetai
                  //e.target.parentNode==>je jinish ta click korlam shetai er parent node ta
                  //e.target.parentNode.removeChild(element)==>je jinish ta click korlam shetar parent node e giye ta child ta ke dhore remove korlam
                  e.target.parentNode.removeChild(element);//je jinish ta click korlam shetar parent node e giye ta child ta ke dhore remove korlam
            })
       }
}


//////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////API////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////
//server Side Theke Data Fetch korar jonno API use kora hoi
//server site theke client site e data ashar jonno api dorker hoi
//api==>Application Programming Interface
//api==>server site theke data fetch korar jonno use kora hoi
//api ==>> holo ekta url ja servier site e jai & data fetch kore niye ashe client site e
//server site<-----------------API(URL)-------------------<client site
//            >---API(response from server site)---------->client site


//Fetch data from API
//API er url ta ke call kora holo fetch() function use kore
fetch("https://jsonplaceholder.typicode.com/users")//fetch==>api er url ta fetch korbe
//fetch er through e api te call kora holo
//fetch==>api er url ta fetch korbe
//ei je api ta call holo er por to ekta response ashbe server theke er jonno .then use kora hoi
//res holo server theke asha response ta,,res==>response
.then(res=>res.json()) /// je response ta asbe seta json e convert kora holo
//res.json()==>response ta json e convert kora holo
.then(data=>{
      // console.log(data);
      displayData(data);//api theke asha data ta displayData function e pathano holo.ei data holo ekta array,there are multiple data or object
})//api theke asha data ta data variable e store kora holo

//jodi successfully data ta fetch ba load na hoi tahole error msg through korte .catch use korte hoi
.catch(error=>console.log(error));//error handling korte hole catch use kora hoi



const displayData =(userData) =>{
      //user data is an array of object.multiple object in there
     const container=document.getElementById("API_userData-container");//HTML er API_data_container section ke select kore,container variable e store kora holo
     //forEach loop didn't return anything
      //forEach loop==>array er moddhe je jinish gula ache seta ek ek kore access kore
      //array_name.forEach((single_element_of_array)=>{console.log(single_element_of_array);})
      userData.forEach(user=>{
            //create a HTML div inside from js
            //document.createElement("div")==>div tag create korlam..<div></div>
            const div=document.createElement("div");//div tag create korlam..<div></div>
            //div tag ke ekta class add kora holo js er maddhe
            div.classList.add("user-data");//div tag er moddhe class add korA holo==> <div class="API_data"></div>
            //DIV er moddhe je h1-h5 / p ect tag gula thake eder ke bola hoi innerHTML
            //div er vitor innerHTML er value set kore dibo mane H1-H5/P tag gular value set kore dibo
            //div_name.innerHtml="HTML tag er value"
            div.innerHTML=`
            <h4>${user.name}</h4>
            <p>${user.email.slice(5)}</p>`//slice(5) mane holo email er 5 ta prothom character ba letter remove kore dibo

            //container er moddhe div ke add kore dibo
            //div er moddhe proti ti single user er data ache alada alada kore 
            container.appendChild(div);//container er moddhe div ke add kore dibo,as a Child div is a child of container

      })
}





