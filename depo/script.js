function name() {
    if (localStorage.getItem("username") == null) {
        let person = prompt("Lütfen takma adını gir", "");
        localStorage.setItem("username", person);
    }
    document.getElementById("body").style.background = localStorage.getItem("bgcolor");
    document.getElementById("dataname").placeholder = localStorage.getItem("username");
    if (localStorage.getItem("bgcolor") == null) {
        document.getElementById("datacolor").placeholder = "#fcc41d";
    } else {
        document.getElementById("datacolor").placeholder = localStorage.getItem("bgcolor");
    }
}

function cleardata() {
    localStorage.removeItem("bgcolor");
    localStorage.removeItem("username");
    location.reload();
}

function color() {
    localStorage.setItem("bgcolor", document.getElementById("datacolor").value)
    document.getElementById("body").style.background = localStorage.getItem("bgcolor");
}

function username() {
    localStorage.setItem("username", document.getElementById("dataname").value)
    document.getElementById("body").style.background = localStorage.getItem("username");
}

function send() {
    var msg = document.getElementById("val");
    var box = document.getElementById("chatContainer");
    var d = new Date();
    var h = d.getHours(); 
    var m = d.getMinutes();
    /* HOOKS */

    /* kelimeler */
    var mrb = ["merhaba","merhaba limon","selam","selam limon","slm","mrb"];
    var sa=["sa","selamunaleyküm","selamun aleyküm","selamün aleyküm","selamünaleyküm"];
    var sew = ["seni seviyorum","<3"];
    var sabah=["günaydın","günaydınlar","günaydın limon"];
    var kotu=["kötü","berbat","yararsız","çalışmıyor","iyi değil",":(",":c"];
    var ia=["iyi akşam","iyi akşamlar","iyi akşamlar limon"];
    var ig=["iyi geceler","uykuluyum","iyi uykular","iyi geceler limon"];
    var guzel=["güzel çalışıyor","güzel kod","güzel","vay","vayy","vayyy","çalışıyor","mükemmel","harika","güzel","muhteşem","iyi","aman allahım","uwu","seninle tanışmak güzel","seni görmek güzel","harikasin"];
    var tun=["tünaydın","tünaydınlar","tünaydın limon"];
    var nasil=["nasılsın","iyi misin", "nasılsın?", "iyi misin?","sen nasılsın","sen nasılsın?","naber","naber?","ne haber","ne haber?"];
    var nap=["napıyon?","ne yapıyorsun","ne yapıyon", "napıyorsun","ne yapıyorsun?"];
    var iyi=["iyi","👍🏻", ":)","c:","😀","😁","😃","😄","😆","😊","🙂","😉","ben de","evet","işte bu","iyi sen?","iyi sen","iyiyim"];
    var ses=["limon","knk","hey","sen","ordaki","oradaki"]

    if (msg.value == " ") {
        alert("bir mesaj girmelisin")
    } else {
        box.innerHTML += "<div class='message sent'>" + msg.value + "<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>";
        
        /* cevaplar */
        function isInArray(x, y) {return x.indexOf(y) > -1;}
        isInArray(mrb, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Merhaba " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(sa, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Aleykümselam " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(sabah, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Sanada günaydın " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(tun, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Sanada tünaydın " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(ia, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Sanada iyi akşamlar " + localStorage.getItem("username") + " görüşmek üzere <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(ig, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Sanada iyi geceler " + localStorage.getItem("username") + " görüşmek üzere 🥱 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(sew, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Bende seni seviyorum " + localStorage.getItem("username") + " 🥰 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(kotu, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Böyle düşünmen beni üzdü 😭 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(iyi, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Bunu duymak harika 😃 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(guzel, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Böyle düşünmen beni sevindirdi 😊 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(ses, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Bana seslendin sanırım. Buyur? <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(nasil, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> İyiyim Peki sen? <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(nap, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Senle konuşuyorum 😉 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        (box.innerHTML += "<div class='message received'>üzgünüm ama anlamadım<br><b align='center'>Bana bu kelimeyi öğretir misin?</b><br><br><input type='text' id='soru' placeholder='sorulacak soru' class='input'><br><input type='text' id='cevap' placeholder='cevabı' class='input'><br><button onclick='formSend()' class='button'>Gönder</button><span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus());
    }
}

// Speech to text
function runSpeechRecognition() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onstart = function() {
        console.log("listening, please speak...")
    };
    recognition.onspeechend = function() {
        console.log("stopped listening, hope you are done");
        recognition.stop();
    }
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        document.getElementById("val").value = transcript;
        console.log(confidence*100+"%")
    };
    recognition.start();
}
