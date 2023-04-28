/*
var state =
{
    taskList: [
        {
            imageUpl : "",
            taskTitle : "",
            taskType : "",
            taskDescription : ""
        },
        {
            imageUpl : "",
            taskTitle : "",
            taskType : "",
            taskDescription : "",
        },
        {
            imageUpl : "",
            taskTitle : "",
            taskType : "",
            taskDescription : "",
        },
        {
            imageUpl : "",
            taskTitle : "",
            taskType : "",
            taskDescription : "",
        },

    ]
}
*/

const state = 
{
    taskList : [],
};

//DOM Operations

const taskContents = document.querySelector("task_contents");
const taskModal = document.querySelector("task__modal__body");

//console.log(taskContents);

//Template for card on screen
// element identifier key = ${id} 
const htmlTaskContent = ({ id,title,description,type,url}) => `
    <div class = "col-md-6 col-lg-4 mt-4" id=${id} >
        <div class = 'card shadow-sm task__card'>
            <div class = 'card-header d-flex justify-content-end task__card__header'>
                <button type="button" class = 'btn btn-outline-warning mr-1.5' name=${id} >
                    <i class = 'fas fa-pencil'></i>
                </button>

                <button type="button" class = 'btn btn-outline-danger mr-1.5' name=${id} >
                    <i class ='fa-solid fa-trash'></i>
                </button>
            </div> 

            //Body section
            <div class = 'card-body'>
                ${
                    url &&
                    `<img width="100%" src=${url} alt = "Card Image" class = "card-img-cap md-3 rounded-lg" />`
                }
                <h4 class = 'card-title task__card__title'>${title}</h4>
                <p class = 'description trim-3-lines text-muted'>${description}</p>
                <div class = 'tags text-white d-flex flex-wrap'>
                    <span class = 'badge text-bg-success'>${type}</span>
                </div>
            </div>

            <div class = 'card-footer'>
                <button type = 'button' class = 'btn btn-success' data-bs = 'toggle' data-bs-target = 'showTask'Open Task></button>            
            </div>
        </div>
    </div>
`;

const htmlModalContent = ({ id,title,description,url}) => 
{
    const date = new Date(parseInt(id));
    return  `
    <div id = ${id}>
    ${
        url &&
        `<img width="100%" src=${url} alt = "Card Image" class = 'img-fluid place__holder__image mb-3'/>`
    }
    <strong class = 'text-muted text-sm'>Created on: ${date.toDateString()} </strong>
    <h2 class = 'my-3'>${title}</h2>
    <p class = 'text-muted'>${description}</p>
    </div>
    `
}

const updateLocalStorage = () =>
{
    localStorage.setItem
    (
        "task",
        JSON.stringify
        ({
            tasks: state.taskList,
        })
    );
};

