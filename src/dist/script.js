document.getElementById("menu").addEventListener("click", function(e){
    e.preventDefault();
   
    
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
   
    
})

document.getElementById("menu").addEventListener("body", (e)=> {

    e.preventDefault();
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
    
})


var listOfCourses = [
    {
        id:1,
        name:"School of Software Technology",
        courses: [
            {
                name:"IT ESSENTIALS",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"CYBER SECURITY",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"APP DEVELOPMENT",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"DATA ANALYSIS",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            }
        ]
    },
    {
            id:2,
        name:"School of Multimedia Technology",
        courses: [
            {
                name:"3D ANIMATIONS",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"2D ANIMATIONS",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"GRAPHICS DESIGN",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"VIDEO EDITING",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"UI/UX",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            }
        ]
    },
    {
        id:3,
        name:"School of Management",
        courses: [
            {
                name:"HUMAN RESOURCE MANAGEMENT",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"SOCIAL MEDIA MANAGEMENT",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"PROJECT MANAGEMENT",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"VIRSUAL ASSISTANT",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            },
            {
                name:"BOOK KEEPING",
                description: "Fundamentals of computer and Inroduction to technology for beginners"
            }
        ]
    }
]
var stackContainer = document.getElementById("stackContainer");
var stack = document.getElementById("stack");

var html = "";

if(stackContainer){
    for(var i of listOfCourses){
        html += `
          <div>
                 <h2 class="font-semibold text-xl mb-4">${i.name}</h2>
                 <div id="stack-${i.id}" class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     
                </div>
             </div>
        `;
     }
     
     stackContainer.innerHTML = html;


     for(var i of listOfCourses){
        var stack = document.getElementById(`stack-${i.id}`);
        for(var x of i.courses){
            
            
            var newEl = document.createElement("div");
            newEl.innerHTML = `
                <div class=" w-full rounded border p-4 bg-white  text-slate-950 hover:shadow-lg">
                       <h2 class=" font-semibold"><span>Icon</span> ${x.name} </h2>
                       <p class="py-1">${x.description}</p>
                       <a href="" class=" text-indigo-700 font-medium">Get Started</a>
                    </div>
            `;
            stack.appendChild(newEl);
        }
    }
}






var courseStack = document.getElementById("courseStack")

if(courseStack){
    
for(var i of listOfCourses){
    var stack = document.getElementById(`stack-${i.id}`);
    for(var x of i.courses){
        
        
        var newEl = document.createElement("div");
        newEl.innerHTML = `
           <div class="course-item text-sm font-semibold capitalize rounded-full py-1 px-2 border ">${x.name}</div>
        `;
        courseStack.appendChild(newEl);
    }
}
}
