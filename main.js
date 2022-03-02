studentArray=[];
function submit(){
    studentArray.push(document.getElementById("student1").value);

    studentArray.push(document.getElementById("student2").value);
    studentArray.push(document.getElementById("student3").value);
    studentArray.push(document.getElementById("student4").value);
    document.getElementById("display_name").innerHTML=studentArray
    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    studentArray.sort();
    document.getElementById("display_name").innerHTML=studentArray
}