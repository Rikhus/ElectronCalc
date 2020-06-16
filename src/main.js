function add(element){
    let operations=["+","-","*","/","%"];
    let num_field=document.getElementById("num_field");
    if(element.name=="btn_c"){
        num_field.innerHTML="";
    }
    else if(element.name=="btn_backspace"){
        num_field.innerHTML = num_field.innerHTML.substring(0,num_field.innerHTML.length-1);
    }
    else if(element.name=="btn_point"){
        let re=/[\\\+,\\\*,\\\-,\\\/,\\\%]/;
        let nums=num_field.innerHTML.split(re);
        let num=nums[nums.length-1];
        console.log(num);
        if (num.indexOf(".")==-1){
            num_field.innerHTML+=".";
        }
    }
    else if(element.name=="btn_equal"){
        if(num_field.innerHTML!=""){            
            num_field.innerHTML= eval(num_field.innerHTML);
        }
    }
    else if (!(operations.indexOf(element.value)!=-1 && (operations.indexOf(num_field.innerHTML[num_field.innerHTML.length-1])!=-1||num_field.innerHTML==""))){
        document.getElementById("num_field").innerHTML+=element.value;
    }
    
    
}