course=[];
mark =[]; 
chour=[]; //credit hour
tpoint=[]; //total points

function displayCourses(){
    
    total = 0;
    totalcredits = 0;
    totalpoints = 0;
    
    courseNumber1 = "";
    classhour1 = "";
    mark1 = "";
    grade1 = "";
    gpa1 = "";
    totalpoints1 = "";


    for (i=0; i<course.length; i++){

        tpoint[i]=(chour[i] * markToGrade(mark[i])[1]).toFixed(2);
        courseNumber1 = courseNumber1 + course[i] + "\n";
        classhour1 = classhour1 + chour[i] + "\n";
        mark1 = mark1 + mark[i] + "\n";
        grade1 = grade1 + markToGrade(mark[i])[0] + "\n";
        gpa1 = gpa1 + markToGrade(mark[i])[1] + "\n";
        totalpoints1 = totalpoints1 + tpoint[i] + "\n";
 

        total = total + parseInt(mark[i]);
        totalcredits = totalcredits + parseInt(chour[i]);
        totalpoints = totalpoints + parseFloat(tpoint[i]);

    }

 
 
    document.getElementById("courseNumber1").innerText=courseNumber1;
    document.getElementById("classhour1").innerText=classhour1;
    document.getElementById("mark1").innerText=mark1;
    document.getElementById("grade1").innerText=grade1;
    document.getElementById("gpa1").innerText=gpa1;
    document.getElementById("totalpoints1").innerText=totalpoints1;


    document.getElementById("total").innerText=total;
    document.getElementById("totalcredits").innerText=totalcredits;
    document.getElementById("totalpoints").innerText=totalpoints.toFixed(2);

    document.getElementById("cgpa").innerText="GPA = " + (totalpoints/totalcredits).toFixed(2);
}


function refreshElement(){
	course=[];
    mark =[];
    chour=[];
    tpoint=[];
    displayCourses();
    
}



function elementObj(id){
	return (document.getElementById(id));
}

 function addRecord(){

	if (validation() == true){

	    c = document.getElementById("cr").value;
	    m = document.getElementById("mr").value;
	    cc = document.getElementById("ch").value;
	    course[course.length] = c;
	    mark[mark.length] = m;
	    chour[chour.length]= cc;
    }

    displayCourses();
}

function markToGrade(m){
    //m = mark
    grade = "";
    point = 0;

    if(m<50){ 
        grade ="RA";
        point=0;
	}

    else if(m<=60){ 
        grade="B";
        point=6;
	}

    else if(m<=70){ 
        grade="B+";
        point=7;
	}

    else if(m<=80){ 
		grade="A";
        point=8;
	}

    else if(m<=90){ 
        grade="A+"; 
        point=9;
	}

    else if(m<=100){ 
        grade="O";
        point=10;
	}
    
	gp=[]; // grade point array
	gp[0]=grade;
	gp[1]=point;
	
    return gp;
}

function validation(){

	studentmark = parseInt(document.getElementById("mr").value);
	coursecredit = parseInt(document.getElementById("ch").value);

    if(studentmark<100 && studentmark>=0 && coursecredit>0){
        document.getElementById("error").innerText= "";
        return (true);
    }

	else
	document.getElementById("error").innerText= "Please make sure you enter marks between 0 and 100 and credit hours 0 or above";

}