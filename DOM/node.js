let heading = document.getElementById('heading')

console.log(`This is node type ${heading.nodeType}`)
console.log(`This is node name ${heading.nodeName}`)

let cloneHeading = heading.cloneNode(true)
console.log(heading)
console.log(cloneHeading)

let blog = document.getElementsByClassName('blog')[0]
console.log(blog)

let cloneBlog = blog.cloneNode(true)
console.log(cloneBlog)