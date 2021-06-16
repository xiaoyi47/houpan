//创建img元素节点
let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
//创建span元素节点
let span1 = document.createElement('span');
let span2 = document.createElement('span');
let span3 = document.createElement('span');
//创建文本节点
let text1 = document.createTextNode('长度4-20位');
let text2 = document.createTextNode('长度6-20位');
let text3 = document.createTextNode('请输入正确密码');

//inputDOM
let input1 = document.getElementsByClassName('input')[0];
let input2 = document.getElementsByClassName('input')[1];
let input3 = document.getElementsByClassName('input')[2];

//图标图片DOM
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');

//错误提示DOM
let ts1 = document.getElementById('ts1');
let ts2 = document.getElementById('ts2');
let ts3 = document.getElementById('ts3');

input1.onfocus = function (){
    input1.onblur = function (){
        if (input1.value.length > 3 && input1.value.length <= 20){
            item1.appendChild(img1);
            img1.src = "assets/img/suc.gif";
            ts1.removeChild(span1);
        }else {
            item1.appendChild(img1);
            img1.src = "assets/img/err.gif";
            ts1.appendChild(span1);
            span1.className = "red";
            span1.append(text1);
        }
    }
}

input2.onfocus = function (){
    input2.onblur = function (){
        if (input2.value.length > 5 && input2.value.length <= 20){
            item2.appendChild(img2);
            img2.src = "assets/img/suc.gif";
            ts2.removeChild(span2);
        }else {
            item2.appendChild(img2);
            img2.src = "assets/img/err.gif";
            ts2.appendChild(span2);
            span2.className = "red";
            span2.append(text2);
        }
    }
}

input3.onfocus = function (){
    input3.onblur = function (){
            if (input3.value === input2.value && input2.value && input2.value.length > 5){
                item3.appendChild(img3);
                img3.src = "assets/img/suc.gif";
                ts3.removeChild(span3);
            }else {
                item3.appendChild(img3);
                img3.src = "assets/img/err.gif";
                ts3.appendChild(span3);
                span3.className = "red";
                span3.append(text3);
            }
    }
}

