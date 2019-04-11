document.getElementById('lbsInput').addEventListener('input', function(e){
    const a = e.target.value
    document.getElementById('gramOutput').innerHTML = a/0.0022046
    document.getElementById('kgOutput').innerHTML = a/2.2046
    document.getElementById('ozOutput').innerHTML = a*16
})

document.getElementById('secInput').addEventListener('input', function(e){
    const z = e.target.value

    document.getElementById('daysOutput').innerHTML = z*7
    document.getElementById('hoursOutput').innerHTML = z*168
    document.getElementById('secOutput').innerHTML = z*604800

})