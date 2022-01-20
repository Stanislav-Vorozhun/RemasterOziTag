body = document.querySelector('body')
container = document.createElement('div')
wrapperHeader = document.createElement('div')
header = document.createElement('div')
wrapperDropDown = document.createElement('div')
wrapperTitles = document.createElement('div')
categorieTitle = document.createElement('p')
сhoiceCountTitle = document.createElement('p')
searchField = document.createElement('input')
wrapperCheckboxes = document.createElement('div')
dropDown = document.createElement('div')
wrapperButtons = document.createElement('div')
acceptButton = document.createElement('button')
deleteButton = document.createElement('button')


container.className = 'container'
header.className = 'header'
wrapperHeader.className = 'wrapperHeader'
wrapperDropDown.className = 'wrapperDropDown'
wrapperTitles.className = 'wrapperTitles'
categorieTitle.className = 'categorieTitle'
categorieTitle.innerHTML = 'Реализуемые товары'
сhoiceCountTitle.className = 'сhoiceCountTitle'
searchField.className = 'searchField'
wrapperCheckboxes.className = 'wrapperCheckboxes'
dropDown.className = 'dropDown'
wrapperButtons.className = 'wrapperButtons'
acceptButton.className = 'acceptButton'
acceptButton.type = 'button'
acceptButton.innerHTML = 'принять'
deleteButton.className = 'deleteButton'
deleteButton.type = 'button'
deleteButton.innerHTML = 'удалить'

body.prepend(container)
container.append(wrapperHeader, wrapperDropDown, wrapperButtons)
wrapperHeader.append(header)
header.append(wrapperTitles, searchField)
wrapperTitles.append(categorieTitle, сhoiceCountTitle)
wrapperDropDown.append(wrapperCheckboxes, dropDown)
wrapperButtons.append(acceptButton, deleteButton)