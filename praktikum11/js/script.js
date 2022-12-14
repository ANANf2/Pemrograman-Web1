document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoise()
    a.addEventListener("click", (element)=>{
        computerChoise(element);
    })
})
function computerChoise(element){
    // pilihan User
    let pilihanUser = element.target.innerText;
    
    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    //membuat pilihan  komputer dengan array
    let choises = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = "Scissors";

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = choises[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        //alert("DRAW");
        setTimeout(()=>alert("DRAW"), 300);
    }

    // Jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN!");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WIN!!");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WIN!!!");
    }

    // jika pilihan user kalah
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("USER LOSE!");
    }else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("USER LOSE!!");
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("USER LOSE!!!");
    }
}