document.addEventListener('DOMContentLoaded', (Event)=>{
    const lastModifiedElement = document.getElementById('last-modified');
    const lastModifiedDateTime = new Date(document.lastModified).toLocaleString();
    lastModifiedElement.textContent = lastModifiedDateTime;

    const content = this.nextElementSibling;
    if (content.style.display = 'block') {
         content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
});