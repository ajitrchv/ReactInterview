let caller={
    fname:'ajith',
    lname:'reji',
    callname: function(){
        console.log('name is '+this.fname+' '+this.lname);
    }
}



var name2={
    fname:'hardpope',
    lname:'popehard'
}

caller.callname.call(name2)


