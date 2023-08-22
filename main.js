const cal = () => {
    let input = document.querySelector(".input").value;
    let result = document.querySelector(".result");
    let Length = (input.split(" ")).length;
    console.log(Length)
    result.innerHTML = "Total length of the sentence is "+Length;
}