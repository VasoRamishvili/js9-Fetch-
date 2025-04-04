
let div = document.getElementById('divv');
let ul = document.getElementById('ull');
let bt1 = document.getElementById('btn1')
let bt2 = document.getElementById('btn2')

let mainpage = 1
let totalpage

function page (pages){
    fetch('https://reqres.in/api/users?page=' + pages,{
        method: 'GET'
    })
    .then(function (response) {
        return response.json();
    })
    .then(function(main) {
        ul.innerHTML = " "
        totalpage = main.total_pages

        main.data.forEach(element => {
            let li = document.createElement('li'); 
            li.textContent = element.email + ' ' + element.last_name;
            ul.appendChild(li);  
            
        });
    
        div.appendChild(ul);  
        updateButtons()  
    })
    .catch(function (error) {
        console.log(error);  
    });

}

bt1.addEventListener('click', function(){
   if (mainpage=== 1){
    return
   }
   mainpage--
   page(mainpage)
})

bt2.addEventListener('click', function(){
   if(mainpage === totalpage){
    return
   }
   mainpage++
   page(mainpage)
})

page(mainpage)

function updateButtons() {    
    bt1.disabled = mainpage === 1;
    bt2.disabled = mainpage === totalpage;
}
