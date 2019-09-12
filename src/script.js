function drag(event){
    event.dataTransfer.setData('text',event.target.id);
}

function drop(event){
    event.preventDefault()
    let data = event.dataTransfer.getData('text')
    if(isLegal(event, data)){    
        event.target.appendChild(document.getElementById(data))
   }
   winCondition(event)
}
function allowDrop(event){
    event.preventDefault()
}

function isLegal(event, data){
    
    let diskId = data
    let destId = event.target.lastElementChild.getAttribute('id')
    if(diskId<destId){
        return true
    }
}
function winCondition(event){
    if(event.target.id === 'end' && event.target.children.length === 5){
        document.getElementById('winPage').style.visibility='visible'
    }
}
function reload(){
    window.location.reload()
}