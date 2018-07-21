function Loadjson(file,callback)
{
  var x = new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file, true);
  x.onreadystatechange=function()
  {
    if(x.readyState===4 &&  x.status == "200")
    {
      callback(x.responseText);
    }
  };
  x.send(null);
}
Loadjson("data.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);
  carrerinfo(data.carrer);
  education(data.education);
  skillset(data.keyskills);
})

var child1 = document.querySelector(".child1");
function basics(det)
{
 var image = document.createElement("img");
 image.src = det.image;
 child1.appendChild(image);

   var name = document.createElement("h3");
   name.textContent  = det.name;
   child1.appendChild(name);

   var phonenumber = document.createElement("h3");
   phonenumber.textContent = det. phonenumber;
   child1.appendChild(phonenumber);

   var email = document.createElement("a");
   email.href = "mailto:sugnanimaddukuri@gmail.com";
   email.textContent = det.email;
   child1.appendChild(email);

   var Address  = document.createElement("h2");
   Address.textContent  = det.Address;
   child1.appendChild(Address);

   var hr = document.createElement("hr");
   child1.appendChild(hr);

}
   var child2 = document.querySelector(".child2");
   function  carrerinfo(info1)
   {
     var cr = document.createElement("h2");
     cr.textContent = "carrerobjective:";
     child2.appendChild(cr);

     var hr = document.createElement("hr");
     child2.appendChild(hr);

     var carrer = document.createElement("p");
     carrer.textContent = info1.info;
     child2.appendChild(carrer);
}
function education(edu)
{
  var edu1=document.createElement("h4");
  edu1.textContent = "Education Qualifications:";
  child2.appendChild(edu1);

  var hr2= document.createElement("hr");
  child2.appendChild(hr2);

  for(i=0;i<edu.length;i++)
  {
    var deg=document.createElement("h4");
    deg.textContent=edu[i].degree;
    child2.appendChild(deg);


    var ul=document.createElement("ul");
    var li=document.createElement("li");
    li.textContent=edu[i].institute;
    ul.appendChild(li);
    child2.appendChild(ul);

    var li2=document.createElement("li");
    li2.textContent=edu[i].date;
    ul.appendChild(li2);
    child2.appendChild(ul);
  }
}
  function skillset(skillinfo)
  {
  var ke = document.createElement("h2");
  ke.textContent = "Key Skills:";
  child2.appendChild(ke);

  var hr = document.createElement("hr");
  child2.appendChild(hr);


    var skilldata = document.createElement("table");
    skilldata.border= "1";
    child2.appendChild(skilldata);

    tabledata = "";
    for(i=0;i<skillinfo.length;i++) {
      tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].info+"</td></tr>";
    }
    skilldata.innerHTML = tabledata;
}
