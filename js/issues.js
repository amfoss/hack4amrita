let data;    
fetch('https://api.github.com/repos/amfoss/Hack4Amrita/issues').then(
function(res){ 
return res.json();
}).then(function(json){
data = json;
var i;
const app = document.getElementById('openissues');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
for(i=0;i<data.length;i++){
    const a = document.createElement('a');
    a.setAttribute('href' , data[i].html_url);
    a.setAttribute('target' , '_blank');
    const card = document.createElement('div');
    card.setAttribute('class', 'card mb-2');
    const p = document.createElement('p');
    p.textContent = data[i].title;
    container.appendChild(a);
    a.appendChild(card);
    card.appendChild(p);
}
})
