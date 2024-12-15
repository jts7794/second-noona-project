// 유저가 값을 입력한다
// 플러스 버튼 클릭, 할 일 추가
// 딜리트 버튼 클릭, 할 일 삭제
// 체크 버튼 클릭, 할 일 끝나면서 밑줄
// 진행중 끝남 탭을 누르면, 언더바가 이동한다
// 각 탭은 그 상태의 데이터만 보여준다

let taskinput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");
let taskList = []

addBtn.addEventListener("click",addTask);


function addTask() {
    let task = {
        id: randomIDGenerate(),
        taskContent:taskinput.value,
        isComplete: false
    }
    taskList.push(task)
    render()  
}


function render(){
    let resultHTML = "";
    
    for(let i =0; i <taskList.length; i++) {

        if(taskList[i].isComplete == true){
            resultHTML += `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">완료</button>
                <button onclick="deleteTask('${taskList[i].id}')">삭제</button>
            </div>
        </div>`;
        }else {
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">완료</button>
                <button onclick="deleteTask('${taskList[i].id}')">삭제</button>
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
    render();
}