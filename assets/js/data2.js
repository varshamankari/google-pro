let cl=console.log;

let googled=document.getElementById("googledata");
let searchbtn = document.getElementById("search");
let idbtn = document.getElementById("all");








function googletempleting(arr){
     let result="";
      arr.forEach(element => {
        result+=`
        <div class="col-md-3 mb-5">
        <div class="card">
            <div class="card-body">
                <div class="hard">
                    <h2 class="headinghard bg-primary">${element.type}</h2>
                </div>
                <div class="heading1">
                    <h3>
                        ${element.name}
                    </h3>
                </div>
                <p class="para1 mt-4">
                    from ${element.dateOpen} to ${element.dateClose}
                </p>
                <p class="para2">
                    ${element.description}
                </p>
                <a href="${element.link}" target="_blank"> <button class="btn btn-info">Details</button></a>
               
            </div>

        </div>
    </div>  
        `
      })
      googled.innerHTML=result;
}
googletempleting(db);

function onkeyup(e){
    let searchval=e.target.value;
    // cl(searchval)
    let filterarr=db.filter((ele)=>ele.name.toLowerCase().includes(searchval))
    googletempleting(filterarr)
}

function onclick(e){
    let selectitem =e.target.value;
    let filterarr2=db.filter((ele)=>ele.type==selectitem)
    googletempleting(filterarr2)
}

searchbtn.addEventListener("keyup",onkeyup);
idbtn.addEventListener("click",onclick)

    
