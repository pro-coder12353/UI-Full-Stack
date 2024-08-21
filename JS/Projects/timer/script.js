const mainDiv = document.getElementById('main')
let c=0
setInterval(function() 
{
    let dt = new Date()
    mainDiv.textContent = dt.toLocaletimeString ();
}, 1000);