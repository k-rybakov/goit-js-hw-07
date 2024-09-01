document.querySelector('.login-form').addEventListener('submit', e => {
    e.preventDefault()

    const required = e.target.elements.length - 1
    const validated = []

    Array.from(e.target.elements).forEach(element => {
        const value = element.value.trim()

        if (value) {
            validated.push({
            name: element.name,
            value: element.value
         })
        }
    });

    if (required != validated.length) {
        alert('All form fields must be filled in')
    } else {
        validated.forEach(item => {
            console.log(item.name + ': ' + item.value)
        })
    }

    e.target.reset()
})
