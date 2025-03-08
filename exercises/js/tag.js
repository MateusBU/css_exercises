const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    spection: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#64dd17',
    mav: '#00acc1',
    main: '#304ffe',
    footer: '#9f6581',
    form: '#25b6da',
    body: '#1565c0',
    standard: '#616161',

    get(tag)
    {      
        return this[tag] ? this[tag] : this.standard;  
        // for(let key in colors){
        //     console.log(key);
        //     if(key == tag){
        //         return colors[key];
        //     }
        // }
        // return colors.standard;
    }
}

document.querySelectorAll('.tag').forEach(element =>{
    const tagName = element.tagName.toLowerCase();

    element.style.borderColor = colors.get(tagName); 
    //it only writes if the element doesn't contains no label
    if(!element.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName);
        label.innerHTML = tagName;
        element.insertBefore(label, element.childNodes[0]);
    }
})