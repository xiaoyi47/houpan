//搜索关键字
let arr = ['web前端精英特训班 980元','HTML核心技术 199元','CSS核心技术 299元','Vue核心技术 599元','CSS+HTML核心技术 299元','web前端在线商城 99元','JavaScript核心技术 399元','JavaScript高级技术 899元'];

let input = document.getElementById('val');
let show = document.getElementById('show');
input.onkeyup = function(){
    show.style.display = 'block';
    let str = '';
    arr.forEach((item)=>{
        let res = item.indexOf(input.value);
        if(res !=-1){
            str += '<p>'+item+'</p>';
        }
    })
    if(!input.value || !str){
        show.innerHTML = '<p>暂无结果</p>'
    }else{
        show.innerHTML = str;
    }
}
input.onblur = function(){
    show.style.display = 'none';
    input.value = '';
}
//最近更新下拉菜单
for (let i = 0;i<4;i++){
    let lists = document.getElementsByClassName('xllists')[i];
    let xllist = document.getElementById('xllist'+[i+1]);
    lists.onmouseover = function (){
        xllist.style.display = 'block';
    }
    lists.onmouseout = function (){
        xllist.style.display = 'none';
    }
}
