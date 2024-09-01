const nameOutput = document.getElementById('name-output')

document.getElementById('name-input').addEventListener('input', e => {
    const input = e.target.value.trim()
    nameOutput.textContent = input.length ? input : 'Anonymous'
    
})