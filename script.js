
const day=['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日']


function nowtime(){
    let jiten_number=24*365.25*46*10**8/19*Math.log(24/5)-332*10**10
    let date=new Date()
    let nowyear=date.getFullYear()
    let nowmonth=date.getMonth()+1
    let nowdate=date.getDate()
    let nowday=date.getDay()
    let nowhours=date.getHours()
    let nowminutes=date.getMinutes()
    let nowseconds=date.getSeconds()
    let jiten_year=nowyear-2020-1
    let jiten_month=nowmonth-1
    let jiten_date=nowdate-1
    const dnumber1=24*60
    const dnumber2=24*60*60
    let jm=nowminutes/dnumber1
    let js=nowseconds/dnumber2
    let jy=jiten_year*365.25
    let jmo=jiten_month*365.25/12
    let jh=nowhours/24
    let jd=jiten_date-1

    let njn=parseFloat(jiten_number.toFixed(10))
    let njm=parseFloat(jm.toFixed(10))
    let njs=parseFloat(js.toFixed(10))
    let njy=parseFloat(jy.toFixed(10))
    let njmo=parseFloat(jmo.toFixed(10))
    let njh=parseFloat(jh.toFixed(10))
    let njd=parseFloat(jd.toFixed(10))

    let nnjn=njn+njm+njs+njy+njmo+njh+njd 
    console.log(nnjn.toFixed(10))
    
    document.getElementById('year').textContent='西暦'+nowyear+'年'
    document.getElementById('month').textContent=nowmonth+'月'+nowdate+'日'
    document.getElementById('day').textContent=day[nowday]
    document.getElementById('time').textContent=nowhours+'時'+nowminutes+'分'+nowseconds+'秒'
    document.getElementById('ji').textContent='332'+nnjn+'周'


}
setInterval(nowtime,1000)

let a=7/3
let b=parseFloat(a.toFixed(10))
console.log(a)
console.log(b)
console.log(24*365.25*46*10**8/19*Math.log(24/5))
 
$(function(){
    
    $('.hajime').fadeIn(1000,function(){
        $('#hajimep').fadeIn(1000);
    });

    $(window).scroll(function(){
        console.log($(window).scrollTop());
    })
    $('#midashi2h1').hide();
    $('.midashi25').hide();
    $('#kaisetuh1').hide();
    $('#koramuimg').hide();
    $('#mokuteki').hide();
    $('#owarinih1').hide();
    $('.kansou').hide();
    $('.midashi3').hide();
    $('#ji').hide();
    $('#time').hide();
    $(window).scroll(function(){
        if ($(window).scrollTop() >250){
            $('#midashi2h1').fadeIn(1500, function(){
                $('.midashi25').fadeIn(1000,function(){
                    $('#time').fadeIn(500)
                    $('.midashi3').fadeIn(500,function(){
                        $('#ji').fadeIn(1500)
                    

                    })
                })

            })
        }
        if($(window).scrollTop() >1200){
            $('#kaisetuh1').fadeIn(1000,function(){
                $('#koramuimg').fadeIn(1000 ,function(){
                    $('#mokuteki').fadeIn(1000);


                });
                
            })
        }
        if($(window).scrollTop() >2000){
            $('#owarinih1').fadeIn(1000,function(){
                $('.kansou').fadeIn();
            })
        }
    })



})
