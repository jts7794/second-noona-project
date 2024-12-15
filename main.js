// 유저가 값을 입력한다
// 플러스 버튼 클릭, 할 일 추가
// 딜리트 버튼 클릭, 할 일 삭제
// 체크 버튼 클릭, 할 일 끝나면서 밑줄
// 진행중 끝남 탭을 누르면, 언더바가 이동한다
// 각 탭은 그 상태의 데이터만 보여준다

let taskinput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");
let taskList = [];
let mode = 'All';
let filterList = [];
let tabs = document.querySelectorAll(".task-tabs nav");


addBtn.addEventListener("click",addTask);

for(let i=0; i < tabs.length; i++ ){
    tabs[i].addEventListener("click", function(event){filter(event)})
}


function addTask() {
    let task = {
        id: randomIDGenerate(),
        taskContent:taskinput.value,
        isComplete: false
    }
    taskList.push(task)
    filterList.push(task)
    render()  
}


function render(){
    let resultHTML = "";
    let list = []
    if (mode === "All") {
        list = taskList;
    }else if (mode === "onGoing" || mode === "Done") {
        list = filterList;
    }

    for(let i =0; i <list.length; i++) {

        if(list[i].isComplete == true){
            resultHTML += `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">완료</button>
                <button onclick="deleteTask('${list[i].id}')">삭제</button>
            </div>
        </div>`;
        }else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">완료</button>
                <button onclick="deleteTask('${list[i].id}')">삭제</button>
            </div>
        </div>`;
        }


    }
    document.getElementById("task-board").innerHTML = resultHTML;
}


function toggleComplete(id) {
    
    for(let i=0; i< taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete =  !taskList[i].isComplete
            break;
        }
    }

    render();
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

function deleteTask(id) {

    for(let i=0; i< taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }

    for(let i=0; i< filterList.length; i++){
        if(filterList[i].id == id){
            filterList.splice(i,1)
            break;
        }
    }
    render();
}

function filter(event) {
    mode = event.target.id
    filterList = []
    if(mode === "All") {
        //전체 리스트
        render();
    }else if(mode === "onGoing") {
        //진행 중인 아이템을 보여준다
        for(let i=0; i < taskList.length; i++ ){
            if(taskList[i].isComplete === false){
                filterList.push(taskList[i]);
            }
        }
        render();
    }else if(mode === "Done"){
        for(let i=0; i < taskList.length; i++ ){
            if(taskList[i].isComplete === true){
                filterList.push(taskList[i]);
            }
        }
        render();
    }
}    


let horizontalUnderLine = document.getElementById("under-Line")
let Menus = document.querySelectorAll("nav");

Menus.forEach((menu) => 
    menu.addEventListener("click", (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top = e.currentTarget.offsetTop +e.currentTarget.offsetHeight - 10 + "px";
}
