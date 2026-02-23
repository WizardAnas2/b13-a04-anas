let jobs = [
    {id:1, company:"GOOGLE",position:"Frontend Developer", location:"USA",type:"Full Time",salary:"120000", description:"Build user interfaces for web applications.", status:"all"},

    {id:2,company:"MICROSOFT",position:"Backend Developer", location:"USA", type:"Full Time",salary:"115000", description:"Develop server side applications.", status:"all"},
    
    {id:3, company:"AMAZON",position:"Cloud Engineer", location:"USA",type:"Full Time", salary:"130", description:"Manage cloud system and services.", status:"all"},

    {id:4, company:"SPOTIFY", position:"UI Designer", location:"Remote", type:"Contract",salary:"90", description:"Design mobile and web interfaces.", status:"all"},


    {id:5, company:"BMW", position:"Software Engineer", location:"USA", type:"Full Time", salary:"125000", description:"Develope automation software.", status:"all"},

    {id:6, company:"NETFLIX", position:"Data Analyst", location:"USA", type:"Full Time", salary:"11000", description:"Analyze streaming data trends.", status:"all"},

    {id:7, company:"META", position:"React Developer", location:"USA", type:"Full Time", salary:"1000", description:"Build social media platforms.", status:"all"},

    {id:8, company:"APPLE", position:"UX Researcher", location:"Remote", type:"Part Time", salary:"85", description:"Conduct user research studies.", status:"all"}
];

let currentTab = "all";


let jobContainer = document.getElementById("jobContainer");


let totalJobs = document.getElementById("totalJobs");
let interviewJobs = document.getElementById("interviewJobs");
let rejectedJobs = document.getElementById("rejectedJobs");
let availableCount = document.getElementById("availableCount");
let allTab = document.getElementById("allTab");
let interviewTab = document.getElementById("interviewTab");
let rejectedTab = document.getElementById("rejectedTab");


allTab.addEventListener("click", function() {
    currentTab = "all";
    renderJobs();
});

interviewTab.addEventListener("click", function() {
    currentTab = "interview";
    renderJobs();
});

rejectedTab.addEventListener("click", function() {
    currentTab = "rejected";
    renderJobs();
});


function renderJobs() {

    jobContainer.innerHTML = "";

    let count= 0;
    for(let i =0; i < jobs.length; i++){

        if(currentTab ==="all" || jobs[i].status=== currentTab) {
            count++;

            let card =document.createElement("div");
            card.className = "bg-white p-10 rounded-[10px]";

            card.innerHTML =
                "<h3 class='text-[24px] font-bold text-gray-600'>" + jobs[i].company+ "</h3>"+
                "<p>" + jobs[i].position + "</p>"+
                "<p>"+ jobs[i].location + "</p>"+
                "<p>"+ jobs[i].type + "</p>"+
                "<p>Salary: $" + jobs[i].salary +"</p>"+
                "<p class='mt-2'>" + jobs[i].description + "</p>" +
                "<div class='mt-4 space-x-2'>"+
                "<button id='interviewBtn" + jobs[i].id + "' class='bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-400'>Interview</button>"+
                "<button id='rejectedBtn" + jobs[i].id+ "' class='bg-red-600 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-400'>Rejected</button>" +

                //there is an apology that i couldn't make that delete button properly, please don't click the icon, click the button's empty space to delete the section 
                
                "<button id='deleteBtn" + jobs[i].id + "' class='bg-gray-500 text-white lg:mx-50 px-5 py-2 rounded hover:cursor-pointer hover:bg-red-500'>" +
"<i class='fa-solid fa-trash-can m-1'></i>" +
"</button>" +
"</div>";

            jobContainer.appendChild(card);
        }
    }

if (count ===0){
    jobContainer.innerHTML = `
        <div class="bg-white p-40 text-center rounded-[15px] shadow">
            <img src="jobs.png" alt="No jobs found" class="mx-auto mb-4 w-20 h-20">
            <p class="text-2xl font-bold">No Jobs Available</p>
            <p class="text-sm text-gray-500" >Check back soon for new job opportunities</p>
        </div> `;
}
    updateCounts();
    addButtonEvents();
}


function addButtonEvents(){

    for(let i = 0; i < jobs.length; i++){

        let interviewBtn = document.getElementById("interviewBtn" + jobs[i].id);
        let rejectedBtn = document.getElementById("rejectedBtn" + jobs[i].id);
        let deleteBtn = document.getElementById("deleteBtn" + jobs[i].id);

        if(interviewBtn) {
            interviewBtn.addEventListener("click", function(e){
                let id = e.target.id.replace("interviewBtn", "");
                changeStatus(parseInt(id), "interview");
            });
        }

        if(rejectedBtn) {
            rejectedBtn.addEventListener("click", function(e){
                let id = e.target.id.replace("rejectedBtn", "");
                changeStatus(parseInt(id), "rejected");
            });
        }

        if(deleteBtn){
            deleteBtn.addEventListener("click",function(e){
                let id= e.target.id.replace("deleteBtn", "");
                deleteJob(parseInt(id));
            });
        }
}
}

function changeStatus(id,status){

    for(let i=0; i< jobs.length;i++){
        if(jobs[i].id ===id)
            {
            if(jobs[i].status=== status){
                jobs[i].status ="all";
            } else {
                jobs[i].status =status;
            }
        }
}
    renderJobs();
}

function deleteJob(id){
    for(let i =0;i <jobs.length; i++ ){
        if(jobs[i].id ===id){
            jobs.splice(i,1);
            break;
    }
    }

    renderJobs();
}

function updateCounts(){
    let interviewCount = 0;
    let rejectedCount = 0;

    for(let i= 0; i <jobs.length; i++){
        if(jobs[i].status ==="interview"){
            interviewCount++;
}
        if(jobs[i].status ==="rejected"){
            rejectedCount++;}
    }

    totalJobs.innerHTML=jobs.length;
    availableCount.innerHTML=jobs.length;
    interviewJobs.innerHTML=interviewCount;
    rejectedJobs.innerHTML=rejectedCount;
}
renderJobs();