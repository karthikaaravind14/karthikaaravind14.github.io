/*Timeline starts*/
var timelineObject = [
    {year: '2017- Present',designation: 'UI Developer, <br> Zycus Infotech Pvt Ltd'},
    {year: '2015- 2017',designation: 'Assistant System Engineer, <br>Tata Consultancy Services'},
    {year: '2015',designation: 'Assistant System Engineer, <br>ILP, Tata Consultancy Services<br>3 months training program in JAVA'},
    {year: '2014-2015',designation: 'Web Developer, <br>Evaidya Pvt Ltd<br>Worked as trainee for 6 months'},
    {year: '2010-2014',designation: 'Bachelor of Technology<br>College of Engineering Chenganur<br>CUSAT University'},
    {year: '2009',designation: 'XII Class<br>Higher Secondary<br>Board of Kerala'},
    {year: '2007',designation: 'X Class<br>SSLC<br>Board of Kerala'}
];
var timelineRow = '';
for(x = 0; x < timelineObject.length; x++) {
   timelineRow += "<div class='col-12 d-flex timeline-row'><div class='timeline-year-box'>"+timelineObject[x].year+"</div><div class='timeline-tree'><div class='timeline-bullet'></div><div class='timeline-line'></div></div><div>"+ timelineObject[x].designation+"</div></div>";
}
document.getElementById("timeline-container").innerHTML = timelineRow;
/*Timeline ends*/

/*Skills bar starts*/
var skillsBarObject = [
    {skill: 'HTML', rating:'80'},
    {skill: 'CSS', rating:'70'},
    {skill: 'Javascript', rating:'40'},
    {skill: 'Angular', rating:'20'},
    {skill: 'Bootstrap', rating:'50'},
    {skill: 'Photoshop', rating:'20'},
    {skill: 'Illustrator', rating:'25'},
    {skill: 'Adobe Xd', rating:'60'},
];
var skillsGraphHeight= document.getElementById('skills-bar-graph').offsetHeight;
var skillRow = '';
var currentSkill = '';
var skillGraphHeight = document.getElementById("skills-bar-graph").offsetHeight;
for(x=0;x<skillsBarObject.length;x++) {
    currentSkill = "<div><div>"+skillsBarObject[x].rating+"%</div><div class='skills-bar' style='height:"+skillsBarObject[x].rating*skillsGraphHeight/100+"px'></div><div>"+skillsBarObject[x].skill+"</div></div>";
    skillRow += currentSkill;  
}
document.getElementById("skills-bar-graph").innerHTML = skillRow;
/*Skills bar ends*/

/*Gallery starts*/
var logosJpgCount = 5;
var logosPngCount = 1;
var sketchesCount = 37;
var clicksCount = 3;
var digJpgCount = 2;
var digPngCount = 2;
var paintingsCount = 13;
var logosCollection = [];
 for(i = 1;i <= logosJpgCount;i++) {
    var imgName = "logojpg ("+i+").jpg";
    logosCollection.push(imgName);
  }
  for(i = 1;i <= logosPngCount; i++) {
    var imgName = "logopng ("+i+").png";
    logosCollection.push(imgName);
  }

var sketchesCollection = [];
for(i=1;i <=sketchesCount;i++) {
    var imgName = "sketches ("+i+").jpg";
    sketchesCollection.push(imgName); 
}
var clicksCollection = [];
for(i=1;i<=clicksCount;i++) {
    var imgName = "clicks ("+i+").jpg";
    clicksCollection.push(imgName); 
}

var photoshopWorksCollection = [];
for(i = 1;i <= digJpgCount;i++) {
    var imgName = "digjpg ("+i+").jpg";
    photoshopWorksCollection.push(imgName);
  }
for(i = 1;i <= digPngCount;i++) {
    var imgName = "digpng ("+i+").png";
    photoshopWorksCollection.push(imgName);
}

 var paintingCollection = [];
 for(i=1;i<=paintingsCount;i++) {
    var imgName = "paintings ("+i+").jpg";
    paintingCollection.push(imgName);
 }

var logoSection = '';
for(var x=0; x < logosCollection.length; x++) {
    var logoFolder = 'logo';
    logoSection += "<img onclick='openImage(logosCollection,logoFolder,"+x+")' src='images/"+logoFolder+"/"+logosCollection[x]+"' alt='logo-"+x+"'>"; 
}
document.getElementById("logos").innerHTML = logoSection;

var sketchSection = '';
for(var x=0; x < sketchesCollection.length; x++) {
    var sketchFolder = 'sketches';
    sketchSection += "<img onclick='openImage(sketchesCollection,sketchFolder,"+x+")' src='images/"+sketchFolder+"/"+sketchesCollection[x]+"'alt='sketch-"+x+"'>";
}
document.getElementById("sketches").innerHTML = sketchSection;

var clickSection = '';
for(var x=0; x < clicksCollection.length; x++) {
    var clicksFolder = 'clicks';
    clickSection += "<img onclick='openImage(clicksCollection,clicksFolder,"+x+")' src='images/"+clicksFolder+"/"+clicksCollection[x]+"'alt='click-"+x+"'>";
}
document.getElementById("clicks").innerHTML = clickSection;

var digPaintSection = '';
for(var x=0; x < photoshopWorksCollection.length; x++) {
    var digFolder = 'ps-paintings';
    digPaintSection += "<img onclick='openImage(photoshopWorksCollection,digFolder,"+x+")' src='images/"+digFolder+"/"+photoshopWorksCollection[x]+"'alt='digital-"+x+"'>";
}
document.getElementById("digPaint").innerHTML = digPaintSection;

var paintingsSection = '';
for(var x=0; x < paintingCollection.length; x++) {
    paintingsFolder = 'paintings';
    paintingsSection += "<img onclick='openImage(paintingCollection,paintingsFolder,"+x+")' src='images/"+paintingsFolder+"/"+paintingCollection[x]+"'alt='painting-"+x+"'>";
}
document.getElementById("paintings").innerHTML = paintingsSection;

// full screen view of images starts
function openImage(collectionArray,subFolder,index) {
    var currentIndex = index;
    document.getElementById("galleryModal").style.display = "block";
    var currentImage = '';
    currentImage = "<img src='images/"+subFolder+"/"+collectionArray[currentIndex]+" 'alt='image-"+currentIndex+"'>";
    document.getElementById("fullImg").innerHTML = currentImage;


    var currentPrevArrow = document.getElementById("prevArrow");
    var currentNextArrow = document.getElementById("nextArrow");
    currentPrevArrow.className = 'active';
    currentNextArrow.className = 'active';
    if(index == 0) {
      currentPrevArrow.className = 'inactive';
    } else if((index+2) > (collectionArray.length)) {
      currentNextArrow.className = 'inactive';
    } 
    currentPrevArrow.onclick = function() {
        openImage(collectionArray,subFolder,index-1);
    }
    currentNextArrow.onclick = function() {
        openImage(collectionArray,subFolder,index+1);
    }
}

document.getElementById("closeModal").onclick = function() {
    document.getElementById("fullImg").innerHTML = '';
    document.getElementById("galleryModal").style.display = "none";
}
// full screen view of images ends

// changing gallery tabs
var selected_tab = '#logos';
$(document).ready(function(){
    //  When user clicks on tab, this code will be executed
    $("#galleryTabs li a").click(function() {
        //  First remove class "active" from currently active tab
        $("#galleryTabs li a").removeClass('active');

        //  Now add class "active" to the selected/clicked tab
        $(this).addClass("active");

        //  Hide all tab content
        $(".gallery").hide();

        //  Here we get the href value of the selected tab
        selected_tab = $(this).attr("href");
        //  Show the selected tab content
        $(selected_tab).fadeIn();

        //  At the end, we add return false so that the click on the link is not executed
        return false;
    });
});
/*Gallery ends*/
