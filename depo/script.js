function name() {
    if (localStorage.getItem("username") == null) {
        let person = prompt("Lütfen takma adını gir", "");
        localStorage.setItem("username", person);
    }
    if (localStorage.getItem("note") == null) {
        localStorage.setItem("note", "Buraya not alabilirsin");
    }
    if (localStorage.getItem("bgcolor") == null) {
        localStorage.setItem("bgcolor", "#fcc41d");
    }
    document.getElementById("body").style.background = localStorage.getItem("bgcolor");
    document.getElementById("dataname").placeholder = localStorage.getItem("username");
    document.getElementById("datanote").placeholder = localStorage.getItem("note");
    document.getElementById("datacolor").placeholder = localStorage.getItem("bgcolor");
    document.getElementById("box").innerHTML = localStorage.getItem("msgbox");
}

function cleardata() {
    localStorage.removeItem("bgcolor");
    localStorage.removeItem("username");
    localStorage.removeItem("note");
    location.reload();
}

function note() {
    localStorage.setItem("note", document.getElementById("datanote").value)
}

function color() {
    localStorage.setItem("bgcolor", document.getElementById("datacolor").value)
    document.getElementById("body").style.background = localStorage.getItem("bgcolor");
}

function username() {
    localStorage.setItem("username", document.getElementById("dataname").value)
}

function send() {
    var msg = document.getElementById("val");
    var box = document.getElementById("chatContainer");
    var d = new Date();
    var h = d.getHours(); 
    var m = d.getMinutes();

    /* kelimeler */
    var mrb = ["merhaba","merhaba limon","selam","selam limon","slm","mrb"];
    var gw = ["ara","arama yap","limon ara","limon arama yap","benim için ara","benim için arama yap"];
    var pki = ["ya tamam üzülme","ya üzülme","napim","ne yapayım","üzülme","boş yapma","boş yapma!"];
    var cls = ["sil","temizle","sohbeti sil","sohbeti temizle","limon sohbeti sil","limon sohbeti siler misin","limon sohbeti siler misin?","limon sohbeti temizle","limon sohbeti temizler misin","limon sohbeti temizler misin?"];
    var nta = ["not alabilir misin?","not alabilir misin","not alır mısın","not alır mısın?","not al","limon not al","limon not alır mısın","limon not alabilir misin"];
    var ntg = ["notu göster","notu gösterir misin","limon notu göster","limon notu gösterir misin","notlarım"]
    var sa=["sa","selamunaleyküm","selamun aleyküm","selamün aleyküm","selamünaleyküm"];
    var sew = ["seni seviyorum","seni çok seviyorum","<3","kalp"];
    var sabah=["günaydın","günaydınlar","günaydın limon"];
    var kotu=["kötü","berbat","yararsız","çalışmıyor","iyi değil",":(",":c","of","anlamıyorsun beni"];
    var ia=["iyi akşam","iyi akşamlar","iyi akşamlar limon"];
    var ig=["iyi geceler","uykuluyum","iyi uykular","iyi geceler limon"];
    var guzel=["güzel çalışıyor","güzel kod","güzel","vay","vayy","vayyy","çalışıyor","mükemmel","harika","güzel","muhteşem","iyi","aman allahım","uwu","seninle tanışmak güzel","seni görmek güzel","harikasin"];
    var tun=["tünaydın","tünaydınlar","tünaydın limon"];
    var nasil=["nasılsın","iyi misin", "nasılsın?", "iyi misin?","sen nasılsın","sen nasılsın?","naber","naber?","ne haber","ne haber?","selam ne haber","selam ne haber?"];
    var nap=["napıyon?","ne yapıyorsun","ne yapıyon", "napıyorsun","ne yapıyorsun?"];
    var iyi=["iyi","👍🏻", ":)","c:","😀","😁","😃","😄","😆","😊","🙂","😉","ben de","evet","işte bu","iyi sen?","iyi sen","iyiyim","çok iyisin"];
    var ses=["limon","knk","hey","sen","ordaki","oradaki"];

    if (msg.value == " ") {
        alert("bir mesaj girmelisin")
    } else if (msg.value == "") {
        alert("bir mesaj girmelisin")
    } else {
        box.innerHTML += "<div class='message sent'>" + msg.value + "<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>";
        
        /* cevaplar */
        function isInArray(x, y) {
            return x.indexOf(y) > -1;
        }
        /* komut */
        isInArray(cls, msg.value.toLowerCase())==true?(box.innerHTML = "", msg.value = "", responsiveVoice.speak("Sohbeti senin için temizledim","Turkish Male"), msg.focus()):
        isInArray(gw, msg.value.toLowerCase())==true?(goweb(), msg.value = "", msg.focus()):
        isInArray(nta, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Not alındı 😉 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", takenote(), msg.value = "", responsiveVoice.speak("Notu senin için aldım :)","Turkish Male"), msg.focus()):
        isInArray(ntg, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Aldığın not: " + localStorage.getItem("note") + "<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("Aldığın notların bunlar :)","Turkish Male"), msg.focus()):
        /* sohbet */
        isInArray(mrb, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Merhaba " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("merhaba " + localStorage.getItem("username") + ", nasılsın?","Turkish Male"), msg.focus()):
        isInArray(sa, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Aleykümselam " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("Aleykümselam " + localStorage.getItem("username") + ", nasılsın?","Turkish Male"), msg.focus()):
        isInArray(sabah, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Sanada günaydın " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("sanada günaydın " + localStorage.getItem("username") + ", nasılsın?","Turkish Male"), msg.focus()):
        isInArray(tun, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Sanada tünaydın " + localStorage.getItem("username") + " :) nasılsın?<span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("sanada tünaydın " + localStorage.getItem("username") + ", nasılsın?","Turkish Male"), msg.focus()):
        isInArray(ia, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Sanada iyi akşamlar " + localStorage.getItem("username") + " görüşmek üzere <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("sanada iyi akşamlar " + localStorage.getItem("username") + ", görüşmek üzere","Turkish Male"), msg.focus()):
        isInArray(ig, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Sanada iyi geceler " + localStorage.getItem("username") + " görüşmek üzere 🥱 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("sanada iyi geceler " + localStorage.getItem("username") + ", görüşmek üzere 🥱","Turkish Male"), msg.focus()):
        isInArray(sew, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Bende seni seviyorum " + localStorage.getItem("username") + " 🥰 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("bende seni seviyorum " + localStorage.getItem("username") + " 🥰","Turkish Male"), msg.focus()):
        isInArray(kotu, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Böyle düşünmen beni üzdü 😭 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("Böyle düşünmen beni üzdü 😭","Turkish Male"), msg.focus()):
        isInArray(iyi, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Bunu duymak harika 😃 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("Bunu duymak harika 😃","Turkish Male"), msg.focus()):
        isInArray(guzel, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Böyle düşünmen beni sevindirdi 😊 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("Böyle düşünmen beni sevindirdi 😊","Turkish Male"), msg.focus()):
        isInArray(ses, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Bana seslendin sanırım. Buyur? <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("Bana seslendin sanırım. Buyur?","Turkish Male"), msg.focus()):
        isInArray(nasil, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> İyiyim Peki sen? <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("İyiyim Peki sen?","Turkish Male"), msg.focus()):
        isInArray(nap, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> Senle konuşuyorum 😉 <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("Senle konuşuyorum 😉","Turkish Male"), msg.focus()):
        isInArray(pki, msg.value.toLowerCase())==true?(box.innerHTML += "<div class='message received'> peki <span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("peki!","Turkish Male"), msg.focus()):
        (box.innerHTML += "<div class='message received'>üzgünüm ama anlamadım<br><b align='center'>Bana bu kelimeyi öğretir misin?</b><br><br><a href='https://forms.gle/XmhwgsUBqK8Et1vD7' target='_blank' class='button'>İsterim</a><span class='metadata'> <span class='time'>" + h +":"+ m +"</span></span></div>", msg.value = "", responsiveVoice.speak("Bana bu kelimeyi öğretsene","Turkish Male"), msg.focus());
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

function takenote() {
    let notew = prompt("Lütfen bir not gir", "");
    localStorage.setItem("note", notew);
    location.reload();
}

function goweb() {
    let searchw = prompt("Ne aramak istiyorsun?", "");
    if (searchw == null) {
        responsiveVoice.speak("Sayfaya yönlendirmiyorum","Turkish Male");
    } else {
        window.open(window.location.href);
        window.open("https://tr.vuhuv.com/?k=1&p=1&d=1&q="+ searchw, "_blank");    
        window.close();
        responsiveVoice.speak("Sayfaya yönlendiriyorum :)","Turkish Male")
    }
}