
const nthChild1 = () => {
    var element = document.body;
    element.classList.remove("nthChild2");
    element.classList.remove("nthChild3");
    element.classList.remove("nthChild4");

    element.classList.toggle("nthChild1");
}

const nthChild2 = () => {
    var element = document.body;
    element.classList.remove("nthChild1");
    element.classList.remove("nthChild3");
    element.classList.remove("nthChild4");

    element.classList.toggle("nthChild2");
    
}

const nthChild3 = () => {
    var element = document.body;
    element.classList.remove("nthChild1");
    element.classList.remove("nthChild2");
    element.classList.remove("nthChild4");

    element.classList.toggle("nthChild3");
}

const nthChild4 = () => {
    var element = document.body;
    element.classList.remove("nthChild1");
    element.classList.remove("nthChild2");
    element.classList.remove("nthChild3");
    
    element.classList.toggle("nthChild4");

}