const button = document.getElementById('button')
const body = document.querySelector('body')

const notes = JSON.parse(localStorage.getItem('notes'))
console.log(notes)

if (notes) {
  notes.forEach( note => {
    addNote(note.text)
    console.log(note.text)
  })
}

button.addEventListener('click', () => addNote())

function addNote(valorText = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  const tools = document.createElement('div')
  tools.classList.add('tools')

  const deleteButon = document.createElement('button')
  deleteButon.innerHTML = 'delete'

  tools.appendChild(deleteButon)

  const textArea = document.createElement('textarea')
  textArea.placeholder = 'Write your note'
  textArea.value = valorText
  
  // console.log(valorText)

  textArea.addEventListener('input', event => {
    updateStorage()
  }) 

  deleteButon.addEventListener('click', () => {
    note.remove()
    updateStorage()
  })

  note.appendChild(tools)
  note.appendChild(textArea)

  body.appendChild(note)

  updateStorage()
}

function updateStorage () {
  const notesText = document.querySelectorAll('textarea')

  const notes = []

  notesText.forEach( note => {
    notes.push({
      text: note.value
    })
  }) 

  localStorage.setItem('notes', JSON.stringify(notes))

  console.log(localStorage)
}