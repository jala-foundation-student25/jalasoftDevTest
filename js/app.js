let display =  document.querySelector('.display')
let id =  document.querySelector('.id')
let addedDate =  document.querySelector('.addedDate')
let tags =  document.querySelector('.tags')


fetch('https://cataas.com/api/cats')
.then(response  => response.json())
.then(data => {
    let id = data['id']
    let addedDate = data['created_at']
    let tags  = data['tags']
        
    id.innerHTML = id
    addedDate.innerHTML = addedDate
    tags.innerHTML = tags
})
  
  
  document.getElementById("json").textContent = JSON.stringify(data, undefined, 2);
  function showDiv() {
    document.getElementById('show-hide').style.display = "block";
 }

