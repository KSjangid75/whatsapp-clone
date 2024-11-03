let new_picture = document.getElementById('new_pic');
let new_neme = document.getElementById('new_nam');
let main_chat = document.getElementById('chat_main');
let new_data_form = document.getElementById('new_data_frm');
let hrs, min, dnight;
setInterval(() => {
    let tm = new Date();
    hrs = tm.getHours();
    min = tm.getMinutes();
    dnight = "AM";
    if (hrs > 12) {
        hrs -= 12;
        dnight = "PM";
    }
    if (hrs == Number('00')) {
        hrs = 12;
        dnight = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        min = "0" + min;
    }
    // console.log(hrs+":"+min+" "+dis)
}, 1000);
let add_pic_demo = document.getElementById('up_pic');
let add_icon = document.getElementById('user_plus_icon');
new_picture.onchange = function () {
    // add_icon = document.getElementById('user_plus_icon')
    // add_pic_demo = document.getElementById('up_pic')
    let file = new FileReader();
    file.readAsDataURL(new_picture.files[0])
    file.onload = function () {
        let new_cont_box = document.createElement('DIV');
        fileName = file.result;
        add_icon.style.display = "none";
        add_pic_demo.style.background = `url("${fileName}")center center/cover`;
        new_neme.focus();
        new_data_form.onsubmit = function (e) {
            e.preventDefault();
            add_icon.style.display = "block";
            add_pic_demo.style.background = "#fff";
            new_cont_box.className = "contact";

            new_cont_box.innerHTML = `
                <div title="${fileName}" class="profile_pic" style="background: url(${fileName})center center/cover;">
                </div>
                <div class="cont_name">
                <div class="name">${new_neme.value}</div>
                <div class="time">Today</div>
                <div class="recent_msg">
                    <img src="../image/check done.svg" alt="ckeck">
                    love too baby...
                </div>
                </div>
                `;
            main_chat.prepend(new_cont_box)
            new_neme.value = "";
            add_new_icon.click();
        }
        let cont_image = document.getElementById('contact_image')
        let uname = document.getElementsByClassName('topbat_contat_name')[0];
        new_cont_box.onclick = function () {

            let name = this.getElementsByClassName('name')[0].innerHTML;
            let pic = this.getElementsByClassName('profile_pic')[0];
            // new_cont_box.style.background="#fff";
            // this.style.background="red";
            uname.innerHTML = name;
            cont_image.style.background = `url(${pic.title})center center/cover`;

        }

    }
}

function clickOnContact() {
    let cont_image = document.getElementById('contact_image')
    let uname = document.getElementsByClassName('topbat_contat_name')[0];
    let click_box = document.getElementsByClassName('contact')[0]
    click_box.onclick = function () {
        let name = this.getElementsByClassName('name')[0].innerHTML;
        let pic = this.getElementsByClassName('profile_pic')[0];
        // alert(pic.title)
        uname.innerHTML = name;
        cont_image.style.background = `url(${pic.title})center center/cover`;
        // click_box.style.background="#fff";
        // this.style.background="#eaeaea"

    }
}
clickOnContact();


// code for message chat 
let chatbox = document.getElementsByClassName('mid_chat_box')[0];
let data = document.getElementById('chat_input');
let send_btn = document.getElementById('send_sms')
let receive_btn = document.getElementById('receive_sms')
let send_audio = new Audio('../audio/send.mp3');
let recieve_audio = new Audio('../audio/receive.mp3')
receive_btn.onclick = function () {
    if (data.value.trim() != "") {
        let new_receive = document.createElement('DIV')
        new_receive.className = "new_chat";
        let new_receive2 = document.createElement('DIV')
        new_receive2.className = "receive";
        new_receive.append(new_receive2)
        new_receive2.innerHTML = ` 
            ${data.value}
            <span class="msg_time">${hrs}:${min} ${dnight}</span>
            `;
        chatbox.append(new_receive);
        recieve_audio.play();
        action.innerHTML = "online";
        action.style.color = "#909090";
    }
    data.value = "";
    chatbox.scrollBy(0, 1000);
    return false;
}
let action = document.getElementById('live')
data.oninput = function () {
    if (data.value != "") {
        action.innerHTML = "typing..";
        action.style.color = "#15b715";
    } else {
        action.innerHTML = "online";
        action.style.color = "#909090";
    }
}
send_btn.onclick = function () {
    if (data.value.trim() != "") {
        let new_send = document.createElement('DIV')
        new_send.className = "new_chat2";
        new_send.innerHTML = `
    <div class="send">
    ${data.value}
    <span class="msg_time2">
    ${hrs}:${min} ${dnight}
    <img src="../image/check done.svg" alt="ckeck">
    </span>
    </div>
    `;
        chatbox.append(new_send);
        send_audio.play();
        action.innerHTML = "online";
        action.style.color = "#909090";
    }
    data.value = "";
    chatbox.scrollBy(0, 1000);
    return false;
}
chatbox.scrollBy(0, 1000);
// setInterval(function(){data.focus();},1000)
let frm_chat=document.getElementById("chat_frm");
frm_chat.onsubmit=function(e){
    e.preventDefault();
    console.log(e);
    send_btn.click();
    
}

let add_new_icon = document.getElementById('new')
let add_new_icon_box = document.getElementsByClassName('add_new')[0];
let dis = false;
let close_pop = document.getElementById('cut_pop');
add_new_icon.onclick = function () {
    dis = !dis;
    close_pop.onclick = function () {
        dis = false;
        add_new_icon_box.style.display = "none";
        add_pic_demo.style.background = "#fff";
        add_icon.style.display = "block";
        new_neme.value = "";
    }
    if (dis == true) {
        add_new_icon_box.style.display = "block";
    } else {
        add_new_icon_box.style.display = "none";
        add_pic_demo.style.background = "#fff";
        add_icon.style.display = "block";
        new_neme.value = "";
    }
}
let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let photoAndVdo = document.getElementById('photo_vdo');
btn1.onclick = function () { photoAndVdo.click() }
btn2.onclick = function () { photoAndVdo.click() }
btn3.onclick = function () { photoAndVdo.click() }
photoAndVdo.onchange = function () {
    let new_fileName;
    let file = new FileReader();
    file.readAsDataURL(photoAndVdo.files[0])
    file.onload = function () {
        new_fileName = file.result;
        // let new_img = document.createElement('IMG');
        // new_img.className = "new_image";
        let preview = document.getElementById("img_prevw")
        preview.innerHTML = `
            <object data="${new_fileName}" alt="pre"></object>
        `;
        preview.style.display = "block";
        receive_btn.onclick = function () {
            if (data.value.trim() != ""||new_fileName!="") {
                let new_receive = document.createElement('DIV')
                new_receive.className = "new_chat";
                let new_receive2 = document.createElement('DIV')
                new_receive2.className = "receive";
                new_receive.append(new_receive2)
                new_receive2.innerHTML =
                    ` 
                    ${new_fileName!=""?`<object id="con_img" data="${new_fileName}" alt="pre"></object>`:""}
                    ${data.value}
                    <span class="msg_time">${hrs}:${min} ${dnight}</span>
                    `;                    
                chatbox.append(new_receive);
                recieve_audio.play();
                action.innerHTML = "online";
                action.style.color = "#909090";
            }
            data.value = "";
            preview.style.display="none"
            new_fileName="";
            chatbox.scrollBy(0, 1000);
            return false;
        }
        send_btn.onclick = function () {
            if (data.value.trim() != ""||new_fileName!="") {
                send_audio.play();
                let new_receive = document.createElement('DIV')
                new_receive.className = "new_chat2";
                let new_receive2 = document.createElement('DIV')
                new_receive2.className = "send";
                new_receive.append(new_receive2)
                new_receive2.innerHTML =
                    ` 
                    ${new_fileName!=""?`<object id="con_img" data="${new_fileName}" alt="pre"></object>`:""}
                    ${data.value}
                    <span class="msg_time2">
                    ${hrs}:${min} ${dnight}
                    <img src="../image/check done.svg" alt="ckeck">
                    </span>
                    `;                    
                chatbox.append(new_receive);
                action.innerHTML = "online";
                action.style.color = "#909090";
            }
            data.value = "";
            preview.style.display="none"
            new_fileName="";
            chatbox.scrollBy(0, 1000);
            return false;
        }
    }
}