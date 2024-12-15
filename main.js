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
    let taskContent = taskinput.value
    taskList.push(taskContent)
    render()  
}


function render(){
    let resultHTML = "";
    
    for(let i =0; i <taskList.length; i++) {
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`;

    }
    document.getElementById("task-board").innerHTML = resultHTML;
}
