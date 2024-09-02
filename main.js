let user = document.getElementById('user');
let Sign = document.getElementById('Sign');
let check = true;
user.onclick = function(){
    if (check) {
        Sign.style.display = 'block';
        check = false;
    }else{
        Sign.style.display = 'none';
        check = true;
    }
}
let isclick1 = true;
let Pediatrics = document.getElementById('Pediatrics');
let divPediatrics =  document.getElementById('divPediatrics');

let isclick2 = true;
let Internal = document.getElementById('Internal');
let divInternal =  document.getElementById('divInternal');

let isclick3 = true;
let Dentistry = document.getElementById('Dentistry');
let divDentistry =  document.getElementById('divDentistry');

let isclick4 = true;
let General_Surgery = document.getElementById('General_Surgery');
let divGeneral_Surgery =  document.getElementById('divGeneral_Surgery');

let isclick5 = true;
let Cardiac_Surgery = document.getElementById('Cardiac_Surgery');
let divCardiac_Surgery =  document.getElementById('divCardiac_Surgery');

let isclick6 = true;
let Neurosurgery = document.getElementById('Neurosurgery');
let divNeurosurgery =  document.getElementById('divNeurosurgery');

let isclick7 = true;
let Ophthalmology = document.getElementById('Ophthalmology');
let divOphthalmology =  document.getElementById('divOphthalmology');

Pediatrics.onclick = function (){
    if (isclick1) {
        Pediatrics.style.cssText = `
        background:blue;
        color:white;
        `;
        Internal.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Dentistry.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        General_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Cardiac_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Neurosurgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Ophthalmology.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;

        divPediatrics.style.display = 'block';
        divInternal.style.display = 'none';
        divDentistry.style.display = 'none';
        divGeneral_Surgery.style.display = 'none';
        divCardiac_Surgery.style.display = 'none';
        divNeurosurgery.style.display = 'none';
        divOphthalmology.style.display = 'none';

        isclick1 = false;
        isclick2 = true;
        isclick3 = true;
        isclick4 = true;
        isclick5 = true;
        isclick6 = true;
        isclick7 = true;
    
    }else{
        Pediatrics.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        divPediatrics.style.display = 'none';
        isclick1 = true;
    }
}
Internal.onclick = function (){
    if (isclick2) {
        Pediatrics.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Internal.style.cssText = `
        background:blue;
        color:white;
        `;
        Dentistry.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        General_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Cardiac_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Neurosurgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Ophthalmology.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        
        divPediatrics.style.display = 'none';
        divInternal.style.display = 'block';
        divDentistry.style.display = 'none';
        divGeneral_Surgery.style.display = 'none';
        divCardiac_Surgery.style.display = 'none';
        divNeurosurgery.style.display = 'none';
        divOphthalmology.style.display = 'none';

        isclick1 = true;
        isclick2 = false;
        isclick3 = true;
        isclick4 = true;
        isclick5 = true;
        isclick6 = true;
        isclick7 = true;
    }else{
        Internal.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        divInternal.style.display = 'none';
        isclick2 = true;
    }
}
Dentistry.onclick = function (){
    if (isclick3) {
        Pediatrics.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Internal.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Dentistry.style.cssText = `
        background:blue;
        color:white;
        `;
        General_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Cardiac_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Neurosurgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Ophthalmology.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;

        divPediatrics.style.display = 'none';
        divInternal.style.display = 'none';
        divDentistry.style.display = 'block';
        divGeneral_Surgery.style.display = 'none';
        divCardiac_Surgery.style.display = 'none';
        divNeurosurgery.style.display = 'none';
        divOphthalmology.style.display = 'none';

        isclick1 = true;
        isclick2 = true;
        isclick3 = false;
        isclick4 = true;
        isclick5 = true;
        isclick6 = true;
        isclick7 = true;
    }else{
        Dentistry.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        divDentistry.style.display = 'none';
        isclick3 = true;
    }
}
General_Surgery.onclick = function (){
    if (isclick4) {
        Pediatrics.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Internal.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Dentistry.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        General_Surgery.style.cssText = `
        background:blue;
        color:white;
        `;
        Cardiac_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Neurosurgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Ophthalmology.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;

        divPediatrics.style.display = 'none';
        divInternal.style.display = 'none';
        divDentistry.style.display = 'none';
        divGeneral_Surgery.style.display = 'block';
        divCardiac_Surgery.style.display = 'none';
        divNeurosurgery.style.display = 'none';
        divOphthalmology.style.display = 'none';

        isclick1 = true;
        isclick2 = true;
        isclick3 = true;
        isclick4 = false
        isclick5 = true;
        isclick6 = true;
        isclick7 = true;
    }else{
        General_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        divGeneral_Surgery.style.display = 'none';
        isclick4 = true;
    }
}
Cardiac_Surgery.onclick = function (){
    if (isclick5) {
        Pediatrics.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Internal.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Dentistry.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        General_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Cardiac_Surgery.style.cssText = `
        background:blue;
        color:white;
        `;
        Neurosurgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Ophthalmology.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;

        divPediatrics.style.display = 'none';
        divInternal.style.display = 'none';
        divDentistry.style.display = 'none';
        divGeneral_Surgery.style.display = 'none';
        divCardiac_Surgery.style.display = 'block';
        divNeurosurgery.style.display = 'none';
        divOphthalmology.style.display = 'none';

        isclick1 = true;
        isclick2 = true;
        isclick3 = true;
        isclick4 = true;
        isclick5 = false;
        isclick6 = true;
        isclick7 = true;
    }else{
        Cardiac_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        divCardiac_Surgery.style.display = 'none';
        isclick5 = true;
    }
}
Neurosurgery.onclick = function (){
    if (isclick6) {
        Pediatrics.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Internal.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Dentistry.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        General_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Cardiac_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Neurosurgery.style.cssText = `
        background:blue;
        color:white;
        `;
        Ophthalmology.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;

        divPediatrics.style.display = 'none';
        divInternal.style.display = 'none';
        divDentistry.style.display = 'none';
        divGeneral_Surgery.style.display = 'none';
        divCardiac_Surgery.style.display = 'none';
        divNeurosurgery.style.display = 'block';
        divOphthalmology.style.display = 'none';

        isclick1 = true;
        isclick2 = true;
        isclick3 = true;
        isclick4 = true;
        isclick5 = true;
        isclick6 = false;
        isclick7 = true;
    }else{
        Neurosurgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        divNeurosurgery.style.display = 'none';
        isclick6 = true;
    }
}
Ophthalmology.onclick = function (){
    if (isclick7) {
        Pediatrics.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Internal.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Dentistry.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        General_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Cardiac_Surgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Neurosurgery.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        Ophthalmology.style.cssText = `
        background:blue;
        color:white;
        `;

        divPediatrics.style.display = 'none';
        divInternal.style.display = 'none';
        divDentistry.style.display = 'none';
        divGeneral_Surgery.style.display = 'none';
        divCardiac_Surgery.style.display = 'none';
        divNeurosurgery.style.display = 'none';
        divOphthalmology.style.display = 'block';

        isclick1 = true;
        isclick2 = true;
        isclick3 = true;
        isclick4 = true;
        isclick5 = true;
        isclick6 = true;
        isclick7 = false;
    }else{
        Ophthalmology.style.cssText = `
        background:transparent;
        backdrop-filter: blur(20px);
        `;
        divOphthalmology.style.display = 'none';
        isclick7 = true;
    }
}
/***********************************************************************/
let nav = document.querySelector('nav');
let Scrollbtn = document.getElementById('scroll');
window.onscroll = function (){
    if (scrollY > 1400) {
        Scrollbtn.style.display = 'block';
    }else{
        Scrollbtn.style.display = 'none';
    }
    if (scrollY > 10) {
        nav.style.position = "fixed";
        nav.style.top = "0px";

        divPediatrics.style.position = "fixed";
        divPediatrics.style.top = "80px";

        divInternal.style.position = "fixed";
        divInternal.style.top = "80px";

        divDentistry.style.position = "fixed";
        divDentistry.style.top = "80px";

        divGeneral_Surgery.style.position = "fixed";
        divGeneral_Surgery.style.top = "80px";

        divCardiac_Surgery.style.position = "fixed";
        divCardiac_Surgery.style.top = "80px";

        divNeurosurgery.style.position = "fixed";
        divNeurosurgery.style.top = "80px";

        divOphthalmology.style.position = "fixed";
        divOphthalmology.style.top = "80px";
    }else{
        nav.style.top = "80px";
        divPediatrics.style.top = "170px";
        divInternal.style.top = "170px";
        divDentistry.style.top = "170px";
        divGeneral_Surgery.style.top = "170px";
        divCardiac_Surgery.style.top = "170px";
        divNeurosurgery.style.top = "170px";
        divOphthalmology.style.top = "170px";
    }
    if (scrollY > 2000) {
        document.getElementById('img1').style.position = 'absolute';
        document.getElementById('ali_photo').style.position = 'absolute';
    }else{
        document.getElementById('img1').style.position = 'fixed';
        document.getElementById('ali_photo').style.position = 'fixed';
    }
}
Scrollbtn.onclick = function (){
    scroll({
        top:0,
        behavior:'smooth'
    })
}