let projects = [
    {id : 1, name : 'Project 1', details : 'Project 1 Details'},
    {id : 2, name : 'Project 2', details : 'Project 2 Details'},
    {id : 3, name : 'Project 3', details : 'Project 3 Details'},
]

let project = projects.find(project => project.id === 1)

project.id = 11
console.log(project)
console.log(projects)