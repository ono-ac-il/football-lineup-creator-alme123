const players = [
    { name: 'Ronaldo', position: 'forward' },
    { name: 'Messi', position: 'forward' },
    { name: 'Neymar', position: 'forward' },
    { name: 'Modric', position: 'midfielder' },
    { name: 'Kroos', position: 'midfielder' },
    { name: 'De Bruyne', position: 'midfielder' },
    { name: 'Alaba', position: 'defender' },
    { name: 'Ramos', position: 'defender' },
    { name: 'Varane', position: 'defender' },
    { name: 'Neuer', position: 'goalkeeper' },
    { name: 'Buffon', position: 'goalkeeper' },
    { name: 'Casillas', position: 'goalkeeper' },
]


const goalkeepers = players.filter(function (player) {
    return player.position == 'goalkeeper';
});

/*var gkStr = '';
for (let i = 0; i < goalkeepers.length; i++) {
    // gkStr += '<option value="' + goalkeepers[0].name + '">' + goalkeepers[0].name + '</option >';
    gkStr += `<option value="${goalkeepers[i].name}">${goalkeepers[i].name}</option>`;
}*/

const mappedGoalkeepers = goalkeepers.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('pos1').innerHTML = mappedGoalkeepers.join('');


const defenders = players.filter(function (player) {
    return player.position == 'defender';
});

const mappeddfenders= defenders.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('def1').innerHTML = mappeddfenders.join('');
document.getElementById('def2').innerHTML = mappeddfenders.join('');
document.getElementById('def3').innerHTML = mappeddfenders.join('');
document.getElementById('def4').innerHTML = mappeddfenders.join('');
document.getElementById('def5').innerHTML = mappeddfenders.join('');


const midfielders = players.filter(function (player) {
    return player.position == 'midfielder';
});

const mappedmidfielders= midfielders.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('mid1').innerHTML = mappedmidfielders.join('');
document.getElementById('mid2').innerHTML = mappedmidfielders.join('');
document.getElementById('mid3').innerHTML = mappedmidfielders.join('');
document.getElementById('mid4').innerHTML = mappedmidfielders.join('');
document.getElementById('mid5').innerHTML = mappedmidfielders.join('');

const forwards = players.filter(function(player){
    return  player.position == 'forward' ;
});

const mappeforwards = forwards.map(function(item){
    return `<option value="${item.name}">${item.name}</option>`
}) ;
document.getElementById('st1').innerHTML = mappeforwards.join('');
document.getElementById('st2').innerHTML = mappeforwards.join('');
document.getElementById('st3').innerHTML = mappeforwards.join('');



const btn = document.getElementById("en") 
function lienups(){
    console.log (" " + document.getElementById('pos1').value + " " + 
    document.getElementById('def1').value + " "
     +document.getElementById('def2').value + " " + document.getElementById('def3').value + " " + 
     document.getElementById('def4').value + " " + document.getElementById('def5').value + " " +
     document.getElementById('mid1').value + " " + document.getElementById('mid2').value+ " " +
      document.getElementById('mid3').value + " " + document.getElementById('mid4').value + " " + 
      document.getElementById('mid5').value + " " + document.getElementById('st1').value + " " + 
      document.getElementById('st2').value + " " + document.getElementById('st3').value + " ")
}
btn.addEventListener("click", lienups ) 
