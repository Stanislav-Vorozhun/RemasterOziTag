body = document.querySelector('body')
container = document.createElement('div')
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
wrapperDropDown.className = 'wrapperDropDown'
wrapperTitles.className = 'wrapperTitles'
categorieTitle.className = 'categorieTitle'
categorieTitle.innerHTML = 'Тендеры в роли Поставщика'
сhoiceCountTitle.className = 'сhoiceCountTitle'
searchField.className = 'searchField'
wrapperCheckboxes.className = 'wrapperCheckboxes'
dropDown.className = 'dropDown'
wrapperButtons.className = 'wrapperButtons'
acceptButton.className = 'acceptButton'
acceptButton.innerHTML = 'принять'
deleteButton.className = 'deleteButton'
deleteButton.innerHTML = 'удалить'

body.prepend(container)
container.append(header, wrapperDropDown, wrapperButtons)
header.append(wrapperTitles, searchField)
wrapperTitles.append(categorieTitle, сhoiceCountTitle)
wrapperDropDown.append(wrapperCheckboxes, dropDown)
wrapperButtons.append(acceptButton, deleteButton)
