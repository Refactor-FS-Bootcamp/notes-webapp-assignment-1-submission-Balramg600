
  //localStorage.clear();
  var titles=[];
  var notes=[];
  for(let key of Object.keys(localStorage)) titles.push(key);
  for(let value of Object.values(localStorage)) notes.push(value);
  if(titles.length!=0){
  for(let i=0;i<titles.length;i++){
    document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <div id="taskname">
                  <h3>${titles[i]}</h3>
                  ${notes[i]}
              </div>
              <button class="delete">
                  <i class="far fa-trash-alt">Delete Note</i>
              </button>
              <button class="edit">
                  <i class="far fa-trash-alt">Edit Note</i>
              </button>
          </div>
      `;
  }
      var current_tasks = document.querySelectorAll(".delete");
      var current_taskname=document.querySelectorAll("h3");
      var current_input=document.querySelectorAll("#input1");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
              localStorage.removeItem(current_taskname[i]);
          }
      }
}

  document.querySelector('#push').onclick = function(){
  if(document.querySelector('#input2').value.length == 0){
      alert("Kindly Enter Task!!!!")
  }

  else{
      localStorage.setItem(document.querySelector('#input1').value,document.querySelector('#input2').value);
      document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <div id="taskname">
                  <h3>${document.querySelector('#input1').value}</h3>
                  ${document.querySelector('#input2').value}
              </div>
              <button class="delete">
                  <i class="far fa-trash-alt">Delete Note</i>
              </button>
              <button class="edit">
                  <i class="far fa-trash-alt">Edit Note</i>
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      var current_taskname=document.querySelectorAll("h3");
      var current_input=document.querySelectorAll("#input1");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }
  }
}