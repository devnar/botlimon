function name() {
    if (localStorage.getItem("username") == null) {
        let person = prompt("Lütfen takma adını gir", "");
        localStorage.setItem("username", person);
    }
    document.getElementById("body").style.background = localStorage.getItem("bgcolor");
    document.getElementById("datacolor").placeholder = localStorage.getItem("bgcolor");
    document.getElementById("dataname").placeholder = localStorage.getItem("username");
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
    /* kelimeler */
    var mrb = ["MERHABA","MERHABA LIMON","SELAM","SELAM LIMON","HEY","SLM","MRB"];
    var sa=["SA","SELAMUNALEYKÜM","SELAMUN ALEYKÜM","SELAMÜN ALEYKÜM","SELAMÜNALEYKÜM"];
    var sew = ["SENI SEVIYORUM","<3"];
    var sabah=["GÜNAYDIN","GÜNAYDINLAR","GÜNAYDIN LIMON"];
    var kotu=["KÖTÜ","BERBAT","YARARSIZ","ÇALIŞMIYOR","IYI DEĞIL",":(",":c"];
    var ia=["IYI AKŞAM","IYI AKŞAMLAR","IYI AKŞAMLAR LIMON"];
    var ig=["IYI GECELER","UYKULUYUM","IYI UYKULAR","IYI GECELER LIMON"];
    var guzel=["GÜZEL ÇALIŞIYOR","GÜZEL KOD","GÜZEL","VAY","VAYY","VAYYY","ÇALIŞIYOR","HARIKA","GÜZEL","MUHTEŞEM","IYI","AMAN ALLAHIM","UWU","SENINLE TANIŞMAK GüZEL","SENI GÖRMEK GÜZEL","HARIKASIN"];
    var tun=["TÜNAYDIN","TÜNAYDINLAR","TÜNAYDIN LIMON"];
    var nasil=["NASILSIN","IYI MISIN", "NASILSIN?", "IYI MISIN?","SEN NASILSIN","SEN NASILSIN?","NABER","NABER?"];
    var nap=["NAPIYON?","NE YAPIYORSUN","NE YAPIYON", "NAPIYORSUN","NE YAPIYORSUN?"];
    var iyi=["IYI","👍🏻", ":)","c:","😀","😁","😃","😄","😆","😊","🙂","😉","BEN DE","EVET","IŞTE BU","IYI SEN?","IYI SEN","IYIYIM"];


    if (msg.value == "") {
        alert("bir mesaj girmelisin")
    } else {
        box.innerHTML += "<div class='message sent'>" + msg.value + "<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>";
        
        /* cevaplar */
        function isInArray(x, y) {return x.indexOf(y) > -1;}
        isInArray(mrb, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Merhaba " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(sa, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Aleykümselam " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(sabah, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Sanada günaydın " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(tun, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Sanada tünaydın " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(ia, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Sanada iyi akşamlar " + localStorage.getItem("username") + " görüşmek üzere <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(ig, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Sanada iyi geceler " + localStorage.getItem("username") + " görüşmek üzere 🥱 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(sew, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Bende seni seviyorum " + localStorage.getItem("username") + " 🥰 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(kotu, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Böyle düşünmen beni üzdü 😭 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(iyi, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Bunu duymak harika 😃 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(guzel, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Böyle düşünmen beni sevindirdi 😊 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(nasil, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> İyiyim Peki sen? <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        isInArray(nap, msg.value.toUpperCase())==true?(box.innerHTML += "<div class='message received'> Senle konuşuyorum 😉 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus()):
        (box.innerHTML += "<div class='message received'>üzgünüm ama anlamadım<br><b align='center'>Bana bu kelimeyi öğretir misin?</b><br><br><input type='text' id='soru' placeholder='sorulacak soru' class='input'><br><input type='text' id='cevap' placeholder='cevabı' class='input'><br><button onclick='formSend1()' class='button'>Gönder</button><span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", msg.focus());
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
